import React, { useState, useEffect } from 'react'
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store'

export default function user() {
  const [state, setstate] = useState()
  const { user: { id, username, getUserAsync } } = useStoreHook()
  const states = useStateHook('user')
  // console.log(states);

  const disptach = useDispatchHook()

  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'admin'
    })
  }, [])

  const handleClick = ()=>{
    // getUserAsync({
    //   id: 20,
    //   username: 'admin2'
    // })
    disptach({
      key: 'user',
      type: 'getUserAsync',
      payload: {
        id: 30,
        username: 'admin3'
      }
    })
  }

  return (
    <div>
      user-id: {id}
      <br />
      username: { username }
      <br />
      <button onClick={handleClick}>修改</button>
    </div>
  )
}
