const products = [
  {
    "id": 1,
    "name": "Snake Plant",
    "scientific_name": "Sansevieria trifasciata",
    "price": "$8.99",
    "category": "Indoor",
    "light": "Low to Bright Indirect",
    "water": "Every 2–3 weeks",
    "image": ["img/ indoor plans img/snake plant1.png", "img/ indoor plans img/snake plant.png "],
    "description": "Easy-care plant that improves air quality and thrives on neglect."
  },
  {
    "id": 2,
    "name": "Peace Lily",
    "scientific_name": "Spathiphyllum",
    "price": "$10.99",
    "category": "Indoor",
    "light": "Low to Medium Indirect",
    "water": "Weekly",
    "image": ["img/ indoor plans img/peace lily2.png", "img/ indoor plans img/peace liiy.jpg "],
    "description": "Flowering plant that helps purify the air."
  },
  {
    "id": 3,
    "name": "Spider Plant",
    "scientific_name": "Chlorophytum comosum",
    "price": "$6.49",
    "category": "Indoor",
    "light": "Bright Indirect",
    "water": "Once a week",
    "image": ["img/ indoor plans img/Spider Plant1.png", "img/ indoor plans img/Spider Plant.png "],
    "description": "Easy to care for and great for beginners."
  },
  {
    "id": 4,
    "name": "ZZ Plant",
    "scientific_name": "Zamioculcas zamiifolia",
    "price": "$12.00",
    "category": "Indoor",
    "light": "Low to Bright Indirect",
    "water": "Every 2–3 weeks",
    "image": ["img/ indoor plans img/zz plants.png", "img/ indoor plans img/zz plants1.png "],
    "description": "Tolerates low light and infrequent watering."
  },
  {
    "id": 5,
    "name": "Aloe Vera",
    "scientific_name": "Aloe barbadensis miller",
    "price": "$7.50",
    "category": "Indoor",
    "light": "Bright Direct to Indirect",
    "water": "Every 2–3 weeks",
    "image": ["img/ indoor plans img/aloe vera.png", "img/ indoor plans img/aloe vera1.png"],
    "description": "Medicinal plant that loves the sun."
  },
  {
    "id": 6,
    "name": "Rubber Plant",
    "scientific_name": "Ficus elastica",
    "price": "$11.25",
    "category": "Indoor",
    "light": "Bright Indirect",
    "water": "Weekly",
    "image": ["img/ indoor plans img/Rubber Plant1.png", " img/ indoor plans img/Rubber Plant.png"],
    "description": "Bold, glossy leaves that make a statement indoors."
  },
  {
    "id": 7,
    "name": "Pothos",
    "scientific_name": "Epipremnum aureum",
    "price": "$5.99",
    "category": "Indoor",
    "light": "Low to Medium",
    "water": "Weekly",
    "image": ["img/ indoor plans img/pothos.png", "img/ indoor plans img/pothos1.png"],
    "description": "Fast-growing vine, great for shelves or hanging."
  },
  {
    "id": 8,
    "name": "Chinese Evergreen",
    "scientific_name": "Aglaonema",
    "price": "$9.49",
    "category": "Indoor",
    "light": "Low to Bright Indirect",
    "water": "Every 7–10 days",
    "image": ["img/ indoor plans img/chinese .png", "img/ indoor plans img/Chinese Evergreen.png"],
    "description": "Colorful foliage and tolerates low light."
  },
  {
    "id": 9,
    "name": "Areca Palm",
    "scientific_name": "Dypsis lutescens",
    "price": "$13.75",
    "category": "Indoor",
    "light": "Bright Indirect",
    "water": "Twice a week",
    "image": ["img/ indoor plans img/palm.png", "img/ indoor plans img/palm1.png"],
    "description": "Air-purifying plant with feathery, arching fronds."
  },
  {
    "id": 10,
    "name": "Boston Fern",
    "scientific_name": "Nephrolepis exaltata",
    "price": "$8.25",
    "category": "Indoor",
    "light": "Indirect Light",
    "water": "Keep soil moist",
    "image": ["img/ indoor plans img/Boston.png", "img/ indoor plans img/boston 1.webp "],
    "description": "Classic lush fern, perfect for hanging baskets."
  }
]


const productDiv = document.getElementById("prod");
const cartDiv = document.getElementById("cart");

let cart = [];

function productShow() {
  productDiv.innerHTML = "<h2>🛍️ shopping Product</h2> ";

  products.forEach((product) => {
    const productbox1 = document.createElement("div");
    productbox1.className = "plant-card";

    const productbox2 = document.createElement("div");
    productbox2.className = "plant-content";

    const productbox3 = document.createElement("div");
    productbox3.className = "image-wrapper";

    const img1 = document.createElement("img");
    img1.src = product.image[0];
    img1.className = "img-default";

    const img2 = document.createElement("img");
    img2.src = product.image[1];
    img2.className = "img-hover";

    const information = document.createElement("div");
    information.className = "information";

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p = document.createElement("p");
    p.textContent = product.description;

    const h2 = document.createElement("h2");
    h2.textContent = product.price;

    const button = document.createElement("button");
    button.textContent = "Add To Cart";
    button.addEventListener("click", () => {
      addToCart(product);
    });


    productbox3.appendChild(img1);
    productbox3.appendChild(img2);
    information.appendChild(h3);
    information.appendChild(p);
    information.appendChild(h2);
    information.appendChild(button);
    productbox2.appendChild(productbox3);
    productbox2.appendChild(information);
    productbox1.appendChild(productbox2);
    productDiv.appendChild(productbox1);
  });
}

function addToCart(product) {
  let isExist = false;

  cart.forEach((item) => {
    if (item.id == product.id) {
      item.quantity++;
      isExist = true;
    }
  });

  if (!isExist) {
    cart.push({ ...product, quantity: 1 });
  }

  cartShow(); 
}


function cartShow() {
  cartDiv.innerHTML = "<h2>🛒 Cart</h2>";
  let subTotal = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const img = document.createElement("img");
    img.src = item.image[0];

    const itemDetails = document.createElement("div");
    itemDetails.className = "item-details";
    itemDetails.innerHTML = `
      <span>${item.name}</span>
      <span>${item.scientific_name}</span>
      <span>${item.price}</span>
    `;

    const actions = document.createElement("div");
    actions.className = "item-actions";
    actions.dataset.index = index;

    actions.innerHTML = `
      <button class="minus">−</button>
      <span>${item.quantity}</span>
      <button class="plus">+</button>
    `;

    const itemTotal = parseFloat(item.price.replace("$", "")) * item.quantity;
    subTotal = subTotal + itemTotal;

    cartItem.appendChild(img);
    cartItem.appendChild(itemDetails);
    cartItem.appendChild(actions);
    cartDiv.appendChild(cartItem);
  });

  const tax = subTotal * 0.18;
  const total = subTotal + tax;

  const totalsDiv = document.createElement("div");
  totalsDiv.className = "totals";
  totalsDiv.innerHTML = `
    <p>Subtotal: <span>$${subTotal.toFixed(2)}</span></p>
    <p>Tax (18%): <span>$${tax.toFixed(2)}</span></p>
    <p>Total: <span>$${total.toFixed(2)}</span></p>
  `;

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "cart-buttons";

  const clearBtn = document.createElement("button");
  clearBtn.className = "clear";
  clearBtn.id = "clearAll";
  clearBtn.textContent = "Clear All";
  clearBtn.addEventListener("click", clearsAll);

  const checkoutBtn = document.createElement("button");
  checkoutBtn.className = "checkout";
  checkoutBtn.textContent = "Check Out";

  buttonDiv.appendChild(clearBtn);
  buttonDiv.appendChild(checkoutBtn);
  cartDiv.appendChild(totalsDiv);
  cartDiv.appendChild(buttonDiv);
}


cartDiv.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const parent = btn.parentElement;
  const index = parseInt(parent.dataset.index);

  if (btn.classList.contains("plus")) {
    cart[index].quantity += 1;
  } else if (btn.classList.contains("minus")) {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }

  cartShow();
});

function clearsAll() {
  cart = [];
  cartShow();
}

productShow();
cartShow();





