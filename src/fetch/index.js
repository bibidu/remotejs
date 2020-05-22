const fetch = window.fetch

export default function(remoteConfig) {
  const { baseUrl, resourceMap } = remoteConfig
  Object.entries(resourceMap).forEach( async ([name, {
    url,
    absoluteUrl,
    targetSelector,
  }]) => {
    const entirePath = absoluteUrl || baseUrl + url
    const entirePaths = Array.isArray(entirePath) ? entirePath : [entirePath]
    console.log(entirePaths)
    const fetchedResArray = await Promise.all(entirePaths.map(
      resUrl => fetch(resUrl).then(res => res.text())
    ))
    const res = eval(fetchedResArray.join('\n'))

    if (res && res.default && res.default.renderHtml) {
      const renderHtml = res.default.renderHtml
      renderHtml(targetSelector)
    }
  })
}
