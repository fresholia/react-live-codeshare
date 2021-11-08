interface settingsProps {
    supportedLangs: Array<object>
}

interface settingsEnum {
    onClose: Function;
    onChangeLanguage: Function;
    onChangeTheme: Function;
    lang?: string;

    props: settingsProps;
}

export type { settingsEnum }