import { Songs } from './fmaSongs.js';

type PlayerStatus = 'playing' | 'paused' | 'stopped';

// Print total number of songs
//console.log(`Total songs in playlist: ${Songs.length}`);

// List all songs with details
/*Songs.forEach((song, index) => {
  console.log(`${song.title} av ${song.artist} (${song.duration})`);
  console.log(`File URL: ${song.file}`);
  console.log(`Cover URL: ${song.cover}`);
  console.log(`FMA link: ${song.fmaLink}`);
});*/

const playlist = document.getElementById('app-playlist');
if (!playlist) {
    alert('Playlist element not found');
}

// Loop through songs
Songs.forEach((song, index) => {
    // Create list item
    const playlistItem = document.createElement('div');
    playlistItem.className = 'song-container';

    playlistItem.innerHTML = `
        <img src="${song.cover}" alt="Cover for ${song.title}" class="song-cover">
        <div class="song-details">
            <div class="song-meta">
                <span class="song-title"><a href="${song.fmaLink}" target="_blank">${song.title}</a></span>
                <span class="song-info">av ${song.artist} (${song.duration})</span>
            </div>
            ${song.favorite ? '<i class="fas fa-star"></i>' : ''}
            <button class="play-btn" data-index="${index}">Spela</button>
        </div>
    `;

    // Add event listener to play button
    const playBtn = playlistItem.querySelector('.play-btn') as HTMLButtonElement;
    playBtn.addEventListener('click', () => playSong(index));

    playlist.appendChild(playlistItem);
});



// Actual music player variables and functions below

let currentSongIndex = 0; // Start with the first song
let audio = new Audio(); // HTML5 Audio object
let playerStatus: PlayerStatus = 'stopped'; // Initial status

function playSong(index: number) {
    if (index < 0 || index >= Songs.length) {
        alert('Invalid song index');
        return;
    }
    const song = Songs[index]!;
    audio.src = song.file;
    audio.play();
    playerStatus = 'playing';
    console.log(`Playing: ${song.title} by ${song.artist}`);
}

function pauseSong() {
    if (playerStatus === 'playing') {
        audio.pause();
        playerStatus = 'paused';
        console.log('Playback paused');
    }
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    playerStatus = 'stopped';
    console.log('Playback stopped');
}

//playSong(currentSongIndex);
//pauseSong();
//stopSong();