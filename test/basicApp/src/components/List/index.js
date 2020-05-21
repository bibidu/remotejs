import React, { useState } from 'react'
import './index.scss'
import remotejs from '@remotejs'

const logChatMessage = (e) => {
  const { type, value } = e.detail
  console.log(type, value)
}

function toggleListener(nextState) {
  if (nextState) {
    remotejs.eventbus.on('funcBar', logChatMessage)
  } else {
    remotejs.eventbus.un('funcBar', logChatMessage)
  }
}

export default function List() {
  const [count, setCount] = useState(0)
  const [startedListener, toggleListenerState] = useState(false)

  return (
    <div onClick={() => setCount(count + 1)}>
      basicApp的List组件
      <button onClick={() => {
        const nextState = !startedListener
        toggleListener(nextState)
        toggleListenerState(nextState)
      }}>{startedListener ? '关闭' : '开启'}监听</button>
    </div>
  )
}