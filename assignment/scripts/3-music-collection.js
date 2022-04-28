console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return collection;
}

console.log(addToCollection("Hot Fuss", "The Killers", "2004"));
console.log(addToCollection("Franz Ferdinand", "Franz Ferdinand", "2004"));
console.log(addToCollection("The Joshua Tree", "U2", "1987"));
console.log(addToCollection("Black Holes and Revelations", "Muse", "2006"));
console.log(addToCollection("The Bends", "Radiohead", "1995"));
console.log(addToCollection("The Blue Album", "Weezer", "1994"));

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for (items of array) {
        console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}`);
    }
} 

(showCollection(collection));

function findByArtist(artist) {
    let results = [];
    for (items of collection) {
        
    }
}