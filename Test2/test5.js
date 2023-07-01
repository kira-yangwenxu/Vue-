const app = Vue.createApp({
        data(){
            return {
                name:'伊吕波,'
            }
        },
        template:'<a style="color:purple;background-> ">{{name}} <br> <aa/></a>'
})

app.component('aa',{
    data(){
        return {
            'name':'白子'
        }
    },
    template: '<a style="color: white;background-color:greenyellow">{{name}}</a>'
})

const vm = app.mount('#app')