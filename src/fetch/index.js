const fetch = window.fetch

export default function(remoteConfig) {
  const { baseUrl, resourceMap } = remoteConfig
  Object.entries(resourceMap).forEach( async ([name, { url, targetSelector }]) => {
    const entirePath = baseUrl + url
    const res = await fetch(entirePath).then(res => res.text())
    const { default: resource } = eval(res)
    const { renderHtml } = resource

    renderHtml(targetSelector)
  })
}