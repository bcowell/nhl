import React from 'react';

import './styles.css';

const Team = ({ team }) => {

    const { name, link, abbreviation, division, conference} = team;

    return (
        <div className="shadow">
            <span>Name: { name }</span>
            <span>link: { link }</span>
            <span>abbreviation: { abbreviation }</span>
            <span>division: { division }</span>
            <span>Avaiconferencelable: { conference }</span>
        </div>
    )
}

export default Team;