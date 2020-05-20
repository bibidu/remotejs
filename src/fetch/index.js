const fetch = window.fetch

exports.default = function(url, config = {}) {
  const { ssr = true, targetSelector } = config
  return fetch(url)
    .then(res => res.text())
    .then(res => {
      const { default: getResource } = eval(res)
      const urlMapResource = getResource()

      if (ssr) {
        const { html, script } = urlMapResource
        if (targetSelector) {
          const targetEl = document.querySelector(targetSelector)
          if (!targetEl) throw 'not exist targetEl map' + targetSelector

          // 插入html
          targetEl.innerHTML = html

          // 注入script
          injectScript(script)
        }
        return html
      }
    })
}

function injectScript(content) {
  const script = document.createElement('script')
  script.innerHTML = content
  document.body.appendChild(script)
}