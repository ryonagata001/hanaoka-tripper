<template>
    <div class="home">
        <h1>HANAOKA TRIPPER(TOP)</h1>
        <downloader :names="namesI" title="I"></downloader>
        <downloader :names="namesJ" title="J"></downloader>
        <downloader :names="namesK" title="K"></downloader>
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
    public namesI: Array<[number, number]> = [[1440, 900], [540, 960]];
    public namesJ: Array<[number, number]> = [[750, 900]];
    public namesK: Array<[number, number]> = [[750, 500], [750, 560]];
}
</script>
