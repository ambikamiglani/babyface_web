<template>
    <div class="background">
        <div style="padding: 20px">BEHIND THE SCENES </div>
    <div class="gallery">
        <div class="col">
            <img class="image" src="/images/jeremy_ambu.jpg"/>
            <img class="image" src="charm_bts1.png"/>

        </div>
        <div class="col">
            <img class="image" src="bts3.png"/>
            <img class="image" src="kids_bts.JPG"/>
        </div>
        <div class="col">
            <img class="image" src="/images/joey_bts.png"/>
            <img class="image" src="andy_bts.JPG"/>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Gallery"
    }
</script>

<style scoped>

    @media screen and (max-width:780px){
        .background{
            height: 600px;
            width: 70vw!important;
        }

        .col{
            display: flex;
            flex-direction: row !important;
        }

        .gallery{
            display: flex;
            flex-direction: column !important;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding-bottom: 15px!important;
        }

        .image{
            height: 135px !important;
            object-fit: cover!important;
            width: 135px !important;
            border-radius: 10px !important;

        }
    }
    @media screen and (max-width:500px){
        .image{
            height: 100px !important;
            object-fit: cover!important;
            width: 100px !important;
            border-radius: 10px !important;

        }
        .background{
            height: 450px!important;
            width: 70vw!important;
        }
    }
    .background{
        font-family: Helvetica;
        font-size: 14pt;
        color: blue;
        width: 60vw;
        z-index:3;
        border-radius: 10px;
        background-image: linear-gradient(white, whitesmoke, rgba(254, 255, 253, 0.57));
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
        display:inline-block;
    }

    .gallery{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

    }

    .col{
        display: flex;
        flex-direction: column;
    }

    .image{
        height: 14vw;
        object-fit: cover;
        object-position: 50% 50%;
        width: 14vw;
        border-radius: 10px;
        margin:  15px;

    }
</style>