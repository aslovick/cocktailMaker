var welcomeMessage = $('.nameMessage')
var cocktailGenerator = $('.newCocktail');
var submitBtn = $('.recipe-btn');

var cocktails = {
  brandy: 'Side Car: 2 ounces Cognac, 1/2 ounce Cointreau, 3/4 ounce fresh lemon juice, garnish with an orange twist',
  gin: 'Gin and Tonic: 2 ounces gin, 4 ounces cold tonic water, garnish with a lime wedge',
  rum: 'Mojito: 2 ounces white rum, 1 ounce fresh lime juice, 3/4 ounce simple syrup, 1 white sugar cube, 10 mint leaves, garnish with a mint bouquet',
  tequila: 'Margarita: 2 ounces tequila, 2 ounces Cointreau, 2 ounces fresh lime juice, garnish with a lime wedge',
  vodka: 'Cosmopolitan: 2 ounces citrus vodka, 3/4 ounce Cointreau, 1/2 ounce fresh lime juice, 1/2 ounce cranberry juice, 1/2 ounce simple syrup, garnish with a lime wheel',
  whisky: 'Whisky Highball: 2 ounces scotch, 6 ounces cold seltzer, garnish with a lemon wedge',
}

submitBtn.on('click', generateRecipe);

function generateRecipe(event) {
  event.preventDefault();
  var name = $('.name').val();
  var recipe = $('.cocktail').val().toLowerCase();

  welcomeMessage.text(`Welcome to #QuarantineCocktails, ${name}!`);
  // recipeGenerator.text(`You selected a ${recipe} recipe!`);
  cocktailGenerator.text(cocktails[recipe]);

}
