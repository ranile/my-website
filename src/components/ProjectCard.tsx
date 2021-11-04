import { PropsWithChildren } from 'react'
import AnimatedBottomBorderLink from './AnimatedBottomBorderLink'

const Language = ({children}: PropsWithChildren<{}>) => {
    return <span className="text-sm">{children}</span>
}

export default function ProjectCard(props: { project: string }) {
    return (
        <article className="flex flex-col shadow-lg items-center h-56 max-w-sm px-5  gap-5
            hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold pt-4">
                {props.project}
            </h3>

            <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo enim asperiores
            </p>

            <section className="flex gap-4">
                <Language>Rust</Language>
                <Language>HTML</Language>
                <Language>SCSS</Language>
            </section>

            <AnimatedBottomBorderLink href={`https://github.com/hamza1311/${props.project}`}  className="pb-7 hover:before:w-6">
                <img style={{width: 24, height: 24}} src="/icons/GitHub-Dark.png" />
            </AnimatedBottomBorderLink>

        </article>
    )
}