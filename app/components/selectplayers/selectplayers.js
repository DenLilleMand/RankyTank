import React from 'react';
import { connect } from 'react-redux';
import { changePlayerFilter } from '../../actions/playeractions.js';
import { choosePlayer, randomPlay, fairPlay } from '../../actions/selectplayersactions.js';
import TeamTable from './teamtable.js';
import MiddleTable from './middletable.js';
import Modal from 'react-modal';
import { LEFT_TEAM, RIGHT_TEAM } from '../../store/reducers/selectplayersreducer.js';
import Immutable from 'immutable';
import { Link } from 'react-router';

export default class SelectPlayers extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="select-players-wrapper">
                <div className="col-xs-12  col-sm-12">
                    <div className="col-xs-12  col-sm-12 textAlignCenter marginBottom50 marginTop10">
                        <h1 className="h1FrontPage">Select player</h1>
                    </div>
                    <div className="inlineBlock floatLeft teamDiv">
                        <div className="textAlignCenter">
                            <h1 className="h1FrontPage">Team 1</h1>
                            <div className="marginBottomTop50">
                                <TeamTable  team={this.props.leftTeam} onClickPlayer={(player, tableId, position) => this.props.dispatch(choosePlayer(player, tableId, position))} filteredPlayers={this.props.filteredPlayers} onChangeFilter={(filter) => this.props.dispatch(changePlayerFilter(filter))} tableId={LEFT_TEAM}/>
                                <button className="btn btn-lg btnFrontPage">BACK</button>
                            </div>
                        </div>
                    </div>
                    <MiddleTable randomPlay={() => this.props.dispatch(randomPlay())}/>
                    <div className="inlineBlock floatRight teamDiv">
                        <div className="textAlignCenter">
                            <h1 className="h1FrontPage">Team 2</h1>
                            <div className="marginBottomTop50">
                                <TeamTable team={this.props.rightTeam} onClickPlayer={(player, tableId, position) => this.props.dispatch(choosePlayer(player, tableId, position))} filteredPlayers={this.props.filteredPlayers} onChangeFilter={(filter) => this.props.dispatch(changePlayerFilter(filter))} tableId={RIGHT_TEAM}/>
                                <Link to="/field" className="btn btn-lg btnFrontPage">PLAY</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function selectState(state) {
    return {
        filteredPlayers: state.players.data.filter(function(player) {
            return state.filterPlayers.filter ? player.name.toLowerCase().indexOf(state.filterPlayers.filter.toLowerCase() ) > -1 : false;
        }),
        rightTeam: state.selectPlayers[RIGHT_TEAM],
        leftTeam: state.selectPlayers[LEFT_TEAM]
    }
}

export default connect(selectState)(SelectPlayers);

