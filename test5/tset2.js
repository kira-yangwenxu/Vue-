const app = Vue.createApp ({
    data() {
        return {
            name:'伊吕波',
            id:'yilvbo',
            n:'1',
            href:'value',
            value:'www.yilvbo.com'
        }
    }
})
const vm = app.mount('#app')

setTimeout (() => {
    vm.id = '白子'
    vm.n = 100
    vm.name = '优香'
    vm.href = 'href'
}, 2000)