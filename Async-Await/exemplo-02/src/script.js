function findLyrics(artist, song) {
    return fetch(`https://private-anon-90b6bb8a50-lyricsovh.apiary-mock.com/v1/${artist}/${song}`);
}

const form = document.querySelector('#Lyrics-form');
form.addEventListener('submit', (el) => {
    el.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const lyrics_el = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div>';

    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        lyrics_el.innerHTML = data.lyrics;
    }
    catch (err) {
        console.log(err.message)
    }
}

