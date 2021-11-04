import { PropsWithChildren } from 'react'

const AnimatedBottomBorderLink = ({children, href, className}:  PropsWithChildren<{ href: string, className?: string }>) => {
    return <span>
        <a href={href} className={`
            relative pb-1
            hover:before:w-full
            before:inline before:bg-pink-500 before:w-0 before:absolute before:h-0.5 before:bottom-0
            before:transition-all before:duration-200 before:ease-in
            ${className}
        `}>
            {children}
        </a>
    </span>
}

export default AnimatedBottomBorderLink