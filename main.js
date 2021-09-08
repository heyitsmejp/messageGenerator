/* TO DO 
1. create 3 arrays each containing a piece of the message - meal, cooking style, protein/veg list
2. generate 3 random numbers
3. return display concatenated message using random numbers and the arrays
*/

const meal = ['breakfast','brunch','lunch','supper','dinner','dessert',];
const style = ['baked','stewed','braised','fried','deep fried','grilled','smoked','sauteed','pan fried','blackened','roasted'];
const food = ['kiwi','carrots','mahi mahi','almonds','cranberries','breadfruit','pork','ribs','twinkies','salmon','tilapia','eel','shrimp','potatoes','beef','quail','raspberries','spaghetti squash','andouille sausage','acorn squash','white chocolate','rabbit','goat','dates','grapes'];

function generateMessage(){
    let randMeal = Math.floor(Math.random(0,1)*meal.length);
    let randStyle = Math.floor(Math.random(0,1)*style.length);
    let randFood = Math.floor(Math.random(0,1)*food.length);
    let randomMessage = `For ${meal[randMeal]} you will eat ${style[randStyle]} ${food[randFood]}.`

    return randomMessage;
}


console.log(generateMessage());
