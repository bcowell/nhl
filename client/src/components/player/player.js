import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchPlayer from './actions';

class Player extends Component {

    componentDidMount() {
        this.props.fetchPlayer(`/${this.props.id}`);
    }

    render() {
        const { player } = this.props
        const playerView = (
            player && player.currentTeam ?
                <div key={player.id}>
                    <img src={`data:image/jpeg;base64,${player.image||''}`} alt='' />
                    <div>{player.fullName}</div>
                    <div>{player.height}</div>
                    <div><a href={`/teams/${player.currentTeam.id}`}>{player.currentTeam.name}</a></div>
                </div>
            : ''
        )

        return playerView
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