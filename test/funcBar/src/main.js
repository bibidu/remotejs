import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import remotejs from '@remotejs'

class App extends React.Component {
  state = {
    list: ['香烟', '瓜子'],
    checkdIndex: 0,
  }

  toggleTab = (idx) => {
    remotejs.eventbus.emit('funcBar', {
      type: 'checkedTab',
      value: this.state.list[idx],
    })
    this.setState({
      checkdIndex: idx
    })
  }

  render() {
    const {
      checkdIndex,
      list,
    } = this.state
    
    return (
      <div className="container">
        <h1>React16</h1>
        {
          list.map((item, idx) => {
            return <span
              className={
                checkdIndex === idx ? 'list-item checked' : 'list-item'
              }
              key={idx}
              onClick={() => this.toggleTab(idx)}
            >{item}</span>
          })
        }
      </div>
    )
  }
}

export default {
  html: <App />,
  renderHtml(selector) {
    ReactDOM.render(<App />, document.querySelector(selector))
  }
}