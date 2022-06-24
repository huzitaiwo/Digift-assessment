const navigation = document.querySelector('nav .navigation')
const hamburgerIcon = document.querySelector('.hamburger')

hamburgerIcon.addEventListener('click', () => {
  navigation.classList.toggle('active')
})