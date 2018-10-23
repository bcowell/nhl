import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchTeams from './actions';
import Team from '../team/component';

class Teams extends Component {

    componentDidMount() {
        this.props.fetchTeams()
            .then(() => {
                this.props.teams.map(team => 
                    console.log(team.name)
                )
            })
    }

    render() {
        return (
            <div className="teams">
                {( this.props.teams || []).map(team =>
                    <Team key={team.id} team={team} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    teams: state.teams,
});

const mapDispatchToProps = dispatch => ({
    fetchTeams: () => dispatch( doFetchTeams() )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);