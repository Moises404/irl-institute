export default (script, cb) => {
  let s = document.createElement('script')
  s.setAttribute('src', script)
  document.body.appendChild(s)
  cb()
}
