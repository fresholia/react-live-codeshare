export interface ISettingsType {
    props: {
        langs: Array<object>;
        clickHandlers: {[name: string]: Function};
    };
}

export interface ISettingsTypeValue {
    id?: number;
    aliases: Array<string>;
}