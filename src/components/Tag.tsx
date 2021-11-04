import { PropsWithChildren } from "react";

export default function Tag(props: PropsWithChildren<{}>) {
    return (
        <span className="tag">
            {props.children}
        </span>
    )
}