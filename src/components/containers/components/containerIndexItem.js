import React from 'react';

const ContainerIndexItem = (props) => (
    <div key={props.container.id} onClick={props.onClick} className={"container-index__row " + (props.selected ? 'container-index__row--selected' : null)}>
        <div>{props.container.name}</div>
    </div>
)

export default ContainerIndexItem;