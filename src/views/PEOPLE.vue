<template>
    <div class="home">
        <h1>HANAOKA TRIPPER(PEOPLE)</h1>
        <downloader :names="namesE" title="E"></downloader>
        <downloader :names="namesF" title="F"></downloader>
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
    public namesE: Array<[number, number]> = [[240, 240]];
    public namesF: Array<[number, number]> = [[250, 730], [750, 560]];
}
</script>
