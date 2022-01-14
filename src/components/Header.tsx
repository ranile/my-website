import AnimatedBottomBorderLink from "./AnimatedBottomBorderLink"
import DarkModeIcon from "../icons/DarkMode"
import LightModeIcon from "../icons/LightMode"
import useDarkMode from "../hooks/useDarkMode"

export default function Header() {
    const [darkModeEnabled, setDarkModeEnabled] = useDarkMode()

    const toggleDarkMode = () => {
        setDarkModeEnabled(!darkModeEnabled)
    }

    const themeChangeIconClasses =
        "w-6 h-6 transition ease-linear duration-200 dark:hover:text-pink-500"
    return (
        <header className="flex items-center justify-between px-5 md:px-20 py-6 shadow dark:shadow-lg">
            <a href="/">
                <h3 className="rounded-full border-2 border-pink-500 h-8 w-8 flex items-center justify-center">
                    H
                </h3>
            </a>
            <nav className="flex gap-4">
                <AnimatedBottomBorderLink href="/#projects" pb="1">
                    Projects
                </AnimatedBottomBorderLink>
                <AnimatedBottomBorderLink href="/#skills" pb="1">
                    Skills
                </AnimatedBottomBorderLink>
                <AnimatedBottomBorderLink href="/#contact" pb="1">
                    Contact
                </AnimatedBottomBorderLink>
                <AnimatedBottomBorderLink href="/blog" pb="1">
                    Blog
                </AnimatedBottomBorderLink>

                <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                    {darkModeEnabled ? (
                        <LightModeIcon
                            dimensions={6}
                            className={themeChangeIconClasses}
                        />
                    ) : (
                        <DarkModeIcon
                            dimensions={6}
                            className={themeChangeIconClasses}
                        />
                    )}
                </button>
            </nav>
        </header>
    )
}
