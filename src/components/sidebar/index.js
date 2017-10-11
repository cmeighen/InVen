import _ from 'lodash';
import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import BottomBar from './components/botBar';

import './index.css';

class InvenSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let topBarContainers = [];
        let selectedContainer = _.get(this.props.containers, this.props.selectedContainerId);
        let parentContainerId = selectedContainer.parentId;
        let parentContainer = typeof parentContainerId !== 'undefined' ? _.get(this.props.containers, parentContainerId) : null;

        if (parentContainer) {
            parentContainer.subTitle = "Parent Container";
            parentContainer.image = "https://i.imgur.com/hZjtIcH.png";
            topBarContainers.push(parentContainer);
        }

        selectedContainer.subTitle = "Selected Container";
        selectedContainer.image = 'https://i.imgur.com/hZjtIcH.png';
        topBarContainers.push(selectedContainer);

        let gridListStyle = {
            paddingTop: 15
        }

        let gridTileStyle = {
            width: 150,
            height: 150
        }

        let gridTileTitleStyle = {
            fontSize: 12,
            paddingTop: 10,
            paddingLeft: -10
        }

        let gridTileSubTitleStyle = {
            fontSize: 10
        }

        return (
            <div className="inven-sidebar">
                <div className="inven-sidebar__top">
                    <GridList
                        style={gridListStyle}
                    >
                        {topBarContainers.map((container) => (
                            <GridTile
                                key={container.id}
                                title={container.name}
                                subtitle={<span>{container.subTitle}</span>}
                                actionIcon={<IconButton onClick={() => this.props.selectContainer(container.id)}><StarBorder color="white" /></IconButton>}
                                style={gridTileStyle}
                                titleStyle={gridTileTitleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                subtitleStyle={gridTileSubTitleStyle}
                            >
                                <img src={container.image} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <div className="inven-sidebar__middle">
                    <GridList />
                </div>
                <div className="inven-sidebar__bottom">
                    <BottomBar />
                </div>
            </div>
        )
    }

}

export default InvenSideBar;