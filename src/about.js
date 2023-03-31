import './style.css'
import image from './assets/orange.webp'

function aboutPage(){
    const content = document.createElement('div')
    const aboutText1 = document.createElement('p')
    const aboutText2 = document.createElement('p')
    const breakLine = document.createElement('br')
    const contextBtn = document.createElement('div')
    const aboutBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const homeBtn = document.createElement('button')
    const backgroundImage = new Image();


    aboutText1.innerHTML = 'Welcome to Awesome Restaurant, where we believe that great food, excellent service, and a friendly atmosphere are the keys to a fantastic dining experience. Our restaurant has been serving delicious cuisine to satisfied customers for many years, and we take pride in our reputation for high-quality meals and impeccable service.'

    aboutText2.innerHTML = ' At Awesome Restaurant, we use only the freshest ingredients to prepare our dishes, and our chefs are passionate about creating unique, flavorful recipes that are sure to please your palate. From classic favorites to innovative new creations, our menu is packed with delicious options for every taste and budget'

    aboutBtn.innerHTML = 'About'
    menuBtn.innerHTML = 'Menu'
    homeBtn.innerHTML = 'Home'

    aboutText1.classList.add('headline')
    aboutText2.classList.add('headline')
    aboutBtn.classList.add('button')
    menuBtn.classList.add('button')
    homeBtn.classList.add('button')
    
    contextBtn.classList.add('contextbtn')
    content.classList.add('background')

    menuBtn.id = 'menubtn'
    aboutBtn.id = 'aboutbtn'
    homeBtn.id = 'homebtn'

    content.appendChild(aboutText1)
    content.appendChild(breakLine)
    content.appendChild(aboutText2)
    contextBtn.appendChild(aboutBtn)
    contextBtn.appendChild(homeBtn)
    contextBtn.appendChild(menuBtn)
    content.appendChild(contextBtn)

    backgroundImage.src = image
    content.appendChild(backgroundImage)

    return content

}

export default aboutPage