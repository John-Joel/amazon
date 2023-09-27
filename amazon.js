const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('.bi-x');

btnCart.addEventListener('click', () => {
  cart.classList.add('cart-active');

});

btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
  loadContent();
}

function loadContent() {
  let btnRemove = document.querySelectorAll('.bi-trash-fill');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click', removeItem);
  });

  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input) => {
    input.addEventListener('change', changeQty);
  });

  let cartBtns = document.querySelectorAll('.cart-btn');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);
  });
  updateTotal();
}

function removeItem() {
  if (confirm('Are Your Sure to Remove')) {
    let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList = itemList.filter(el => el.title != title);
    this.parentElement.remove();
    loadContent();
  }
}

function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemList = [];

function addCart() {
  let food = this.parentElement;
  let title = food.querySelector('.product-info').innerHTML;
  let price = food.querySelector('.OGrate').innerHTML;
  let imgSrc = food.querySelector('.product-pic').src;

  //  let incrementValue = document.querySelector('.cart-quantity').value; 
  let newProduct = { title, price, imgSrc }

  //  Check Product already Exist in Cart
  if (itemList.find((el) => el.title == newProduct.title)) {
    //   foundProduct = itemList.find(prod => prod.title == newProduct.title);
    // foundProduct.value++;
    alert("Product Already added in Cart");
    // (itemList.title==newProduct.title).value++;
    return;
  } else {
    itemList.push(newProduct);
  }

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}


function createCartProduct(title, price, imgSrc) {
  return `
      <div class="cart-box">
        <img src="${imgSrc}" class="food-img">
        <div class="detail-box">
          <div class="cart-food-title">${title}</div>
          <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
          </div>
          <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bi bi-trash-fill" name="trash"></i>
      </div>`;
}


function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-box');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach(product => {
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
    let qty = product.querySelector('.cart-quantity').value;
    total += (price * qty);
    product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);
  });

  totalValue.innerHTML = 'Rs.' + total;


  // Add Product Count in Cart Icon

  const cartCount = document.querySelector('.cart-count');
  let count = itemList.length;
  cartCount.innerHTML = count;

  if (count == 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'block';
  }
}

if (localStorage["userName"]) {

  document.getElementById('userId').innerHTML = localStorage.getItem('userName');
  document.getElementById('loginName').innerHTML = localStorage.getItem('userName');
}

// function myFunction() {

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function normalImg() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
}
function bigImg() {
  var x = document.getElementById("myDIV");
  x.style.display = "block";
}


