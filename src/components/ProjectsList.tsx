import AnimatedBottomBorderLink from "./AnimatedBottomBorderLink"
import HoverableTag from "./HoverableTag"
import GitHubIcon from "../icons/GitHub"
import config from "../../config.json"

const ProjectsList = () => {
    return (
        <div
            className="m-8 grid w-full items-stretch justify-items-center gap-8 px-10 lg:gap-6"
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
            }}
        >
            {config.projects.map((it) => {
                const tagSize = it.languages.map((l) => l.length).sort()[0] + 4
                return (
                    <article
                        key={it.title}
                        className="flex max-w-sm flex-col items-center gap-5 px-5 shadow-lg transition
                        duration-200 ease-in-out hover:-translate-y-3 dark:shadow-xl"
                    >
                        <h3 className="pt-4 text-xl font-bold">{it.title}</h3>

                        <p className="mb-auto text-center">{it.description}</p>

                        <div className="flex w-full grow flex-col items-center gap-5 pb-2">
                            <section
                                className="grid w-full grow items-center justify-items-center gap-4"
                                style={{
                                    gridTemplateColumns: `repeat(auto-fit, minmax(${tagSize}ch, 1fr))`,
                                }}
                            >
                                {it.languages.map((lang) => (
                                    <HoverableTag
                                        className="text-sm"
                                        key={lang}
                                        style={{
                                            width: `${tagSize}ch`,
                                        }}
                                    >
                                        {lang}
                                    </HoverableTag>
                                ))}
                            </section>

                            <AnimatedBottomBorderLink
                                href={`https://github.com/${it.github}`}
                                target="_blank"
                                ariaLabel={`${it.title} on GitHub`}
                            >
                                <GitHubIcon dimensions={8} />
                            </AnimatedBottomBorderLink>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProjectsList
