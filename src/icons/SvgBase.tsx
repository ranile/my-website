import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{ viewBox: string, className: string, rest: any }>

const SvgBase = (props: Props) => {
    const { 
        children, 
        viewBox = '0 0 24 24', 
        className = "w-12 h-12 fill-current text-black dark:text-white", 
        rest
    } = props

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} {...rest}>
            {children}
        </svg>
    )
}

export default SvgBase
