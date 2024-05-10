import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import './navbar.css';

const navigation = [
    { name: 'Home', ref: 'home' },
    { name: 'About', ref: 'about' },
    { name: 'Projects', ref: 'projects' },
    { name: 'Contact', ref: 'contact' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Function to scroll to the home section
        const scrollToHome = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
        // Scroll to home on initial load
        scrollToHome();
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentOpacity = Math.min(window.scrollY / 300, 0.5);
            setOpacity(currentOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Disclosure as="nav" className="fixed-navbar" style={{ backgroundColor: `rgba(29, 78, 216, ${opacity})`, backdropFilter: 'blur(5px)' }}>
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true"/> : <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h2 className="text-2xl font-bold text-white">David Crimi</h2>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-10">
                                    {navigation.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => scrollToSection(item.ref)}
                                            className={classNames('text-white hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-base font-medium')}
                                        >
                                            {item.name}
                                        </button>

                                    ))}
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-white p-1 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5"/>
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile view drop down menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="button"
                                    onClick={() => scrollToSection(item.ref)}
                                    className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
