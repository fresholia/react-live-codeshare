import { stat } from 'fs';
import { ICodeBlocks, IClientActions } from '../types/codeview.type'

type EditorStateReducerAction = {
    payload: ICodeBlocks;
    type: 'SET_EDITOR_CONFIG';
} | {
    payload: IClientActions[];
    type: 'SET_CLIENTS_ACTIONS';
};

type IEditorState = { config: ICodeBlocks } & { clients: IClientActions[] }

const initialEditorState: IEditorState = {
    config: {
        id: 0,
        base_id: '',
        name: '',
        content: [],
        changes: {},
        language: '',
        languages: [{}],
        theme: '',
        created_at: '',
        updated_at: ''
    },
    
    clients: [
        //{ name: 'cleopatra', position: [250, 250], selection: [0, 0, 0, 0] }
    ]
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
        default:
            break;
    }

    return newState
}

export { editorStateReducer, initialEditorState }
