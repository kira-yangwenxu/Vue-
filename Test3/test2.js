Vue.createApp({
    data(){
        return {
            lessons: window.lessons
        }
    },
    template:'<div> yilvbo.com <br>{{lessons}}}</div>'
}).mount('#app')