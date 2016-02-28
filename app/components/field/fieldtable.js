import React from 'react';
import Modal from 'react-modal';
import { ATTACKER, KEEPER } from '../../store/reducers/selectplayersreducer.js';
import Player from '../selectplayers/player.js';

export default class TeamTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.goal = this.goal.bind(this);
    }

    goal(player, position) {
        this.props.goal(player, this.props.tableId, position);
    }

    render() {
        let team = this.props.team;
        let attacker = team.get(ATTACKER);
        let keeper = team.get(KEEPER);
        let attackerContent = null;
        let keeperContent = null;

        if(keeper) {
            keeperContent = (<Player player={keeper} position={KEEPER} onClickPlayer={this.goal}/>);
        } else {
            keeperContent = (<button onClick={(event, keeper) => this.goal(event, KEEPER) }
                                     className="select-players-text-align roundButton marginleft15">
                <img height="50%" src="./app/styles/icons/icon_player_add.png" alt=""/>
            </button>);
        }

        if(attacker) {
            attackerContent = <Player player={attacker} position={ATTACKER} onClickPlayer={this.goal}/>;
        } else {
            attackerContent = (<button onClick={(event, keeper) => this.openModal(event, ATTACKER)}
                                       className="roundButton">
                <img height="50%" src="./app/styles/icons/icon_player_add.png" alt=""/>
            </button>);
        }

        return (
            <div>
                <table className="inlineBlock margiBottom30" style={{width:"100%", textAlign:"center"}}>
                    <thead>
                    <tr>
                        <th>
                            <p className="colorWhite textAlignCenter">
                                Keeper
                            </p>
                        </th>
                        <th>
                            <div className="inlineBlock marginLeftRight10">
                            </div>
                        </th>
                        <th>
                            <p className="colorWhite textAlignCenter">
                                Attacker
                            </p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="player-td">
                            {keeperContent}
                        </td>
                        <td >
                            <div className="inlineBlock marginLeftRight10"></div>
                        </td>
                        <td className="player-td">
                            {attackerContent}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}