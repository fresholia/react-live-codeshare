interface navbarItemsProps {
    map?: any;
    key?: number;
    name: string,
    href: string
}


const navbarItems: navbarItemsProps[] = [
    {key: 1, name: 'Home', href: '/'},
    {key: 2, name: 'Start Code', href: '/code/'},
    {key: 3, name: 'Support Us', href: '/support'},
    {key: 4, name: 'Sign In', href: '/signin'}
]

export { navbarItems }
export type { navbarItemsProps }