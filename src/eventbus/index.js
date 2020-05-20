export const emit = (name, value) => {
  document.dispatchEvent(
    new CustomEvent(name, { detail: value })
  )
}

export const on = (name, fn, flag = false) => {
  document.addEventListener(name, fn, flag)
}

export const un = (name, fn) => {
  document.removeEventListener(name, fn)
}