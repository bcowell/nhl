import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchPlayer from './actions';

class Player extends Component {

    componentDidMount() {
        this.props.fetchPlayer(`/${this.props.id}`);
    }

    render() {
        const { player } = this.props
        return (
            <div>
                { 
                    (player || []).map(p =>
                        <div key={p.id}>
                            <div>{p.fullName}</div>
                            <div>{p.height}</div>
                            <div><a href={`/teams/${p.currentTeam.id}`}>{p.currentTeam.name}</a></div>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    player: state.player,
});

const mapDispatchToProps = dispatch => ({
    fetchPlayer: (query) => dispatch( doFetchPlayer(query) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);