window.onscroll = function () {
  scrollFunction1()
};

function scrollFunction1() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarScroll").style = `padding: 0.5rem 1.5rem 0.5rem 2rem; box-shadow: 0 0.0625rem 0.375rem 0 rgb(0 0 0 / 10%)`;
  } else {
    document.getElementById("navbarScroll").style = `padding: 34px 24px 34px 32px; box-shadow: none;`;
  }
}

const toggler = document.querySelector('#toggler'),
  span = document.querySelector('.navbar-toggler-awesome');

function toggle() {
  toggler.addEventListener('click', function () {
    span.classList.toggle('fa-times')
  })
}
toggle()

function videoBtn() {
  let videoBtn = document.querySelector('#navbarDropdown');
  videoBtn.addEventListener('click', () => {
    if (window.innerWidth <= 1920 && window.innerWidth >= 1200) {
      window.scrollTo(0, 3000)
    } else if (window.innerWidth < 1200 && window.innerWidth > 992) {
      window.scrollTo(0, 2900)
    } else if (window.innerWidth < 992 && innerWidth > 768) {
      window.scrollTo(0, 5400)
    } else {
      window.scrollTo(0, 4960)
    }
  })
}
videoBtn()

function video() {
  let videoBtn = document.querySelector('#navbarDropdown'),
      dropdown = document.querySelector('.dropdown')
      dropdownMenu = document.querySelector('.dropdown-menu');

  videoBtn.addEventListener('mouseenter', () => {
    dropdown.classList.add('show')
    dropdownMenu.classList.add('show')
  })

  videoBtn.addEventListener('mouseleave', () => {
    dropdown.classList.remove('show')
    dropdownMenu.classList.remove('show')
  })

  dropdownMenu.addEventListener('mouseenter', () => {
    dropdown.classList.add('show')
    dropdownMenu.classList.add('show')
  })

  dropdownMenu.addEventListener('mouseleave', () => {
    dropdown.classList.remove('show')
    dropdownMenu.classList.remove('show')
  })
}
video()