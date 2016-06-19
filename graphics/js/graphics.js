(function() {

    var doc = document;
    var buyButton = doc.getElementsByClassName("buy-button"),
        buyStand,
        canBuyButton = doc.getElementById("can-buy"),
        main = doc.getElementById("main");

    //path to product images
    const PRODUCT_IMAGES_FOLDER = "./images/products/";

    //id's/classes for common elements
    const CAN_BUY_TOGGLE_VALUE = 'can-buy-toggle';
    const CAN_BUY_AMOUNT = 'can-buy-amount';
    const CAN_BUY_BUTTON = 'can-buy';
    //(press count may or may not be required)
    const PRESS_COUNT =  'press-count';
    const GRAND_TOTAL = 'total';


    function Product(profit,standPrice,timer,id,image,counter){

        //properties
        this.profit = profit.toFixed(2);
        this.standPrice = standPrice.toFixed(2);
        this.timer = timer;
        this.id = id;
        this.counter = counter;

        //this entire function will need refactoring eventually. it repeats way too much
        this.createProduct = function(){

            var mainDiv = doc.getElementById('main'),
            productDiv = doc.createElement('div');
            productDiv.className = "product";
            mainDiv.appendChild(productDiv);

            var returnSpan = doc.createElement('p');
            returnSpan.className = "return";
            returnSpan.id = this.id;
            returnSpan.innerHTML = this.profit;
            productDiv.appendChild(returnSpan);

            //is this needed anymore? could track this within the object itself?
            var pressCount = doc.createElement('span');
            pressCount.style.display = "none";
            pressCount.className = "press-count";
            pressCount.innerHTML = "1";
            productDiv.appendChild(pressCount);

            var imageContainer = doc.createElement('div');
            imageContainer.className = "image-container";
            productDiv.appendChild(imageContainer);

            var buyButton = doc.createElement('button');
            buyButton.className = "buy-button";
            buyButton.id = this.id;
            imageContainer.appendChild(buyButton);

            var productImage = doc.createElement('img');
            //this needs to be a constructor argument rather than a hardcoded path
            productImage.src = PRODUCT_IMAGES_FOLDER + this.id + ".jpe";
            productImage.alt = this.id;
            buyButton.appendChild(productImage);

            var productStandCountDiv = doc.createElement('div');
            productStandCountDiv.className = "product-stand-count-div";
            productDiv.appendChild(productStandCountDiv);

            var productStandCount = doc.createElement('p');
            productStandCount.className = "product-stand-count";
            productStandCount.innerHTML = "1";
            productStandCountDiv.appendChild(productStandCount);

            var standButtonArea = doc.createElement('div');
            standButtonArea.className = "stand-button-area";
            productDiv.appendChild(standButtonArea);

            var standButton = doc.createElement('button');
            standButton.className = "stand-button";
            standButton.id = this.id + "-stand";
            standButtonArea.appendChild(standButton);

            var standBuyTextSpan = doc.createElement('span');
            standBuyTextSpan.className = "stand-buy-text";
            standBuyTextSpan.innerHTML = "Get x";
            standButton.appendChild(standBuyTextSpan);

            var standCanBuySpan = doc.createElement('span');
            standCanBuySpan.className = "stand-can-buy";
            standCanBuySpan.id = "beer-stand-can-buy";
            standCanBuySpan.innerHTML = "1";
            standButton.appendChild(standCanBuySpan);

            var standPriceSpan = doc.createElement('span');
            standPriceSpan.className = "stand-price";
            standPriceSpan.id = "beer-stand-price";
            standPriceSpan.innerHTML = this.standPrice;
            standButton.appendChild(standPriceSpan);

            var timerDiv = doc.createElement('div');
            timerDiv.className = "timer";
            productDiv.appendChild(timerDiv);

            var returnTimerSpan = doc.createElement("span");
            returnTimerSpan.id = "return-timer";
            returnTimerSpan.innerHTML = this.timer;
            timerDiv.appendChild(returnTimerSpan);


        };

        this.getCounter = function(){

          return this.counter;
        }

    }

    var beer = new Product(1,4,"00:00:02","beer",1);
    var car = new Product(10,15,"00:00:10","car",1);
    var rocket = new Product(20,17,"00:00:30","rocket",1);
    var bank = new Product(600,150,"10:00:00","bank",1);
    var computers = new Product(450,50,"00:30:00","computers",1);
    var telephone = new Product(200,40,"00:10:00","telephone",1);
    var printers = new Product(100,30,"00:02:00","printers",1);
    var shrimp = new Product(75,22,"00:01:10","shrimp",1);
    var mushroom = new Product(30,10,"00:00:05","mushroom",1);
    var gold = new Product(1333000,200,"15:00:00","gold",1);

    beer.createProduct();
    car.createProduct();
    rocket.createProduct();
    bank.createProduct();
    computers.createProduct();
    telephone.createProduct();
    printers.createProduct();
    shrimp.createProduct();
    mushroom.createProduct();
    gold.createProduct();
})();





