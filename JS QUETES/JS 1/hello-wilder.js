/* hello-wilder.js */

// Define some variables
const filmFav = 'Les lumières de la ville, ';
const realisateurFav = ' Charlie Chaplin, ';
const releaseYear = '1931';
const message = filmFav + 'réalisé par' + realisateurFav + 'est sorti en ' + releaseYear;
alert(message);

=======================

let ageArray = [24,28,32,17,36]

const john = ageArray[0];
const barbara = ageArray[1];
const patrick = ageArray[2];
const benjamin = ageArray[3];
const sylvie = ageArray[4];


const totalAge = (john + barbara + patrick + benjamin + sylvie);
console.log(totalAge);

console.log(totalAge/ageArray.length);

//

//total age
const totalAge2 = () => ageArray[0] + ageArray[1] + ageArray[2] + ageArray[3] + ageArray[4]

let sumOfAge = ageArray.reduce(totalAge2)
console.log(sumOfAge);

//moyenne d'age
const averageAge = () => (sumOfAge) / ageArray.length
console.log(averageAge(ageArray))
