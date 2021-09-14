let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
console.log(filmes[1] == 'clube da luta' ? `Tudo certo!` : `Algo está errado.`);

console.log(filmes)

for(i = 0; i < filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase()
}

console.log(filmes)

let cartoons = ["toy story", "procurando nemo", "kung-fu panda", "wally", "fortnite"]

console.log(cartoons)

cartoons.pop()

console.log(cartoons)

for(i = 0; i < cartoons.length; i++) {
  cartoons[i] = cartoons[i].toUpperCase()

let filmesEcartoons = []
filmesEcartoons = [].concat(filmes,cartoons);
console.log(filmesEcartoons);
}

module.exports = filmes;


