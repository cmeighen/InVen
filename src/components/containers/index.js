import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import InvenSideBar from '../sidebar';

import './index.css';

class ContainerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containers: props.containers,
            selectedContainerId: props.match.params.id,
            isModalOpen: false,
            windowWidth: 900
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.containers) {
            this.setState({
                containers: nextProps.containers
            });
        }
    }

    selectContainer = (id) => {
        this.setState(() => {
            return {
                selectedContainerId: id
            }
        })
    }

    render() {

        return (
            <div>
                <InvenSideBar containers={this.state.containers} selectedContainerId={this.state.selectedContainerId} />
                loooooooooooooooooooooooooooooooooooooooooooooooooooooooool {this.state.selectedContainerId}
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