import React from 'react';
export default class Player extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.onClickPlayer = this.onClickPlayer.bind(this);
    }

    onClickPlayer(event) {
        this.props.onClickPlayer(this.props.player, this.props.position);
    }

    render() {
        return (
            <button onClick={this.onClickPlayer} className="playerBox">
                <h4> {this.props.player.name}</h4>
                <div className="imgInfo">
                    <img height="150" src={this.props.player.image ? this.props.player.image : "app/styles/icons/icon_player.png"} alt=""/>
                </div>
                <div className="stats">
                    <p className="fontSmall">WS: 5</p>
                    <p className="fontSmall">MWW: C-LO</p>
                    <p className="fontSmall">TG: 340</p>
                </div>
            </button>
        );

    }
}