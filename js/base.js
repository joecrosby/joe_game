(function() {

    var doc = document;

    function Product(profit,standPrice,timer,id){

        //properties
        this.profit = profit.toFixed(2);
        this.standPrice = standPrice.toFixed(2);
        this.timer = timer;
        this.id = id;

        this.createProduct = function(){

            //create div with correct id and append to relevant div
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
            productImage.src = "./images/beer.jpe";
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


        }

    }

    var beer = new Product(1,4,"00:00:02","beer");
    var car = new Product(10,15,"00:00:10","car");
    var rocket = new Product(20,17,"00:00:30","rocket");
    var bank = new Product(600,150,"10:00:00","bank");
    var computers = new Product(450,50,"00:30:00","computers");
    var telephone = new Product(200,40,"00:10:00","telephone");
    var printers = new Product(100,30,"00:02:00","printers");
    var shrimp = new Product(75,22,"00:01:10","shrimp");
    var mushroom = new Product(30,10,"00:00:05","mushroom");
    var gold = new Product(1333000,200,"15:00:00","gold");

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



    var getUseableValue = function(id){
        return parseFloat(doc.getElementById(id).innerHTML);
    };

    var getElement = function(id){
        return doc.getElementById(id);
    };


    var buyButton = doc.getElementById('beer'),

    buyStand = doc.getElementById(BEER_STAND_BUTTON),
    canBuyButton = doc.getElementById(CAN_BUY_BUTTON),
    main = doc.getElementById("main");

       // BEERManagerButton = doc.getElementById(BEER_MANAGER_BUTTON);

    var changeClass = function(elem,classToRemove,classToAdd){
        elem.classList.remove(classToRemove);
        elem.classList.add(classToAdd);
    };

    var disableButton = function(id){

        var disabledButton = doc.getElementById(id);
        disabledButton.setAttribute('disabled', 'disabled');
        changeClass(disabledButton,'enabledButton','disabledButton');
        return disabledButton;
    };

    var enableButton = function(id){

        var enabledButton = doc.getElementById(id);

        enabledButton.removeAttribute('disabled');
        changeClass(enabledButton,'disabledButton','enabledButton');

        return enabledButton;

    };

    var disableReturnButton = function(id){


        var disabledButton = doc.getElementById(id);
        disabledButton.setAttribute('disabled','disabled');

        return disabledButton;
    };

    var enableReturnButton = function(id){

        var enabledButton = doc.getElementById(id);

        enabledButton.removeAttribute('disabled');

        return enabledButton;

    };

    //var calculateNextValue = function(count){
    //
    //    var i = 0;
    //
    //
    //    while(i <= count){
    //
    //        var standPrice = 4.00;//getUseableValue(BEER_STAND_PRICE);
    //        var standPerc = 7 / 100;
    //        var standValue = standPrice * standPerc;
    //        //var standCount = count;//getUseableValue(BEER_STAND_COUNT);
    //
    //        var newStandPrice =  (standPrice + standValue).toFixed(2);
    //
    //
    //        newStandPrice = standPrice;
    //        i = i + 1;
    //
    //    }
    //
    //      //return newStandPrice;
    //
    //};



    //var canBuyManager = function(price,button){
    //
    //    var canBuy = null;
    //
    //    if(getUseableValue(GRAND_TOTAL)>= getUseableValue(price)){
    //        enableButton(button);
    //        canBuy = true;
    //    }
    //    else{
    //        disableButton(button);
    //        canBuy = false;
    //    }
    //
    //    return canBuy;
    //
    //};

    var resetButtonStyle = function(){

       changeClass(buyButton,'changeButtonStyleOnPress','resetButtonStyle');
    };

    var changeButtonStyleOnPress = function(){
        changeClass(buyButton,'resetButtonStyle','changeButtonStyleOnPress');
        setTimeout(resetButtonStyle,250);
    };

    var canBuyStand = function(){

        var grandTotalValue = getUseableValue(GRAND_TOTAL),
            BeerStandPriceValue = getUseableValue(BEER_STAND_PRICE);

        return grandTotalValue >= BeerStandPriceValue;
    };

    var resetPressCount = function(){
        var pressCount = getElement(PRESS_COUNT);
        pressCount.innerHTML = 1;
    };

    var cycleThroughToggleValues = function(){

        var toggleValue = getUseableValue(CAN_BUY_TOGGLE_VALUE);
        var nextToggleValue = getElement(CAN_BUY_TOGGLE_VALUE);
        nextToggleValue.innerHTML = toggleValue + 1;

        if(toggleValue === 3) {

            nextToggleValue.innerHTML = 1;
        }

        return toggleValue;

    };

    var modifyBuyStandValue = function(){

        var standButtonSpan = getElement(NO_OF_BEER_STANDS_CAN_BUY);
        var canBuyText = getElement(CAN_BUY_AMOUNT).innerHTML;

        switch(canBuyText){
            case "x 10":
                standButtonSpan.innerHTML = 10;
                break;
            case "x 100":
                standButtonSpan.innerHTML = 100;
                break;
            //case "Max":
            //    //(this should be converted to a function)
            //    standButtonSpan.innerHTML = "Max";
            //    break;
            case "x 1":
                standButtonSpan.innerHTML= 1;
                break;
            default:
                standButtonSpan.innerHTML= 1;
        }
    };

    var cycleThroughCanBuyAmounts = function(){

        var canBuySpan  = getElement(CAN_BUY_AMOUNT);
        var buttonPress = cycleThroughToggleValues();

        switch(buttonPress){
            case 1:
                canBuySpan.innerHTML="x 10";
                break;
            case 2:
                canBuySpan.innerHTML="x 100";
                break;
            //case 3:
            //    canBuySpan.innerHTML="Max";
            //    break;
            case 3:
                canBuySpan.innerHTML="x 1";
                break;
            default:
                canBuySpan.innerHTML=1;
        }

        modifyBuyStandValue();

    };

    var updateGrandTotalAfterPurchase = function(){



        var grandTotalValue = getUseableValue(GRAND_TOTAL);
        var grandTotalSpan = getElement(GRAND_TOTAL);
        var beerStandPriceValue = getUseableValue(BEER_STAND_PRICE);
        var GrandTotalAfterStandPurchase = grandTotalValue - beerStandPriceValue;
        grandTotalSpan.innerHTML = GrandTotalAfterStandPurchase.toFixed(2);

        if (!canBuyStand()){
            disableButton(BEER_STAND_BUTTON);
        }
    };

    var updateReturnValue = function(){

        var beerStandCount = getUseableValue(BEER_STAND_COUNT);
        var beerReturnSpan = getElement(BEERS_RETURN);

        beerReturnSpan.innerHTML = (BEERS_PRICE * beerStandCount).toFixed(2);

    };

    var updateStandPrice = function(){

        var standPriceSpan = getElement(BEER_STAND_PRICE);
        var standPrice = getUseableValue(BEER_STAND_PRICE);
        var standPerc = 15 / 100;
        var standPercValue = standPrice * standPerc;

        standPriceSpan.innerHTML = (standPrice + standPercValue).toFixed(2);

    };

    var incrementPressCount = function(){

        var pressCountSpan = getElement(PRESS_COUNT);
        var pressCountValue = getUseableValue(PRESS_COUNT);

        pressCountSpan.innerHTML = pressCountValue + 1;
    };

    var buyStandAction = function(quantity){

        var beerStandsCount = getUseableValue(BEER_STAND_COUNT);
        var beerStandsSpan = getElement(BEER_STAND_COUNT);

        beerStandsSpan.innerHTML = beerStandsCount + quantity;
        updateReturnValue();
        resetPressCount();
        updateGrandTotalAfterPurchase();
        updateStandPrice();
        //canBuyManager(BEER_MANAGER_PRICE,BEER_MANAGER_BUTTON);
    };

    var produceReturnAction = function(){

        incrementPressCount();

        countdown(BEER_PRODUCE_BUTTON,BEER_STAND_BUTTON);

        if(canBuyStand()){
            enableButton(BEER_STAND_BUTTON);
        }else{
            disableButton(BEER_STAND_BUTTON);
        }

        //canBuyManager(BEER_MANAGER_PRICE,BEER_MANAGER_BUTTON);

    };

    //var buyManagerAction = function(priceID){
    //
    //    var total = getUseableValue(GRAND_TOTAL);
    //    var totalSpan = getElement(GRAND_TOTAL);
    //    var managerPrice = getUseableValue(priceID);
    //
    //    if(canBuyManager(BEER_MANAGER_PRICE,BEER_MANAGER_BUTTON)) {
    //
    //        var speed = 500;
    //
    //        var pressButton = function () {
    //            buyButton.click();
    //        };
    //
    //        setInterval(pressButton, speed);
    //    }
    //
    //    totalSpan.innerHTML = (total - managerPrice).toFixed(2);
    //
    //};

    var resetTimer = function(){

        return doc.getElementById('return-timer').innerHTML = '00:00:00';

    };

    var countdown = function(button,button2){

        var useableTime = document.getElementById('return-timer').innerHTML;
        var useableTimeElements = useableTime.split(':');
        var hours = parseInt(useableTimeElements[0], 10);
        var minutes = parseInt(useableTimeElements[1],10);
        var seconds = parseInt(useableTimeElements[2],10);
        var timerSpan = getElement('return-timer');
        var interval = setInterval(function(){

           if(minutes > 0  ){
               if(seconds === 0){
                   minutes--;
                   seconds = 60;
               }
           }

           if(hours > 0) {
               if (minutes === 0) {
                   hours--;
                   minutes = 59;
                   seconds = 60;
               }
           }

            timerSpan.innerHTML = hours +':' + minutes + ':' + --seconds;

            disableReturnButton(button);

            if(hours === 0 && minutes === 0 && seconds === 0 ){

              clearInterval(interval);
              enableReturnButton(button);
                var total = getUseableValue(GRAND_TOTAL);
                var BEERReturn = getUseableValue(BEERS_RETURN);
                var totalSpan = getElement(GRAND_TOTAL);

                totalSpan.innerHTML = (total + BEERReturn).toFixed(2);
                timerSpan.innerHTML = useableTime;

                if(!canBuyStand()){
                    disableButton(button2);
                }else{
                    enableButton(button2);
                }
            }},1000);
        };

    if(!canBuyStand()){
        disableButton(BEER_STAND_BUTTON);
    }


    main.addEventListener('click',function(e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            var classes = e.target.className.split(" ");
            if (classes) {
                for (var x = 0; x < classes.length; x++) {
                    if (classes[x] == "buy-button") {
                        produceReturnAction();
                        changeButtonStyleOnPress();
                    }
                    if (classes[x] == "stand-button"){

                        buyStandAction(getUseableValue(NO_OF_BEER_STANDS_CAN_BUY));
                    }
                }
            }
        }
    });
    canBuyButton.addEventListener('click',cycleThroughCanBuyAmounts);
    //BEERManagerButton.addEventListener('click',function(){buyManagerAction(BEER_MANAGER_PRICE);});

    //canBuyManager(BEER_MANAGER_PRICE,BEER_MANAGER_BUTTON);

})();





