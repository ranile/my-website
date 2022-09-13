interface Props {
    title: string
    date: string
    description: string
    url: string
}

export default function BlogPostPreview({
    title,
    date,
    description,
    url,
}: Props) {
    return (
        <a href={url}>
            <article className="flex flex-col gap-2 rounded-2xl bg-pink-200/20 p-4 shadow-md transition duration-200 hover:scale-105 dark:shadow-xl">
                <span className="text-sm">{date}</span>
                <h3 className="text-xl font-bold md:text-xl lg:text-2xl">
                    {title}
                </h3>
                <p>{description}</p>
            </article>
        </a>
    )
}
