import { PropsWithChildren } from "react"

export type Props = PropsWithChildren<{
    viewBox?: string
    dimensions?: number
    className?: string
    rest?: object
}>

const SvgBase = (props: Props) => {
    const {
        viewBox = "0 0 24 24",
        dimensions = 12,
        className = "",
        rest,
    } = props

    const classes = `w-${dimensions} h-${dimensions} fill-current text-black dark:text-white ${className}`

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
            viewBox={viewBox}
            {...rest}
        >
            {props.children}
        </svg>
    )
}

export default SvgBase
