exports.emit = (name, value) => {
  console.log(name)
  document.dispatchEvent(
    new CustomEvent(name, { detail: value })
  )
}
exports.on = (name, fn, flag) => {
  console.log(name)
  document.addEventListener(name, fn, flag)
}