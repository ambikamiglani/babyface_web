<template>
    <div class="icon" >
        <v-touch @tap="toggleMediaType(type)" @panend="removeStyle()">
        <Moveable
                class="moveable"
                ref="moveable"
                v-bind="moveable"
                v-bind:style="this.iconStyle"
                @drag="handleDrag"
        ><span>
        <div v-if="type === 'about'"  @click="removeStyle()"
             @dblclick="toggleMediaType(type)">
            <img src="../assets/about_icon.png" alt="About Icon Image"
            class="icon_img" >
        </div>
        <div v-else-if="type === 'folder'" @click="removeStyle()"
             @dblclick="toggleMediaType(type)">
            <img src="../assets/folder_icon.png" alt="Folder Icon Image" class="icon_img">
        </div>
        <div v-else-if="type === 'babies'" @click="removeStyle()"
             @dblclick="toggleMediaType(type)">
            <img src="../assets/babies_icon.png" alt="Babies Icon Image" class="icon_img">
        </div>
        <div v-else-if="type === 'gif'" @click="removeStyle()"
             @dblclick="toggleMediaType(type)">
            <img src="/images/babyface.jpg" alt="Gif Icon Image" class="icon_img">
        </div>
        <div v-else-if="type === 'movie'" @click="removeStyle()"
             @dblclick="toggleMediaType(type)">
            <img src="../assets/mov_icon.png" alt="Movie Icon Image" class="icon_img">
        </div>
        <div v-else-if="type === 'mail'" @click="removeStyle()"
             @dblclick="toggleMediaType(type)">
            <img src="../assets/mail_icon.png" alt="Mail Icon Image" class="icon_img">
        </div>
        <a class="description">{{msg}}</a>
        </span></Moveable>
        </v-touch>
    </div>
</template>

<script>
import Moveable from 'vue-moveable'


export default {
    name: "Icon",
    components: {
        Moveable,
    },
    props: {
        msg: String,
        type: String,
    },
    data:() => ({
        moveable: {
            draggable: true,
            throttleDrag: 0,
        },

        iconStyle: {
            'background-color': '',
            'border-color': 'rgba(0,0,0,0)',
        },

        unclickedStyle: {
            'backgroundColor': 'rgba(255,255,255,0)',
            'borderColor': 'rgba(255,255,255,0)',
        },

        clickedStyle: {
            'backgroundColor': 'rgba(0,0,255,.3)',
            'borderColor': 'white',
        },

        currentPressed: "None",
    }),

    methods: {
        handleDrag({ target, left, top }) {
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            this.addStyle();
        },
        toggleMediaType(type) {
           this.$emit('toggle-media', type);
        },

        addStyle(){
            this.iconStyle["background-color"]= this.clickedStyle.backgroundColor;
            this.iconStyle["border-color"]= this.clickedStyle.borderColor;
        },
        removeStyle() {
            this.iconStyle["background-color"]= this.unclickedStyle.backgroundColor;
            this.iconStyle["border-color"]= this.unclickedStyle.borderColor;
        },


    },

}

</script>

<style scoped>
    .icon_img{
        padding-bottom: 0.3em;
        padding-left: 6px;
        padding-right: 6px;
        padding-top: 6px;
        height: 90px;
    }

    .moveable{
        position: relative;
        display: grid;
        justify-content: center;
        border-radius: 10px;
        border-width: 4px;
        border-style: double;

    }
    .description{
        font-family: "Trebuchet MS";
        font-weight: bold;
        font-size: 18px;
        color: white;
        text-shadow: 0px 2px 7px #000000;
        padding-left: 6px;
        padding-right: 6px;

    }

</style>

