import React from 'react';
import FieldTable from './fieldtable.js';
import FieldMiddleTable from './fieldmiddletable.js';
import { RIGHT_TEAM, LEFT_TEAM } from '../../store/reducers/selectplayersreducer.js';
import { goal } from '../../actions/fieldactions.js';
import { connect } from 'react-redux';
import $ from 'jquery';


class Field extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.goal = this.goal.bind(this);
    }

    goal(player, teamId, position){
        this.props.dispatch(goal(player, teamId, position));
    }

    render() {
        console.log('going to rerender...');
        return(
                <div className="select-players-wrapper">
                    <div className="col-xs-12  col-sm-12">
                        <div className="col-xs-12  col-sm-12 textAlignCenter marginBottom50 marginTop10">
                            <h1 className="h1FrontPage">Match stats</h1>
                        </div>
                        <div className="inlineBlock floatLeft teamDiv">
                            <div className="textAlignCenter">
                                <h1 className="h1FrontPage">Team 1</h1>
                                <div className="marginBottomTop50">
                                    <FieldTable goal={this.goal} team={this.props.leftTeam} tableId={LEFT_TEAM}/>
                                    <button className="btn btn-lg btnFrontPage">BACK</button>
                                </div>
                            </div>
                        </div>
                        <FieldMiddleTable leftTeam={this.props.leftTeam} rightTeam={this.props.rightTeam}/>
                        <div className="inlineBlock floatRight teamDiv">
                            <div className="textAlignCenter">
                                <h1 className="h1FrontPage">Team 2</h1>
                                <div className="marginBottomTop50">
                                    <FieldTable goal={this.goal} team={this.props.rightTeam}  tableId={RIGHT_TEAM}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

    componentDidMount() {
        var startTimer = true;
        var sec = 0;
        var min = 0;
        var stopClock;
        function startWatch() {
            var teamOneScore = parseInt($("#scoreTeam1").text(), 10);
            var teamTwoScore = parseInt($("#scoreTeam2").text(), 10);
            var minCount;
            var secCount;
            sec++;
            if (sec == 60) {
                min++;
                sec = 0;
            }
            if (teamTwoScore >= 10 || teamOneScore >= 10) {
                startTimer = false;
                clearInterval(stopClock);
            }
            if(sec<10) {
                secCount = "0" + sec;
            } else {
                secCount = sec;
            }

            if(min<10) {
                minCount = "0" + min;
            } else {
                minCount = min;
            }
            $("#timePlayed").text(minCount + ":"+ secCount);
        }
        function setTime() {
            stopClock = setInterval(startWatch, 1000);
        }
        function addScore(team, player) {
            if (team === "team1") {
                var currentScore = $("#scoreTeam1").text();
                var newScore = parseInt(currentScore, 10) + 1;
                $("#scoreTeam1").text(newScore);
                return;
            } else {
                var currentScore = $("#scoreTeam2").text();
                var newScore = parseInt(currentScore, 10) + 1;
                $("#scoreTeam2").text(newScore)
            }
        }
        $(document).ready(function () {
            setTime();
        });
    }
}



function selectState(state) {
    return {
        leftTeam: state.selectPlayers[LEFT_TEAM],
        rightTeam: state.selectPlayers[RIGHT_TEAM],
        herpderp: state.selectPlayers.herpderp
    }
}

export default connect(selectState)(Field);