import type { IIconType } from '../types/codeview.type'
import { motion } from 'framer-motion'

const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
}

/*
    Icons from https://github.com/astrit/css.gg
*/

const LogoIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="infinity" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 21.326 10">
            <motion.path variants={icon} initial="hidden" animate="visible" data-name="infinity" d="M8.121,9.879,10.2,11.962l.006-.006,1.453,1.453.006.006,2.121,2.121a5,5,0,1,0,0-7.071l-.713.713,1.414,1.414.713-.713a3,3,0,1,1,0,4.243l-2.072-2.072-.006.006L9.536,8.464a5,5,0,1,0,0,7.071l.713-.713L8.835,13.408l-.713.713a3,3,0,1,1,0-4.243Z" transform="translate(-1 -7)"/>
        </svg>
    )
}

const SettingsIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="more" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size / 3} viewBox="0 0 20 6">
            <path id="Path_905" data-name="Path 905" d="M5,15a3,3,0,1,0-3-3A3,3,0,0,0,5,15Zm0-2a1,1,0,1,0-1-1A1,1,0,0,0,5,13Z" transform="translate(-2 -9)" fillRule="evenodd"/>
            <path id="Path_906" data-name="Path 906" d="M12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-2a1,1,0,1,0-1-1A1,1,0,0,0,12,13Z" transform="translate(-2 -9)" fillRule="evenodd"/>
            <path id="Path_907" data-name="Path 907" d="M22,12a3,3,0,1,1-3-3A3,3,0,0,1,22,12Zm-2,0a1,1,0,1,1-1-1A1,1,0,0,1,20,12Z" transform="translate(-2 -9)" fillRule="evenodd"/>
        </svg>
    )
}

const DownloadIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="software-download" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 16 16">
            <path id="Path_1231" data-name="Path 1231" d="M11,5a1,1,0,0,1,2,0v7.158l3.243-3.243,1.414,1.414L12,15.986,6.343,10.329,7.757,8.915,11,12.158Z" transform="translate(-4 -4)"/>
            <path id="Path_1232" data-name="Path 1232" d="M4,14H6v4H18V14h2v4a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z" transform="translate(-4 -4)"/>
        </svg>
    )
}

const PlusIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 12 12">
            <path id="Path_6" data-name="Path 6" d="M13,7a1,1,0,0,0-2,0v4H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V13h4a1,1,0,0,0,0-2H13Z" transform="translate(-6 -6)" fillRule="evenodd"/>
        </svg>
    )
}


const AboutIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="info" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 20 20">
            <path id="Path_671" data-name="Path 671" d="M11,10.979a1,1,0,1,1,2,0v6a1,1,0,0,1-2,0Z" transform="translate(-2 -2)"/>
            <path id="Path_672" data-name="Path 672" d="M12,6.051a1,1,0,1,0,1,1A1,1,0,0,0,12,6.051Z" transform="translate(-2 -2)"/>
            <path id="Path_673" data-name="Path 673" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM4,12a8,8,0,1,0,8-8A8,8,0,0,0,4,12Z" transform="translate(-2 -2)" fillRule="evenodd"/>
        </svg>    
    )
}

const ThemeIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="overflow" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 20 18">
            <path id="Path_948" data-name="Path 948" d="M22,11A10,10,0,1,1,2,11Z" transform="translate(-2 -3)" opacity="0.2"/>
            <path id="Path_949" data-name="Path 949" d="M20,11A8,8,0,1,1,4,11Z" transform="translate(-2 -3)" opacity="0.3"/>
            <path id="Path_950" data-name="Path 950" d="M20,11A8,8,0,0,0,4,11Z" transform="translate(-2 -3)"/>
        </svg>      
    )
}

const ErrorIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="close-o" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 22 22">
            <path id="Path_291" data-name="Path 291" d="M16.339,9.322a1,1,0,0,0-1.364-1.463L12.05,10.587,9.322,7.66A1,1,0,0,0,7.859,9.024l2.727,2.926L7.66,14.677A1,1,0,1,0,9.024,16.14l2.926-2.727,2.727,2.926a1,1,0,0,0,1.463-1.364L13.413,12.05Z" transform="translate(-1 -1)"/>
            <path id="Path_292" data-name="Path 292" d="M1,12A11,11,0,1,1,12,23,11,11,0,0,1,1,12Zm11,9a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(-1 -1)" fillRule="evenodd"/>
        </svg>  
    )
}

const LoadingIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} id="spinner" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 20 20">
            <path id="Path_1252" data-name="Path 1252" d="M12,19a7,7,0,1,0-7-7A7,7,0,0,0,12,19Zm0,3A10,10,0,1,0,2,12,10,10,0,0,0,12,22Z" transform="translate(-2 -2)" fillRule="evenodd" opacity="0.2"/>
            <path id="Path_1253" data-name="Path 1253" d="M2,12A10,10,0,0,1,12,2V5a7,7,0,0,0-7,7Z" transform="translate(-2 -2)"/>
        </svg>
    )
}

const CloseIcon = (e: IIconType) => {
    return (
        <svg className={e.button ? 'svg-button' : ''} onClick={e.onClick?.bind(this)} fill={e.fillColor} id="close" xmlns="http://www.w3.org/2000/svg" width={e.size} height={e.size} viewBox="0 0 14.964 14.964">
            <path id="close-2" data-name="close" d="M6.225,4.811A1,1,0,0,0,4.811,6.225L10.586,12,4.811,17.775a1,1,0,0,0,1.414,1.414L12,13.414l5.775,5.775a1,1,0,0,0,1.414-1.414L13.414,12l5.775-5.775a1,1,0,0,0-1.414-1.414L12,10.586Z" transform="translate(-4.518 -4.518)"/>
        </svg>
    )
}

const TwitterIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} width={e.size} height={e.size} viewBox="0 0 65 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.5 22C47.3 22.6 46.1 22.8 44.7 23C46.1 22.2 47.1 21 47.5 19.4C46.3 20.2 44.9 20.6 43.3 21C42.1 19.8 40.3 19 38.5 19C34.3 19 31.1 23 32.1 27C26.7 26.8 21.9 24.2 18.5 20.2C16.7 23.2 17.7 27 20.5 29C19.5 29 18.5 28.6 17.5 28.2C17.5 31.2 19.7 34 22.7 34.8C21.7 35 20.7 35.2 19.7 35C20.5 37.6 22.9 39.6 25.9 39.6C23.5 41.4 19.9 42.4 16.5 42C19.5 43.8 22.9 45 26.5 45C38.7 45 45.5 34.8 45.1 25.4C46.5 24.6 47.7 23.4 48.5 22Z" fill="white"/>
        </svg>
    )
}

const GitHubIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} width={e.size} height={e.size} viewBox="0 0 65 64" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M32.451 16.384C23.6438 16.384 16.5 23.5278 16.5 32.335C16.5 39.381 21.0994 45.3504 27.3624 47.5032C28.1452 47.6012 28.4388 47.1118 28.4388 46.7204C28.4388 46.329 28.4388 45.3504 28.4388 43.9804C24.0352 44.959 23.0566 41.8274 23.0566 41.8274C22.3716 39.9682 21.2952 39.4788 21.2952 39.4788C19.8272 38.5002 21.393 38.5002 21.393 38.5002C22.9588 38.598 23.8394 40.1638 23.8394 40.1638C25.3074 42.6104 27.5582 41.9252 28.4388 41.5338C28.5366 40.4574 29.026 39.7724 29.4174 39.381C25.8944 38.9896 22.1758 37.6194 22.1758 31.4544C22.1758 29.6928 22.763 28.3228 23.8394 27.1486C23.7416 26.855 23.1544 25.1914 24.0352 23.0384C24.0352 23.0384 25.4052 22.647 28.4388 24.702C29.711 24.3106 31.081 24.2128 32.451 24.2128C33.8212 24.2128 35.1912 24.4084 36.4634 24.702C39.497 22.647 40.867 23.0384 40.867 23.0384C41.7478 25.1914 41.1606 26.855 41.0626 27.2464C42.0412 28.3228 42.7262 29.7908 42.7262 31.5522C42.7262 37.7174 39.0076 38.9896 35.4848 39.381C36.0718 39.8702 36.5612 40.8488 36.5612 42.3168C36.5612 44.4696 36.5612 46.1332 36.5612 46.7204C36.5612 47.1118 36.8548 47.6012 37.6376 47.5032C43.9984 45.3504 48.5 39.381 48.5 32.335C48.4022 23.5278 41.2584 16.384 32.451 16.384Z" fill="white"/>
        </svg>
    )
}

const DiscordIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} width={e.size} height={e.size} viewBox="0 0 65 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.6042 31.4241C28.6922 31.4241 27.9722 32.2241 27.9722 33.2001C27.9722 34.1761 28.7082 34.9761 29.6042 34.9761C30.5162 34.9761 31.2362 34.1761 31.2362 33.2001C31.2522 32.2241 30.5162 31.4241 29.6042 31.4241ZM35.4442 31.4241C34.5322 31.4241 33.8122 32.2241 33.8122 33.2001C33.8122 34.1761 34.5482 34.9761 35.4442 34.9761C36.3562 34.9761 37.0762 34.1761 37.0762 33.2001C37.0762 32.2241 36.3562 31.4241 35.4442 31.4241Z" fill="white"/>
            <path d="M43.22 18H21.78C19.972 18 18.5 19.472 18.5 21.296V42.928C18.5 44.752 19.972 46.224 21.78 46.224H39.924L39.076 43.264L41.124 45.168L43.06 46.96L46.5 50V21.296C46.5 19.472 45.028 18 43.22 18ZM37.044 38.896C37.044 38.896 36.468 38.208 35.988 37.6C38.084 37.008 38.884 35.696 38.884 35.696C38.228 36.128 37.604 36.432 37.044 36.64C36.244 36.976 35.476 37.2 34.724 37.328C33.188 37.616 31.78 37.536 30.58 37.312C29.668 37.136 28.884 36.88 28.228 36.624C27.86 36.48 27.46 36.304 27.06 36.08C27.012 36.048 26.964 36.032 26.916 36C26.884 35.984 26.868 35.968 26.852 35.952C26.564 35.792 26.404 35.68 26.404 35.68C26.404 35.68 27.172 36.96 29.204 37.568C28.724 38.176 28.132 38.896 28.132 38.896C24.596 38.784 23.252 36.464 23.252 36.464C23.252 31.312 25.556 27.136 25.556 27.136C27.86 25.408 30.052 25.456 30.052 25.456L30.212 25.648C27.332 26.48 26.004 27.744 26.004 27.744C26.004 27.744 26.356 27.552 26.948 27.28C28.66 26.528 30.02 26.32 30.58 26.272C30.676 26.256 30.756 26.24 30.852 26.24C31.828 26.112 32.932 26.08 34.084 26.208C35.604 26.384 37.236 26.832 38.9 27.744C38.9 27.744 37.636 26.544 34.916 25.712L35.14 25.456C35.14 25.456 37.332 25.408 39.636 27.136C39.636 27.136 41.94 31.312 41.94 36.464C41.94 36.464 40.58 38.784 37.044 38.896Z" fill="white"/>
        </svg>
    )
}

const TwitchIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} width={e.size} height={e.size} viewBox="0 0 65 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5043 18.8562L18.7901 24.5706V45.142H25.6473V50.8562L31.3615 45.142H35.9329L46.2187 34.8562V18.8562H24.5043ZM43.9329 33.7134L39.3615 38.2848H34.7901L30.7901 42.2848V38.2848H25.6473V21.142H43.9329V33.7134Z" fill="white"/>
            <path d="M40.5042 25.1421H38.2186V31.9993H40.5042V25.1421Z" fill="white"/>
            <path d="M34.2185 25.1421H31.9327V31.9993H34.2185V25.1421Z" fill="white"/>
        </svg>
    )
}

const PlayIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} width={e.size} height={e.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 19">
            <path d="M9,21.5,17.5,13,13,10l2-7.5L6.5,11,11,14Z" transform="translate(-6.5 -2.5)"/>
        </svg>      
    )
}

const TrashIcon = (e: IIconType) => {
    return (
        <svg fill={e.fillColor} width={e.size} height={e.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19">
            <path d="M17,5V4a2,2,0,0,0-2-2H9A2,2,0,0,0,7,4V5H4A1,1,0,0,0,4,7H5V18a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V7h1a1,1,0,0,0,0-2ZM15,4H9V5h6Zm2,3H7V18a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1Z" transform="translate(-3 -2)" fillRule="evenodd"/>
            <path d="M9,9h2v8H9Z" transform="translate(-3 -2)"/>
            <path d="M13,9h2v8H13Z" transform="translate(-3 -2)"/>
        </svg>
    )
}

export { LogoIcon, SettingsIcon, DownloadIcon, PlusIcon, AboutIcon, ThemeIcon, ErrorIcon, LoadingIcon, CloseIcon, TwitterIcon, GitHubIcon, DiscordIcon, TwitchIcon, PlayIcon, TrashIcon }