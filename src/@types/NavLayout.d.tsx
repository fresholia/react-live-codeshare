interface navbarItemsProps {
    map?: any;
    id?: number;
    name: string,
    href: string
}


const navbarItems: navbarItemsProps[] = [
    { id: 1, name: 'Sign in', href: '/' },
]

export { navbarItems }
export type { navbarItemsProps }