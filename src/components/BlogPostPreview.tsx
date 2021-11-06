export default function BlogPostPreview({ title, date, description, url }: { title: string, date: string, description: string, url: string }) {
    return (
        <a href={url}>
            <article className="flex flex-col gap-2 bg-pink-200 bg-opacity-20 p-4 shadow-md rounded-2xl">
                <span className="text-sm">{date}</span>
                <h3 className="text-xl md:text-xl lg:text-2xl font-bold">{title}</h3>
                <p>{description}</p>
            </article>
        </a>
    )
}