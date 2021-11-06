import { PropsWithChildren } from 'react'
import AnimatedBottomBorderLink from './AnimatedBottomBorderLink'

const Language = ({children}: PropsWithChildren<{}>) => {
    return <span className="text-sm">{children}</span>
}

interface Props { 
    title: string
    link: string
    description: string,
    languages: string[]
}

export default function ProjectCard(props: Props) {
    return (
        <article className="flex flex-col shadow-lg items-center h-56 max-w-sm px-5  gap-5
            hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold pt-4">
                {props.title}
            </h3>

            <p className="text-center">
                {props.description}
            </p>

            <section className="flex gap-4">
                {props.languages.map(lang => <Language>{lang}</Language>)}
            </section>

            <AnimatedBottomBorderLink href={`https://github.com/${props.link}`}  className="pb-7 hover:before:w-6">
                <img style={{width: 24, height: 24}} src="/icons/GitHub-Dark.png" />
            </AnimatedBottomBorderLink>

        </article>
    )
}