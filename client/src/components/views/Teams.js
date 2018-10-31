import React from 'react';
import TeamsComponent from '../teams/teams';
import Search from '../search/search';

const Teams = () =>
    < >
        <h1 className="page-title">Teams</h1>
        <Search />
        <TeamsComponent />
    </>

export default Teams;