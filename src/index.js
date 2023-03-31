import homePage from './home';
import aboutPage from './about';
import menuPage from './menu';

const contentContainer = document.getElementById('content')

function renderPage(page) {
    contentContainer.innerHTML = page().outerHTML
  }

renderPage(menuPage)

contentContainer.addEventListener('click', (event) => {
    if (event.target.id === 'aboutbtn') {
      renderPage(aboutPage)
    } else if (event.target.id === 'homebtn') {
      renderPage(homePage)
    } else if (event.target.id === 'menubtn') {
        renderPage(menuPage)
    }

  })
