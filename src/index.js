window.addEventListener('DOMContentLoaded', (e) => {
  let isMobile = false

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true
  }

  if (isMobile === true ) {
    document.querySelector('#bars').addEventListener('click', (e) => {
      document.querySelector('#bars').classList.toggle("clicked-bars")
      document.querySelector('#dropdown').classList.toggle('clicked-dropdown')
      document.querySelectorAll('.dropdown-item').forEach( (item) => {
        item.classList.toggle('clicked-dropdown-item')
      })
    })
  }


})
