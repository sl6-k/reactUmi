import React, { useState, useEffect  } from 'react'
import Header from './components/header/index'
import Search from './components/search/index'
import Hot from './components/hot/index'
import './index.less'
export default function (props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
	<div className='home'>
		{/**header登录区域 */}
    <Header />
    {/**搜索区域 */}
    <Search />
    {/**热门民俗 */}
    <Hot />
	</div>
  )
}