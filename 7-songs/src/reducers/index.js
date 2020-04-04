import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'This is me', duration: '4:05' },
        { title: 'Never enough', duration: '5:30' },
        { title: 'Hall of fame', duration: '4:15' },
        { title: 'A million dreams', duration: '5:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    // as of now only one action is being implemented in this project
    // but when extended, it'll be clean to have it this way
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});