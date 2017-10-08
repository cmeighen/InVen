import React from 'react'

const LabelledTextField = (props) => (
    <div className="labelledTextField">
        <div className="labelledTextField__title">
            {props.title}
        </div>
        <div className="labelledTextField__body">
            {props.body}
        </div>
    </div>
)

export default LabelledTextField;