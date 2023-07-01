const app = Vue.createApp({
    data() {
        return {
            name : '伊吕波',
            html : '<a style="color: purple">www.yilvbo.com</a>'
        }
    }
})
const vm = app.mount('#app')
setTimeout(()=> {
    vm.$data.name = '白子'
},3000)