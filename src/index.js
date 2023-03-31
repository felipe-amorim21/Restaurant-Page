import homePage from './home';
import aboutPage from './about';

const contentContainer = document.getElementById('content')

function renderPage(page) {
    contentContainer.innerHTML = page().outerHTML
  }

renderPage(homePage)

contentContainer.addEventListener('click', (event) => {
    if (event.target.id === 'aboutbtn') {
      renderPage(aboutPage)
    } else if (event.target.id === 'homebtn') {
      renderPage(homePage)
    }
  })
