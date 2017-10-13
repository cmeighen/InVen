import React from 'react';

import LabelledTextField from '../../general/labelledTextField';

class ContainerInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-info">
                <div className="container-info__page">
                    <div className="container-info__page__title">
                        <h1>{this.props.container.name}</h1>
                    </div>
                    <LabelledTextField title="Description" body={this.props.container.description} />
                </div>
            </div>
        )
    }
}

export default ContainerInfo;