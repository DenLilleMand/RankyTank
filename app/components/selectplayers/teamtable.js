import React from 'react';
import Modal from 'react-modal';
import { ATTACKER, KEEPER } from '../../store/reducers/selectplayersreducer.js';
import Player from './player.js';

export default class TeamTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            modalIsOpen: false,
            position: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onClickPlayer = this.onClickPlayer.bind(this);
    }

    onChangeFilter(event) {
        event.preventDefault();
        this.props.onChangeFilter(event.target.value);
    }

    onClickPlayer(player) {
        this.props.onClickPlayer(player, this.props.tableId, this.state.position);
        this.closeModal();
    }

    openModal(event, position) {
        this.setState({
            modalIsOpen: true,
            position: position
        });
    }

    closeModal(event) {
        this.props.onChangeFilter("");
        this.setState({
            modalIsOpen: false,
            position: null
        });
    }

    render() {
        let filteredPlayers = null;
        if(this.props.filteredPlayers && this.props.filteredPlayers.length > 0) {
            filteredPlayers = this.props.filteredPlayers.map(function (player, index, array) {
                if (index < 5) {
                    return (
                        <Player onClickPlayer={this.onClickPlayer} player={player}/>
                    );
                }
            }.bind(this))
        } else {
            filteredPlayers = <h1 style={{textAlign:"center", color:"gray"}}> Select player in text field </h1>
        }
        let team = this.props.team;
        let attacker = team.get(ATTACKER);
        let keeper = team.get(KEEPER);
        let attackerContent = null;
        let keeperContent = null;

        if(keeper) {
            keeperContent = (<Player player={keeper} onClickPlayer={(event, keeper) => this.openModal(event, KEEPER)}/>);
        } else {
            keeperContent = (<button onClick={(event, keeper) => this.openModal(event, KEEPER) }
                    className="select-players-text-align roundButton marginleft15">
                <img height="50%" src="./app/styles/icons/icon_player_add.png" alt=""/>
            </button>);
        }

        if(attacker) {
            attackerContent = <Player player={attacker} onClickPlayer={(event, keeper) => this.openModal(event, ATTACKER)}/>;
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
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    isOpen={this.state.modalIsOpen}
                    closeTimeoutMS={150}
                    onRequestClose={this.closeModal}
                    filteredPlayers={this.props.filteredPlayers}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="top">
                                <h1 style={{color:"white"}}>FIND PLAYERS</h1>
                                <input className="select-player-form-input inputSearchField"
                                       onChange={this.onChangeFilter} placeholder="Find player by name"/>
                            </div>
                            <div className="bottom">
                                {filteredPlayers}
                            </div>
                            <div style={{position:"absolute",bottom: "5px",right:"5px"}}>
                                <button className="btn" style={{height:"100px",width:"300px",backgroundColor:"#F7951F",color:"white"}}>NEW PLAYER</button>
                            </div>
                        </div>
                        {/*<div className="modal-footer">
                            <button onClick={this.closeModal}>close</button>
                        </div>*/}
                    </div>
                </Modal>
            </div>
        );
    }
}