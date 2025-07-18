    const recipeForm = document.getElementById("recipeForm");
    const recipeList = document.getElementById("recipeList");
  
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  
    function saveToLocalStorage() {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  
    recipeForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const cuisine = document.getElementById('cuisine').value;
      const image = document.getElementById('image').value || 'https://via.placeholder.com/300x200';
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;
  
      const newRecipe = {
        title,
        cuisine,
        image,
        ingredients,
        instructions
      };
  
      recipes.push(newRecipe);
      saveToLocalStorage();
      recipeForm.reset();
      displayRecipes();
    });
  
    function displayRecipes() {
      recipeList.innerHTML = "";
  
      recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.className = 'recipe-card';
  
        const img = document.createElement("img");
        img.src = recipe.image;
  
        const h3 = document.createElement("h3");
        h3.textContent = recipe.title;
  
        const p1 = document.createElement("p");
        p1.innerHTML = `<strong>Cuisine:</strong> ${recipe.cuisine}`;
  
        const p2 = document.createElement("p");
        p2.innerHTML = `<strong>Ingredients:</strong> ${recipe.ingredients}`;
  
        const p3 = document.createElement("p");
        p3.innerHTML = `<strong>Instructions:</strong> ${recipe.instructions}`;
  
        const btnDiv = document.createElement("div");
        btnDiv.style.marginTop = "10px";
  
        const delButton = document.createElement("button");
        delButton.textContent = "🗑️ Delete";
        delButton.addEventListener("click", () => {
          recipes.splice(index, 1);
          saveToLocalStorage(); 
          displayRecipes();
        });
  
        const editButton = document.createElement("button");
        editButton.textContent = "✏️ Edit";
        editButton.addEventListener("click", () => {
          document.getElementById('title').value = recipe.title;
          document.getElementById('cuisine').value = recipe.cuisine;
          document.getElementById('image').value = recipe.image;
          document.getElementById('ingredients').value = recipe.ingredients;
          document.getElementById('instructions').value = recipe.instructions;
  
          recipes.splice(index, 1);
          saveToLocalStorage();
          displayRecipes();
        });
  
        btnDiv.appendChild(editButton);
        btnDiv.appendChild(delButton);
  
        recipeCard.appendChild(img);
        recipeCard.appendChild(h3);
        recipeCard.appendChild(p1);
        recipeCard.appendChild(p2);
        recipeCard.appendChild(p3);
        recipeCard.appendChild(btnDiv);
  
        recipeList.appendChild(recipeCard);
      });
    }
  

    displayRecipes();
