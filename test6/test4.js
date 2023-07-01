const app = Vue.createApp({
		data() {
				return {
					name:'伊吕波',
					num:1,
					error:''
				}
		},
		methods :{
			add(num) {
				if (this.num < 10){
					 this.error = '';
					 this.num ++
				} else {
					this.error = '不能大于10'
				}
			},
			des(num) {
				if (this.num > 0 ){
					this.error = '';
					this.num --
				} else {
					this.error = '不能小于0'
				}
			},
			go (href) {
				href.preventDefault()
			},
			go2(href,j) {
				alert(j)
			}
		}
})
const mv = app.mount('#app')