export default {
	'post /api/house/search': (req, res)=>{
		let data;
		if(req.body.pageNum < 4){
			data = [{
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
			  },{
				id: 5,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  },{
				id: 6,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  },{
				id: 7,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  },{
				id: 8,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1031566010,991766311&fm=26&gp=0.jpg',
				title: '东城民宿',
				info: '东城区交通方便',
				price: '100'
			  }]
		}else{
			data = []
		}
		res.json({
			status: 200,
			data: data
		})
	}
}