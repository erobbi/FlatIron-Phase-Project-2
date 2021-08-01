import React from 'react';
import PlaylistRender from './PlaylistRender';

function PlaylistContainer({playlistResp}) {
    console.log({playlistResp})
    const playlistList = []
    if(playlistResp!=null){
        playlistList = playlistResp.data.items
        console.log(playlistList)
    }
    return (
        <div>
            {
            playlistList.map(playlist => <PlaylistRender key={playlist.id} playlist={playlist}/>)
            }
        </div>
    );
}

export default PlaylistContainer;