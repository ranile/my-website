import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ href: string, pb: string, className?: string, target?: string, ariaLabel?: string }>

const AnimatedBottomBorderLink = ({ children, href, pb = '2', className = '', target, ariaLabel }: Props) => {
    let props = {}
    if (ariaLabel) {
        props["aria-label"] = ariaLabel
    }

    if (target) {
        props["target"] = target
    }

    if (target === '_blank') {
        props["rel"] = "noopener"
    }

    return (
        <a href={href} {...props} className={`
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