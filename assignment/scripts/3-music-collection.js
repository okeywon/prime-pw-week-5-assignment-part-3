console.log('***** Music Collection *****')

let collection = [];

// function to add items to collection array.
// takes in string items for title(album name), artist, yearPublished, name(song), duration(of song).
// returns the collection array.
function addToCollection(title, artist, yearPublished, name, duration) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: {name: name, duration: duration}
    }
    collection.push(album);
    return collection;
}

console.log(addToCollection("Hot Fuss", "The Killers", "2004", 'Mr. Brightside', '3:43'));
console.log(addToCollection("Franz Ferdinand", "Franz Ferdinand", "2004", 'Take Me Out', '3:57'));
console.log(addToCollection("The Joshua Tree", "U2", "1987", 'With or Without You', '4:56'));
console.log(addToCollection("Black Holes and Revelations", "Muse", "2006", 'Starlight', '4:00'));
console.log(addToCollection("The Bends", "Radiohead", "1995", 'My Iron Lung', '4:36'));
console.log(addToCollection("The Blue Album", "Weezer", "1994", "My Name is Jonas", "3:24"));

// function to show the collection array in a more pretty fashion. Parameter is a global array.
// Prints array length and each album in the collection array to the console.
function showCollection(array) {
    console.log(array.length);
    for (let items of array) {
        console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}: \n Song: ${items.tracks.name}, Duration: ${items.tracks.duration}.`);
    }
} 

(showCollection(collection));

// function to search for a particular artist in the collection array.
// takes in a string for the artist name.
// returns the results array which should print a string of the correct artist if found, or an empty array if not found.
function findByArtist(artist) {
    let results = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            results.push(collection[i].artist);
            return results;
        }
    } return [];
}

console.log('Does the artist U2 exist in the Collection array?', findByArtist('U2'));
console.log('Does the artist Pink exist in the Collection array?', findByArtist('Pink'));

// function to search the collection array by name(artist name - string), year(string), and trackName(song name - string)
// returns the answer array which will only include items located. Will not print items not located. Will print partial queries if they exist in collection!
// returns the entire collectin if the query is blank.
function search(name, year, trackName) {
    let answer = [];
    let searchQuery = {
        name: name,
        year: year,
        trackName: trackName
    }
    for (let i = 0; i < collection.length; i++) {
        if (searchQuery.name === collection[i].artist) {
            answer.push(`Artist: ${collection[i].artist}`);
        }
        if (searchQuery.year === collection[i].yearPublished) {
            answer.push(`year: ${collection[i].yearPublished}`);
        }
        if (searchQuery.trackName === collection[i].tracks.name) {
            answer.push(`track name: ${collection[i].tracks.name}`);
        }
        if (searchQuery.name === '') {
            answer.push(collection);
        }
        else if (searchQuery.name != collection[i].artist) {
            answer.push();
        }
        else if (searchQuery.year != collection[i].yearPublished) {
            answer.push();
        }
    }   return answer;
}

console.log(search('U2', '1987', 'With or Without You'));
console.log(search('White Stripes', '1995', 'Pinball Wizard'));
console.log(search('', '', ''));

// same function as search but with a for of loop -> I'm kinda impressed with myself here!
function search2(artist, year, song) {
    let answer = [];
    let newQuery = {
        artist: artist,
        year: year,
        song: song
    }
    for (let item of collection) {
        if (newQuery.artist === item.artist) {
            answer.push(`Artist: ${item.artist}`);
        }
        if (newQuery.year === item.yearPublished) {
            answer.push(`Year: ${item.yearPublished}`);
        }
        if (newQuery.song === item.tracks.name) {
            answer.push(`Song: ${item.tracks.name}`);
        }
    } return answer;
}

console.log(search2('U2', '1987', 'With or Without You'));
console.log(search('White Stripes', '1995', 'Pinball Wizard'));
console.log(search('', '', ''));