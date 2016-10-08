function Library(name, creator) {
  this.name = name;
  this.creator = creator;
}

Library.prototype.playlists = [];

Library.prototype.addPlaylist = function(name) {
  this.playlists.push({
    name: name,
    tracks: []
  });

  var that = this.playlists;

  this.playlists[that.length - 1].__proto__.overallRating = function() {
    var sum = 0;
    this.tracks.forEach((track) => {
      sum += track.rating;
    });
    return sum / this.tracks.length;
  };

  this.playlists[that.length - 1].__proto__.totalDuration = function() {
    var sum = 0;
    this.tracks.forEach((track) => {
      sum += track.length;
    });
    return sum;
  };
}

Library.prototype.addTrack = function(playlistName, title, rating, length) {
  for (var i = 0; i < this.playlists.length; i += 1) {
    if (this.playlists[i].name === playlistName) {
      this.playlists[i].tracks.push({title: title, rating: rating, length: length});
    }
  }
}

var libraryOne = new Library("Smooth Jazz", "Bob");
var libraryThree = new Library("Rock", "Simon");
var libraryTwo = new Library("Pop", "Yumi");

libraryOne.addPlaylist("Michael Franks");

libraryOne.addTrack("Michael Franks", "Don't be Blue", 4, 210);
libraryOne.addTrack("Michael Franks", "Down in Brazil", 5, 270);
libraryOne.addTrack("Michael Franks", "Innuendo", 5, 360);

console.log(libraryOne);
console.log(`First playlist of ${libraryOne.name}:`)
console.log(libraryOne.playlists[0]);
console.log(`Overall rating: ${libraryOne.playlists[0].overallRating()}`);
console.log(`Total length: ${libraryOne.playlists[0].totalDuration()}`);