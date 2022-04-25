console.log('***** Music Collection *****')

let collection = {
    album: '',
    artist: '',
    year: 0
}

function addToCollection( album, artist, year ) {
    return collection += [album, artist, year];
}

console.log(addToCollection("Hot Fuss", "The Killers", 2004));
console.log(addToCollection("Franz Ferdinand", "Franz Ferdinand", 2004));
console.log(addToCollection("The Joshua Tree", "U2", 1987));
console.log(addToCollection("Black Holes and Revelations", "Muse", 2006));
