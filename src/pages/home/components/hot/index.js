import React, { useState, useEffect  } from 'react'
import { history } from 'umi'

export default function (props) {
  // const [houses, setHouses] = useState()
  

  useEffect(() => {

  }, [])
  const handleClick = (id) => {
    history.push({
      pathname: '/house',
      query: {
        id
      }
    })
  }
  return (
	<div className="hot">
		<h1>最热民宿</h1>
    <div className="hot-lists">
      {props?.houses?.map(item=>{
        return (<div className="hot-lists-item" key={item.id} onClick={() => handleClick(item.id)}>
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