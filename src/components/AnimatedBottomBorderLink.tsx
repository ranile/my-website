import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    href: string
    pb: string
    className?: string
    target?: string
    ariaLabel?: string
}>

const AnimatedBottomBorderLink = ({
    children,
    href,
    pb = "2",
    className = "",
    target,
    ariaLabel,
}: Props) => {
    const props: {
        "aria-label"?: string
        target?: string
        rel?: string
    } = {}
    if (ariaLabel) {
        props["aria-label"] = ariaLabel
    }

    if (target) {
        props.target = target
    }

    if (target === "_blank") {
        props.rel = "noopener"
    }

    return (
        <a
            href={href}
            {...props}
            className={`
            pb-${pb} relative
            before:absolute
            before:bottom-0 before:inline before:h-0.5 before:w-0 before:bg-pink-500 before:transition-all
            before:duration-200 before:ease-in hover:before:w-full
            ${className}
        `}
        >
            {children}
        </a>
    )
}

export default AnimatedBottomBorderLink
