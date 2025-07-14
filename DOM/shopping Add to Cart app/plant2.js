const products = [
    
        {
            "id": 1,
            "name": "Tulsi",
            "scientific_name": "Ocimum tenuiflorum",
            "price": "$5.99",
            "category": "Herbal",
            "light": "Full Sun to Partial Shade",
            "water": "When topsoil is dry",
            "image": ["img/herbal plans img/tulshi.png ", "img/herbal plans img/tulshi1.png "],
            "description": "Known as Holy Basil, Tulsi is widely used in Ayurvedic remedies."
        },
        {
            "id": 2,
            "name": "Shatavari",
            "scientific_name": "Asparagus racemosus",
            "price": "$6.49",
            "category": "Herbal",
            "light": "Partial Sun to Full Sun",
            "water": "Twice a week",
            "image": [" img/herbal plans img/Stevia.png", " img/herbal plans img/Stevia1.png"],
            "description": "A rejuvenating herb used in Ayurveda for women's health, immunity, and digestion."
        },
        {
            "id": 3,
            "name": "Mint",
            "scientific_name": "Mentha",
            "price": "$4.49",
            "category": "Herbal",
            "light": "Full Sun",
            "water": "Frequent",
            "image": ["img/herbal plans img/mint.png", "img/herbal plans img/mint1.png "],
            "description": "Refreshing herbal plant commonly used in drinks and dishes."
        },
        {
            "id": 4,
            "name": "Lemongrass",
            "scientific_name": "Cymbopogon",
            "price": "$5.49",
            "category": "Herbal",
            "light": "Full Sun",
            "water": "Twice a week",
            "image": ["img/herbal plans img/Lemongrass.png ", " img/herbal plans img/Lemongrass1.png"],
            "description": "Popular for herbal tea and mosquito repellent properties."
        },
        {
            "id": 5,
            "name": "Brahmi",
            "scientific_name": "Bacopa monnieri",
            "price": "$6.29",
            "category": "Herbal",
            "light": "Partial Sun",
            "water": "Keep moist",
            "image": [" img/herbal plans img/Brahmi.png", "img/herbal plans img/Brahmi1.png "],
            "description": "Memory-boosting herb used in Ayurvedic medicines."
        },
        {
            "id": 6,
            "name": "Ashwagandha",
            "scientific_name": "Withania somnifera",
            "price": "$7.99",
            "category": "Herbal",
            "light": "Full Sun",
            "water": "Once a week",
            "image": ["img/herbal plans img/Ashwagandha.png ", "img/herbal plans img/Ashwagandha1.png "],
            "description": "Reduces stress, improves strength and immunity."
        },
        {
            "id": 7,
            "name": "Giloy",
            "scientific_name": "Tinospora cordifolia",
            "price": "$6.49",
            "category": "Herbal",
            "light": "Partial Shade",
            "water": "Moderate",
            "image": ["img/herbal plans img/Giloy.png ", "img/herbal plans img/Giloy1.png "],
            "description": "Used to boost immunity and treat fever naturally."
        },
        {
            "id": 8,
            "name": "Stevia",
            "scientific_name": "Stevia rebaudiana",
            "price": "$5.79",
            "category": "Herbal",
            "light": "Full Sun",
            "water": "Every few days",
            "image": ["img/herbal plans img/Stevia.png", "img/herbal plans img/Stevia1.png"],
            "description": "Natural sweetener plant, good for diabetics."
        },
        {
            "id": 9,
            "name": "Neem",
            "scientific_name": "Azadirachta indica",
            "price": "$7.49",
            "category": "Herbal",
            "light": "Full Sun",
            "water": "Weekly",
            "image": [" img/herbal plans img/neem.png", "img/herbal plans img/neem1.png "],
            "description": "Strong antibacterial and antifungal properties, used in skincare."
        },
        {
            "id": 10,
            "name": "Curry Leaves",
            "scientific_name": "Murraya koenigii",
            "price": "$4.99",
            "category": "Herbal",
            "light": "Full Sun to Partial Shade",
            "water": "Twice a week",
            "image": ["img/herbal plans img/Curry Leaves.png ", "img/herbal plans img/Curry Leaves1.png "],
            "description": "Aromatic herb used in Indian cooking and for hair care."
        }
    ]




const productDiv = document.getElementById("prod");
const cartDiv = document.getElementById("cart");

let cart = [];

function productShow() {
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
    subTotal += itemTotal;

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




