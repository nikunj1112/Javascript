# 🪴 Plant Product Web App

A clean and interactive plant shopping UI featuring:
- ✨ Hover-based image transitions
- 🛒 Real-time cart quantity updates
- 🌱 Responsive layout (Mobile + Desktop friendly)

---

## 🌟 Features

- 🛒 **Increase/Decrease Quantity** in Cart
- 🌿 **Image Changes on Hover** (6s smooth effect)
- 💸 Product Price shown in **USD ($)**
- 🔍 Plant details including:
  - Scientific Name
  - Light Requirements
  - Watering Instructions

---

## 🖼 Demo



https://github.com/user-attachments/assets/d5b117a6-1521-4532-8ff6-282c36f6b634



---

## 📁 Folder Structure

```
📦 plant-shop/
 ┣ 📂 img/
 ┃ ┣ herbal plans img/
 ┃ ┣ indoor plans img/
 ┃ ┗ outdoor plans img/
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 script.js
```

---

## 🚀 Getting Started

1. Clone the project:

```bash
git clone https://github.com/your-username/plant-shop.git
cd plant-shop
```

2. Open `index.html` in your browser:

```bash
open index.html
# or using Live Server:
live-server .
```

> 💡 Tip: Use the "Live Server" extension in VS Code for instant preview.

---

## 🛠 Customization

- 🪴 **To add new products**: Update the `products` array inside `script.js`
- 🎨 Edit `style.css` for colors, layout, fonts, etc.
- ⏱ Adjust hover duration from 6s in the CSS if needed

---

## 📦 Sample Product Data

```js
const products = [
  {
    id: 1,
    name: "Tulsi",
    scientific_name: "Ocimum tenuiflorum",
    price: "$5.99",
    category: "Herbal",
    light: "Full Sun to Partial Shade",
    water: "When topsoil is dry",
    image: [
      "img/herbal plans img/tulshi.png",
      "img/herbal plans img/tulshi2.png"
    ]
  }
];
```

---

## 🙌 Credits

- Images: Unsplash, Pexels, or your own assets
- Icons: FontAwesome / Heroicons (if used)

---

## 📄 License

MIT License – Feel free to use, modify, and share with proper credit. 😊

---

🌱 **Happy Coding & Growing!**
