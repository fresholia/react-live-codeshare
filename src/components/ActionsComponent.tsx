import styles from '../styles/code.module.scss';

const SettingsIcon = ({fillColor = 'white', size = '64'}) => {
    return (
        <svg fill={fillColor} id="more" xmlns="http://www.w3.org/2000/svg" width={size} height={size / 3} viewBox="0 0 20 6">
            <path id="Path_905" data-name="Path 905" d="M5,15a3,3,0,1,0-3-3A3,3,0,0,0,5,15Zm0-2a1,1,0,1,0-1-1A1,1,0,0,0,5,13Z" transform="translate(-2 -9)" fill-rule="evenodd"/>
            <path id="Path_906" data-name="Path 906" d="M12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-2a1,1,0,1,0-1-1A1,1,0,0,0,12,13Z" transform="translate(-2 -9)" fill-rule="evenodd"/>
            <path id="Path_907" data-name="Path 907" d="M22,12a3,3,0,1,1-3-3A3,3,0,0,1,22,12Zm-2,0a1,1,0,1,1-1-1A1,1,0,0,1,20,12Z" transform="translate(-2 -9)" fill-rule="evenodd"/>
        </svg>
    )
}

const DownloadIcon = ({fillColor = 'white', size = '64'}) => {
    return (
        <svg fill={fillColor} id="software-download" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
            <path id="Path_1231" data-name="Path 1231" d="M11,5a1,1,0,0,1,2,0v7.158l3.243-3.243,1.414,1.414L12,15.986,6.343,10.329,7.757,8.915,11,12.158Z" transform="translate(-4 -4)"/>
            <path id="Path_1232" data-name="Path 1232" d="M4,14H6v4H18V14h2v4a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z" transform="translate(-4 -4)"/>
        </svg>
    )
}

const PlusIcon = ({fillColor = 'white', size = '64'}) => {
    return (
        <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12">
            <path id="Path_6" data-name="Path 6" d="M13,7a1,1,0,0,0-2,0v4H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V13h4a1,1,0,0,0,0-2H13Z" transform="translate(-6 -6)" fill-rule="evenodd"/>
        </svg>
    )
}


const AboutIcon = ({fillColor = 'white', size = '64'}) => {
    return (
        <svg fill={fillColor} id="info" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
            <path id="Path_671" data-name="Path 671" d="M11,10.979a1,1,0,1,1,2,0v6a1,1,0,0,1-2,0Z" transform="translate(-2 -2)"/>
            <path id="Path_672" data-name="Path 672" d="M12,6.051a1,1,0,1,0,1,1A1,1,0,0,0,12,6.051Z" transform="translate(-2 -2)"/>
            <path id="Path_673" data-name="Path 673" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM4,12a8,8,0,1,0,8-8A8,8,0,0,0,4,12Z" transform="translate(-2 -2)" fill-rule="evenodd"/>
        </svg>    
    )
}

const ThemeIcon = ({fillColor = 'white', size = '64'}) => {
    return (
        <svg fill={fillColor} id="overflow" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 18">
            <path id="Path_948" data-name="Path 948" d="M22,11A10,10,0,1,1,2,11Z" transform="translate(-2 -3)" opacity="0.2"/>
            <path id="Path_949" data-name="Path 949" d="M20,11A8,8,0,1,1,4,11Z" transform="translate(-2 -3)" opacity="0.3"/>
            <path id="Path_950" data-name="Path 950" d="M20,11A8,8,0,0,0,4,11Z" transform="translate(-2 -3)"/>
        </svg>      
    )
}

const changeTheme = () => {
    if (typeof window === "object") {
        let dataTheme = document.querySelector('html').dataset.theme
        dataTheme = dataTheme == 'dark' ? 'white' : 'dark';
    }
}

export default function CodeActions() {
    return (
        <>
            <div>
                <div className={styles.item}>
                    <SettingsIcon fillColor="white" size="20" />
                </div>
                <div className={styles.item}>
                    <DownloadIcon fillColor="white" size="20" />
                </div>
                <div className={styles.item}>
                    <PlusIcon fillColor="white" size="20" />
                </div>  
            </div>
            <div>
                <div className={styles.item} onClick={changeTheme}>
                    <ThemeIcon fillColor="white" size="20" />
                </div>
                <div className={styles.item}>
                    <AboutIcon fillColor="white" size="20" />
                </div>
            </div>

        </>
    )
}