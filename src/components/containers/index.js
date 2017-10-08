import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContainerPage from './components/containerPage';
import ContainerForm from './components/containerForm';
import ContainerIndexItem from './components/containerIndexItem';

import Modal from '../general/modal';

import './index.css';

class ContainersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containers: props.containers,
            selectedContainerId: 0,
            isModalOpen: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            containers: nextProps.containers
        });
    }

    openModal = () => {
        this.setState(() => {
            return {
                isModalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                isModalOpen: false
            }
        })
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

        return (
            <div>
                <div className="container-index">
                    {allContainers}
                </div>
                <ContainerPage container={selectedContainer} />
                <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} >
                    <ContainerForm parentContainer={_.find(this.state.containers, { id: this.state.selectedContainerId })} onSubmit={this.closeModal} />
                </Modal>
                <button onClick={this.openModal} value="Open Modal">Open Modal</button>
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