function reveal () {
  const reveals = document.querySelectorAll('.reveal')
  let iteration
  for (iteration = 0; iteration < reveals.length; iteration++) {
    const windowHeight = window.innerHeight
    const elementTop = reveals[iteration].getBoundingClientRect().top
    const elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      reveals[iteration].classList.add('active')
    } else {
      reveals[iteration].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', reveal)
