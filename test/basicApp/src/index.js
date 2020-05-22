import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import List from './components/List'
import remotejs from '@remotejs'
import remoteConfig from '@remoteConfig'

class App extends React.Component {
  
  componentDidMount() {
    remotejs.fetch(remoteConfig)
  }

  render() {
    return null
  }
}

// 基座应用可渲染 亦可不渲染，只作为子应用的加载器
const basicElement = document.querySelector('#basic-entry')
basicElement && ReactDOM.render(<App />, basicElement)