export default (delay, returnIntervalID = false, ...params) => {
  let intervalID = undefined

  const promise = new Promise(resolve => {
    intervalID = window.setInterval(resolve, delay, params)
  })

  return returnIntervalID ? [promise, intervalID] : promise
}
