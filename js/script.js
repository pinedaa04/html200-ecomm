var products = [
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
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
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
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

//work on later, we worked on this in class
var total = 0;
function sumPrices(){
  // for loop through array, sum value of price attribute for each object  
  for(var i=0; i<cartArray.length; i++){
    console.log(cartArray[i].price);
    total = total + cartArray[i].price;
  }
  //?!?POSSIBLY figure out total with shipping and tax?!?
  console.log(total);
}
//function to sort items by selecting attribute( name and price)

function compareNames(a, b) {
  products.sort(function(a,b){
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    //use toUpperCase since scarve names are upper case. there is no lower case names to worry about
    if (nameA < nameB) {
      return -1;
  }
    if (nameA > nameB) {
    return 1;
  }
  return 0;
})  
  console.log(products.sort())
}

function comparePrice(a, b) {
  products.sort(function(a,b) {
    return a.price - b.price;
});
  console.log(products.sort())
}

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
