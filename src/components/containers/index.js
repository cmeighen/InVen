import _ from 'lodash';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../../store';

import InvenSideBar from '../sidebar';
import ContainerInfo from './components/containerInfo';

import './index.css';

class ContainerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            windowWidth: 900
        }
    }

    selectContainer = (id) => {
        history.push('/container/' + id);
    }

    render() {
        let selectedContainerId = this.props.match.params.id;
        let selectedContainer = _.get(this.props.containers, selectedContainerId);

        return (
            <div>
                <InvenSideBar containers={this.props.containers} selectedContainerId={selectedContainerId} selectContainer={this.selectContainer} />
                <ContainerInfo container={selectedContainer} />
            </div>
        )
    }
}

const mapStateToProps = (state, params) => ({
    containers: state.ivcontainer.containers,
    routerParams: params
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerPage)