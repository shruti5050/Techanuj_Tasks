const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const muteBtn = document.getElementById('mute');
const volumeControl = document.getElementById('volume-control');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const albumArt = document.getElementById('album-art');
const playlist = document.querySelector('.playlist ul');

let isPlaying = false;
let isShuffled = false;
let isRepeated = false;
let songIndex = 0;


const songs = [
    { title: 'Ram Siya Ram', artist: 'Sachet Tandon, Parampara Tandon', src: 'Ram-Siya-Ram-Lyrical-Adipurush-Prabhas-Sachet-Parampara-Mano.m4a', albumArt: 'path/to/your/album1.png' },
    { title: 'Karpurgauram_Karuravataram', artist: 'Abhilipsa Panda', src: 'Karpurgauram_Karuravataram_कर_पूरगौरं_करुणावतारं_harharmahad.m4a', albumArt: 'path/to/your/album2.png' },
    { title: 'MAHABHARAT_RAP', artist: 'abbyviral', src: 'संपूर_ण_MAHABHARAT_RAP_FULL_VERSION_AbbyViral_Kavi_Amit_Shar.m4a', albumArt: 'path/to/your/album3.png' }
];

function loadSong(index) {
    const song = songs[index];
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    audio.src = song.src;
    albumArt.src = song.albumArt;
}

function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.innerText = '⏸️';
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.innerText = '▶️';
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value / 100;
});

muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.innerText = audio.muted ? '🔊' : '🔇';
});

shuffleBtn.addEventListener('click', () => {
    isShuffled = !isShuffled;
    shuffleBtn.style.color = isShuffled ? '#ffb347' : '#fff';
});

repeatBtn.addEventListener('click', () => {
    isRepeated = !isRepeated;
    repeatBtn.style.color = isRepeated ? '#ffb347' : '#fff';
    audio.loop = isRepeated;
});

function nextSong() {
    if (isShuffled) {
        songIndex = Math.floor(Math.random() * songs.length);
    } else {
        songIndex = (songIndex + 1) % songs.length;
    }
    loadSong(songIndex);
    playSong();
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    playSong();
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});
playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const items = playlist.querySelectorAll('li');
        items.forEach(item => item.classList.remove('selected'));
        e.target.classList.add('selected');
        
        const index = e.target.dataset.index;
        songIndex = parseInt(index);
        loadSong(songIndex);
        playSong();
    }
});
audio.addEventListener('error', () => {
    alert('Error loading the audio file. Please try again.');
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
