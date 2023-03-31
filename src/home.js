
import image from './assets/orange.webp'
import './style.css'

function homePage() {
    const content = document.createElement('div')
    const head = document.createElement("h1")
    const headline = document.createElement("h2")
    const backgroundImage = new Image();
    
    const contextBtn = document.createElement('div')
    const aboutBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const homeBtn = document.createElement('button')
    
    head.innerHTML = "Welcome to Awesome Restaurant!"
    headline.innerHTML = "Awesome Restaurant is the best restaurant of the city. We can serve you for breakfast, lunch and dinner with delicious dishes."
    aboutBtn.innerHTML = 'About'
    menuBtn.innerHTML = 'Menu'
    homeBtn.innerHTML = 'Home'

    head.classList.add('head')
    headline.classList.add('headline')
    content.classList.add('background')
    aboutBtn.classList.add('button');
    menuBtn.classList.add('button')
    homeBtn.classList.add('button')
    contextBtn.classList.add('contextbtn')


    menuBtn.id = 'menubtn'
    aboutBtn.id = 'aboutbtn'
    homeBtn.id = 'homebtn'
    
    contextBtn.appendChild(aboutBtn)
    contextBtn.appendChild(homeBtn)
    contextBtn.appendChild(menuBtn)

    content.appendChild(head)
    content.appendChild(headline)
    content.appendChild(contextBtn)
    
    backgroundImage.src = image
    content.appendChild(backgroundImage)

    content.classList.add('over')

    return(content)

    }

export default homePage;