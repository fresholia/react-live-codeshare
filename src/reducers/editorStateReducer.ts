import { ICodeBlocks } from '../types/codeview.type'

type EditorStateReducerAction = {
    payload: ICodeBlocks;
    type: 'SET_EDITOR_STATE';
};

const initialEditorState: ICodeBlocks = {
    id: 0,
    base_id: '',
    name: '',
    content: [],
    language: '',
    languages: [{}],
    theme: '',
    created_at: '',
    updated_at: ''
}

function editorStateReducer(state: ICodeBlocks, action: EditorStateReducerAction) {
    let newState = state
    switch (action.type) {
        case 'SET_EDITOR_STATE':
            newState = action.payload
            break;
        default:
            break;
    }

    return newState
}

export { editorStateReducer, initialEditorState }
