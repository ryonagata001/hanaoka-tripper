<template>
    <div class="home">
        <h1>HANAOKA TRIPPER(NEWS/MEDIA)</h1>
        <downloader :names="names" title="A"></downloader>
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
    public names: [
        [number, number],
        [number, number],
        [number, number],
        [number, number]
    ] = [[970, 580], [630, 380], [730, 390], [360, 240]];
}
</script>
