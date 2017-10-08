import _ from 'lodash';

export const IVCONTAINER_ADD = 'ivcontainer/ADD';
export const IVCONTAINER_EDIT = 'ivcontainer/EDIT';
export const IVCONTAINER_REMOVE = 'ivcontainer/REMOVE';

const defaultContainer = {
    id: 0,
    name: "Default InVen Container",
    description: "This is the default container. You may change the name, and create additional containers under it.",
    parentId: null
}

const initialState = {
    containers: [defaultContainer]
}

export default (state = initialState, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    let containerIndex = -1;

    if (action.container && typeof action.container.id !== undefined) {
        containerIndex = _.findIndex(state.containers, (o) => { return o.id === action.container.id });
    }

    switch (action.type) {
        case IVCONTAINER_ADD: 
            let newContainer = action.container;
            let lastContainerId = state.containers.length ? _.last(state.containers).id : 0;
            newContainer.id = lastContainerId + 1;
            
            newState.containers.push(newContainer);

            return newState;

        case IVCONTAINER_EDIT:
            if (containerIndex > -1) {
                newState.containers[containerIndex] = action.container;
            } 
            
            return newState;
        
        case IVCONTAINER_REMOVE:
            if (containerIndex > -1) {
                newState.containers = state.containers.splice(containerIndex, 1);
            }

            return newState;
            
        default:
            return state
    }
}

export const addIVContainer = (container) => {
    return dispatch => {
        dispatch({
            type: IVCONTAINER_ADD,
            container
        })
    }
}

export const editIVContainer = (container) => {
    return dispatch => {
        dispatch({
            type: IVCONTAINER_EDIT,
            container
        })
    }
}

export const removeIVContainer = (container) => {
    return dispatch => {
        dispatch({
            type: IVCONTAINER_REMOVE,
            container
        })
    }
}