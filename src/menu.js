import salmon from './assets/food/salmon.jpeg'
import chicken from './assets/food/chicken.jpeg'
import pad from './assets/food/pad.jpeg'
import steak from './assets/food/steak.jpeg'
import image from './assets/orange.webp'
import './style.css'

const Food = (name, img, description, price) => {
    const foodcontainer = document.createElement('div')
    const foodname = document.createElement('p')
    const foodimg = document.createElement('img')
    const fooddescription = document.createElement('p')
    const foodprice = document.createElement('p')
   
    
    foodname.innerHTML = name
    foodimg.setAttribute('src',img)
    fooddescription.innerHTML = description
    foodprice.innerHTML = price

    foodcontainer.classList.add('food')

    foodcontainer.appendChild(foodname)
    foodcontainer.appendChild(foodimg)
    foodcontainer.appendChild(fooddescription)
    foodcontainer.appendChild(foodprice)

    return foodcontainer
}

function menuPage(){
    const content = document.createElement('div')
    const backgroundImage = new Image();
    const contextBtn = document.createElement('div')
    const aboutBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const homeBtn = document.createElement('button')

    aboutBtn.classList.add('button');
    menuBtn.classList.add('button')
    homeBtn.classList.add('button')
    contextBtn.classList.add('contextbtn')
    content.classList.add('background')

    aboutBtn.innerHTML = 'About'
    menuBtn.innerHTML = 'Menu'
    homeBtn.innerHTML = 'Home'

    menuBtn.id = 'menubtn'
    aboutBtn.id = 'aboutbtn'
    homeBtn.id = 'homebtn'

    contextBtn.appendChild(aboutBtn)
    contextBtn.appendChild(homeBtn)
    contextBtn.appendChild(menuBtn)

    const food1 = Food('Grilled Salmon with Lemon and Herb Butter', salmon, 'A tender, juicy fillet of salmon grilled to perfection and served with a rich, flavorful butter sauce made with fresh lemon, garlic, and herbs.', '$20.00')

    const food2 = Food('Chicken Parmesan', chicken, 'A classic Italian favorite, this dish features tender chicken breasts breaded and fried until golden brown, topped with tangy marinara sauce and melted mozzarella cheese, and served over a bed of pasta.', '$15.00')

    const food3 = Food('Vegetarian Pad Thai', pad, 'A delicious and healthy option for vegetarians and meat-lovers alike, this dish features rice noodles stir-fried with a flavorful sauce made with tamarind, garlic, chili, and other spices, along with tofu, egg, and plenty of fresh veggies.', '$24.00')

    const food4 = Food('Steak Frites', steak, "A hearty, satisfying meal that's sure to please meat-lovers, this dish features a tender, juicy steak cooked to your preference and served with a side of crispy, golden French fries and a rich, flavorful sauce.", '$30.00')

    const foods = [food1, food2, food3, food4]

    foods.forEach((food) => {
        content.appendChild(food)
    })

    content.appendChild(contextBtn)

    backgroundImage.src = image
    content.appendChild(backgroundImage)

    content.classList.add('overx')

    return content

}

export default menuPage