// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Yogurt",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 1.50
	},
	{
		name: "Cheese",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 2.00
	},
	{
		name: "Milk",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 2.50
	},
	{
		name: "Organic Yogurt",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 2.50
	},
	{
		name: "Almond Granola",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: false,
		price: 2.75
	},
	{
		name: "Peanuts",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: false,
		price: 3.00
	},
	{
		name: "Organic Cheese",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 3.00
	},
	{
		name: "Cashews",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: false,
		price: 3.25
	},
	{
		name: "Organic Milk",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 3.50
	},
	{
		name: "Eggs",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 3.50
	},
	{
		name: "Broccoli",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 4.00
	},
	{
		name: "Tomatoes",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 4.50
	},
	{
		name: "Organic Eggs",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 4.50
	},
	{
		name: "Organic Broccoli",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 5.00
	},

	{
		name: "Organic Tomatoes",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 5.50
	},
	{
		name: "Salmon",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Organic Salmon",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 15.00
	}
];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		if((restriction == "Organic") && prods[i].organic == true){
			product_names.push(prods[i].name + " - $" + prods[i].price.toFixed(2));
		}
		else if ((restriction == "Lactose-Intolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name + " - $" + prods[i].price.toFixed(2));
		}
		else if ((restriction == "Nut Allergy") && (prods[i].nutAllergy == true)){
			product_names.push(prods[i].name + " - $" + prods[i].price.toFixed(2));
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name + " - $" + prods[i].price.toFixed(2));
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if(chosenProducts.indexOf(products[i].name + " - $" + products[i].price.toFixed(2)) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}