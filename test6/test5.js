const app = Vue.createApp ({
	data() {
		 return {
			  name:'伊吕波',
			  num:1,
			  error:''
		 }
	},
	methods: {
		 add(a) {
					if(this.num <10) {
						this.error = ''
						this.num++
					}	 else {
						this.error = '不能大于10'
					}
		},
		des(d) {
			    if (this.num > 0) {
						this.error = ''
				    this.num --
			    } else {
						this.error = '不能小于0'
			    }
		},
		go(a) {
			 a.preventDefault()
		},
		go2(a,a2) {
			 alert(a2)
		}
	}
})
const  vm = app.mount('#app')