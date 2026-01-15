import { Songs, type Song } from './fmaSongs.js';

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
} else {
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
}



// Actual music player variables and functions below

let songIndex = 0; // Start with the first song
let audio = new Audio(); // HTML5 Audio object
let playerStatus: PlayerStatus = 'stopped'; // Initial status

function nowPlaying(song: Song) {
    const app = document.getElementById('app') as HTMLElement;

    // Overwrite the contents with song info
    app.innerHTML = `
        <div class="now-playing">
            <img src="${song.cover}" alt="Cover for ${song.title}" class="now-playing-cover">
            <div class="now-playing-info">
                <div class="now-playing-title">${song.title}</div>
                <div class="now-playing-artist">av ${song.artist}</div>
                <div class="now-playing-duration">Längd: ${song.duration}</div>
                ${song.favorite ? '<span class="now-playing-favorite"><i class="fas fa-star "></i> Denna låt är en favorit!' : ''}
            </div>
        </div>
    `;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API#controlling_sound


function togglePause() {
    if (playerStatus === 'playing') {
        pauseSong();
    } else {
        playSong(songIndex);
    }
}

// i is the index (from 0) in the Song-object
// Fetches the URL and adds it to global audio obj and .plays() it
function playSong(i: number) {

    // Validate index
    if (i < 0 || i >= Songs.length) {
        i = 0;
    }
    
    // Update currently playing index
    songIndex = i;

    // The ! (non-null assertion) at Songs[i]! is a signal that you're 
    // telling TypeScript "I know better than you — this value cannot be undefined here", but 
    // you're currently relying on manual index validation instead of letting the type system help you.
    // const song = Songs[i]!;
    
    // I asked AI about this, i can use ! - but i can also force it to be a Song
    const song = Songs[i] as Song; // only if you're 100% sure

    // We're using the global audio object and sets the MP3 URL, then play
    audio.src = song.file;
    audio.play();
    playerStatus = 'playing';
    
    // Visual change
    pauseBtn.classList.remove("paused");
    playBtn.classList.add("playing");

    // Set the now-playing to the song-object
    nowPlaying(song);
}

function pauseSong() {
    if (playerStatus === 'playing') {
        audio.pause();
        playerStatus = 'paused'; // Update status

        // Visual change
        pauseBtn.classList.add("paused");
        playBtn.classList.remove("playing");

        console.log('Playback paused');
    }
}

function stopSong() {
    if (playerStatus === 'playing') {
        pauseSong(); // Pause
        audio.currentTime = 0; // ... but we stopping, so set time of playback to 0
        playerStatus = 'stopped'; // Update status

        console.log('Playback stopped');
    }
}

function nextSong() {
    songIndex = (songIndex + 1) % Songs.length;
    playSong(songIndex);
}

function previousSong() {
    songIndex = (songIndex - 1 + Songs.length) % Songs.length;
    playSong(songIndex);
}


// Function to format time in MM:SS format from an seconds-value
// https://www.programmingbasic.com/convert-seconds-to-minutes-and-seconds-javascript/
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update the played time as song plays
function timeUpdate() {
    
    // https://stackoverflow.com/questions/11203773/how-can-i-get-the-html5-audios-duration-time
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
    
    //audio.currentTime = Current pos as sec
    //audio.duration = Song length in sec
    
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100; 
        progressBar.value = progress.toString();

        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        totalTimeDisplay.textContent = formatTime(audio.duration);
    }
}

// Seek to position when progress bar is changed
// Got a bit of help from AI on this one
function changePos(input: Event) {
    const target = input.target as HTMLInputElement; // The <input range element

    const seekTime = (parseFloat(target.value) / 100) * audio.duration;
    audio.currentTime = seekTime;
}


// Timeline elements
const progressBar = document.getElementById('progress-bar') as HTMLInputElement;
const currentTimeDisplay = document.querySelector('.current-time') as HTMLElement;
const totalTimeDisplay = document.querySelector('.total-time') as HTMLElement;

// Add event listeners for control buttons
// Type assertion to HTMLButtonElement so i can <disable> them!
const playBtn = document.getElementById('play') as HTMLButtonElement;
const pauseBtn = document.getElementById('pause') as HTMLButtonElement;
const forwardBtn = document.getElementById('forward') as HTMLButtonElement;
const backwardBtn = document.getElementById('backward') as HTMLButtonElement;

if(playBtn) playBtn.addEventListener('click', togglePause);
if(pauseBtn) pauseBtn.addEventListener('click', pauseSong);
if(forwardBtn) forwardBtn.addEventListener('click', nextSong);
if(backwardBtn) backwardBtn.addEventListener('click', previousSong);

// Add progressBar event listener
if(progressBar) progressBar.addEventListener('input', changePos);

// Wwhen loading finished AND aach second while playing (to be able to update the currentPos)
if(audio) audio.addEventListener('loadedmetadata', timeUpdate);
if(audio) audio.addEventListener('timeupdate', timeUpdate);

// Auto-play next song when current song ends
if(audio) audio.addEventListener('ended', nextSong);