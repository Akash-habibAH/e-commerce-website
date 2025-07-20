//   all styling applyable for mobile 
let navBarElement = document.querySelector("#navBar");
//header tag, head tag and image which display cart are required in code in multiple scopes that's why it is decleared here
let headerTag = document.querySelector("header");
let accessHead = document.querySelector("head");
let cartImage = document.getElementById("cartImg");
let menuButton = document.getElementById("menuImg");

// styling will apply on less than 419px width 
if (window.matchMedia("(max-width:419px)").matches) {
    // navbar html in mobile size
    navBarElement.innerHTML = `<img id="menuImg" src = "images/icon-menu.svg" alt = "icon cart image">
            <img id="logoImg" src="images/logo.svg" alt="logo of company">
            <img id="profileImg" src="images/profileimg.jpg" alt="profile image">
            <img id="cartImg" src="images/icon-cart.svg" alt="icon cart image">`;

    // selecting image  display on top of body and we need two buttons on img so two buttons are used   
    let imageBox = document.getElementById("imagesContainer");
    imageBox.innerHTML = `<img class="images" src="images/image-product-1.jpg" alt="image of product1">
           <div class="symbolWrapper">
            <button class="symbols" id="symbol1"><img src="images/icon-previous.svg" alt="image of previous button"></button>
            <button class="symbols" id="symbol2"><img src="images/icon-next.svg" alt="image of next button"></button>
            </div>`;


    // selecting all price tags and then use dispaly flex to prersent them in  line 
    let previousAmount = document.getElementById("previousPrice");
    let priceDisplay = document.querySelector(".priceDescription");
    priceDisplay.appendChild(previousAmount);

    // functionality of buttons 
    let imagesArray = ["images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg"
    ];
    let imagesNumber = 0;
    let imageDisplaying = imagesArray[0];
    let leftSymbol = document.getElementById("symbol1");
    let rightSymbol = document.getElementById("symbol2");

    //Jab '<' button clicked(left move)
    leftSymbol.addEventListener("click", () => {
        if (imagesNumber > 0) {
            image.src = imagesArray[imagesNumber];
            imagesNumber--;
        }
        if (imagesNumber === 0) {
            leftSymbol.style.visibility = "hidden";// if first image is displaying then left button will hide
        }
        rightSymbol.style.visibility = "visible";//when image is not last which is being dispaly then button will be visibe 
    });

    // Jab '>' button clicked(right move)
    rightSymbol.addEventListener("click", () => {
        if (imagesNumber < imagesArray.length - 1) {
            imagesNumber++;
            image.src = imagesArray[imagesNumber];
        }
        if (imagesNumber === imagesArray.length - 1) {
            rightSymbol.style.visibility = "hidden";// if last image is displaying then right button will hide
        }
        leftSymbol.style.visibility = "visible";//when image is not last which is being dispaly then button will be visibe
    });
    let stylingVarForSymbols = document.createElement("style");
    let mobileNavBar = document.createElement("nav");
    headerTag.append(mobileNavBar); // apend navBar in header so we don't need to append it again

    // code when user click on icon representing navBar
    menuButton.addEventListener("click", () => {
        mobileNavBar.innerHTML = `
    <nav class="menuImg">
        <button id="closeMenu"><img src="images/icon-close.svg" alt="icon to remove menu"></button>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>`;

        // when user click on cross button in navBar
        document.getElementById("closeMenu").addEventListener("click", () => {
            //  mobileNavBar.innerHTML = "";
            stylingVarForSymbols.innerHTML = `
             .menuImg{
             transform: translate(-100%);
             transition: all 1s ease-in-out;
        `;
        });
    });
}


// done 
// set items to cart for this purpose select plus and negtive icon 
let cartedItemsRepresenter = document.getElementById("cartedProducts");
let iconPlus = document.getElementById("plusIcon");
let iconMinus = document.getElementById("minusIcon");
let btnAddCartItem = document.getElementById("addCartButton");
let calaculateValues = cartedItemsRepresenter.innerText;
// code when click on plus and minus button 
checkMinusButton();
iconPlus.addEventListener("click", () => {
    calaculateValues++;
    cartedItemsRepresenter.innerText = calaculateValues;
    checkMinusButton();
});
iconMinus.addEventListener("click", () => {
    checkMinusButton();
    calaculateValues--;
    if (calaculateValues < 0) {
        calaculateValues = 0;
    }
    cartedItemsRepresenter.innerText = calaculateValues;
});
// function for negative button if less than zero hide it
function checkMinusButton() {
    if (calaculateValues == 0) {
        iconMinus.style.visibility = "hidden";
    }
    else if (calaculateValues <= 0) {
        iconMinus.style.visibility = "hidden";

    }
    else if (calaculateValues > 0) {
        iconMinus.style.visibility = "visible";
    }

}

// code when user click on cart image to see how many items are carted and also when he click on "add to cart" button 
// code when user click on cart icon if it is empty 
let cartImageClicked = document.createElement("style");
let showInfoOfCart = document.createElement("div");
showInfoOfCart.innerHTML = `
<p><b>Cart</b></p> 
<p>Your cart is empty.</p>`;
//hide the div
showInfoOfCart.style.display = "none";
showInfoOfCart.classList.add("cartedImageResult");
// style tag and div tags are appended in HTML 
headerTag.append(showInfoOfCart);
// when user click on cart image 
cartImage.addEventListener("click", () => {
    if (showInfoOfCart.style.display === "none") {
        showInfoOfCart.style.display = "flex";
        showInfoOfCart.style.transition = " all 0.3s ease-in-out";
 
    } else {
        showInfoOfCart.style.display = "none";
        showInfoOfCart.style.transition = " all 0.3s ease-in-out";

    }
});


// add items in cart 

