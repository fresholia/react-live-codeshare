import type { iconEnum } from '../@types/Icons.d'

/*
    Icons from https://github.com/astrit/css.gg
*/

const SettingsIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} id="more" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size / 3} viewBox="0 0 20 6">
            <path id="Path_905" data-name="Path 905" d="M5,15a3,3,0,1,0-3-3A3,3,0,0,0,5,15Zm0-2a1,1,0,1,0-1-1A1,1,0,0,0,5,13Z" transform="translate(-2 -9)" fillRule="evenodd"/>
            <path id="Path_906" data-name="Path 906" d="M12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-2a1,1,0,1,0-1-1A1,1,0,0,0,12,13Z" transform="translate(-2 -9)" fillRule="evenodd"/>
            <path id="Path_907" data-name="Path 907" d="M22,12a3,3,0,1,1-3-3A3,3,0,0,1,22,12Zm-2,0a1,1,0,1,1-1-1A1,1,0,0,1,20,12Z" transform="translate(-2 -9)" fillRule="evenodd"/>
        </svg>
    )
}

const DownloadIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} id="software-download" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 16 16">
            <path id="Path_1231" data-name="Path 1231" d="M11,5a1,1,0,0,1,2,0v7.158l3.243-3.243,1.414,1.414L12,15.986,6.343,10.329,7.757,8.915,11,12.158Z" transform="translate(-4 -4)"/>
            <path id="Path_1232" data-name="Path 1232" d="M4,14H6v4H18V14h2v4a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z" transform="translate(-4 -4)"/>
        </svg>
    )
}

const PlusIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 12 12">
            <path id="Path_6" data-name="Path 6" d="M13,7a1,1,0,0,0-2,0v4H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V13h4a1,1,0,0,0,0-2H13Z" transform="translate(-6 -6)" fillRule="evenodd"/>
        </svg>
    )
}


const AboutIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} id="info" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 20 20">
            <path id="Path_671" data-name="Path 671" d="M11,10.979a1,1,0,1,1,2,0v6a1,1,0,0,1-2,0Z" transform="translate(-2 -2)"/>
            <path id="Path_672" data-name="Path 672" d="M12,6.051a1,1,0,1,0,1,1A1,1,0,0,0,12,6.051Z" transform="translate(-2 -2)"/>
            <path id="Path_673" data-name="Path 673" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM4,12a8,8,0,1,0,8-8A8,8,0,0,0,4,12Z" transform="translate(-2 -2)" fillRule="evenodd"/>
        </svg>    
    )
}

const ThemeIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} id="overflow" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 20 18">
            <path id="Path_948" data-name="Path 948" d="M22,11A10,10,0,1,1,2,11Z" transform="translate(-2 -3)" opacity="0.2"/>
            <path id="Path_949" data-name="Path 949" d="M20,11A8,8,0,1,1,4,11Z" transform="translate(-2 -3)" opacity="0.3"/>
            <path id="Path_950" data-name="Path 950" d="M20,11A8,8,0,0,0,4,11Z" transform="translate(-2 -3)"/>
        </svg>      
    )
}

const ErrorIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} id="close-o" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 22 22">
            <path id="Path_291" data-name="Path 291" d="M16.339,9.322a1,1,0,0,0-1.364-1.463L12.05,10.587,9.322,7.66A1,1,0,0,0,7.859,9.024l2.727,2.926L7.66,14.677A1,1,0,1,0,9.024,16.14l2.926-2.727,2.727,2.926a1,1,0,0,0,1.463-1.364L13.413,12.05Z" transform="translate(-1 -1)"/>
            <path id="Path_292" data-name="Path 292" d="M1,12A11,11,0,1,1,12,23,11,11,0,0,1,1,12Zm11,9a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(-1 -1)" fillRule="evenodd"/>
        </svg>  
    )
}

const LoadingIcon = (e: iconEnum) => {
    return (
        <svg fill={e.fillColor} id="spinner" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 20 20">
            <path id="Path_1252" data-name="Path 1252" d="M12,19a7,7,0,1,0-7-7A7,7,0,0,0,12,19Zm0,3A10,10,0,1,0,2,12,10,10,0,0,0,12,22Z" transform="translate(-2 -2)" fillRule="evenodd" opacity="0.2"/>
            <path id="Path_1253" data-name="Path 1253" d="M2,12A10,10,0,0,1,12,2V5a7,7,0,0,0-7,7Z" transform="translate(-2 -2)"/>
        </svg>
    )
}

const CloseIcon = (e: iconEnum) => {
    return (
        <svg className={e.button ? 'svg-button' : ''} onClick={e.onClick?.bind(this)} fill={e.fillColor} id="close" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 14.964 14.964">
            <path id="close-2" data-name="close" d="M6.225,4.811A1,1,0,0,0,4.811,6.225L10.586,12,4.811,17.775a1,1,0,0,0,1.414,1.414L12,13.414l5.775,5.775a1,1,0,0,0,1.414-1.414L13.414,12l5.775-5.775a1,1,0,0,0-1.414-1.414L12,10.586Z" transform="translate(-4.518 -4.518)"/>
        </svg>
    )
}

export { SettingsIcon, DownloadIcon, PlusIcon, AboutIcon, ThemeIcon, ErrorIcon, LoadingIcon, CloseIcon }