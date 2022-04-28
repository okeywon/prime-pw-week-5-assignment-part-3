console.log('***** Music Collection *****')

let collection = [];

// Update "addToCollection" to also take in parameter tracks.
function addToCollection(title, artist, yearPublished, name, duration) {
    let album = { // creates an object album with parameters of title artist and yearPublished
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    let tracks = { // creates an object tracks with parameters name and duration
        name: name,
        duration: duration
    }
    collection.push(album); // pushes album items into collection array
    collection.push(tracks); // pushes tracks items into collection array
    return collection;
}

// these conosle logs add the parameters requeseted in addToCollection function to the collection array
console.log(addToCollection("Hot Fuss", "The Killers", "2004", 'Mr. Brightside', '3:43'));
console.log(addToCollection("Franz Ferdinand", "Franz Ferdinand", "2004", 'Take Me Out', '3:57'));
console.log(addToCollection("The Joshua Tree", "U2", "1987", 'With or Without You', '4:56'));
console.log(addToCollection("Black Holes and Revelations", "Muse", "2006", 'Starlight', '4:00'));
console.log(addToCollection("The Bends", "Radiohead", "1995", 'My Iron Lung', '4:36'));
console.log(addToCollection("The Blue Album", "Weezer", "1994", 'My Name is Jonas', '3:24'));

console.log(collection); // logs the completed collection

// function to show the collection array in a more pretty fashion than just console logging it.
function showCollection(array) {
    console.log(array.length);
    for (items of array) {
        console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}.`);
    }
} 

(showCollection(collection)); // shows collection array as dictated on line 35

// function to search a particular artist
function findByArtist(artist) {
    let results = []; // empty array to push artist into
    for (let i = 0; i < collection.length; i++) { // loops through the entire collection
        if (artist === collection[i].artist) { // if the artist queried is equal to the collection.artist index
            results.push(collection[i].artist); // the queried artist will be pushed from the collection.artist to the results array
            return results; // returns results array
        }
    } return []; // otherwise it will return an empty array
}

console.log(findByArtist('U2')); // shows that this will console log a correct item
console.log(findByArtist('Pink')); // shows that this will log a blank array if incorrect

// Update search to include "trackName"
function search(name, year, song) { // search function that takes three parameters name, year, song.
    let answer = []; // empty array to push answers into only if correct.
    // variable to push answers into and console log
    for (let i = 0; i < collection.length; i++) { // loops through the entire collection
        if (name === collection[i].artist) { // if name queried is the same as collection.artist index
            answer.push(collection[i].artist); // pushes the correct artist into the answer array to be logged at the return
        } // another if statement to ensure the loop continues as above
        if (year === collection[i].yearPublished) { // if year queried is the same as a year in Collection array
            answer.push(collection[i].yearPublished); // yearPublished from collection array is pushed into answer to be logged at return
        } // another if statement to ensure loop continues
        if (song === collection[i].name) { // if song queried is the same as the collection.name index
            answer.push(collection[i].name); // correct song name is pushed into answer array
        } // multiple if statements works better in this case than several else if's as that stops the loop and I don't want to do that.
         // double else if in this case since I only want these to run if all the above if statements DON'T run.
        else if (name != collection[i].artist) { // if the above if statements are false and name queried doesn't equal a collection.artist index
            answer.push(); // pushes nothing into answer array
        }
        else if (year != collection[i].yearPublished) { // if above statments are false and year queried doesn't equal collection.year index
            answer.push(); // pushes nothing into answer array
        }
    }   return answer; // returns answer outside my loop to ensure loop runs through all parameters before ending.
}

console.log(search('U2', '1987', 'With or Without You')); // console logs only correct items if located in Collection as expected.
// will not console log incorrect queries. Only returns queried items that exist in collection array. 

// add "tracks" to album. Each track should have a "name" & "duration".
// --------------------After updating this in "addToCollection" the below function is no longer need ---------------------
// function addTracksToCollection(name, duration) {
//     let tracks = {
//         name: name,
//         duration: duration,
//     }
//     collection.push(tracks);
//     return collection;
// }

// Commented out lines 95-100 since they are no longer needed after adding the function "addTracksToCollection", and updating "addToCollection".

// console.log(addTracksToCollection('Mr. Brightside', '3:43'));
// console.log(addTracksToCollection('Take Me Out', '3:57'));
// console.log(addTracksToCollection('With or Without You', '4:56'));
// console.log(addTracksToCollection('Starlight', '4:00'));
// console.log(addTracksToCollection('My Iron Lung', '4:36'));
// console.log(addTracksToCollection('My Name is Jonas', '3:24'));

// Update "showCollection" to display the list of tracks for each album with its "name" & "duration".