import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchTeams from './actions';

class Team extends Component {

    componentDidMount() {
        this.props.fetchTeams(`/${this.props.id}?expand=team.roster`);
    }

    render() {
        const { roster } = this.props
        return (
            <div>
                { 
                    (roster || []).map(r =>
                        <div key={r.person.id}>
                            <div>{r.person.id}</div>
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
    roster: state.roster,
});

const mapDispatchToProps = dispatch => ({
    fetchTeams: (query) => dispatch( doFetchTeams(query) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);