window.addEventListener('DOMContentLoaded', (e) => {
  let isMobile = false

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true
  }

  if (isMobile === true ) {
    document.querySelector('#bars').addEventListener('click', (e) => {
      console.log('clicked!');
    })
  }


})
