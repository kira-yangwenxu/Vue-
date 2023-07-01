const app = Vue.createApp({
		data() {
			return {
				name:'伊吕波',
				num:1,
				error:''
			}
		},
		methods: {
			add(event) {
				if (this.num < 10) {
					this.error = ''
					this.num++
				} else {
					this.error='不能大于10'
				}
			},
			des(event) {
				if(this.num > 0) {
					this.error = ''
					this.num--
				}else {
					this.error='不能小于0'
				}
			},
			go(event) {
				event.preventDefault();
			},
			go2(event,title){
				alert(title)
			}
		},
		
})
const vm = app.mount('#app')