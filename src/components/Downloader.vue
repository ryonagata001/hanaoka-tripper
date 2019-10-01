<template>
    <div class="home">
        <div>
            <h1>{{title}}</h1>
        </div>
        <div v-if="isDownloading">
            <p>DOWNLOADING......</p>
        </div>
        <div v-show="!isDownloading">
            <input @change="selectedFile" type="file" name="file" />
            <span v-if="imgSrc">
                <button @click="downloadZip">DOWNLOAD ZIP(永田推奨)</button>
                <button @click="download">DOWNLOAD ALL</button>
            </span>
            <div v-if="imgSrc">
                <div v-for="(val, idx) in names" :key="idx">
                    <p>{{val[0]}} x {{val[1]}}</p>
                    <croppa
                        class="c1"
                        v-model="croppa[idx]"
                        :width="val[0]"
                        :height="val[1]"
                        prevent-white-space
                        :initial-image="imgSrc"
                        :quality="1"
                    ></croppa>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import 'vue-croppa/dist/vue-croppa.css';
import { readUploadedFileAsBase64 } from '@/util/readBase64';
import { ziped } from '@/util/zlib';

@Component({
    components: {},
})
export default class Home extends Vue {
    public imgSrc: string | null = null;
    public name: string | null = null;
    public isDownloading: boolean = false;
    public croppa: [any, any, any, any, any, any, any, any, any, any] = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];
    @Prop() public names!: Array<[number, number]>;
    @Prop() public title!: string;

    public async selectedFile(e: any) {
        // 選択された File の情報を保存しておく
        e.preventDefault();
        const files: File[] = e.target.files;
        this.imgSrc = await readUploadedFileAsBase64(files[0]);
        this.name = files[0].name;
    }
    public download() {
        this.croppa.map((item) => {
            if (!item.height) {
                return;
            }
            const uri = item.generateDataUrl();
            const idx = this.croppa.indexOf(item);
            const name = `${this.title}_${this.name}_${this.names[idx][0]}x${this.names[idx][1]}.png`;
            this.downloadURI(uri, name);
        });
    }
    public async downloadZip() {
        this.isDownloading = true;
        await this.zipped();
        this.isDownloading = false;
    }
    public async downloadURI(uri: string, name: string) {
        const link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    public async zipped() {
        const files: Array<{ uri: string; name: string }> = [];
        this.croppa.map((item) => {
            if (!item.height) {
                return;
            }
            const uri = item.generateDataUrl();
            const idx = this.croppa.indexOf(item);
            const name = `${this.title}_${this.name}_${this.names[idx][0]}x${this.names[idx][1]}.png`;
            files.push({
                uri,
                name,
            });
        });
        const zip = await ziped(files, this.name!);
    }
}
</script>
