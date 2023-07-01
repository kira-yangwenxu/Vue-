const app = Vue.createApp({
	data() {
		return {
			 name: '伊吕波',
			 num:1,
			 tip:''
		}
	},
	computed : {
		error: {
			get() {
				const message = this.num==0?'不能小于0' : this.num==10 ? '不能大于10' : ''
				if(message) return this.tip + message
			},
			set(tip) {
				this.tip = tip
			}
		}
	},
	methods : {
		add(event) {
			if (this.num <10) {
				this.num++;
				this.error = '提示'
			}
		},
		des(event) {
			if (this.num > 0) {
				this.num--
				this.error = '警告'
			}
		}
	}
})
const vm = app.mount('#app')