const app = Vue.createApp({
    data () {
        return {
            name: '伊吕波',
            html: '<a href=https://ajc2l.one/>ajc2l.one</a>'
        }
    }
})

const vm = app.mount('#app')
setTimeout(()=> {
    vm.$data.name = '白子'
}, 3000)