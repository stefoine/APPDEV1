let favoriteFoods = ["Sushi", "Pasta", "Seafood"];

favoriteFoods.push("Pizza");
favoriteFoods.shift();

for (const food of favoriteFoods) {
    console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);