const app = Vue.createApp({
        data() {
            return {
                name: '伊吕波'
            }
        },
        template:'<a style="color: purple;background-color: darkorchid">{{name}} <br>  <baizi/></a>'
})

app.component('baizi', {
    data(){
        return {
            name:'白子'
        }
    },
    template:'<a style="color: whitesmoke;background-color:bisque">{{name}}<a/>'
})

const vm = app.mount("#app")