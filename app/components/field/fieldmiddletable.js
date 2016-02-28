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
        console.log(leftTeam);
        console.log(rightTeam);
        var leftTeamScore = 0;
        var rightTeamScore = 0;
        leftTeam.forEach(function(person) {
           leftTeamScore += person.goals;
        });
        rightTeam.forEach(function(person) {
            rightTeamScore += person.goals;
        });



        return(
            <div className="inlineBlock middleDiv teammiddleDiv" style={{textAlign: "center", marginTop:"120px"}}>
                <button className="roundButton" style={{height: "200px", width: "200px", backgroundColor: "orange", color:"white"}}>
                    <div style={{display:"inline-block"}}>
                        <p style={{display:"inline-block",fontSize:"50px"}} id="scoreTeam1">{leftTeamScore}</p>

                        <p style={{display:"inline-block",fontSize:"50px"}}>-</p>

                        <p style={{display:"inline-block",fontSize:"50px"}} id="scoreTeam2">{rightTeamScore}</p>
                    </div>
                    <p style={{ fontSize:"25px" }} id="timePlayed">0m0s</p>
                </button>
            </div>
        );
    }

}