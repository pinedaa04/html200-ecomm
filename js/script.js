var products = [
   {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

//ADD JSON LOOP

//for (var i = 0; i < products.length; i++) {
//  console.log(products[i].name);
//  console.log(products[i].price);
//  console.log(products[i].description);
//}
//JS form handler function to be triggered on form submit
//function capture () {
//  console.log(document.filter.name.value);
//  event.preventDefault();
//}


//ADD and REMOVE Buttons working
function addButton(scarfName){
  var cartArray = getCart();
 for (var i = 0; i < products.length; i++) {
   if (products[i].name == scarfName) {
    cartArray.push(products[i]);
     setCart(cartArray);
     console.log(cartArray[cartArray.length - 1].name + " , is in the cart!");
   }
 } 
  console.log(cartArray.length);
}

function removeButton(scarfName) {
  var cartArray = getCart();
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].name == scarfName) {
    cartArray.splice(i, 1);
      setCart(cartArray);
      console.log(cartArray[cartArray.length - 1].name + " , was removed from the cart!");
      return;
   }
 } 
}
//work on later, we worked on this in class(cart sum)
function sumPrices(cartArray) {
  // for loop through array, sum value of price attribute for each object  
  var total = 0;
  for(var i=0; i<cartArray.length; i++) {
    console.log(cartArray[i].price);
    total = total + cartArray[i].price;
  }
  //?!?POSSIBLY figure out total with shipping and tax?!?
  console.log(total);
}

function setCart(cartArray) {
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
}

function getCart() {
  var cartArray = JSON.parse(localStorage.getItem("cartArray"));
  if (cartArray == null) {
    return new Array();
  } else {
    return cartArray;
  }
}


window.onload = function() {
  var cartAmount= document.getElementById("cartAmount");
  var cartArray = getCart();
  console.log("window.onload");
    if (cartArray.length >= 1) {
      cartAmount.innerHTML = cartArray.length.toString();
    } else {
      cartAmount.innerHTML = "0";
    }
}

//Filter Products
//looks better than last time
//hasn't worked yet continue to work on
function filterProducts(){   
console.log(document.sortBy.filter.value);
event.preventDefault();
}

function comparePrice(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function filterProducts(){
  var sort_type = document.sortBy.filter.value;
  if (sort_type === "price") {
    console.log("Sorting By Price");
    products.sort(comparePrice);
  } else if (sort_type === "name") {
    console.log("Sorting By Name");
    products.sort(compareName);
  }
  console.log(products);
 event.preventDefault();
}