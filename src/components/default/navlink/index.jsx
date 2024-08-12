import Link from 'next/link'

export function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="inline-block rounded-lg px-2 py-1 text-sm text-secondary-700 hover:bg-secondary-100 hover:text-secondary-900"
        >
            {children}
        </Link>
    )
}
