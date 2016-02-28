import React from 'react';
import { Link } from 'react-router';

export default class Front extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="container background">
                        <div className="col-md-12 front-main-icon"> </div>
                        <div className="col-md-12">
                        <Link to={"/selectplayers"} id="select-players-button" className="btn front-button">
                            SELECT PLAYERS
                            <span className="front-span glyphicon-align-right" ><img className="front-icon"  src="./app/styles/icons/icon_players.png"/></span>
                        </Link>
                        </div>
                        <div className="col-md-12">
                        <Link to={""} id="scan-players-button" className="btn front-button">
                            SCAN PLAYERS
                            <span className="front-span glyphicon-align-right"><img className="front-icon" src="./app/styles/icons/noglebrik.png"/></span>
                        </Link>
                        </div>
            </div>
        );
    }

}