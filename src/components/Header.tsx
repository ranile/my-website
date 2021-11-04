import { PropsWithChildren } from 'react'

export default function Header(props: PropsWithChildren<{}>) {
    return (
        <header className="flex items-center justify-between px-5 md:px-20 py-6 shadow">
            <a href="/">
                <h3 className="rounded-full border-2 border-pink-500 h-8 w-8 flex items-center justify-center">
                    H
                </h3>
            </a>
            <nav className="flex gap-4">
                {props.children}
            </nav>
        </header>
    )
}
