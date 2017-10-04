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
            parentId: props.parentContainer.id
        }
        this.state = {
            container: props.container || defaultContainer
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const container = this.state.container;
        container[name] = value;
        this.setState({
            container
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.container.id) {
            this.props.editIVContainer(this.state.container);
        } else {
            this.props.addIVContainer(this.state.container);
        }
    }

    render() {
        return (
            <div>
                <h2>New Container Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3>Parent Container: {this.props.parentContainer.name} (id: {this.props.parentContainer.id})</h3>
                    <label>
                        Container Name:
                        <input type="text" name="name" value={this.state.container.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={this.state.container.description} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Create Container" />
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