const recipes = [
  {
    image: "images/Images-Products/1.jpg",
    rating: "4.7",
    reviews: "(389 reviews)",
    prepTime: "25 min",
    cookTime: "35 min",
    servings: "4 people",
    tags: ["Intermediate", "Asian"],
    title: "Chicken Tikka Masala",
    alert: "Extended Preparation Time — Requires marination and slow cooking.",
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tbsp tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tbsp ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro"
    ],
    instructions: [
      "Marinate chicken in yogurt and tikka paste for 30 minutes.",
      "Cook chicken until browned, set aside.",
      "Sauté onion, garlic, and ginger.",
      "Add paste and tomatoes, simmer 10 minutes.",
      "Stir in coconut cream, return chicken."
    ],
    nutrition: [
      { icon: "fa-fire text-warning", value: "450 kcal", label: "Calories" },
      { icon: "fa-dumbbell text-primary", value: "38g", label: "Protein" },
      { icon: "fa-wheat-awn text-warning", value: "24g", label: "Carbs" },
      { icon: "fa-droplet text-danger", value: "22g", label: "Fat" },
      { icon: "fa-leaf text-success", value: "4g", label: "Fiber" },
      { icon: "fa-cube text-pink", value: "760mg", label: "Sodium" }
    ],
    tips: [
      "Marinate overnight for deeper flavor",
      "Use full-fat coconut cream",
      "Adjust spice level to taste",
      "Serve with naan and rice"
    ]
  },
  {
    image: "images/Images-Products/2.jpg",
    rating: "4.8",
    reviews: "(210 reviews)",
    prepTime: "15 min",
    cookTime: "40 min",
    servings: "3 people",
    tags: ["Advanced", "American"],
    title: "Roast Beef",
    alert: "Allow resting before slicing for tenderness.",
    ingredients: ["1kg beef roast", "2 tbsp olive oil", "Salt & pepper", "Garlic cloves", "Rosemary sprigs"],
    instructions: ["Season beef generously.", "Sear in hot pan.", "Roast at 180°C for 40 minutes.", "Rest before slicing."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "520 kcal", label: "Calories" },
      { icon: "fa-dumbbell text-primary", value: "45g", label: "Protein" },
      { icon: "fa-droplet text-danger", value: "28g", label: "Fat" }
    ],
    tips: ["Use meat thermometer", "Slice against the grain"]
  },
  {
    image: "images/Images-Products/3.jpg",
    rating: "4.6",
    reviews: "(178 reviews)",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "2 people",
    tags: ["Easy", "Thai"],
    title: "Spicy Thai Curry",
    alert: "Adjust chili level to taste.",
    ingredients: ["400ml coconut milk", "2 tbsp red curry paste", "Vegetables", "Chicken or tofu"],
    instructions: ["Sauté paste in oil.", "Add coconut milk.", "Add protein and vegetables.", "Simmer until cooked."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "420 kcal", label: "Calories" },
      { icon: "fa-dumbbell text-primary", value: "25g", label: "Protein" }
    ],
    tips: ["Serve with jasmine rice", "Add fish sauce for depth"]
  },
  {
    image: "images/Images-Products/4.jpg",
    rating: "4.9",
    reviews: "(320 reviews)",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "2 people",
    tags: ["Healthy", "Vegetarian"],
    title: "Rainbow Veggie Bowl",
    alert: "Packed with fresh vegetables.",
    ingredients: ["Quinoa", "Bell peppers", "Carrots", "Broccoli", "Avocado"],
    instructions: ["Cook quinoa.", "Steam vegetables.", "Arrange in bowl.", "Top with avocado."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "350 kcal", label: "Calories" },
      { icon: "fa-leaf text-success", value: "8g", label: "Fiber" }
    ],
    tips: ["Use seasonal vegetables", "Add tahini dressing"]
  },
  {
    image: "images/Images-Products/5.jpg",
    rating: "4.8",
    reviews: "(265 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "3 people",
    tags: ["Easy", "Mexican"],
    title: "Chickpea Tacos",
    alert: "Squeeze lime before serving.",
    ingredients: ["Taco shells", "Chickpeas", "Spices", "Lettuce", "Tomatoes"],
    instructions: ["Season chickpeas.", "Cook until crispy.", "Fill tacos with toppings."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "300 kcal", label: "Calories" }
    ],
    tips: ["Add guacamole", "Use smoked paprika"]
  },
  {
    image: "images/Images-Products/6.jpg",
    rating: "4.7",
    reviews: "(198 reviews)",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "2 people",
    tags: ["Intermediate", "Asian"],
    title: "Vegetable Fried Rice",
    alert: "Use leftover rice for best texture.",
    ingredients: ["2 cups rice", "Mixed vegetables", "Soy sauce", "Eggs"],
    instructions: ["Scramble eggs.", "Add vegetables.", "Add rice and soy sauce."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "400 kcal", label: "Calories" }
    ],
    tips: ["Cook rice a day ahead", "Use sesame oil"]
  },
  {
    image: "images/Images-Products/7.jpg",
    rating: "4.9",
    reviews: "(400 reviews)",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: "2 people",
    tags: ["Intermediate", "Italian"],
    title: "Margherita Pizza",
    alert: "Bake until crust is golden.",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
    instructions: ["Roll dough.", "Spread sauce.", "Add cheese and basil.", "Bake at 220°C."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "500 kcal", label: "Calories" }
    ],
    tips: ["Use fresh mozzarella", "Preheat oven well"]
  },
  {
    image: "images/Images-Products/8.jpg",
    rating: "4.6",
    reviews: "(178 reviews)",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "3 people",
    tags: ["Easy", "Seafood"],
    title: "Garlic Butter Shrimp",
    alert: "Cook immediately after marinating.",
    ingredients: ["Shrimp", "Butter", "Garlic", "Parsley"],
    instructions: ["Melt butter.", "Add garlic.", "Cook shrimp until pink."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "350 kcal", label: "Calories" }
    ],
    tips: ["Serve with pasta", "Add lemon juice"]
  },
  {
    image: "images/Images-Products/9.jpg",
    rating: "4.9",
    reviews: "(320 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    tags: ["Intermediate", "Asian"],
    title: "Vegetable Chow Mein",
    alert: "Ready in under 40 minutes.",
    ingredients: ["Noodles", "Vegetables", "Soy sauce", "Sesame oil"],
    instructions: ["Boil noodles.", "Stir-fry vegetables.", "Add noodles and sauce."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "420 kcal", label: "Calories" }
    ],
    tips: ["Use high heat", "Add chili flakes"]
  },

  {
    image: "images/Images-Products/10.jpg",
    rating: "4.8",
    reviews: "(250 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1 person",
    tags: ["Easy", "American"],
    title: "Cheese Sandwich",
    alert: "Serve warm for best taste.",
    ingredients: ["2 slices bread", "2 slices cheddar cheese", "Butter for spreading"],
    instructions: [
      "Butter bread slices.",
      "Place cheese between slices.",
      "Grill until golden brown."
    ],
    nutrition: [
      { icon: "fa-fire text-warning", value: "320 kcal", label: "Calories" },
      { icon: "fa-dumbbell text-primary", value: "12g", label: "Protein" },
      { icon: "fa-droplet text-danger", value: "15g", label: "Fat" }
    ],
    tips: ["Use sourdough bread", "Add tomato slices for freshness"]
  },
  {
    image: "images/Images-Products/11.jpg",
    rating: "4.9",
    reviews: "(400 reviews)",
    prepTime: "25 min",
    cookTime: "60 min",
    servings: "4 people",
    tags: ["Advanced", "Italian"],
    title: "Classic Lasagna",
    alert: "Extended Preparation Time — Allow resting before serving.",
    ingredients: [
      "Lasagna sheets",
      "500g minced beef",
      "Tomato sauce",
      "Béchamel sauce",
      "Mozzarella"
    ],
    instructions: [
      "Cook beef in tomato sauce.",
      "Layer pasta, meat, and béchamel.",
      "Top with mozzarella.",
      "Bake at 180°C for 60 minutes."
    ],
    nutrition: [
      { icon: "fa-fire text-warning", value: "600 kcal", label: "Calories" },
      { icon: "fa-dumbbell text-primary", value: "35g", label: "Protein" },
      { icon: "fa-wheat-awn text-warning", value: "50g", label: "Carbs" }
    ],
    tips: ["Let lasagna rest 15 minutes", "Use fresh pasta sheets"]
  },
  {
    image: "images/Images-Products/12.jpg",
    rating: "4.7",
    reviews: "(250 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1 person",
    tags: ["Easy", "Indian"],
    title: "Crispy Samosas",
    alert: "Serve hot with chutney.",
    ingredients: [
      "Samosa wrappers",
      "Potato filling",
      "Peas",
      "Spices",
      "Oil for frying"
    ],
    instructions: [
      "Prepare spiced potato filling.",
      "Fill wrappers and fold.",
      "Deep fry until golden."
    ],
    nutrition: [
      { icon: "fa-fire text-warning", value: "280 kcal", label: "Calories" },
      { icon: "fa-wheat-awn text-warning", value: "30g", label: "Carbs" },
      { icon: "fa-droplet text-danger", value: "12g", label: "Fat" }
    ],
    tips: ["Seal edges with flour paste", "Serve with mint chutney"]
  }
];

document.querySelector(".btn-gradient").addEventListener("click", () => {
  const productImage = document.getElementById("productImage");

  let imagePath;
  let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

  // If user uploaded files, pick one randomly
  if (productImage && productImage.files.length > 0) {
    const randomFile = productImage.files[Math.floor(Math.random() * productImage.files.length)];
    imagePath = URL.createObjectURL(randomFile); // temporary URL
  } else {
    // fallback to default images
    const fallbackImages = [
      "images/Images-Products/1.jpg",
      "images/Images-Products/2.jpg",
      "images/Images-Products/3.jpg",
      "images/Images-Products/4.jpg",
      "images/Images-Products/5.jpg",
      "images/Images-Products/6.jpg",
      "images/Images-Products/7.jpg",
      "images/Images-Products/8.jpg",
      "images/Images-Products/9.jpg",
      "images/Images-Products/10.jpg",
      "images/Images-Products/11.jpg",
      "images/Images-Products/12.jpg"
    ];
    imagePath = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
  }

  // Update image
  document.querySelector(".fixed-img").src = imagePath;

  // Update rating
  document.querySelector(".rating-box span.fw-bold").textContent = randomRecipe.rating;
  document.querySelector(".rating-box span.text-muted").textContent = randomRecipe.reviews;

  // Update prep info
  const prepDivs = document.querySelectorAll(".prep-info div");
  prepDivs[0].querySelector(".fw-bold").textContent = randomRecipe.prepTime;
  prepDivs[1].querySelector(".fw-bold").textContent = randomRecipe.cookTime;
  prepDivs[2].querySelector(".fw-bold").textContent = randomRecipe.servings;

  // Update tags
  const badges = document.querySelectorAll(".badge1, .badge2");
  badges[0].textContent = randomRecipe.tags[0];
  badges[1].textContent = randomRecipe.tags[1];

  // Update title
  document.querySelector("h1").textContent = randomRecipe.title;

  // Update alert
  document.querySelector(".alert-danger").textContent = randomRecipe.alert;

  //  Update Ingredients tab
  const ingredientsList = document.querySelector("#ingredients ul");
  ingredientsList.innerHTML = "";
  randomRecipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  //  Update Instructions tab
  const instructionsList = document.querySelector("#instructions ol");
  instructionsList.innerHTML = "";
  randomRecipe.instructions.forEach(step => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = step;
    instructionsList.appendChild(li);
  });

  // Update Nutrition tab
  const nutritionRow = document.querySelector("#nutrition .row");
  nutritionRow.innerHTML = "";
  randomRecipe.nutrition.forEach(n => {
    const div = document.createElement("div");
    div.className = "col-6 col-md-4 p-2";
    div.innerHTML = `<i class="fa-solid ${n.icon}"></i><br><strong>${n.value}</strong><br>${n.label}`;
    nutritionRow.appendChild(div);
  });

  // Update Tips tab
  const tipsList = document.querySelector("#tips ul");
  tipsList.innerHTML = "";
  randomRecipe.tips.forEach(tip => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `<i class="fa-solid fa-check text-warning me-2"></i>${tip}`;
    tipsList.appendChild(li);
  });
});