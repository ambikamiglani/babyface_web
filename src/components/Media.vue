<template>
    <div class="media">
        <button v-show="this.mediaType !== 'None' && this.mediaType !== 'contact'"
                class="exit_button" @click="toggleMediaType('None')"> X </button>
        <Gallery  v-show="this.mediaType === 'process'"/>
        <img v-show="mediaType === 'about'" src="../assets/about_icon.png" alt="About Icon Image"
        class="media_img" @click="toggleMediaType(mediaType)"/>
        <img v-show="mediaType === 'babies'" src="../assets/babies_photo.png"
             alt="Babies Icon Image"
             class="media_img" @click="toggleMediaType(mediaType)"/>
        <img id="media_gif" v-show="mediaType === 'gif'" src="/images/babyface.jpg" type=""
             width="400"
               height="240"/>
        <div v-if="mediaType === 'charm'">
            <iframe class="media_vid" height="300vh"
                    width="600vw"
                src="https://www.youtube.com/embed/N3WCsHjlub4" allow="accelerometer;
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div v-if="mediaType === 'drive'" style="background-color: black; border-radius:10px;" >
            <iframe class="media_vid" height="300vh"
                    width="600vw"
                    src="https://player.vimeo.com/video/440425284" frameborder="0" allow="autoplay; fullscreen"
                    allowfullscreen></iframe>
        </div>
        <div v-if="mediaType === 'kidsWithCurls'" style="background-color: black;
        border-radius:10px;" >
            <iframe class="media_vid" height="300vh"
                    width="600vw"
                    src="https://player.vimeo.com/video/440488123" frameborder="0"
                    allow="autoplay; fullscreen" allowfullscreen></iframe>

        </div>
    </div>
</template>

<script>
    import Gallery from "./Gallery"

    export default {
        name: "Media",
        components: {
            Gallery
        },
        props: {
           mediaType: String
        },
        methods: {
            toggleMediaType(type) {
                this.$emit('toggle-media', type);
            },
        }
    }
</script>

<style scoped>

    .media_img{
        width: 35vw;
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
    }

    .media_vid{
        width: 70vw;
        height: 80vh;
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
        border-radius: 10px;

    }

    @media screen and (max-width:780px) {
        .media_vid{
            height: 40vh;
            width: 70vw;
        }

        .media_img{
            width: 70vw;
            box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
            border-radius: 10px;
        }
    }
    @media screen and (max-width:780px) {
        .media_vid{
            height: 42vh;
            width: 83vw;
        }
    }

        #media_gif{
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        object-fit: cover;
        width: 300px;
    }

    .exit_button{
        height: 30px;
        width: 30px;
        background-color: white;
        color: blue;
        font-size: large;
        z-index: 2;
        position: absolute;
        top: 0vh;
        left: 0vw;
        font-family: Helvetica;
        border-radius: 100px;
        border-color: blue;
        border-width: 2px;
    }


</style>