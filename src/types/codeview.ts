export interface ICodeBlocks {
    id: number;
    base_id: string;
    name: string;
    content: string[];
    changes: object;
    language: string;
    theme: string;
    creator: string;
    created_at: string;
    updated_at: string;
    clientId: string;
    isAdmin?: boolean;
}

export interface IClientActions {
    id: string;
    name: string;
    position: number[];
    selection: number[];
    ip: string;
}

export interface IInputActions {
    name: string;
    joined: boolean;
    showSettings: boolean;
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

export interface ISettingsType {
    props: {
        lang: string;
        langs: Array<object>;
        clickHandlers: {[name: string]: Function};
    };
}

export interface ISettingsTypeValue {
    id?: number;
    aliases: Array<string>;
}