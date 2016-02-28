import React from 'react';

export default class Profile extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>
                profile
                <button className="btn btn-primary">herpderp</button>
            </div>
        );
    }
}