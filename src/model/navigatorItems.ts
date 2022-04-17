interface NavigatorProps {
  name: string;
  href: string;
}

const NavigatorItems: NavigatorProps[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Buy me a coffe', href: '/donate' },
];

export default NavigatorItems;
