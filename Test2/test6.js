const  app = Vue.createApp({    //根组件
     data() {
          return {
               name: '伊吕波',
          }
     },
    template: '<a style="color: purple;background-color:steelblue"> {{name}} <br> <baizi/></a>'

})

app.component ('baizi', { //组件
    data() {
        return {
            name: '白子',
        }
    },
    template:'<a style="color:white;background-color:black">{{name}}</a>'
})

const vm = app.mount('#app')