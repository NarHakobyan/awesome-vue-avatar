<template>
    <div>
        <vue-avatar
                :width="400"
                :height="400"
                placeholder="data:image/png;base64,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"
                :rotation="rotation"
                :borderRadius="borderRadius"
                :scale="scale"
                ref="vueavatar"
                @image-ready="onImageReady"
        >
        </vue-avatar>
        <br>
        <label>
            Zoom : {{scale}}x
            <br>
            <input
                    type="range"
                    min=1
                    max=3
                    step=0.02
                    v-model.number='scale'
            />
        </label>
        <br>
        <label>
            Rotation : {{rotation}}°
            <br>
            <input
                    type="range"
                    min=0
                    max=360
                    step=1
                    v-model.number='rotation'
            />
        </label>
        <br>
        <label>
            Radius : {{borderRadius}}px
            <br>
            <input
                    type="range"
                    min=0
                    max=200
                    step=1
                    v-model.number='borderRadius'
            />
        </label>
        <br>
        <button @click="saveClicked">Get image</button>
        <br>
        <img ref="image">
    </div>
</template>
<script>
    import VueAvatar from '@/components/VueAvatar';

    export default {
        components: {
            VueAvatar
        },
        data () {
            return {
                rotation: 0,
                scale: 1,
                borderRadius: 0
            };
        },
        methods: {
            saveClicked () {
                this.$refs.image.src = this.$refs.vueavatar.toDataUrl();
            },
            onImageReady () {
                this.scale = 1;
                this.rotation = 0;
            }
        }
    };
</script>
