import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchTeam from './actions';

class Team extends Component {

    componentDidMount() {
        this.props.fetchTeams(`/${this.props.id}?expand=team.roster`);
    }

    render() {
        const { team, roster } = this.props
        return (
            <div>
                <h2>{team.name}</h2>
                {
                    (roster || []).map(r =>
                        <div key={team.id}>
                            <a href={`/teams/${this.props.id}/${r.person.id}`}>{r.person.id}</a>
                            <div>{r.person.fullName}</div>
                            <div>{r.position.name}</div>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    team: state.team,
    roster: state.team.roster.roster,
});

const mapDispatchToProps = dispatch => ({
    fetchTeams: (query) => dispatch( doFetchTeam(query) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);