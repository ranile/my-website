import { PropsWithChildren } from 'react'

const AnimatedBottomBorderLink = ({children, href, pb = '2', className = '', target = ''}:  PropsWithChildren<{ href: string, pb: string, className?: string, target?: string }>) => {
    return (
        <a href={href} target={target} className={`
            relative pb-${pb}
            hover:before:w-full
            before:inline before:bg-pink-500 before:w-0 before:absolute before:h-0.5 before:bottom-0
            before:transition-all before:duration-200 before:ease-in
            ${className}
        `}>
            {children}
        </a>
    )
}

export default AnimatedBottomBorderLink