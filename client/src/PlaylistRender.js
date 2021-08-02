import React from 'react';

function PlaylistRender({playlist, playlist: {description, name, images}}) {
    console.log({images})
    return (
        <div>
            <p>{name}</p>
            <img src={images[0]}></img>
            <br/>
        </div>
    );
}

export default PlaylistRender;