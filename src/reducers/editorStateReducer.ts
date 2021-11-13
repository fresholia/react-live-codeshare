import { ICodeBlocks, IClientActions, IInputActions } from 'types/codeview.type'

type EditorStateReducerAction = {
    payload: ICodeBlocks;
    type: 'SET_EDITOR_CONFIG';
} | {
    payload: IClientActions[];
    type: 'SET_CLIENTS_ACTIONS';
} | {
    payload: IInputActions;
    type: 'SET_INPUT_VALUES';
};

type IEditorState = { config: ICodeBlocks } & { clients: IClientActions[] } & { fields: IInputActions }

const initialEditorState: IEditorState = {
    config: {
        id: 0,
        base_id: '',
        name: '',
        content: [],
        changes: {},
        language: '',
        theme: '',
        creator: '',
        created_at: '',
        updated_at: '',
        isAdmin: false,
        clientId: ''
    },
    
    clients: [],

    fields: {
        name: '',
        joined: false
    }
}

function editorStateReducer(state: any, action: EditorStateReducerAction) {
    let newState = state
    switch (action.type) {
        case 'SET_EDITOR_CONFIG':
            newState = {...state, config: action.payload}
            break;
        case 'SET_CLIENTS_ACTIONS':
            newState = {...state, clients: action.payload}
            break;
        case 'SET_INPUT_VALUES':
            newState = {...state, fields: action.payload}
            break;
        default:
            break;
    }

    return newState
}

export { editorStateReducer, initialEditorState }
