import React, { useState, useEffect  } from 'react'
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import { useHttpHook, useObserverHook } from '@/hooks'
import { useLocation } from 'umi'

import './index.less'
export default function (props) {
  const { query } = useLocation()
  const [houseName, setHouseName] = useState('')
  const [page, setPage] = useState({
    pageSize: 8,
    pageNum: 1
  })
  const [houseLists, setHouseLists] = useState([])
  const [showloading, setShowloading] = useState(true)
  const [houseSubmitName, setHouseSubmitName] = useState('')
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
      houseName,
      code: query?.code,
      startTime: query?.startTime + ' 00:00:00',
      endTime: query?.endTime + ' 23:59:59'
    },
    watch: [page.pageNum, houseSubmitName]
  })
  useEffect(() => {
    if(!loading && houses){
      if(houses.length) {
        setHouseLists([...houseLists, ...houses]) 
        if(houses.length < page.pageSize){
          setShowloading(false)
        }
      }else{
        setShowloading(false)
      }
    }
  }, [loading])

  /**
   * 1.监听loading是否展示出来
   * 2.修改分页数据
   * 3.监听分页数据的修改，发送接口，请求下一页的数据；
   * 4.监听loading变化，拼接数据 
   * 
   **/
  useObserverHook('#loading', (entries)=>{
    console.log(entries);
    if(!loading && entries[0].isIntersecting){
      setPage({
        ...page,
        pageNum: page.pageNum + 1
      })
    }
  }, null) 

  const _handleSubmit = (value)=>{
    setHouseSubmitName(value)
    setHouseName(value)
    setPage({
      pageSize: 8,
      pageNum: 1
    })
    setHouseLists([])
  }
  const handleChange = (value)=>{
    setHouseName(value)
  }
  const handleCancel = ()=>{
    _handleSubmit('')
  }
  const handleSubmit = (value)=>{
    _handleSubmit(value)
  }
  return (
	<div className='search-page'>
    {/* 顶部搜索栏 */}
    <SearchBar
      placeholder="搜索民宿"
      value={houseName}
      onChange={handleChange}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
    {/* 搜索结果 */}
    { !houseLists.length ? <ActivityIndicator toast/> : <div className='result'>
      {houseLists.map(item=>(
        <div className='item' key={item.id}>
        <img alit='img' src={item.img} />
        <div className='item-right'>
          <div className='title'>{item.title}</div>
          <div className='price'>{item.price}</div>
        </div>
      </div>
      ))}
      {showloading ? <div id='loading'>loading</div> : <div>没有数据了</div>}
    </div>}
    
	</div>
  )
}