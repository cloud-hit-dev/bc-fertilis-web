'use client'

import Link from 'next/link'
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/ui/button'
import { Container } from '@/components/default/container'
import { Logo } from '@/components/default/logo'
import { NavLink } from '@/components/default/navlink'

function MobileNavLink({ href, children }) {
    return (
        <PopoverButton as={Link} href={href} className="block w-full p-2">
            {children}
        </PopoverButton>
    )
}

function MobileNavIcon({ open }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-secondary-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                )}
            />
        </svg>
    )
}

function MobileNavigation({ data }) {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none focus:ring-0 focus:outline-none active:bg-transparent hover:bg-transparent"
                aria-label="Toggle Navigation"
                style={{ color: '#yourColorCode', backgroundColor: 'transparent' }}
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </PopoverButton>
            <PopoverBackdrop
                transition
                className="fixed inset-0 bg-secondary-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <PopoverPanel
                transition
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-secondary-900 shadow-xl ring-1 ring-secondary-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
            >
                {data.tabs.map((tab, index) => <MobileNavLink href={tab.href} key={tab.name}>{tab.name}</MobileNavLink>)}
                <hr className="m-2 border-secondary-300/40" />
                <MobileNavLink href="https://web.whatsapp.com/">Whatsapp</MobileNavLink>
            </PopoverPanel>
        </Popover>
    )
}

export function Header() {
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
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                        <div className="hidden md:flex md:gap-x-6">
                            {data.tabs.map((tab, index) => <NavLink href={tab.href} key={tab.name}>{tab.name}</NavLink>)}
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <NavLink href="https://web.whatsapp.com/">Whatsapp</NavLink>
                        </div>
                        <Button href="/contact" color="blue">
                            <span>
                                Contactar <span className="hidden lg:inline">hoy</span>
                            </span>
                        </Button>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation data={data} />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
