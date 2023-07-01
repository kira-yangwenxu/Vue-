const app = Vue.createApp({
		data() {
			return {
					name:'伊吕波',
					num:'1',
					error:'',
			}
		},
		methods :{
			add() {
				if(this.num < 10){
					this.error = '';
					this.num++
				} else {
					this.error = '不超过10'
				}
			},
			des(event) {
				this.error = '';
				if(this.num > 0) {
					this.error = '';
					this.num--
				} else {
					this.error = '不能少于0'
				}
			},
			go(event) {
				event.preventDefault(); //拦截默认动作
			},
			go2(event,title){
				alert(title)
			}
		}
})
const vm = app.mount('#app')