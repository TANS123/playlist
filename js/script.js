// Create a div to display your songs
// Create an array to store your song names
// Create a loop to display your song names
// Repeat these steps for song artist, song length, image, and link
let sunflower = {
  song_name: "Sunfower",
  artist: "Rex Orange County",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFG1cz8It443TsYDmCd9TznJHiWX0Y9R73E09Bs4hyZNpi-Od&s',
  length: 419,
  link: 'https://www.youtube.com/watch?v=Z9e7K6Hx_rY'
}
sunflower.song_name;
let oceanEyes = {
  song_name: "Ocean Eyes",
  artist: "Billie Eilish",
  image: 'https://i.ytimg.com/vi/iSshSXte2XI/maxresdefault.jpg',
  length: 321,
  link: 'https://www.youtube.com/watch?v=viimfQi_pUw' 
}
let dollhouse = {
  song_name: "Dollhouse",
  artist: "Melanie Martinez",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMTiBKVN-sHyTyt8OOHy7QbcUeiy_2DV3P5Tvr2370TkXTHWj&s',
  length: 426,
  link: 'https://www.youtube.com/watch?v=HcVv9R1ZR84' 
}
let myBoy = {
  song_name: "My Boy",
  artist: "Billie Eilish",
  image: 'https://steamuserimages-a.akamaihd.net/ugc/786359167680197415/4C172DA635BDE87A616E71A2214BAF77A1AE5D86/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  length: 251,
  link: 'https://www.youtube.com/watch?v=dVUmSgzgOqs'
}
let mrsPatatoHead = {
  song_name: "Mrs. Patato Head",
  artist: "Melanie Martinez",
  image: 'https://cdn.baeblemusic.com/images/bblog/12-5-2016/melmartinezblog-580.jpg',
  length: 533,
  link: 'https://www.youtube.com/watch?v=wkri1NUq9ro'
}
let hostage = {
  song_name: "Hostage",
  artist: "Billie Eillish",
  image: 'https://pbs.twimg.com/media/DpJiVmnXgAESE99.jpg',
  length: 355,
  link: 'https://www.youtube.com/watch?v=skHbZBsS7hM'
}
let playlist = [sunflower, oceanEyes, dollhouse, myBoy, mrsPatatoHead, hostage];

playlist.forEach(function(song) {
  $('.songs').append( song.song_name + "<br>");
  $('.artists').append( song.artist + "<br>");
  $('.lengths').append(song.length + "<br>");
   $('.images').append('<img src="' + song.image + '">' + "<br>");
   $('.links').append(`<a href= '${song.link}'> link </a><br>`);
});


// let songNames = ['Sunflower', 'Ocean Eyes', 'Dollhouse', 'My boy', 'Mrs. Patato Head', 'Hostage'];

// songNames.forEach(function(song) {
//   let text = song + "<br>";
// $('.songs').append(text);
// });

// let songArtist = ['Rex Orange County', 'Billie Eilish', 'Melanie Martinez', 'Billie Eilish', 'Melanie Martinez', 'Billie Eilish'];

// songArtist.forEach(function(artist) {
//  let item = artist + "<br>";
//  $('.artists').append(item);
// });

// let songLength = ['419', '321', '426', '251', '533', '355'];

// songLength.forEach(function(length) {
//   let thing = length + "<br>";
//   $('.lengths').append(thing);
// });

// let songImage = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFG1cz8It443TsYDmCd9TznJHiWX0Y9R73E09Bs4hyZNpi-Od&s', 'https://i.ytimg.com/vi/iSshSXte2XI/maxresdefault.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMTiBKVN-sHyTyt8OOHy7QbcUeiy_2DV3P5Tvr2370TkXTHWj&s', 'https://steamuserimages-a.akamaihd.net/ugc/786359167680197415/4C172DA635BDE87A616E71A2214BAF77A1AE5D86/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true','https://cdn.baeblemusic.com/images/bblog/12-5-2016/melmartinezblog-580.jpg','https://pbs.twimg.com/media/DpJiVmnXgAESE99.jpg']

// songImage.forEach(function(image) {
//   let one = image + "<br>";
//   $('.images').append('<img src="' + image + '">');
// });

// let songLink =['https://www.youtube.com/watch?v=Z9e7K6Hx_rY', 'https://www.youtube.com/watch?v=viimfQi_pUw', 'https://www.youtube.com/watch?v=HcVv9R1ZR84', 'https://www.youtube.com/watch?v=dVUmSgzgOqs', 'https://www.youtube.com/watch?v=wkri1NUq9ro', 'https://www.youtube.com/watch?v=skHbZBsS7hM']

// songLink.forEach(function(link) {
//   let stuff = link + "<br>";
//   $('.links').append(stuff);
// });