import React from 'react';

export default class MiddleTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.onClickRandomPlay = this.onClickRandomPlay.bind(this);
    }

    onClickRandomPlay(event) {
        this.props.randomPlay();
    }


    render() {
        return(
                <div className="inlineBlock middleDiv teammiddleDiv">
                    <table className="inlineBlock" style={{width:"100%", textAlign:"center"}}>
                        <tbody>
                        <tr>
                            <td>
                                <button onClick={this.onClickRandomPlay} className="btn middlePagebuttons">Random play</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn middlePagebuttons">Fair Play</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1 className="h1frontpage" style={{color:"white"}}>Odds</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="h1frontpage" style={{color:"white"}}>3.2 : 1.7</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1 className="h1frontpage" style={{color:"white"}}>Points</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="h1frontpage" style={{color:"white"}}>15.1 : 26.5 </h3>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        );
    }
}