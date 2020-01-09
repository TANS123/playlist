// Create a div to display your songs
// Create an array to store your song names
// Create a loop to display your song names
// Repeat these steps for song artist, song length, image, and link
let songNames = ['Sunflower', 'Ocean Eyes', 'Dollhouse', 'My boy', 'Mrs. Patato Head', 'Hostage'];

songNames.forEach(function(song) {
  let text = song + "<br>";
$('.songs').append(text);
});

let songArtist = ['Rex Orange County', 'Billie Eilish', 'Melanie Martinez', 'Billie Eilish', 'Melanie Martinez', 'Billie Eilish'];

songArtist.forEach(function(artist) {
 let item = artist + "<br>";
 $('.artists').append(item);
});

