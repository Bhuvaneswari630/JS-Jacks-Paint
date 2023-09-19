function configureListeners() {
    let images = document.querySelectorAll('img')


    for (let i = 0; i < images.length; i++) {
        // iterate over images and add mouseover event listeners  
        images[i].addEventListener('mouseover', (e) => {
            addOpacity(e)
        })
        images[i].addEventListener("mouseleave", (e) => {
            removeOpacity(e)
        })
    }
}

function addOpacity(event) {
    // first method getting color name and price using switch case
    // getProductInfo(event.target.id);
    // console.log(event.target.attributes.colorName.textContent, event.target.attributes.colorPrice.textContent);
    // Second method directly getting color name and price from html attributes
    updatePrice(event.target.attributes.colorName.textContent, event.target.attributes.colorPrice.textContent);
    // add appropriate CSS class
    let dim = document.getElementById(event.target.id)
    dim.classList.add("dim")
}

function removeOpacity(event) {
    //remove appropriate CSS class
    document.getElementById(event.target.id).classList.remove("dim")
    document.getElementById("paint-info-container").classList.remove("priceDiv")
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}
// e.target gives you the element your event was fired on
// first method getting color name and price using switch case
// function getProductInfo(paintColor) {
//     let price = price;
//     let colorName = paintColor;

// switch (paintColor) {
//     case 'pn1':
//         // set variables for price and color name and invoke a function to update the price     
//         price = "$14.99"
//         colorName = "Lime Green"
//         break;
//     case 'pn2':
//         // set variables for price and color name and invoke a function to update the price    
//         price = "$11.14"
//         colorName = "Medium Brown"
//         break;
//     case 'pn3':
//         // set variables for price and color name and invoke a function to update the price  
//         price = "$22.99"
//         colorName = "Royal Blue"
//         break;
//     case 'pn4':
//         // set variables for price and color name and invoke a function to update the price  
//         price = "$13.42"
//         colorName = "Solid Red"
//         break;
//     case 'pn5':
//         // set variables for price and color name and invoke a function to update the price       
//         price = "$21.98"
//         colorName = "Solid White"
//         break;
//     case 'pn6':
//         // set variables for price and color name and invoke a function to update the price        
//         price = "$4.99"
//         colorName = "Solid Black"
//         break;
//     case 'pn7':
//         // set variables for price and color name and invoke a function to update the price 
//         price = "$8.22"
//         colorName = "Solid Cyan"
//         break;
//     case 'pn8':
//         // set variables for price and color name and invoke a function to update the price   
//         price = "$11.99"
//         colorName = "Solid Purple"
//         break;
//     case 'pn9':
//         // set variables for price and color name and invoke a function to update the price 
//         price = "$14.99"
//         colorName = "Solid Yellow"
//         break;
//     default:

// }
// function updatePrice(colorName, price) {

//     let colorPrice = document.getElementById("color-price")
//     colorPrice.textContent = price


//     let color = document.getElementById("color-name")
//     color.textContent = colorName

// }
//     updatePrice(colorName, price)

// }
// Second method directly getting color name and price from html attributes
function updatePrice(colorName, price) {

    let colorPrice = document.getElementById("color-price")
    colorPrice.textContent = price


    let color = document.getElementById("color-name")
    color.textContent = colorName

}

