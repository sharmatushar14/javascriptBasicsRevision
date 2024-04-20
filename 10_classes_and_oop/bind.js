const pokemon =  {
    firstname: 'Pikka',
    lastname: 'Chu',
    getPokemom: function(){
        const fullname = this.firstname + ' ' + this.lastname;
        return fullname
    }
}

const pokemonName = function(snacks, hobby){
    console.log(this.getPokemom() + ' I choose you');
    console.log(this.getPokemom() + ' loves ' +  snacks  + ' and ' + hobby);
}

const logPokemon  = pokemonName.bind(pokemon);
//For a given function(pokemonName), creates a bound function that has the same body as the original function(pokemon). The this object of the bound function is associated with the specified object, and has the specified initial parameters.
logPokemon('Music', 'Algorithms')

//OUTPUT:
// Pikka Chu I choose you
// Pikka Chu loves Music and Algorithms


//------Call && Apply---------//
const pokemon2 =  {
    firstname: 'Pikka',
    lastname: 'Chu',
    getPokeName: function(){
        const fullname = this.firstname + ' ' + this.lastname;
        return fullname
    }
}

const pokemonName2 = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName2.call(pokemon2, 'Guitar', 'Algos')
pokemonName2.apply(pokemon2, ['Guitar', 'Algos'])
//all() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.
//The main differences between bind() and call() is that the call() method:
//1. Executes the function it was called upon right away.
//2. The call() method does not make a copy of the function it is being called on.