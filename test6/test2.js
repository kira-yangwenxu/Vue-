const app = Vue.createApp({
	data() {
		return{
			name:'露莉亚',
			num:'1',
			error:'',
		}
	},
	methods: {
		add(event){
			if(this.num < 10){
				this.error = '';
				this.num++
			} else {
				this.error ='不能超过10'
			}
		},
		des(event) {
			this.error = '';
			if (this.num > 0) {
				this.error ='';
				this.num--
			} else {
				this.error = '不能少过0';
			}
		},
		go(event) {
			event.preventDefault()
		},
		go2(event,title) {
			alert(title)
		}
	}
})
const vm = app.mount('#app')
