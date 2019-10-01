<template>
    <div class="home">
        <h1>HANAOKA TRIPPER(NEWS/MEDIA)</h1>
        <downloader :names="namesB" title="B"></downloader>
        <downloader :names="namesC" title="C"></downloader>
        <downloader :names="namesD" title="D"></downloader>
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
    public namesB: Array<[number, number]> = [[960, 720]];
    public namesC: Array<[number, number]> = [
        [280, 460],
        [630, 630],
        [210, 470],
        [630, 315],
    ];
    public namesD: Array<[number, number]> = [[630, 830]];
}
</script>
