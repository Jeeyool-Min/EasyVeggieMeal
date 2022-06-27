/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "S1",
    title: "Natural seasoning (500ml)",
    description:
      "Non-artificial, harmless vegetable essence fermented with soybeans and vegetables.",
    price: 1295,
    discontinued: true,
    categories: ["C1", "SC10", "SC11"],
    imageUrl: "mayo.jpg"
  },
  {
    id: "S2",
    title: "Plant-based vegan mayonnaise (325ml)",
    description:
      "Amazing alternative to classic mayonnaise made with rapeseed oil. Egg, Dairy, Gluten-free.",
    price: 295,
    categories: ["C1", "SC9", "SC10", "SC11"],
    imageUrl: "mayo.jpg"
    /*"https://unsplash.com/@leoroza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"*/
  },
  {
    id: "S3",
    title: "Organic roasted garlic tomato pasta sauce (350g)",
    description:
      "Are you looking for affordable but not taste-compromised daily tomato sauce? This 100% organic tomato sauce is perfect for your pasta, pizza, and so on.",
    price: 345,
    categories: ["C1", "SC10", "SC11"],
    imageUrl: "tomato.jpg"
    /*https://unsplash.com/photos/mVUs_adTiX8 */
  },
  {
    id: "S4",
    title: "Vegetarian ragu pasta sauce (350g)",
    description:
      "Can you not give up eating ragu pasta? This plant-based ragu sauce perfectly simulates the taste of classic Ragu pasta.",
    price: 400,
    categories: ["C1", "SC11"],
    imageUrl: "ragu.jpg"
    /* https://unsplash.com/photos/FzB_512zvP0 */
  },
  {
    id: "M1",
    title: "Gluten-Free, Vegan, Non-GMO falafel mix (16oz)",
    description:
      "Made with chickpeas, onions and various spices and herbs. This falafel mix is considerably easy-to-made. Add some water and you’re ready to start frying.  Suits with salads, perfect for snacks, and even main meal.",
    price: 1195,
    categories: ["C2", "SC8", "SC9", "SC10", "SC11"],
    imageUrl: "falafel.jpg"
    /* https://unsplash.com/photos/pQnsKWk5ljQ */
  },
  {
    id: "M2",
    title: "Beyond Meatballs by Beyond Meat - Italian Style",
    description:
      "Just ready to cook, these vegan meatballs made by the biggest meat alternative company Beyond Meat is going to serve you the convenient and nutritious dish to your meal.",
    price: 849,
    categories: ["C2", "SC6", "SC11"],
    imageUrl: "meatball.jpg"
    /* https://unsplash.com/photos/zPZ3n-2DwHo */
  },
  {
    id: "M3",
    title: "Beyond Burger by Beyond Meat (8oz)",
    description:
      "Flawless alternative for grilling or microwaving burger beef. Enjoy the meaty texture in the juicy and delicious allergen-friendly meat alternatives. Each package (8oz) contains 2 individual burgers.",
    price: 769,
    categories: ["C2", "SC6", "SC10"],
    imageUrl: "petty.jpg"
    /* https://unsplash.com/photos/GZCdjUQf6jY */
  },
  {
    id: "M4",
    title: "Baked tofu nugget (15oz)",
    description:
      "Pre-formed tofu nugget is ready to be fried. takes only 7 mins to cook, and this crispy nugget will perfectly satisfy your love for chicken nuggets.",
    price: 949,
    categories: ["C2", "SC6", "SC7", "SC10", "SC11"],
    imageUrl: "tofu.jpg"
    /* https://unsplash.com/photos/e7yjYr8GxN0 */
  },
  {
    id: "M5",
    title: "Italian garlic & fennel sausages (13oz)",
    description:
      "Made with eggplant, sweet peppers, onions and garlic, along with the seasoning containing fennel seed and garlic. These fantastic sausages taste just as juicy and tender as non-vegan sausages.",
    price: 729,
    categories: ["C2", "SC6", "SC7", "SC9", "SC10", "SC11"],
    imageUrl: "sausage.jpg"
    /* https://unsplash.com/photos/GdH4NeFzuOE */
  },
  {
    id: "M6",
    title: "Sweet and sour porkless bites (10.5oz)",
    description:
      "Cruelty-free bites that will provide you with the exact taste and texture of meat. These bites come with a sweet and sour sauce that helps you prepare rich meals pretty quickly with your own onions and pineapples.",
    price: 699,
    discontinued: true,
    categories: ["C2", "SC10"],
    imageUrl: "sausage.jpg"
  },
  {
    id: "M7",
    title: "Meatless pepperoni slices (40 slices)",
    description:
      "Have you felt guilty and pleasure while you eating your favourite pepperoni pizzas? You could still enjoy the taste while being pig-friendly. These pepperoni slices are ready to be on your homemade pizzas.",
    price: 479,
    discontinued: true,
    categories: ["C2", "SC10", "SC11"],
    imageUrl: "sausage.jpg"
  },
  {
    id: "M8",
    title: "Beyond chicken plant-based breaded tenders (8oz)",
    description:
      "The perfect crispy, convenient vegan tenders are made with GMO-free ingredients. Each package contains 6 tenders, and every serving contains 11 grams of protein.",
    price: 599,
    categories: ["C2", "SC10", "SC11"],
    imageUrl: "veganchicken.jpg"
    /* https://unsplash.com/photos/yeEoMHtkCuM */
  },
  {
    id: "D1",
    title: "Parmesan shredded cheese (4oz)",
    description:
      "Add flavours of shredded parmesan onto your pasta dishes and salads, and so on. Make your meals more savoury and rich with our handy parmesan cheese.",
    price: 599,
    categories: ["C3", "SC1", "SC10", "SC11"],
    imageUrl: "parmesan.jpg"
    /* https://unsplash.com/photos/Vcr5HYTT7IA */
  },
  {
    id: "D2",
    title: "Organic cultured vegan butter (8oz)",
    description:
      "Looking for butter that you can spread on your breakfast toast? Here is the perfect soft vegan butter.  Made with organic coconut oil, tasting better than just margarine. Feel the difference!",
    price: 799,
    categories: ["C3", "SC2", "SC10", "SC11"],
    imageUrl: "butter.jpg"
    /* https://unsplash.com/photos/LcfdOp72zdE */
  },
  {
    id: "D3",
    title: "Almond long life milk (1L)",
    description:
      "Gluten-free, foamable almond milk will make you enjoy the milk itself and bring the subtle taste of it to your coffee and beverages. This contains 120mg of calcium per 100ml.",
    price: 299,
    categories: ["C3", "SC4", "SC10", "SC11"],
    imageUrl: "soymilk.jpg"
    /* https://unsplash.com/photos/eU2s_fonJkg */
  },
  {
    id: "D4",
    title: "Liquid Egg Alternative (12oz)",
    description:
      "A better choice for you and the planet. This egg alternative is made with less water and land while giving similar proteins, not to mention no exploitation and abuse on chickens. Also, it has zero cholesterol and fat than eggs.",
    price: 599,
    discontinued: true,
    categories: ["C3", "SC3", "SC10"],
    imageUrl: "soymilk.jpg"
  },
  {
    id: "PF1",
    title: "Organic olive & lentil pies (8.28 oz)",
    description:
      "Easy and quick snack that you can simply bake for 5 minutes if thawed. This pie is packed with plenty of vegetables and spices, including olives and lentils, capers, herbs.",
    price: 849,
    discontinued: true,
    categories: ["C4", "SC5", "SC6", "SC7", "SC11"],
    imageUrl: "veggiePizza.jpg"
  },
  {
    id: "PF2",
    title: "Supreme veggie pizza (6oz)",
    description:
      "For those who love toppings, this vegan mozzarella pizza is full of vegan sausages, grilled peppers, mushrooms and onions.",
    price: 749,
    categories: ["C4", "SC5", "SC7", "SC9", "SC10", "SC11"],
    imageUrl: "veggiePizza.jpg"
    /* https://unsplash.com/photos/lHUdfk5WGXc */
  },
  {
    id: "PF3",
    title: "Chick & veggie pot pie (6oz)",
    description:
      "This quick and easy snack provides you with meaty flavour but meatless chicken in only 2 minutes. The veggie pie is made of organic vegetables with dairy-free vegan mozzarella and contains 10 grams of protein.",
    price: 529,
    discontinued: true,
    categories: ["C4", "SC5", "SC6", "SC7", "SC11"],
    imageUrl: "veggiePizza.jpg"
  },
  {
    id: "PF4",
    title: "Plant-based pad thai (10oz)",
    description:
      "Get your lunch ready with our Pad Thai. The 100% plant-based Pad Thai is easy-to-make, coming with sauces and spices and veggie flakes. Add your own veggies to make it even more flourishing.",
    price: 449,
    categories: ["C4", "SC6", "SC8", "SC10"],
    imageUrl: "padThai.jpg"
    /* https://unsplash.com/photos/_wBJ0cvKhIE */
  },
  {
    id: "PF5",
    title: "Vietnamese-style pho noodle soup bowl (8oz)",
    description:
      "Looking for pho noodles that you can cook so easily? Enjoy the authentic Vietnamese taste at home with this convenient meal kit.",
    price: 449,
    categories: ["C4", "SC6", "SC8", "SC9", "SC10"],
    imageUrl: "pho.jpg"
    /* https://unsplash.com/photos/Y11iTVE2DFA */
  }
];
