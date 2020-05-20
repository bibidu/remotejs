
const baseUrl = 'http://localhost:3999'
const resourceMap = {
  funcBar: {
    url: '/static/funcBar/index.js',
    targetSelector: '.func-bar-container',
  }
}

Object.entries(resourceMap).forEach(([ name, info ]) => {
  // 添加事件监听
  addEventListener(name)

  const resourcePath = baseUrl + info.url
  // 获取资源
  window.remoteFetch(resourcePath, { targetSelector: info.targetSelector })
    .then(res => console.log(res))
})

function addEventListener(name) {
  window.remoteEventbus.on(name, (e) => {
    console.log(`监听到来自${name}的消息`, e.detail)
    document.querySelector('.list-container').innerText = e.detail.value
  }, false)
}