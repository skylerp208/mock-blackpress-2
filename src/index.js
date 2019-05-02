window.addEventListener('DOMContentLoaded', (e) => {

  // checks to see if user is browsing on mobile
  let isMobile = false

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true
  }

  //if on mobile, adds an event listener
  if (isMobile === true ) {
    document.querySelector('#bars').addEventListener('click', (e) => {
      // document.querySelector('#bars').classList.toggle("clicked-bars")
      if ( document.querySelector('#dropdown').classList[0] === "clicked-dropdown" ) {
          document.querySelector('#dropdown').classList.toggle('unclicked-dropdown')
      } else {
          document.querySelector('#dropdown').classList.toggle('clicked-dropdown')
      }


      document.querySelectorAll('.dropdown-item').forEach( (item) => {
        item.classList.toggle('clicked-dropdown-item')
      })
    })
  }

  document.querySelector('#about-drop').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#home-container').classList.toggle('hidden')
    document.querySelector('#about-container').classList.toggle('hidden')
    if ( document.querySelector('#dropdown').classList[0] === "clicked-dropdown" ) {
        document.querySelector('#dropdown').classList.toggle('unclicked-dropdown')
    } else {
        document.querySelector('#dropdown').classList.toggle('clicked-dropdown')
    }
    document.querySelectorAll('.dropdown-item').forEach( (item) => {
      item.classList.toggle('clicked-dropdown-item')
    })
  })


})
