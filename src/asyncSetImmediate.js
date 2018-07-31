export default (delay, returnImmediateID = false, ...params) => {
  let immediateId = undefined

  const promise = new Promise(resolve => {
    immediateId = window.setTimeout(resolve, params)
  })

  return returnImmediateID ? [promise, immediateId] : promise
}
