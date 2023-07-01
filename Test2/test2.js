const app = Vue.createApp({
        data(){
            return {
                name:'伊吕波',
            }
        },
        template : '<a style="color: purple;background-color:lavender">{{name}}  <br> <aa/></a>'
})

app.component('aa',{
        data() {
            return {
                aa:'露莉亚',
            }
        },
        template:'<a style="color: hotpink; background-color:plum">{{aa}}</a>'
})

const vm = app.mount('#app');