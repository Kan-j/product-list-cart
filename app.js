let ul = document.getElementById("ul");
let data = [
  {
    id: 0,
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    cart: 0,
  },
  {
    id: 1,
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    cart: 0,
  },
  {
    id: 2,
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    cart: 0,
  },
  {
    id: 3,
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    cart: 0,
  },
  {
    id: 4,
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    cart: 0,
  },
  {
    id: 5,
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    cart: 0,
  },
  {
    id: 6,
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    cart: 0,
  },
  {
    id: 7,
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    cart: 0,
  },
  {
    id: 8,
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    cart: 0,
  },
];
data.map((item, key) => {
  let list = `
      <li>
        <div class="image">
            <img src=${item.image.desktop} alt="" class="food" id="food">
            <div class="addCart" onclick="addCart(${item.id})">
                <img src="assets/images/icon-add-to-cart.svg" alt="">
                <b>Add to Cart</b>
            </div>
            <div class="addButton"  id="button" >
                <button id="add" onclick="addup(${item.id})">+</button>
                <p class="cart">${item.cart}</p>
                <button id="minus" onclick="minus(${item.id})">-</button>
            </div>
          </div>
          <p class="name">${item.category}</p>
          <b class="longName">${item.name}</b>
          <p class="price">$${item.price}</p>
      </li> `;
  ul.innerHTML += list;
});

let cart = document.querySelectorAll("p.cart");
let addButton = document.querySelectorAll("div.addButton");
let food = document.querySelectorAll("img.food");
let illustrate = document.querySelector(".illustrate");
let myCartCont = document.getElementById("myCartCont");
let summarize = document.getElementById("summarize");
let yourCart = document.getElementById("yourCart");
let moneyCont = document.getElementById("moneyCont");
let moneyCont2 = document.getElementById("moneyCont2");
let product = document.getElementById("product");
let pop = document.getElementById("pop");
let confirm = document.getElementById("confirm");
let newOrder = document.getElementById("new");
let myCart = [];
let number;
let money;

confirm.addEventListener("click", () => {
  pop.style.display = "flex";
});

newOrder.addEventListener("click", () => {
  location.reload();
});

setInterval(() => {
  number = myCart.reduce((sum, item) => {
    return sum + item.cart;
  }, 0);
  yourCart.innerHTML = number;

  money = myCart.reduce((sum, item) => {
    return sum + item.cart * item.price;
  }, 0);
  moneyCont.innerHTML = money;
  moneyCont2.innerHTML = money;

  product.innerHTML = "";
  myCart.map((data, index) => {
    let Plist = `
    <div class="Plist">
          <img src="${data.image.desktop}" alt="" />
          <div class="name">
            <div>
              <b>${data.category}</b>
              <br />
              <span class="cart">${data.cart}x</span>&nbsp;&nbsp;
              <span class="price">@ $${data.price}</span>&nbsp;&nbsp;
            </div>
            <span class="total">$ ${data.cart * data.price}</span>
          </div>
        </div>
    `;
    product.innerHTML += Plist;
  });

  myCartCont.innerHTML = "";
  myCart.map((data, index) => {
    let list = `
    <div class="list">
        <div class="name">
          <b>${data.category}</b>
          <br />
          <span class="cart">${data.cart}x</span>&nbsp;&nbsp;
          <span class="price">@ $${data.price}</span>&nbsp;&nbsp;
          <span class="total">$${data.cart * data.price}</span>
        </div>
        <img src="assets/images/icon-remove-item.svg" alt="" class="close" onclick="dismiss(${
          data.id
        })"/>
    </div>
    `;
    myCartCont.innerHTML += list;
  });
}, 500);

function illustrated() {
  if (myCart.length === 0) {
    illustrate.style.display = "flex";
    summarize.style.display = "none";
  } else {
    illustrate.style.display = "none";
    summarize.style.display = "block";
  }
}
illustrated();

function addCart(id) {
  addButton[id].style.display = "flex";
  data[id].cart += 1;
  cart[id].innerHTML = data[id].cart;
  food[id].style.border = "3px solid hsl(14, 86%, 42%)";

  let fullData = data.find((item) => item.id === id);
  myCart.push(fullData);
  illustrated();

  myCartCont.innerHTML = "";
  myCart.map((data, index) => {
    let list = `
    <div class="list">
        <div class="name">
          <b>${data.category}</b>
          <br />
          <span class="cart">${data.cart}x</span>&nbsp;&nbsp;
          <span class="price">@ $${data.price}</span>&nbsp;&nbsp;
          <span class="total">$${data.cart * data.price}</span>
        </div>
        <img src="assets/images/icon-remove-item.svg" alt="" class="close" onclick="dismiss(${
          data.id
        })"/>
    </div>
    `;
    myCartCont.innerHTML += list;
  });
}

function addup(id) {
  data[id].cart += 1;
  cart[id].innerHTML = data[id].cart;

  if (data[id].cart > 1) {
    addButton[id].style.display = "flex";
  }
}
function minus(id) {
  data[id].cart -= 1;
  cart[id].innerHTML = data[id].cart;
  if (data[id].cart < 1) {
    addButton[id].style.display = "none";
    food[id].style.border = "none";
    myCart = myCart.filter((item) => {
      return item.cart > 0;
    });
    illustrated();
  } else {
    data[id].display = "flex";
  }
}

let dismiss = (id) => {
  myCart = myCart.filter((item) => {
    return item.id !== id;
  });
  addButton[id].style.display = "none";
  data[id].cart = 0;
  food[id].style.border = "none";
  illustrated();
};