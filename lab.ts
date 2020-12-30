interface Mountain {
  name: string;
  height: number;
}
const emptyMtns : Mountain[] = [];
const mountains: Mountain[] = [
  { name: "Kiliminjaro", height: 19341 },

  {
    name: "Everest",
    height: 29029,
  },

  {
      name: "Denali",
      height: 20310,
  }
];

//Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string ("").
// findName
function findNameOfTallestMountain(mtns: Mountain[]) : string {
    if (mtns.length === 0){
        return "";
    } else {
        let height = 0;
        let tallest="";
        mtns.forEach(element => {
            if (element.height > height){
                height=element.height;
                tallest=element.name;
            }
        });
        return tallest;
    }
    
}
 const tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);


// Products
interface Product {
  name: string;
  price: number;
}

const products: Product [] = [
  { name: "Cotton Headed Ninny Muggins", price:29}, 
  {name: "flibbertijibbet", price: 25},
  {name: "will-o-the-wisp", price: 15},
  {name: "clown", price: 1}

];

function calcAverageProductPrice(productArray : Product[] ) : number {
  if(productArray.length===0){
    return 0;
  }
  let total=0;
  let avg=0;
  for (const product of productArray) {
    total+=product.price;
  }

  return avg=total/productArray.length;
  
}

const avgProdPrice=calcAverageProductPrice(products);
console.log(avgProdPrice);

//Inventory
interface InventoryItem extends Product {
 
  quantity: number;
}

const inventory: InventoryItem [] = [
  { name:"motor", price:10.00, quantity: 10},
  {name:"sensor", price:12.5, quantity:4},
  {name:"LED", price:1.00, quantity:20}
];

// It returns a number, the total value of all the products in the
// inventory array provided as an argument. If the array argument is empty, return 0.
// ○ This is calculated as follows: For each InventoryItem take the product price times
// the quantity. Add these together for all the items. For the above data, the total
// will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
// ● Call calcInventoryValue, passing it your products array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170

function calcInventoryValue(invArray : InventoryItem[]) : number{
  if( invArray.length===0){
    return 0;
  }

  
  let total : number = 0;

  for (const item of invArray) {
   let value=item.price * item.quantity;
    total+=value;
  }

  return total;
}

const invetoryValue = calcInventoryValue(inventory);
console.log(invetoryValue);

