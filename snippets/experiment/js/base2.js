/**
 * Created by joe90 on 08/02/2016.
 */
(function() {

    var doc = document;

function Product(profit,standPrice,timer,id){

    //properties
    this.profit = profit.toFixed(2);
    this.standPrice = standPrice.toFixed(2);
    this.timer = timer;
    this.id = id;
    
    this.createProduct = function(){

        //create createProductial div with correct id and append to relevant div
        var mainDiv = doc.getElementById('main'),
        productDiv = doc.createElement('div');
        productDiv.className = "product";
        mainDiv.appendChild(productDiv);

        var returnParagraph = doc.createElement('p');
        returnParagraph.className = "return";
        returnParagraph.id = this.id;
        returnParagraph.innerHTML = this.profit;
        productDiv.appendChild(returnParagraph);

        var pressCount = doc.createElement('p');
        pressCount.style.display = "none";
        pressCount.className = "press-count";
        pressCount.innerHTML = "1";
        productDiv.appendChild(pressCount);

        var imageContainer = doc.createElement('div');

        //assign relevant classes / id's - ensure class positions these items as float:left so they flow
        //naturally

        //feed in assigned relevant data using the above "getters"


    }

  }

   //createProductialise product objects
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





})();





