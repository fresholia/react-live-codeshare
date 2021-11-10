export interface ICodeBlocks {
    id: number;
    base_id: string;
    name: string;
    content: string[];
    language: string;
    languages?: Array<object>;
    theme: string;
    created_at: string;
    updated_at: string;
}

export interface IErrorLayout {
    content: string;
}

export interface IIconType {
    fillColor?: string;
    size: number;
    button?: boolean;
    onClick?: Function
}

export interface ICodeCallbackProps {
    [name: string]: Function;
}
 
export interface ICodeActionProps {
    onClick?: ICodeCallbackProps; 
}

