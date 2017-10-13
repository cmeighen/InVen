import _ from 'lodash'
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    addIVContainer,
    editIVContainer
} from '../../../modules/ivcontainer';

class ContainerForm extends React.Component {
    constructor(props) {
        super(props);

        const defaultContainer = {
            id: null,
            name: "",
            description: "",
            parentId: props.parentContainerId,
            image: null
        }

        this.state = {
            container: props.container || defaultContainer
        };

    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const container = this.state.container;
        container[name] = value;
        this.setState({
            container
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.container.id !== null) {
            this.props.editIVContainer(this.state.container);
        } else {
            this.props.addIVContainer(this.state.container);
        }

        this.props.onSubmit();
    }

    render() {
        var formText = this.state.container.id !== null ? "Edit Container" : "Create Container";
        var parentContainer = this.props.parentContainer ? (
            <h3>Parent Container: {this.props.parentContainer.name} (id: {this.props.parentContainer.id})</h3>
        ) : null;
        return (
            <div>
                <h2>{formText}</h2>
                <form onSubmit={this.handleSubmit}>
                    {parentContainer}
                    <label>
                        Container Name:
                        <input type="text" name="name" value={this.state.container.name} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input type="text" name="description" value={this.state.container.description} onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value={formText} />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addIVContainer,
    editIVContainer
  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(ContainerForm);