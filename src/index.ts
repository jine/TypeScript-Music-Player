// Get both Songs-array and Songs-itnerface from fmaSongs.js
import { songs, type Song } from './fmaSongs.js';

type PlayerStatus = 'playing' | 'paused' | 'stopped';

// Render the playlist
const playlist = document.getElementById('app-playlist');
if (!playlist) {
    alert('Playlist element not found');
} else {
    // Loop through songs
    songs.forEach((song, index) => {
        // Create list itemv
        const playlistItem = document.createElement('div');
        playlistItem.className = 'song-container';

        const img = document.createElement('img');
        img.src = song.cover;
        img.alt = `Cover for ${song.title}`;
        img.className = 'song-cover';
        playlistItem.appendChild(img);

        const songDetails = document.createElement('div');
        songDetails.className = 'song-details';

        const songMeta = document.createElement('div');
        songMeta.className = 'song-meta';

        const songTitle = document.createElement('span');
        songTitle.className = 'song-title';
        const link = document.createElement('a');
        link.href = song.fmaLink;
        link.target = '_blank';
        link.textContent = song.title;
        songTitle.appendChild(link);

        const songInfo = document.createElement('span');
        songInfo.className = 'song-info';
        songInfo.textContent = `av ${song.artist} (${song.duration})`;

        songMeta.appendChild(songTitle);
        songMeta.appendChild(songInfo);

        songDetails.appendChild(songMeta);

        if (song.favorite) {
            const star = document.createElement('i');
            star.className = 'fas fa-star';
            songDetails.appendChild(star);
        }

        const playBtnElement = document.createElement('button');
        playBtnElement.className = 'play-btn';
        playBtnElement.textContent = 'Spela';
        songDetails.appendChild(playBtnElement);

        playlistItem.appendChild(songDetails);

        // Add individual (per song) event listener to play button
        const playBtn = playlistItem.querySelector('.play-btn') as HTMLButtonElement;
        playBtn.addEventListener('click', () => playSong(index));

        playlist.appendChild(playlistItem);
    });
}



// Actual music player variables and functions below
let songIndex = 0; // Start with the first song
let audio = new Audio(); // HTML5 Audio object
let playerStatus: PlayerStatus = 'stopped'; // Initial status

// Render "Now playing" when something is playing
function nowPlaying(song: Song) {
    const app = document.getElementById('app') as HTMLElement;

    // Overwrite the contents with song info
    const nowPlayingDiv = document.createElement('div');
    nowPlayingDiv.className = 'now-playing';

    const coverImg = document.createElement('img');
    coverImg.src = song.cover;
    coverImg.alt = `Cover for ${song.title}`;
    coverImg.className = 'now-playing-cover';
    nowPlayingDiv.appendChild(coverImg);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'now-playing-info';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'now-playing-title';
    titleDiv.textContent = song.title;

    const artistDiv = document.createElement('div');
    artistDiv.className = 'now-playing-artist';
    artistDiv.textContent = `av ${song.artist}`;

    const durationDiv = document.createElement('div');
    durationDiv.className = 'now-playing-duration';
    durationDiv.textContent = `Längd: ${song.duration}`;

    infoDiv.appendChild(titleDiv);
    infoDiv.appendChild(artistDiv);
    infoDiv.appendChild(durationDiv);

    if (song.favorite) {
        const favoriteSpan = document.createElement('span');
        favoriteSpan.className = 'now-playing-favorite';
        const starIcon = document.createElement('i');
        starIcon.className = 'fas fa-star ';
        favoriteSpan.appendChild(starIcon);
        favoriteSpan.appendChild(document.createTextNode(' Denna låt är en favorit!'));
        infoDiv.appendChild(favoriteSpan);
    }

    nowPlayingDiv.appendChild(infoDiv);

    app.innerHTML = '';
    app.appendChild(nowPlayingDiv);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API#controlling_sound



// i is the index (from 0) in the Song-object
// Fetches the URL from Song[i] and plays it on *global* audio obj
function playSong(i: number) {

    // Validate index
    if (i < 0 || i >= songs.length) {
        i = 0;
    }
    
    // Update currently playing index
    songIndex = i;

    // The ! (non-null assertion) at Songs[i]! is a signal that you're 
    // telling TypeScript "I know better than you — this value cannot be undefined here", but 
    // you're currently relying on manual index validation instead of letting the type system help you.
    // const song = Songs[i]!;
    
    // I asked AI about this, i can use ! - but i can also force it to be a Song
    const song = songs[i] as Song;

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

function stopSong() {
    if (playerStatus === 'playing') {
        pauseSong(); // Pause
        audio.currentTime = 0; // ... but we stopping, so set time of playback to 0
        playerStatus = 'stopped'; // Update status

        console.log('Playback stopped');
    }
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

function togglePause() {
    if (playerStatus === 'playing') {
        pauseSong();
    } else {
        playSong(songIndex);
    }
}


// the modulo operator % ensures the index wraps around to the beginning when we reach the end.
// When you are on the last song (songIndex = 4) and press next, you go back to song 0 — perfect playlist looping behavior!
  
// Action          Formula                            What it does
// Next song       (current + 1) % length             Moves forward, wraps from last → first
// Previous song   (current - 1 + length) % length    Moves backward, wraps from first → last
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
}

function previousSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
}

// Update the played time as song plays
function timeUpdate() {
    
    // https://stackoverflow.com/questions/11203773/how-can-i-get-the-html5-audios-duration-time
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
    
    //audio.currentTime = Current pos as sec
    //audio.duration = Song length in sec
    
    // audio.duration returns a value when it's loaded
    if (audio.duration) {

        // calculate the percentage (0-100)
        const progress = (audio.currentTime / audio.duration) * 100; 
        progressBar.value = progress.toString();

        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        totalTimeDisplay.textContent = formatTime(audio.duration);
    }
}

// Seek to position when progress bar is changed
// Thanks Grok for the suggestion
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
// Type assertion to HTMLButtonElement so i can <disable> them if i want
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


// Function to format time in MM:SS format from an seconds-value
// https://www.programmingbasic.com/convert-seconds-to-minutes-and-seconds-javascript/
function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, '0')}`;
}