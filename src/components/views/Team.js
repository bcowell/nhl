import React from 'react';
import TeamView from '../team/team'

const Team = (props) =>
    < >
        <h1 className="page-title">Team</h1>
        <TeamView id={props.match.params.id} />
    </>

export default Team;