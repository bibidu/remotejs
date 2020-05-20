exports.default = function() {
  console.log('@bib1du/funcbar')
  return {
    html: `
      <h1 onClick="clickFuncBar()">@bib1du/funcbar</h1>
    `,
    script: `
      console.log('inject @bib1du/funcbar/js')
      let __count = 0
      window.clickFuncBar = function clickFuncBar() {
        window.remoteEventbus.emit('funcBar', {
          value: __count++
        })
      }`
  }
}