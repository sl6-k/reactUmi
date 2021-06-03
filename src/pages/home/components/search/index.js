import React, { useState, useEffect  } from 'react'
import { Picker, List, Calendar, Button } from 'antd-mobile'
import dayjs from 'dayjs';

export default function (props) {
  const [citys, setCitys] = useState([[{label:'杭州', value: '10001'},{label:'苏州', value: '10002'}]])

  const [selectCity, setSelectCity] = useState(['10001'])
	const [times, setTimes] = useState('可选时间')
	const [dateShow, setDateShow] = useState(false)
    const handleCityChange = (value)=>{
	//   console.log(value);
	setSelectCity(value)
  }
  const handleDate = ()=>{
	  setDateShow(!dateShow)
  }
  const handleDateConfirm = (startTime, endTime)=>{
	  setDateShow(!dateShow)
	  setTimes(dayjs(startTime).format('YYYY-MM-DD') + '~' + dayjs(endTime).format('YYYY-MM-DD'))
  }
  useEffect(() => {

  }, [])

  return (
	<div className='search'>
		{/**可选城市 */}
		<div className='search-addr'>
			<Picker title='城市' data={citys} value={selectCity} cascade={false} cols={1} onChange={handleCityChange}>
				<List.Item>可选城市</List.Item>
			</Picker>
		</div>
		{/**可选时间 */}

		<div className="search-time" onClick={handleDate}>
			<p className="search-time_left">出租时间</p>
			<p className="search-time_right">{times}</p>
		</div>


		{/**确认按钮 */}

		<Button type="warning" size="large">搜索民宿</Button>

		<Calendar visible={dateShow} onCancel={handleDate} onConfirm={handleDateConfirm}></Calendar>
	</div>
  )
}