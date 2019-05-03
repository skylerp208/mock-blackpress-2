
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

  //checks to see if container is hidden; if not, hides it
  let hide = (container) => {
    if (container.classList[0] === undefined) {
      container.classList.toggle('hidden')
    }
  }

  //changes a page from hidden to displayed, hides other pages
  let openPage = (container) => {
    let home = document.querySelector('#home-container')
    let about = document.querySelector('#about-container')
    let menu = document.querySelector('#menu-container')
    let containers = [home, about, menu]
      if (container.classList[0] === "hidden") {
        container.classList.toggle('hidden')
      }
    containers.forEach( (cont) => {
      if (cont!== container) {
        hide(cont)
      }
    })
    if ( document.querySelector('#dropdown').classList[0] === "clicked-dropdown" ) {
          document.querySelector('#dropdown').classList.toggle('unclicked-dropdown')
      } else {
          document.querySelector('#dropdown').classList.toggle('clicked-dropdown')
      }
      document.querySelectorAll('.dropdown-item').forEach( (item) => {
        item.classList.toggle('clicked-dropdown-item')
      })

  }

  document.querySelector('#about-drop').addEventListener('click', (e) => {
    e.preventDefault()
    let about = document.querySelector('#about-container')
    openPage(about)
  })

  document.querySelector('#home-link').addEventListener('click', (e) => {
    e.preventDefault()
    let home = document.querySelector('#home-container')
    openPage(home)
  })


  document.querySelector('#menu-link').addEventListener('click' , (e) => {
    e.preventDefault()
    let menu = document.querySelector('#menu-container')
    openPage(menu)
  })


})
