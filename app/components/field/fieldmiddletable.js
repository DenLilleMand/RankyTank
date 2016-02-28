import React from 'react';
import { KEEPER, ATTACKER } from '../../store/reducers/selectplayersreducer.js';

export default class FieldMiddleTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        let leftTeam = this.props.leftTeam;
        let rightTeam = this.props.rightTeam;
        console.log(leftTeam.get(KEEPER));
        console.log(leftTeam.get(ATTACKER));
        console.log(leftTeam.get(KEEPER).goals);
        console.log(leftTeam.get(ATTACKER).goals);
        console.log(rightTeam.get(KEEPER).goals);
        console.log(rightTeam.get(ATTACKER).goals);

        return(
            <div className="inlineBlock middleDiv teammiddleDiv" style={{textAlign: "center", marginTop:"120px"}}>
                <button className="roundButton" style={{height: "200px", width: "200px", backgroundColor: "orange", color:"white"}}>
                    <div style={{display:"inline-block"}}>
                        <p style={{display:"inline-block",fontSize:"50px"}} id="scoreTeam1">{leftTeam.get(KEEPER).goals + leftTeam.get(ATTACKER).goals}</p>

                        <p style={{display:"inline-block",fontSize:"50px"}}>-</p>

                        <p style={{display:"inline-block",fontSize:"50px"}} id="scoreTeam2">{rightTeam.get(KEEPER).goals + rightTeam.get(ATTACKER).goals}</p>
                    </div>
                    <p style={{ fontSize:"25px" }} id="timePlayed">0m0s</p>
                </button>
            </div>
        );
    }

}