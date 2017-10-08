import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

class ContainerIndexItem extends React.Component {

    render() {
        let testImage = 'https://i.imgur.com/hZjtIcH.png';

        return (
            <GridTile 
                key={this.props.container.id}
                title={this.props.container.name}
                actionIcon={<IconButton onClick={this.props.onClick}><ArrowForward color="white" /></IconButton>}
            >
                <img src={testImage} alt=" " />
            </GridTile>
        )
    }
}

export default ContainerIndexItem;