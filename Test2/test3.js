const app = Vue.createApp({
        data(){
            return {
                 name: '伊吕波'
            }
        },
        template:'<a style="color: blueviolet;background-color: purple">{{name}} <br> <baizi/></a>'
})

app.component('baizi',{
        data(){
                return {
                    name:'白子',
                }
        },
        template:'<a style="color: white;background-color:whitesmoke">{{name}}</a>'
})

const vm = app.mount('#app')