import React, { useState } from 'react'
import './index.scss'
import * as remotejs from '@remotejs'
console.log(`remotejs`, remotejs)
const handler = (e, setMsg) => {
  const { type, value } = e.detail
  console.log(e.detail)
  if (type === 'checkedTab') {
    setMsg(`设置的下标 ${value}`)
  }
}

function toggleListener(nextState, setMsg) {
  if (nextState) {
    remotejs.eventbus.on('funcBar', (e) => handler(e, setMsg))
  } else {
    remotejs.eventbus.un('funcBar', handler)
  }
}

export default function List() {
  const [msg, setMsg] = useState('')
  const [count, setCount] = useState(0)
  const [startedListener, toggleListenerState] = useState(false)

  return (
    <div onClick={() => setCount(count + 1)}>
      basicApp的List组件 {msg}
      <button onClick={() => {
        const nextState = !startedListener
        toggleListener(nextState, setMsg)
        toggleListenerState(nextState)
      }}>{startedListener ? '关闭' : '开启'}监听</button>
    </div>
  )
}