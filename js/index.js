var recipesList = [
  {
    image: "./images/Images-Products/1.jpg",
    rating: "4.7",
    reviews: "(389 reviews)",
    prepTime: "25 min",
    cookTime: "35 min",
    servings: "4 people",
    tags: ["Intermediate", "Asian"],
    title: "Chicken Tikka Masala",
    tileInfo: "Rich and creamy Indian curry with tender chicken pieces",
    alert: true,
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
    nutrition:

      [
        { icon: "fa-solid fa-fire text-warning", value: "450 kcal", label: "Calories" },
        { icon: "fa-solid fa-dumbbell text-primary", value: "38g", label: "Protein" },
        { icon: "fa-solid fa-wheat-awn text-warning", value: "24g", label: "Carbs" },
        { icon: "fa-solid fa-droplet text-danger", value: "22g", label: "Fat" },
        { icon: "fa-solid fa-leaf text-success", value: "4g", label: "Fiber" },
        { icon: "fa-solid fa-cube text-pink", value: "760mg", label: "Sodium" }
      ],
    tips: [
      "Marinate overnight for deeper flavor",
      "Use full-fat coconut cream",
      "Adjust spice level to taste",
      "Serve with naan and rice"
    ]
  },
  {
    image: "./images/Images-Products/2.jpg",
    rating: "4.8",
    reviews: "(210 reviews)",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "3 people",
    tags: ["Advanced", "American"],
    title: "Roast Beef",
    tileInfo: "Tender beef roasted to perfection with rich flavor",
    alert: true,
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
    image: "./images/Images-Products/3.jpg",
    rating: "4.6",
    reviews: "(178 reviews)",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "2 people",
    tags: ["Easy", "Thai"],
    title: "Spicy Thai Curry",
    tileInfo: "Aromatic coconut curry with chili heat",
    alert: false,
    ingredients: ["400ml coconut milk", "2 tbsp red curry paste", "Vegetables", "Chicken or tofu"],
    instructions: ["Sauté paste in oil.", "Add coconut milk.", "Add protein and vegetables.", "Simmer until cooked."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "420 kcal", label: "Calories" },
      { icon: "fa-dumbbell text-primary", value: "25g", label: "Protein" }
    ],
    tips: ["Serve with jasmine rice", "Add fish sauce for depth"]
  },
  {
    image: "./images/Images-Products/4.jpg",
    rating: "4.9",
    reviews: "(320 reviews)",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "2 people",
    tags: ["Healthy", "Vegetarian"],
    title: "Rainbow Veggie Bowl",
    tileInfo: "Colorful medley of fresh seasonal vegetables",
    alert: false,
    ingredients: ["Quinoa", "Bell peppers", "Carrots", "Broccoli", "Avocado"],
    instructions: ["Cook quinoa.", "Steam vegetables.", "Arrange in bowl.", "Top with avocado."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "350 kcal", label: "Calories" },
      { icon: "fa-leaf text-success", value: "8g", label: "Fiber" }
    ],
    tips: ["Use seasonal vegetables", "Add tahini dressing"]
  },
  {
    image: "./images/Images-Products/5.jpg",
    rating: "4.8",
    reviews: "(265 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "3 people",
    tags: ["Easy", "Mexican"],
    title: "Chickpea Tacos",
    tileInfo: "Crispy tortillas filled with spiced chickpeas",
    alert: true,
    ingredients: ["Taco shells", "Chickpeas", "Spices", "Lettuce", "Tomatoes"],
    instructions: ["Season chickpeas.", "Cook until crispy.", "Fill tacos with toppings."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "300 kcal", label: "Calories" }
    ],
    tips: ["Add guacamole", "Use smoked paprika"]
  },
  {
    image: "./images/Images-Products/6.jpg",
    rating: "4.7",
    reviews: "(198 reviews)",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "2 people",
    tags: ["Intermediate", "Asian"],
    title: "Vegetable Fried Rice",
    tileInfo: "Savory stir-fry with fresh garden vegetables",
    alert: false,
    ingredients: ["2 cups rice", "Mixed vegetables", "Soy sauce", "Eggs"],
    instructions: ["Scramble eggs.", "Add vegetables.", "Add rice and soy sauce."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "400 kcal", label: "Calories" }
    ],
    tips: ["Cook rice a day ahead", "Use sesame oil"]
  },
  {
    image: "./images/Images-Products/7.jpg",
    rating: "4.9",
    reviews: "(400 reviews)",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: "2 people",
    tags: ["Intermediate", "Italian"],
    title: "Margherita Pizza",
    tileInfo: "Classic Italian pizza with fresh basil and mozzarella",
    alert: true,
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
    instructions: ["Roll dough.", "Spread sauce.", "Add cheese and basil.", "Bake at 220°C."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "500 kcal", label: "Calories" }
    ],
    tips: ["Use fresh mozzarella", "Preheat oven well"]
  },
  {
    image: "./images/Images-Products/8.jpg",
    rating: "4.6",
    reviews: "(178 reviews)",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "3 people",
    tags: ["Easy", "Seafood"],
    title: "Garlic Butter Shrimp",
    tileInfo: "Succulent shrimp sautéed in rich garlic butter",
    alert: false,
    ingredients: ["Shrimp", "Butter", "Garlic", "Parsley"],
    instructions: ["Melt butter.", "Add garlic.", "Cook shrimp until pink."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "350 kcal", label: "Calories" }
    ],
    tips: ["Serve with pasta", "Add lemon juice"]
  },
  {
    image: "./images/Images-Products/9.jpg",
    rating: "4.9",
    reviews: "(320 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    tags: ["Intermediate", "Asian"],
    title: "Vegetable Chow Mein",
    tileInfo: "Stir-fried noodles with crisp garden vegetables",
    alert: true,
    ingredients: ["Noodles", "Vegetables", "Soy sauce", "Sesame oil"],
    instructions: ["Boil noodles.", "Stir-fry vegetables.", "Add noodles and sauce."],
    nutrition: [
      { icon: "fa-fire text-warning", value: "420 kcal", label: "Calories" }
    ],
    tips: ["Use high heat", "Add chili flakes"]
  },

  {
    image: "./images/Images-Products/10.jpg",
    rating: "4.8",
    reviews: "(250 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1 person",
    tags: ["Easy", "American"],
    title: "Cheese Sandwich",
    tileInfo: "Golden toasted bread with melted cheese",
    alert: true,
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
    image: "./images/Images-Products/11.jpg",
    rating: "4.9",
    reviews: "(400 reviews)",
    prepTime: "25 min",
    cookTime: "60 min",
    servings: "4 people",
    tags: ["Advanced", "Italian"],
    title: "Classic Lasagna",
    tileInfo: "Layers of pasta, rich meat sauce, and creamy cheese",
    alert: true,
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
    image: "./images/Images-Products/12.jpg",
    rating: "4.7",
    reviews: "(250 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1 person",
    tags: ["Easy", "Indian"],
    title: "Crispy Samosas",
    tileInfo: "Golden pastry pockets filled with spiced vegetables",
    alert: true,
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

// math.random  ==> 0 -1  but 1 not include 0 - 0.99
// math.random * recipesList.length ==> 0 - 11.99 (because 12 )
// math.floor =>  0 - 11 (without any decimal)

var lastIndex = 0 ;

document.getElementById("randombtn").onclick = function () {

  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * recipesList.length);
    
  } while (randomIndex == lastIndex)
  lastIndex = randomIndex;
  console.log(lastIndex);
  var randomrecipes = recipesList[randomIndex];


  showrecipesList(randomrecipes);

}

showrecipesList(recipesList[0]);

function showrecipesList(recipesList) {
  document.getElementById("productImage").src = recipesList.image;
  document.getElementById("rate").innerHTML = recipesList.rating;
  document.getElementById("reviews").innerHTML = recipesList.reviews;
  document.getElementById("prepTime").innerHTML = recipesList.prepTime;
  document.getElementById("serving").innerHTML = recipesList.servings;
  document.getElementById("cookTime").innerHTML = recipesList.cookTime;
  document.getElementById("tag1").innerHTML = recipesList.tags[0];
  document.getElementById("tag2").innerHTML = recipesList.tags[1];
  document.getElementById("title").innerHTML = recipesList.title;
  document.getElementById("tileInfo").innerHTML = recipesList.tileInfo;

  var ingredientsHtml = ``;

  for (var i = 0; i < recipesList.ingredients.length; i++) {
    ingredientsHtml += `<li>${recipesList.ingredients[i]}</li>`
  }
  document.getElementById("ingredients").innerHTML = recipesList.ingredients;


  var instructionsHtml = "";
  for (var i = 0; i < recipesList.instructions.length; i++) {
    instructionsHtml += `<li>${recipesList.instructions[i]}</li>`

  }
  document.getElementById("instructions").innerHTML = recipesList.instructions;

  // object
  var nutritionHtml = '<div class="row g-3">';

  for (var i = 0; i < recipesList.nutrition.length; i++) {
    nutritionHtml += `
    <div class="col-6 col-md-6 p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center gap-2">
        <i class="${recipesList.nutrition[i].icon}"></i>
        <span>${recipesList.nutrition[i].label}</span>
      </div>
      <div class="fw-bold">${recipesList.nutrition[i].value}</div>
    </div>
  `;
  }

  nutritionHtml += '</div>'; // close row

  document.getElementById("nutrition").innerHTML = nutritionHtml;


  var tipsHtml = "";
  for (var i = 0; i < recipesList.tips.length; i++) {
    tipsHtml += `<li>${recipesList.tips[i]}</li>`
  }

  document.getElementById("tips").innerHTML = recipesList.tips;


  if (recipesList.alert == true) {
    document.getElementById('alertInfo').classList.remove('d-none')
  }
  else {
    document.getElementById('alertInfo').classList.add('d-none')

  }

}


