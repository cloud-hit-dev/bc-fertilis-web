import Link from 'next/link'

import { Container } from '@/components/default/container'
import { Logo } from '@/components/default/logo'
import { NavLink } from '@/components/default/navlink'

export function Footer() {
    const data = {
        tabs: [
            { name: 'Inicio', href: '/' },
            { name: 'Productos', href: '/products' },
            { name: 'Nosotros', href: '/about-us' },
        ],
        name: 'Empresa BC Fertilis Panamá',
        twitter: 'https://x.com/',
        github: 'https://github.com/',
        right: 'Todos los derechos reservados.',
    }
    return (
        <footer className="bg-secondary-50">
            <Container>
                <div className="py-16">
                    <Logo className="mx-auto h-10 w-auto" />
                    <nav className="mt-10 text-sm" aria-label="quick links">
                        <div className="-my-1 flex justify-center gap-x-6">
                            {data.tabs.map((tab, index) => <NavLink href={tab.href} key={tab.name}>{tab.name}</NavLink>)}
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col items-center border-t border-secondary-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">
                        <Link href="#" className="group" aria-label="TaxPal on X">
                            <svg
                                className="h-6 w-6 fill-secondary-500 group-hover:fill-secondary-700"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
                            </svg>

                            <svg
                                className="h-6 w-6 fill-secondary-500 group-hover:fill-secondary-700"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                width="2479" height="2436" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1982.35 42.021C1895.78 0.266461 1456.95 47.9588 1140.42 346.217C641.906 835.472 653.875 1479.79 653.875 1479.79C653.875 1479.79 637.451 1546.14 567.187 1449.95C413.489 1257.55 494.018 814.728 503.004 752.99C515.709 666.17 459.351 663.505 435.839 692.281C-119.418 1449.91 382.076 2070.37 710.505 2267.31C1094.9 2497.78 1853.36 2497.7 2155.53 1843.75C2531.68 1029.32 2090.77 94.2808 1982.35 42.021Z" fill="#82B23F" />
                                <path d="M1973.71 760.603C2012.25 506.612 2012.48 261.946 1980.8 41.4881C1891.32 0.837379 1455.37 49.4051 1140.42 346.217C641.906 835.472 653.875 1479.79 653.875 1479.79C653.875 1479.79 637.452 1546.14 567.187 1449.95C413.489 1257.55 494.018 814.728 503.005 752.991C515.709 666.17 459.351 663.506 435.839 692.281C100.245 1150.17 150.87 1557.75 315.763 1852.24C480.81 2026.37 668.633 2140.83 842.589 2166.33C1338.39 2239.03 1844.72 1609.66 1973.71 760.603Z" fill="#B3E856" />
                                <path d="M1973.71 760.603C2012.25 506.612 2012.48 261.946 1980.8 41.4881C1891.32 0.837316 1544.07 142.049 1229.08 438.937C730.569 928.154 653.875 1479.79 653.875 1479.79C653.875 1479.79 637.452 1546.14 567.188 1449.95C413.49 1257.55 466.323 925.147 475.348 863.448C488.092 776.589 431.695 773.963 408.183 802.738C72.6272 1260.63 150.909 1557.78 315.84 1852.24C480.888 2026.37 668.71 2140.83 842.667 2166.33C1338.39 2239.03 1844.72 1609.66 1973.71 760.603Z" fill="#98D13F" />
                            </svg>

                        </Link>
                        <Link href="#" className="group" aria-label="TaxPal on GitHub">
                            <svg
                                className="h-6 w-6 fill-secondary-500 group-hover:fill-secondary-700"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-secondary-500 sm:mt-0">
                        Copyright &copy; 
                        {new Date().getFullYear()} {data.name}.  
                        {" "}{data.right}
                    </p>
                </div>
            </Container>
        </footer>
    )
}
