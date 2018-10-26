import React from 'react';
import PlayerView from '../player/player';

const Player = (props) =>
    < >
        <h1 className="page-title">Player</h1>
        <PlayerView id={props.match.params.player} />
    </>

export default Player;