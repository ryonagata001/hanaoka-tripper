<template>
    <div class="home">
        <h1>HANAOKA TRIPPER(ABOUT US)</h1>
        <downloader :names="namesG" title="G"></downloader>
        <downloader :names="namesH" title="H"></downloader>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'vue-croppa/dist/vue-croppa.css';
import { readUploadedFileAsBase64 } from '@/util/readBase64';
import Downloader from '@/components/Downloader.vue';

@Component({
    components: {
        Downloader,
    },
})
export default class Home extends Vue {
    public namesG: Array<[number, number]> = [[1440, 900], [540, 960]];
    public namesH: Array<[number, number]> = [[630, 630], [630, 315]];
}
</script>
