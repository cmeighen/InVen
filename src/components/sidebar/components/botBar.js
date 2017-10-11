import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const style = {
            width: 100,
            height: 50
        }

        const labelStyle = {
            fontSize: 8
        }

        return (
            <div className="bottom-bar-menu">
                <RaisedButton label="Search" primary style={style} labelStyle={labelStyle} />
                <RaisedButton label="New Container" primary style={style} labelStyle={labelStyle} />
                <RaisedButton label="New Item" primary style={style} labelStyle={labelStyle} />
            </div>
        )
    }
}

export default BottomBar;