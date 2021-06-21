import React, { useState, useEffect  } from 'react'
import { Modal } from '@/components'
import { TextareaItem, Button, Toast } from 'antd-mobile'
import { useStoreHook } from 'think-react-store'
export default function (props) {
  const [show, setShow] = useState(false)
  const [commentsValue, setCommentsValue] = useState()
  const { house: { addCommentsAsync } } = useStoreHook()
  useEffect(() => { 

  }, [])

  const handleChange = (value) => {
    setCommentsValue(value)
  }

  const handleClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleSubmit = () => {
    if(commentsValue){
      addCommentsAsync({
        comment: commentsValue
      })
      handleClose() 
    }else{
      Toast.fail('请添加信息')
    }
  }

  return (
	<div>
		<div className='footer' onClick={handleClick}>评论~</div>
    <Modal show={show} styleBody={{ height: '220px', bottom: '0px', top: 'unset' }} onClose={ handleClose }>
      <div className='modal-comment'>
        <TextareaItem rows={2} count={200} onChange={handleChange}  />
        <Button className='comment-btn' type='warning' onClick={handleSubmit}>评论</Button>
      </div>
    </Modal>
	</div>
  )
}