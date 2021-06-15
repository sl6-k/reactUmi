export default {
	'post /api/commons/citys': (req, res)=>{
		res.json({
			status: 200,
			data: [[{label:'杭州', value: '10001'},{label:'苏州', value: '10002'}]]
		})
	},
	'post /api/house/hot': (req, res)=>{
		res.json({
			status: 200,
			data: [{
				id: 1,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  },{
				id: 2,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  },{
				id: 3,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  },{
				id: 4,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  }]
		})
	} 
}