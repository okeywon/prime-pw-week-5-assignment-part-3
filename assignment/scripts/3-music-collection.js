console.log('***** Music Collection *****')

let collection = {
    title: '',
    artist: '',
    year: 0
}

function addToCollection( title, artist, year ) {
    return collection += [title, artist, year, "\n"];
}

(addToCollection("Hot Fuss", "The Killers", 2004));
(addToCollection("Franz Ferdinand", "Franz Ferdinand", 2004));
(addToCollection("The Joshua Tree", "U2", 1987));
(addToCollection("Black Holes and Revelations", "Muse", 2006));
(addToCollection("The Bends", "Radiohead", 1995));
(addToCollection("The Blue Album", "Weezer", 1994));

console.log(collection);

function showCollection(array) {
    let title = array.title;
    let artist = array.artist;
    let year = array.year;
    let i = 0;
    for (items in array) {
        console.log(`${title} by ${artist}, published in ${year}`);
        i++;
    }   return array;
} 

console.log(showCollection(collection));