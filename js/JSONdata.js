/* @TODO complete the code below (perhaps build as a function). you want:

 1. an html template for each product based on commented out html code at the bottom of this file. idea being that part of the template will be hard-coded, part of it will be populated by js and the JSON data



 2. maintain all element class names while building data. in fact, consider all elements with classes on them as part of the static HTML template(? - review feasability of this)

 3. review JSON and see how complete it is

 4. review current HTML and remove id's that should be classes and add new id's where appropriate (will need to modify stylesheet as well)

 5. when you have got more than 1 product displayed, STOP. go back to base.js and try to parameterize functions currently relying on hard-coded id's (am thinking you will now need a function to parse and get a substring of an id, unless an object is built which creates and stores the important id's)
* */

var productData = {
    products:[{
        "name": "lemonade",
        "image": "./images/lemon.jpe",
        "price" : 4.00,
        "return": 1.00,
        "inflation": 7,
        "starting-time-text": "00:00:03",
        "starting-time-ms":3000,
        "manager-price" : 5000.00
    },
    {
        "name": "newspaper",
        "image": "./images/newspaper.jpe",
        "price" : 60.00,
        "return": 12.00,
        "inflation": 15,
        "starting-time-text": "00:00:10",
        "starting-time-ms":10000,
        "manager-price" : 100000.00

    },
        {
            "name": "carwash",
            "image": "./images/car-wash.jpg",
            "price" : 120.00,
            "return": 60.00,
            "inflation": 20,
            "starting-time-text": "00:00:30",
            "starting-time-ms":30000,
            "manager-price" : 500000.00
        }]

};

var productArray = document.getElementsByClassName("product");
var products = productData.products;
var imageContainerArray = document.getElementsByClassName('image-container');

for (var pAi= 0; pAi < productArray.length; pAi++) {
    for (var pi = 0; pi < products.length; pi++) {
        for (var ici = 0; ici < imageContainerArray.length; ici++) {



        var productReturn = document.createElement("p");
        productReturn.innerHTML = products[pi].return.toFixed(2);
        productReturn.id = products[pi].name + "-profit";
        productReturn.className = "return";
        productArray[pAi].insertBefore(productReturn,imageContainerArray[ici]);

        var pressCount = document.createElement("p");
        pressCount.style.display = "none";
        pressCount.id = products[pi].name + "-press-count";
        pressCount.innerHTML = "1";
        productArray[pAi].appendChild(pressCount,imageContainerArray[ici]);

        var returnButton = document.createElement('button');
        returnButton.id = products[pi].name;
        imageContainerArray[ici].appendChild(returnButton);

        var image  = document.createElement('img');
        image.setAttribute('src',products[pi].image );
        image.style.height = '50px';
        image.style.width = '50px';
        returnButton.appendChild(image);

        }
    }
}



//<div class="product">
//<div class="image-container">
//<button id="lemons"><img src="./images/lemon.jpe"></button>
//</div>
//<div class="product-stand-count">
//<p id="lemons-stand-count">1</p>
//</div>
//<div class="stand-button-area">
//<button class="stand-button" id="lemons-stand">
//<span id="stand-buy-text">Buy x</span>
//<span id="lemon-stand-can-buy" class="stand-can-buy">1</span>
//<span id="lemons-stand-price" class="stand-price">4.00</span>
//</button>
//<div class="timer">
//<span id="return-timer">00:00:00</span>
//</div>
//</div>