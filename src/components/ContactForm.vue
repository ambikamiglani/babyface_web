<template>
    <div v-show="selected==='contact'" class="contact">
        <div>
            <button class="exit_button" @click="toggleMediaType(selected)"> X </button>
            <form id="contact">
                <label class="label">FIRST NAME</label>
                <textarea form="contact" class="input" name="first" v-model="first"/>
                <label class="label">LAST NAME</label>
                <textarea form="contact" class="input"  name="last" v-model="last"></textarea>
                <label class="label">YOUR EMAIL</label>
                <textarea form="contact" class="input" name="email" v-model="email"></textarea>
                <label class="label">MESSAGE</label>
                <textarea form="contact" class="input" name="message"
                          id="message_text" v-model="message"></textarea>
            </form>
        </div>
        <button @tap="processForm" @click="processForm" id="send_button">SEND</button>

    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: "ContactForm",
        props: {
            selected: String,

        },
        data () {
            return {
                first: '',
                last: '',
                email: '',
                message: '',
            };

        },
        methods: {
            processForm(){
                let email = this.email;
                let name = this.first + ' ' + this.last;
                let message = this.message;
                let data = {
                    email: email,
                    name: name,
                    message: message,
                };
                if(email.includes('@') === false || email.includes('.') === false || email === ''){
                    alert("Please enter a valid email!");
                    return;
                } else if(name === ''){
                    alert("Please enter a name!");
                    return;
                } else if(message === ''){
                    alert("Please enter a message!");
                    return;
                }
                axios.get('/');
                const url = '/contact';
                axios.post(url, data, {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                        }
                    }
                ).then((response) => {
                    console.log(response);
                    console.log(`data received is ${data.email}`);
                    alert("Your email has been sent! If we do not respond within 2 days feel free to contact us again.");
                    this.toggleMediaType('toggle-media', 'None')
                }).catch((errors) => {
                    console.log(errors);
                });
            },
            toggleMediaType(type) {
                this.$emit('toggle-media', type);
            },
        }
    }
</script>

<style scoped>

    @media screen and (max-width: 780px){
        .contact{
            width: 300px !important;
        }

        #contact{
            width: 260px !important;
        }

        #message_text{
            width: 260px!important;
        }

    }
    .exit_button{
        height: 30px;
        width: 30px;
        background-color: white;
        color: blue;
        font-size: medium;
        z-index: 2;
        position: absolute;
        top: 0vh;
        left: 0vw;
        font-family: Helvetica;
        border-radius: 100px;
        border-color: blue;
        border-width: 2px;
    }

    .contact{
        font-family: Helvetica;
        background-image: linear-gradient(white, whitesmoke, rgba(255, 0, 0, 0.8));
        color: blue;
        display: inline-grid;
        text-align: left;
        padding: 13px;
        border-radius: 10px;
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.4);
    }

    .label{
        padding: 0.5vw;
    }

    #contact{
        display: grid;
        padding: 2vw;
        width: 25vw;
    }

    .input{
        padding: 8px;
        text-align: left;
        font-size: 14pt;
    }


    #message_text{
        height: 15vh;
        width: auto;
    }

    #send_button{
        height: 7vh;
        width: auto;
        background-color: lightyellow;
        color: blue;
        font-size: large;
        font-family: Helvetica;
        border-radius: 10px;
        margin-left: auto;
        vertical-align: center;
        font-weight: bold;
    }

</style>