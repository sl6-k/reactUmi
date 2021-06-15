import React, { useState, useEffect  } from 'react'
import Header from './components/header/index'
import Search from './components/search/index'
import Hot from './components/hot/index'
import { useHttpHook } from '@/hooks'
import './index.less'
export default function (props) {
  const [state, setState] = useState()
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys'
  })
  const [houses] = useHttpHook({
    url: '/house/hot'
  })
  useEffect(() => {

  }, [])

  return (
	<div className='home'>
		{/**header登录区域 */}
    <Header />
    {/**搜索区域 */}
    <Search citys={citys} citysLoading={citysLoading} />
    {/**热门民俗 */}
    <Hot houses={houses} />
	</div>
  )
}