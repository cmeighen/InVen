import _ from 'lodash'
import React from 'react'

import Modal from '../../general/modal';
import LabelledTextField from '../../general/labelledTextField'
import ContainerForm from './containerForm'

import RaisedButton from 'material-ui/RaisedButton';

class ContainerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditContainerModalOpen: false,
            isNewContainerModalOpen: false,
            isNewItemModalOpen: false
        }
    }

    openEditModal = () => {
        this.setState(() => {
            return {
                isEditContainerModalOpen: true
            }
        })
    }

    closeEditModal = () => {
        this.setState(() => {
            return {
                isEditContainerModalOpen: false
            }
        })
    }

    openNewModal = () => {
        this.setState(() => {
            return {
                isNewContainerModalOpen: true
            }
        })
    }

    closeNewModal = () => {
        this.setState(() => {
            return {
                isNewContainerModalOpen: false
            }
        })
    }

    render() {
        return (
            <div className="container-page">
                <div className="container-page__body">
                    <div>
                        {this.props.container.name} (Id: {this.props.container.id})
                    </div>
                    <LabelledTextField title="Description" body={this.props.container.description} />
                </div>
                <div className="container-page__option-bar">
                    <RaisedButton onClick={this.openEditModal}>Edit Container</RaisedButton>
                    <RaisedButton onClick={this.openNewModal}>New Child Container</RaisedButton>
                </div>
                <Modal isOpen={this.state.isEditContainerModalOpen} onClose={this.closeEditModal} >
                    <ContainerForm container={this.props.container} onSubmit={this.closeEditModal} />
                </Modal>
                <Modal isOpen={this.state.isNewContainerModalOpen} onClose={this.closeNewModal} >
                    <ContainerForm parentContainer={this.props.container} onSubmit={this.closeNewModal} />
                </Modal>
            </div>
        )
    }
}

export default ContainerPage;