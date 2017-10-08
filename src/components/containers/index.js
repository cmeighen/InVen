import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContainerPage from './components/containerPage';
import {GridList} from 'material-ui/GridList';
import ContainerIndexItem from './components/containerIndexItem';

import './index.css';

class ContainersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containers: props.containers,
            selectedContainerId: 0,
            isModalOpen: false,
            windowWidth: 900
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            containers: nextProps.containers
        });
    }

    selectContainer = (id) => {
        this.setState(() => {
            return {
                selectedContainerId: id
            }
        })
    }

    render() {
        let allContainers = this.state.containers.map((container) => {
             return (
                 <ContainerIndexItem container={container} key={container.id} onClick={() => { this.selectContainer(container.id) }} selected={this.state.selectedContainerId === container.id} />
             )
        });

        let selectedContainer = _.get(this.state.containers, this.state.selectedContainerId);

        let gridCols = this.state.windowWidth > 899 ? 2 : 1;

        return (
            <div>
                <div className="container-index">
                    <GridList 
                        className="grid-list"
                        cellHeight={200}
                        cols={gridCols}
                    >
                        {allContainers}
                    </GridList>
                </div>
                <ContainerPage container={selectedContainer} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    containers: state.ivcontainer.containers
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainersPage)