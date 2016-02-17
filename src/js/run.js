var colors = require('colors');
var songs = require('./main');

console.log("Sorting songs by difficulty")

songs.sort(function(a,b) {
 if (a.difficulty > b.difficulty) {
    return 1;
  }
  if (a.difficulty < b.difficulty) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

for (var i = 0; i<songs.length; i++) {
  if (songs[i].difficulty < 3) {
    console.log((songs[i].title + " by " + songs[i].artist + "[" + songs[i].difficulty + "]").green)
  } else if ((songs[i].difficulty < 4) && (songs[i].difficulty >= 3)) {
     console.log((songs[i].title + " by " + songs[i].artist + "[" + songs[i].difficulty + "]").yellow)
  } else { console.log((songs[i].title + " by " + songs[i].artist + "[" + songs[i].difficulty + "]").red)
  }
}