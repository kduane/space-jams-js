class Album {
  //your code here
  constructor(id, name, artist) {
    this.id = id;
    this.title = name;
    this.artists = artist;
    this.tracks = [];
  }

  duration_min() {
    var totalDuration = 0;
    this.tracks.forEach(track => {
      totalDuration += (Number(track.duration_ms) / 60000);
    });
    return totalDuration;
  }

  summary() {
    var summary = `Name: ${this.title} \n
    Artist(s): ${this.artists} \n
    Duration (min): ${this.duration_min()} \n
    Tracks: \n`;
    this.tracks.forEach(track => {
      summary += ` - ${track.title} \n`;
    });
    return summary;
  }
}

module.exports = Album;
