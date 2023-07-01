const app = Vue.createApp({
    data() {
        return {
            name : '伊吕波',
            html: '<a  style="color: purple">www.yilvbo.com</a>'
        }
    }
})

const vm = app.mount('#app')
setTimeout (()=> {
    vm.$data.name = '白子' //第二种属性得获取方式  $必须
},3000)