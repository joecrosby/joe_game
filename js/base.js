(function() {

    //@TODO come up with a way of calculating how much 10/100/(however many you can afford) stands into the future will cost (see calculateNextValue() method)

//prices
    const BEERS_PRICE = 5.00;

//elements
    const CAN_BUY_TOGGLE_VALUE = 'can-buy-toggle';
    const CAN_BUY_AMOUNT = 'can-buy-amount';
    const BEER_STAND_BUTTON ='beer-stand';
    const BEER_PRODUCE_BUTTON ='beer' ;
    const CAN_BUY_BUTTON = 'can-buy';
    const BEERS_RETURN = 'beer-profit';
    const BEER_STAND_COUNT = 'beer-stand-count';
    const BEER_STAND_PRICE = 'beer-stand-price';
    const PRESS_COUNT =  'press-count';
    const NO_OF_BEER_STANDS_CAN_BUY = 'beer-stand-can-buy';
    const GRAND_TOTAL = 'total';
    //const BEER_MANAGER_BUTTON = 'beer-manager' ;
    //const BEER_MANAGER_PRICE = 'beer-manager-price';
    //const BEER_MANAGER_LIST_ITEM = 'beer-manager-list-item';



    var getUseableValue = function(id){
        return parseFloat(doc.getElementById(id).innerHTML);
    };

    var getElement = function(id, doc = document){
        return doc.getElementById(id);
    };

    var doc = document,
        buyButton = doc.getElementById(BEER_PRODUCE_BUTTON),
        buyStand = doc.getElementById(BEER_STAND_BUTTON),
        canBuyButton = doc.getElementById(CAN_BUY_BUTTON);
       // BEERManagerButton = doc.getElementById(BEER_MANAGER_BUTTON);

    var disableButton = function(id,doc = document){

        var disabledButton = doc.getElementById(id);
        disabledButton.setAttribute('disabled', 'disabled');
        disabledButton.style.backgroundColor = "grey";
        disabledButton.style.color = "black";

        return disabledButton;
    };

    var enableButton = function(id,doc = document){

        var enabledButton = doc.getElementById(id);

        enabledButton.removeAttribute('disabled');
        enabledButton.style.color = "white";
        enabledButton.style.backgroundColor = "skyblue";

        return enabledButton;

    };

    var disableReturnButton = function(id,doc = document){

        var disabledButton = doc.getElementById(id);
        disabledButton.setAttribute('disabled', 'disabled');

        return disabledButton;
    };

    var enableReturnButton = function(id,doc = document){

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
        buyButton.style.backgroundColor = "#665ab6";
    };

    var changeButtonStyleOnPress = function(){
        buyButton.style.backgroundColor = "#6689f7";
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

    var updateGrandTotalAfterPurchase = function(doc = document){

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

        return document.getElementById('return-timer').innerHTML = '00:00:00';

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

    buyStand.addEventListener('click',function(){buyStandAction(getUseableValue(NO_OF_BEER_STANDS_CAN_BUY));});
    buyButton.addEventListener('click',produceReturnAction);
    buyButton.addEventListener('click',function(){changeButtonStyleOnPress(doc);});
    canBuyButton.addEventListener('click',cycleThroughCanBuyAmounts);
    //BEERManagerButton.addEventListener('click',function(){buyManagerAction(BEER_MANAGER_PRICE);});

    //canBuyManager(BEER_MANAGER_PRICE,BEER_MANAGER_BUTTON);

})();





