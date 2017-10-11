import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { history } from '../../store';

import InvenSideBar from '../sidebar';

import './index.css';

class ContainerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containers: props.containers,
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
        history.push('/container/' + id);
    }

    render() {

        return (
            <div>
                <InvenSideBar containers={this.state.containers} selectedContainerId={this.props.match.params.id} selectContainer={this.selectContainer} />
                loooooooooooooooooooooooooooooooooooooooooooooooooooooooool {this.props.match.params.id}
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