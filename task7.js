//Task-1 
//==============================================================================================
//Use API:
//======================================
//Requiements:
//===========
/*fetch("https://fakestoreapi.com/products")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    //Convert response to JSON
    return response.json();
    
  })
   
  .then(products => {
    // Display product title, price, and category
    //===========================================================
    products.forEach(product => {
      console.log("Title:", product.title);
      console.log("Price: $" + product.price);
      console.log("Category:", product.category);
      console.log("--------------------");
    });

    let titleAndPrice=products.map(product=>({
        title:product.title,
        price:product.price
    }));
    console.log("Title and Price:", titleAndPrice);

//Use filter() to find products with price greater than $100
//===================================================================

let expensiveProducts =products.filter((product)=>{
    return product.price>100
});
console.log("Products over $100:", expensiveProducts);//Gives ALL matching items
  

// Use find() to find the first product in the electronics category
//=====================================================================

let firstProduct= products.find((product)=>{
    return product.category === "electronics";

});
console.log("First Electronics Product:", firstProduct);

// Use reduce() to calculate the total price
//==========================================================
let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price: $" + totalPrice.toFixed(2));

// Use sort() to arrange products from highest price to lowest
//===================================================================
    let sortedProducts = [...products].sort((a,b)=>{
      return b.price - a.price;
    });

    console.log("Products sorted by price (highest to lowest):");
    console.log(sortedProducts);
  })

  .catch(error => {
    // Handle API errors
    console.error("Failed to fetch products:", error);
  })

  .finally(() => {
    // Completion message
    console.log("Product API operation completed.");
  });
*/ 

//  =======================================================================================================








/*//Task 2 — Product Category Dashboard
//=======================================================


let API_URL="https://fakestoreapi.com/products"

//1.fetch() products from API
//================================================================
function getProducts(){
  return fetch (API_URL)
.then(response=>{//It is used to handle the result that comes back from fetch().

  // Check if the HTTP response was successful
  if(!response.ok){
    throw new Error(`HTTP error! Status:${response.status}`);
  }

   return response.json();//Convert response into JavaScript object/array 

});
}
//=================================================================
//2.Function to get all product prices
// map()
//================================================================

function getPrices(products){
  let prices= products.map(products=>{// map creates a new array for prices
    return products.price;
  });
  return prices;
}

//================================================================
//3. Function to count products by category
//filter()
//=================================================================

function getCategoryCount(products, category) {
  let filteredProducts = products.filter(product => {//It is used to create a new array containing only the elements that satisfy a condition.
    return product.category === category;
  });

  return filteredProducts.length;
}


//===================================================================
//4. Function to calculate average price
//reduce()
//======================================================================

function getAverage(products) {
  let total = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return total / products.length;
}


//=========================================================================

//5. Function to find highest and lowest price
//sort()

//=========================================================================

function getPriceRange(products){
 
    // Make a copy and sort products
    // from lowest price to highest price
    let sortedProducts = [...products].sort((a, b) =>{
      return a.price - b.price;
});

    // First product = lowest price
    let lowest = sortedProducts[0].price;

    // Last product = highest price
    let highest =
        sortedProducts[sortedProducts.length - 1].price;

    return {
        lowest: lowest,
        highest: highest
    };
}


// Call API
getProducts()
  .then(products => {

    console.log("===== PRODUCT DASHBOARD =====");

    console.log("Total Products:", products.length);

    console.log("Electronics:",getCategoryCount(products, "electronics"));

    console.log("Jewelery:",getCategoryCount(products, "jewelery"));

     console.log("Men's Clothing:",getCategoryCount(products, "men's clothing"));

    console.log("Women's Clothing:",getCategoryCount(products, "women's clothing"));

    console.log("Prices:", getPrices(products));

    console.log("Average Price:",getAverage(products).toFixed(2));

 let range = getPriceRange(products);

    console.log("Highest Price: $" + range.highest);
    console.log("Lowest Price: $" + range.lowest);
  })
  .catch(error => {
    console.error("Error:", error);
  });
*/
//=======================================================================================




/*

//Task 3 — User & Post API
//====================================================================================

//1.Fetch users:-
//================

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
  console.log(response);
  if(!response.ok)
  {
     throw new Error(`HTTP error! Status: ${response.status}`);
    }
  return response.json();
  
})
.then(users => {
    console.log(users);
  


  //============================================================
  //2.Display all user names.
  //============================================================


  users.forEach(user => {
      console.log(user.name);
    });

  
  //=============================================================
  //3.Display user name + email.
  //=============================================================

  users.forEach(user=>{
    console.log(user.name + "-" + user.email);
  });

//===============================================================
//4.Find the user with ID 5.
//===============================================================


  let userId =5;

  let user =users.find(user=>{
    return user.id === userId;//id from the current user
  });
  console.log(user);

//================================================================
//5.Filter users from a particular city.
//================================================================

    let city = "Gwenborough";

    let filteredUsers = users.filter(user => {
      return user.address.city === city;
    });

    console.log(filteredUsers);
  });

  //==============================================================
  //6.Fetch Posts
  //==============================================================

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response=>{
  console.log(response);
  if(!response.ok)
  {
     throw new Error(`HTTP error! Status: ${response.status}`);
    }
  return response.json();
})
  .then(posts => {
    console.log(posts);


  //===============================================================
  //7.Display posts written by user ID 1.
  //===============================================================
  const userId=1;
const filteredPosts = posts.filter(posts => {
      return posts.userId === userId;//id we looking for 
    });

    console.log("Filteredposts:",filteredPosts);
  

//=====================================================================
//8.Count how many posts user ID 1 has created.
//======================================================================

const count = filteredPosts.length;

console.log("Post count:", count);
//========================================================================
//9.Find the first post with more than 50 characters in the title.
//=========================================================================


let firstLongPost = posts.find(post => {
  return post.title.length > 50;
});

console.log("First long post:", firstLongPost);
  })
   .catch(error => {
    console.log("Error:", error);
  });


*/

//===============================================================================================================








/*//Task 4 — API + Search
//=============================================================================================================
 function getProducts() {
    let category = prompt("Enter product category:");
    let maxPrice = Number(prompt("Enter maximum price:"));

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            let filteredProducts = products.filter(product =>
                product.category.toLowerCase() === category.toLowerCase() &&
                product.price <= maxPrice
            );

            console.log("Matching products:");

            if (filteredProducts.length === 0) {
                console.log("No products found.");
                return;
            }

            filteredProducts.forEach(product => {
                console.log(
                    `${product.title} - $${product.price}`
                );
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
}

getProducts();
*/
//====================================================================================







//Task 5 — API Shopping Cart
//====================================================================================

/*const API_URL = "https://fakestoreapi.com/products";

let products = [];
let cart = [];

// Fetch products
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    products = data;

    console.log("===== AVAILABLE PRODUCTS =====");

    products.forEach(product => {
      console.log(
        `ID: ${product.id} | ${product.title} | $${product.price}`
      );
    });

    // Select products by their IDs
    let selectedIds = [1, 2, 3];

    selectedIds.forEach(id => {
      let product = products.find(product => product.id === id);

      if (product) {
        cart.push(product);
      }
    });

    // Display cart
    console.log("\n===== CART =====");

    cart.forEach((product, index) => {
      console.log(
        `Product ${index + 1}: ${product.title}\nPrice: $${product.price}\n`
      );
    });

    // Calculate total using reduce()
    let total = cart.reduce((sum, product) => {
      return sum + product.price;
    }, 0);

    // Apply discount
    let discount = 0;

    if (total > 200) {
      discount = 20;
    } else if (total > 100) {
      discount = 10;
    }

    let discountAmount = total * (discount / 100);
    let finalAmount = total - discountAmount;

    console.log(`Total: $${total.toFixed(2)}`);
    console.log(`Discount: ${discount}%`);
    console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
  })
  .catch(error => {
    console.log("Error fetching products:", error);
  });
*/

/*
//==================================================================================







//Task 6 — FakeStore Product Report
//==================================================================================

//1. Fetch API()
//======================================================
fetch("https://fakestoreapi.com/products")
.then(response=>{
  console.log(response);
  if(!response.ok)
  {
     throw new Error(`HTTP error! Status: ${response.status}`);
    }
// 2.Convert response
//======================================================
  return response.json();
})
  .then(products=> {
    
    console.log("=========PRODUCT REPORT=============");
    console.log("\nTotal Products:", products.length);
    console.log("\nProduct Names:");
//3.Display all products
//=======================================================
products.forEach(product => {
  console.log(`- ${product.title}`);
});

//4.Create product names array
//=======================================================
  let productName= products.map(product=>{
     return product.title;
  });
console.log("\nProduct Names Array:",productName);

//5. Filter expensive products
//======================================================
let expensiveProducts=products.filter(product=>{
  return product.price>100;
});
console.log("\nProducts Above $100:");

expensiveProducts.forEach(product => {//to display console looks nicely
  console.log(`- ${product.title} : $${product.price}`);
});


// Find electronics product
//=====================================================
let electronicsProducts=products.find(product=>{
  return product.category==="electronics";
});
console.log("\nElectronic products:",electronicsProducts);

//7. Calculate total price
//========================================================
let totalPrice=products.reduce((total,product)=>{
  return total+product.price;
},0);
    console.log("\nTotal Product Value:");
    console.log(`$${totalPrice.toFixed(2)}`);

//8. Check products
//========================================================
//some()
//=====================
let checkProducts=products.some(product=>{
  return product.price>500;
});
console.log("\nAny Product Above $500:");
console.log(checkProducts)
//every()
//========================
let checkAllProducts=products.every(product=>{
  return product.price>1;
});
console.log("\nAll Products Above $1:");
console.log(checkAllProducts);

//9.sort()
//========================
let sortedProducts = [...products].sort((a, b) => {
  return b.price-a.price;
});
 console.log("\nHighest → Lowest:");

    sortedProducts.forEach(product => {
      console.log(`- ${product.title} : $${product.price}`);
    });

    console.log("\n========== REPORT COMPLETE ==========");
  })

//10.Error Handling
//=========================
//catch()
//==========
.catch(error => {
            console.error("Error fetching products:", error);
        })

//finally()
//===========

  .finally(() => {
    console.log("\n========== FETCH COMPLETE ==========");
  });
*/