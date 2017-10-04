const ContainerIndexItem = (props) => {
    <div key={props.id}>
    <div>{props.name} (id: {props.id})</div>
    <div>{props.description}</div>
</div>
}

export default ContainerIndexItem;