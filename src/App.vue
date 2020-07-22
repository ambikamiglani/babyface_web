<template id="background">
    <div id="app">
        <Header class="title" msg="BABYFACE MEDIA"/>
        <img id="main_image" alt="Emma" src="./assets/bbyfce.gif" height="350vh" width="350vw">
<!--        <div class="all_icons_media">-->
            <!--Instantiating different versions of the Icon component-->
            <Icon class="icon" id="about" msg="ABOUT.txt" type="about"
                  @toggle-media= "toggleMedia('about')" />
            <Icon class="icon" id="folder" msg="process" type="folder" @toggle-media=
                    "toggleMedia('process')"/>
            <Icon class="icon" id="babyphoto" msg="babies.jpg" type="babies"
                  @toggle-media="toggleMedia('babies')"/>
            <Icon class="icon" id="gif" msg="logo.jpg" type="gif"
                  @toggle-media="toggleMedia('gif')"/>
            <Icon class="icon" id="kids_with_curls_mov" msg="kidsWithCurls.mov" type="movie"
                  @toggle-media="toggleMedia('kidsWithCurls')"/>
            <Icon class="icon" id="charm_mov" msg="charm.mov" type="movie" @toggle-media="toggleMedia('charm')"/>
            <Icon class="icon" id="drive_mov" msg="lampland.mov" type="movie"
                  @toggle-media="toggleMedia('drive')"/>
        <Icon class="icon" id="mail" msg="contact" type="mail"
                  @toggle-media="toggleMedia('contact')"/>
            <ContactForm :selected="this.currentMedia" id="contact_form"
                         @toggle-media="toggleMedia('None')"></ContactForm>
            <div class="media_container">
                <Media class= "media" :mediaType="this.currentMedia"
                    @toggle-media="toggleMedia('None')"/>
            <img v-show="currentMedia === 'charm'" class="blurb" src="charm_blurb.png">
            <img v-show="currentMedia === 'drive'" class="blurb" src="lampland_blurb.png">
            <img v-show="currentMedia === 'kidsWithCurls'" class="blurb"
                 src="kidsWithCurls_blurb.png">


            </div>

    </div>
<!--    </div>-->

</template>

<script>
    import Header from './components/Header.vue'
    import Icon from './components/Icon.vue'
    import Media from './components/Media.vue'
    import ContactForm from "./components/ContactForm";
    import axios from 'axios';

    export default {
        name: 'App',
        components: {
            Header,
            Icon,
            Media,
            ContactForm,
        },
        data() {
            return {
                currentMedia: "None"
            };
        },
        methods: {
            toggleMedia(mediaType){
                return this.currentMedia = mediaType;
            },
            processForm(){
                    let data = {
                            message: "hi",
                    };
                    const url = '/';
                    axios.get('url');
                    axios.post(url, data, {
                                    headers: {
                                            'Access-Control-Allow-Origin': '*',
                                            'Content-Type': 'application/json',
                                    }
                            }
                    ).then((response) => {
                            console.log(response);
                            alert("processing!");
                    }).catch((errors) => {
                            console.log(errors);
                    });
            }

        },
    }

</script>

<style>


    #app {
        /*font-family: Helvetica Neue regular, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 5%;
    }
    #main_image{
        display: grid;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 30%;
        object-fit: cover;
        object-position: 40% 60%;
        /*object-position: 0px 15px;*/
    }


    .blurb{
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
        width: 22vw;
        height: auto;
        z-index: 2;
        position: absolute;
        left: 2vw;
        top: 16vh;
        border-radius: 10px;
    }

    body{
        /*overflow: hidden;*/
        background: #FFF9D6;
    }


    .media_container{
        z-index: 3;
        size: auto;
    }

    .media{
        z-index: 2;
        top: 10vh;
        left: 25vw;
        position: absolute;
        /*flex: 3*/

    }

    @media screen and (max-width: 780px) {

        .media{
            z-index: 2;
            top: 10vh;
            left: 15vw;
            position: absolute;
        }

        .blurb{
            width: 40vh;
            height: auto;
            z-index: 2;
            position: absolute;
            left: 20vw;
            top: 55vh;
            margin-right: 5vw;
            /*object-fit: cover;*/

        }
    }

    #contact_form{
        position: absolute;
        z-index: 2;
        top: 15vh;
        left: 28vw;
    }

    #folder{
        position: absolute;
        z-index: 2;
        top: 22vh;
        left: 12vw;
    }

    #about{
        position: absolute;
        z-index: 2;
        top: 30vh;
        left: 80vw;
    }

    #babyphoto{
        position: absolute;
        z-index: 2;
        top: 78vh;
        left: 70vw;
    }

    #gif{
        position: absolute;
        z-index: 2;
        top: 58vh;
        left: 12vw;
    }

    #kids_with_curls_mov{
        position: absolute;
        z-index: 2;
        top: 48vh;
        left: 65vw;
    }

    #drive_mov{
        position: absolute;
        z-index: 2;
        top: 71vh;
        left: 2vw;
    }
    #charm_mov{
        position: absolute;
        z-index: 2;
        top: 40vh;
        left: 25vw;
    }

    #mail{
        position: absolute;
        z-index: 2;
        top: 2vh;
        left: 60vw;

    }

</style>

