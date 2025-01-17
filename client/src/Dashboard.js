import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import Player from './Player'
import PlaylistFetch from './PlaylistFetch'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)

    return (
        <div>
            <div>
                <h1>
                    This is where we will put our wireframe design
                </h1>
                <PlaylistFetch accessToken={accessToken}/>
            </div>
            <div>
                {/* <Player accessToken={accessToken} /> */}
            </div>
        </div>
    )
}