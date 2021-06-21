import React, { useState, useEffect  } from 'react'
import { ShowLoading } from '@/components'
import { Timer } from '@/utils'

export default function (props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
	<div className='comment'>
		<h1 className='comment-title'>评论</h1>
    <div className='comment-lists' style={{paddingBottom: '50px'}}>
      { props?.lists?.map(item => (
        <div className='comment-lists_item' key={item?.id}>
          <img alt='user' className='avatar' src={item?.avatar} />
          <div className='right'>
            <div className="right-top">
              <p>{item?.username}</p>
              <p>{Timer(item?.createTime)}</p>
            </div>
            <div className='right-bottom'>
                {item?.info}
            </div>
          </div>
        </div>
      ))}
      <ShowLoading showLoading={props?.showLoading} />
    </div>
	</div>
  )
}