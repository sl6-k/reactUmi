import React, { useState, useEffect  } from 'react'
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'


function Edit(props) {
  const [files, setFiles] = useState([])
  const { getFieldProps, validateFields } = props.form
  const handleChange = (files) => {
	  if(files[0]?.file.size / 1024 / 1024 > 0.1){
		Toast.fail('图片大小不能大于0.1M')
		return
	  }
	  setFiles(files)
  }
  const handleSubmit =() => {
	  if(!files.length){
		  Toast.fail('请上传图片')
		  return
	  }
	  validateFields((error, value) => {
		if(error){
			Toast.fail('请将信息补充完整')
			return
		}else{

		}
	  })
  }
  useEffect(() => {
	  
  }, [])

  return (
	<div className='user-edit'>
		<List>
			<List.Item>
				<ImagePicker files={files} selectable={ files.length < 1 } onChange={ handleChange } />
			</List.Item>
			<List.Item>
				<InputItem placeholder='电话' {...getFieldProps('tel', {
					rules: [{ required: true }],
					initialValue: '123456'
				})}>
					电话：
				</InputItem>
			</List.Item>
			<List.Item>
				<InputItem placeholder='签名'  {...getFieldProps('sign', {
					rules: [{ required: true }],
					initialValue: '签名'
				})}>
					签名：
				</InputItem>
			</List.Item>
		</List>
		<Button type='warning' style={{marginTop: '20px'}} onClick={ handleSubmit }>修改</Button>
	</div>
  )
}

export default createForm()(Edit)