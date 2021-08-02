import React from 'react';
import PlaylistRender from './PlaylistRender';

function PlaylistContainer({playlistResp}) {
    console.log({playlistResp})
    const playlistList = playlistResp.data.items
    return (
        <div>
            <h3>Recommended Playlists</h3>
            {
            playlistList.map(playlist => <PlaylistRender key={playlist.id} playlist={playlist}/>)
            }
        </div>
    );
}

export default PlaylistContainer;