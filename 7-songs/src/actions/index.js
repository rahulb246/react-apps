// Action creator
export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

// mamed exports vs default exports :
//
// for 'xport default functionName' :
// need to import using 'import functionName from '../path';
// when named exports are used as selectSong is exported : 
// need to import using 'import { selectSong } from '../path';