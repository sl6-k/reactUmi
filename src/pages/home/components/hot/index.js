import React, { useState, useEffect  } from 'react'

export default function (props) {
  const [houses, setHouses] = useState([{
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
  }])
  

  useEffect(() => {

  }, [])

  return (
	<div className="hot">
		<h1>最热民宿</h1>
    <div className="hot-lists">
      {houses.map(item=>{
        return (<div className="hot-lists-item" key={item.id}>
          <img className="img" src={item.img} alt="img" />
          <div className="title">{item.title}</div>
          <div className="ingo">{item.info}</div>
          <div className="price">￥{item.price}</div>
        </div>)
      })}
    </div>
	</div>
  )
}