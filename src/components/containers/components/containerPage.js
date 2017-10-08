import React from 'react'

import LabelledTextField from '../../general/labelledTextField'

class ContainerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditContainerModalOpen: false,
            isNewContainerModalOpen: false,
            isNewItemModalOpen: false
        }
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
            </div>
        )
    }
}

export default ContainerPage;