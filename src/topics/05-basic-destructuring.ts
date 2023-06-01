interface AudioPlayer {
	audoVolume: number
	songDuration: number
	song: string
	details: Details
}

interface Details {
	author: string
	year: number
}

const audioPlayer: AudioPlayer = {
	audoVolume: 90,
	songDuration: 36,
	song: "Mess",
	details: {
		author: 'Ed Sheeran',
		year: 2015
	}
}

const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details

console.log('Song: ', anotherSong );
console.log('Duration: ', duration );
console.log('Author: ', author );

const [ , , trunks = 'No hay personaje' ]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', trunks );

export {}