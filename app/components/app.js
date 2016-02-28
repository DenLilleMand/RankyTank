require('../styles/sass/main.scss');
import React,{ Component } from "react";
import Header from './header.js';
import Footer from './footer.js';
import * as lodash from 'lodash';
if (typeof window != "undefined") {
    window._ = lodash;
}

export default class Application extends Component {
    render() {
        const { props: { children }} = this;
        return(
            <div className="rankytank">
                    {children}
            </div>
        );
    }

    componentWillMount() {
        if (typeof google != "undefined" && google) {
            google.load('visualization', '1.0', {'packages': ['corechart', 'orgchart']});
        }
    }
}
