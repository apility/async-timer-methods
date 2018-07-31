export default (delay, returnTimeoutID = false, ...params) => {
  let timeoutID = undefined

  const promise = new Promise(resolve => {
    timeoutID = window.setTimeout(resolve, delay, params)
  })

  return returnTimeoutID ? [promise, timeoutID] : promise
}
