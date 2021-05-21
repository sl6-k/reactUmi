import { useLayoutEffect, useState } from "react"; 

export default function useTitleHook(title){
  const [state, setstate] = useState('customize');

  useLayoutEffect(()=>{
    document.title = title
    setstate(title)
  }, [title])

  return state
}