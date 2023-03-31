
import image from './assets/orange.webp'
import './style.css'

function homePage() {
    const content = document.getElementById("content")
    const head = document.createElement("h1")
    const headline = document.createElement("h2")
    const backgroundImage = new Image();
    backgroundImage.src = image
    const contextBtn = document.createElement('div')
    const aboutBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    
    head.innerHTML = "Welcome to Awesome Restaurant!"
    headline.innerHTML = "Awesome Restaurant is the best restaurant of the city. We can serve you for breakfast, lunch and dinner with delicious dishes."
    aboutBtn.innerHTML = 'About'
    menuBtn.innerHTML = 'Menu'

    head.classList.add('head')
    headline.classList.add('headline')
    content.classList.add('content')
    aboutBtn.classList.add('button');
    menuBtn.classList.add('button')
    contextBtn.classList.add('contextbtn')
    
    contextBtn.appendChild(aboutBtn)
    contextBtn.appendChild(menuBtn)

    content.appendChild(head)
    content.appendChild(headline)
    content.appendChild(contextBtn)
    
    
    content.appendChild(backgroundImage)

    return homePage

    }

    export default homePage;