import React from 'react';
import PlaylistRender from './PlaylistRender';

function PlaylistContainer({playlistResp}) {
    console.log({playlistResp})
    const playlistList = playlistResp.data.items
    return (
        <div>
            {
            playlistList.map(playlist => <PlaylistRender key={playlist.id} playlist={playlist}/>)
            }
        </div>
    );
}

export default PlaylistContainer;