
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


let prevBtn = document.getElementById("prevBtn");
let forwardBtn = document.getElementById("forwardBtn");

// Define your playlist as an array of objects
const playlist = [
  {
    title: "Payal",
    artist: "Honey singh",
    src: "./_Payal_320(PagalWorld.com.sb).mp3" // Path to your first song
  },
  {
    title: "Aaj ki Raat",
    artist: "Madhubanti Bagch",
    src: "./Aaj Ki Raat_320(PagalWorld.com.sb).mp3" // Path to your second song
  },
  {
    title: "Dil Tu Jaan Tu",
    artist: "Gurnazar",
    src: "./Dil Tu Jaan Tu_320(PagalWorld.com.sb).mp3" // Path to your second song
  },
  {
    title: "Millionar",
    artist: "Honey sigh",
    src: "./Millionaire_320(PagalWorld.com.sb).mp3" // Path to your second song
  },
  {
    title: "O Sajni Re",
    artist: "Arijit Singh",
    src: "./O Sajni Re_320(PagalWorld.com.sb).mp3" // Path to your second song
  },
  // ... add more songs as needed ...
];

let currentSongIndex = 0; // Index of the currently playing song

// Update song information based on current index
function updateSongInfo() {
  const currentSong = playlist[currentSongIndex];
  song.src = currentSong.src;
  document.querySelector("h1").textContent = currentSong.title;
  document.querySelector("p").textContent = currentSong.artist;
}

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains('fa-pause')) {
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
  } else {
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
  }
}

function nextSong() {
  currentSongIndex++;

  // If the index exceeds the playlist length, wrap back to 0
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0;
  }

  updateSongInfo();
  playPause(); // Start playing the new song
}

function prevSong() {
  currentSongIndex--;

  // If the index is less than 0, wrap back to the last song
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1;
  }

  updateSongInfo();
  playPause(); // Start playing the previous song
}

// Event listeners for buttons
forwardBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

progress.onchange = function() {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add('fa-pause');
  ctrlIcon.classList.remove('fa-play');
};
