const app = Vue.createApp({
	 data() {
		  return {
				 name: '伊吕波',
			   num:1,
			   error:''
		  }
	 },
	 watch: {
		 num(newData, oldData){
			    return this.error = newData == 0 ? '不能小于0' : oldData == 9 ? '不能大于10' : ''
		 }
	 },
	 methods: {
		 add(event) {
			     if(this.num < 10) this.num ++
		 },
		 des(event) {
			     if(this.num > 0) this.num --
		 }
	 }
})
const vm = app.mount('#app')