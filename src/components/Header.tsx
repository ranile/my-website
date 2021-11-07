import AnimatedBottomBorderLink from './AnimatedBottomBorderLink'

export default function Header() {
    return (
        <header className="flex items-center justify-between px-5 md:px-20 py-6 shadow">
            <a href="/">
                <h3 className="rounded-full border-2 border-pink-500 h-8 w-8 flex items-center justify-center">
                    H
                </h3>
            </a>
            <nav className="flex gap-4">
                <AnimatedBottomBorderLink href="/#projects" pb="1">Projects</AnimatedBottomBorderLink>
                <AnimatedBottomBorderLink href="/#skills" pb="1">Skills</AnimatedBottomBorderLink>
                <AnimatedBottomBorderLink href="/#contact" pb="1">Contact</AnimatedBottomBorderLink>
                <AnimatedBottomBorderLink href="/blog" pb="1">Blog</AnimatedBottomBorderLink>
            </nav>
        </header>
    )
}
