import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from '../../general/modal';
import ContainerForm from '../../containers/components/containerForm';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newContainerModal: false,
            newItemModal: false
        }
    }

    openNewContainerModal = () => {
        this.setState({
            newContainerModal: true
        })
    }

    closeNewContainerModal = () => {
        this.setState({
            newContainerModal: false
        })
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
            <div>
                <div className="bottom-bar-menu">
                    <RaisedButton label="Search" primary style={style} labelStyle={labelStyle} />
                    <RaisedButton label="New Container" primary style={style} labelStyle={labelStyle} onClick={this.openNewContainerModal} />
                    <RaisedButton label="New Item" primary style={style} labelStyle={labelStyle} />
                </div>
                <Modal isOpen={this.state.newContainerModal} onClose={this.closeNewContainerModal}>
                    <ContainerForm parentContainerId={this.props.selectedContainerId} onSubmit={this.closeNewContainerModal} />
                </Modal>
            </div>
        )
    }
}

export default BottomBar;