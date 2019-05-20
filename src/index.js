
window.addEventListener('DOMContentLoaded', (e) => {

  // checks to see if user is browsing on mobile
  let isMobile = false

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true
  }

  //if on mobile, adds a dropdown animation toggled by clicking
  if (isMobile === true ) {
    document.querySelector('#bars').addEventListener('click', (e) => {
      if ( document.querySelector('#dropdown').classList[0] === "clicked-dropdown" ) {
          document.querySelector('#dropdown').classList.toggle('unclicked-dropdown')
          document.querySelector('#dropdown').classList.remove('clicked-dropdown')
      } else {
          document.querySelector('#dropdown').classList.toggle('clicked-dropdown')
          document.querySelector('#dropdown').classList.remove('unclicked-dropdown')
      }


      document.querySelectorAll('.dropdown-item').forEach( (item) => {
        item.classList.toggle('clicked-dropdown-item')
      })
    })
  } else {
    // if not on mobile, adds animation toggled by hovering
    document.querySelector('#bars').addEventListener('mouseover', (e) => {
      if ( document.querySelector('#dropdown').classList[0] === "clicked-dropdown" ) {
          document.querySelector('#dropdown').classList.toggle('unclicked-dropdown')
      } else {
          document.querySelector('#dropdown').classList.toggle('clicked-dropdown')
      }


      document.querySelectorAll('.dropdown-item').forEach( (item) => {
        item.classList.toggle('clicked-dropdown-item')
      })
    })
    document.querySelector('#bars').addEventListener('mouseout', (e) => {
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
