import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContainerForm from './components/newContainerForm';

class ContainersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containers: props.containers,
            selectedContainerId: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            containers: nextProps.containers
        });
    }

    render() {
        let allContainers = this.state.containers.map((container) => {
            return (
                <div key={container.id}>
                    <h2>{container.name} (id:{container.id})</h2>
                    <p>{container.description}</p>
                </div>
            )
        })

        return (
            <div>
                <h1>InVen v.01</h1>
                {allContainers}
                <ContainerForm parentContainer={_.find(this.state.containers, { id: this.state.selectedContainerId })} />
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