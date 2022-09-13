import SvgBase, { Props as SvgProps } from "./SvgBase"

const Resume = (props: SvgProps) => (
    <SvgBase {...props} viewBox="0 0 64 65">
        <path d="M37.33,5.33H16a5.35,5.35,0,0,0-5.33,5.33V53.33A5.33,5.33,0,0,0,16,58.67H48a5.35,5.35,0,0,0,5.33-5.33v-32ZM48,53.33H16V10.67H34.67V24H48Z" />
        <path d="M42,50H22V46H42Zm0-8H22V38H42Z" />
        <text
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.07em" }}
            transform="translate(22 35)"
        >
            CV
        </text>
    </SvgBase>
)

export default Resume
