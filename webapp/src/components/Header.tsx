import { DesktopNavigation } from './navigation/DesktopNavigation';
import { MobileNavigation } from './navigation/MobileNavigation';

const navLinks = [
  { href: '/', title: 'Your Designs' },
  { href: '/furniture-builder', title: 'Furniture Builder' },
];

function Header() {
  return (
    <header className="relative mb-2 flex flex-row items-center justify-between px-4 py-2 shadow sm:px-6 md:px-14">
      <MobileNavigation className="md:hidden" navLinks={navLinks} />
      <p className="select-none font-semibold tracking-tight sm:text-xl">BuildaFurn</p>
      <DesktopNavigation navLinks={navLinks} className="ml-12 hidden md:block" />
      <button className="md:ml-auto">Cart</button>
    </header>
  );
}

export { Header };
