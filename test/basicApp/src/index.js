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
    return (
      <div className="remotejs-container">
        <div className="func-bar-container">
          func-bar
        </div>
        <div className="list-container">
          <List />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))