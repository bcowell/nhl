import React, { Component } from 'react';
import { connect } from 'react-redux';
import doFetchStandings from './actions';
import _ from 'lodash';
import Table from '../table/Table';

const columns = [
    {
        Header: "Rank",
        id: "rank",
        accessor: "divisionRank",
        width: 50
    },
    {
      Header: "Team",
      id: "team",
      accessor: t => t.team.name,
      maxWidth: 250
      
    },
    {
        Header: "Points",
        accessor: "points",
        width: 70
    },
    {
        Header: "Goals Scored",
        accessor: "goalsScored",
        width: 110
    },
    {
        Header: "Goals Against",
        accessor: "goalsAgainst",
        width: 110
    },
    {
        Header: "Goal Diff",
        id: "goal-diff",
        accessor: c => c.goalsScored - c.goalsAgainst,
        width: 90
    },
    {
        Header: "Games Played",
        accessor: "gamesPlayed",
        width: 110
    },
    {
        Header: "Win",
        accessor: "leagueRecord.wins",
        width: 70
    },
    {
        Header: "Loss",
        accessor: "leagueRecord.losses",
        width: 70
    },
    {
        Header: "OT",
        accessor: "leagueRecord.ot",
        width: 70
    },
]

class Standings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            conference: 'Eastern'
        }
    }

    componentDidMount() {
        //this.props.fetchStandings();
        this.props.fetchStandings('?season=20182019');
    }

    render() {
        const { standings } = this.props;
        const { conference } = this.state;

        let tables;
        if (standings.length > 0) {
            let conf = _.filter(standings, s => s.conference.name === conference);
            console.log(conf)
            tables = conf.map( c => {
                return <Table key={c.division.id} data={c.teamRecords} columns={columns} defaultPageSize={12} />
            })
        }

        return (
            <>
                {tables}
            </>
        )
    }
}

const mapStateToProps = state => ({
    standings: state.standings,
});

const mapDispatchToProps = dispatch => ({
    fetchStandings: (query) => dispatch( doFetchStandings(query) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Standings);