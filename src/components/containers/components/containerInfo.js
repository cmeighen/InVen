import React from 'react';

import LabelledTextField from '../../general/labelledTextField';

import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';

import Modal from '../../general/modal';
import ContainerForm from './containerForm';

class ContainerInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false,
            editContainerOpen: false
        }
    }

    handleMenuTouchTap = (event) => {
        this.setState({
            menuOpen: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose = () => {
        this.setState({
          menuOpen: false,
        });
      };

    openEditContainer = () => {
        this.setState({
            editContainerOpen: true
        });
    }

    closeEditContainer = () => {
        this.setState({
            editContainerOpen: false
        })
    }

    render() {
        let menuAnchorOrigin = {
            horizontal: 'left',
            vertical: 'top'
        }

        let menuTargetOrigin = {
            horizontal: 'right',
            vertical: 'top'
        }

        return (
            <div className="container-info">
                <div className="container-info__page__menu">
                    <RaisedButton
                        onClick={(e) => this.handleMenuTouchTap(e)}
                        label="Open Container Menu"
                    >
                        <Popover
                            open={this.state.menuOpen}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={this.state.anchorOrigin}
                            onRequestClose={this.handleRequestClose}
                        >
                            <Menu>
                                <MenuItem primaryText="Edit Container" onClick={this.openEditContainer} />
                            </Menu>
                        </Popover>
                    </RaisedButton>
                </div>
                <div className="container-info__page">
                    <div className="container-info__page__title">
                        <h1>{this.props.container.name}</h1>
                    </div>
                    <LabelledTextField title="Description" body={this.props.container.description} />
                </div>
                <Modal isOpen={this.state.editContainerOpen} onClose={this.closeEditContainer}>
                    <ContainerForm container={this.props.container} onSubmit={this.closeEditContainer} />
                </Modal>
            </div>
        )
    }
}

export default ContainerInfo;