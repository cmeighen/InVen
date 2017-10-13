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

        let topGridListStyle = {
            paddingTop: 15,
            paddingLeft: 12,
            justifyContent: 'space-between',
            width: 340
            
        }

        let midGridListStyle = {
            paddingTop: 15,
            paddingLeft: 12
        }

        let gridTileStyle = {
            width: 150,
            height: 150,
            border: '1px solid #000',
            boxShadow: '5px 5px 10px #000',
            cursor: 'pointer'
        }

        let gridTileTitleStyle = {
            fontSize: 12,
            paddingTop: 10,
            paddingLeft: -10
        }

        let gridTileSubTitleStyle = {
            fontSize: 10
        }

        let childrenContainers = _.filter(this.props.containers, { parentId: selectedContainer.id });

        return (
            <div className="inven-sidebar">
                <div className="inven-sidebar__top">
                    <GridList
                        style={topGridListStyle}
                    >
                        {topBarContainers.map((container) => (
                            <GridTile
                                key={container.id}
                                title={container.name}
                                subtitle={<span>{container.subTitle}</span>}
                                onClick={() => this.props.selectContainer(container.id)}
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
                    <GridList
                        style={midGridListStyle}
                    >
                        {childrenContainers.map((container) => (
                            <GridTile
                                key={container.id}
                                title={container.name}
                                subtitle="Container"
                                onClick={() => this.props.selectContainer(container.id)}
                                style={gridTileStyle}
                                titleStyle={gridTileTitleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                subtitleStyle={gridTileSubTitleStyle}
                            >
                                <img src='https://i.imgur.com/hZjtIcH.png' />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <div className="inven-sidebar__bottom">
                    <BottomBar selectedContainerId={selectedContainer.id} />
                </div>
            </div>
        )
    }

}

export default InvenSideBar;