import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

interface PropsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
    animation?: string;
    link: true;
}

interface PropsSpan extends HTMLAttributes<HTMLSpanElement> {
    animation?: string;
    link?: false;
}

type Props = PropsWithChildren<PropsLink | PropsSpan>;


const HoverableTag = ({
    animation = "duration-200 ease-in-out",
    link = false,
    children,
    className = '',
    ...rest
}: Props) => {
    const Element = link ? "a" : "span"

    return (
        <Element
            {...rest}
            className={`p-3 text-center shadow-lg transition hover:-translate-y-2 dark:shadow-xl ${animation} ${className}`}
        >
            {children}
        </Element>
    )
}

export default HoverableTag