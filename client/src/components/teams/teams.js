import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchTeams from './actions';
import Team from '../team/team';
import _ from 'lodash';

class Teams extends Component {

    componentDidMount() {
        this.props.fetchTeams();
    }

    render() {
        let teams = _.filter(this.props.teams, t => _.includes(t.name.toLowerCase(), this.props.searchQuery.toLowerCase()))

        return (
            <div className="teams">
                { 
                    (teams || []).map(team =>
                        <Team key={team.id} team={team} />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    teams: state.teams,
    searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => ({
    fetchTeams: () => dispatch( doFetchTeams() )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);