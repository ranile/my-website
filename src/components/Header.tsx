import AnimatedBottomBorderLink from "./AnimatedBottomBorderLink"
import DarkModeIcon from "../icons/DarkMode"
import LightModeIcon from "../icons/LightMode"
import useDarkMode from "../hooks/useDarkMode"
import config from "../../config.json";

export default function Header() {
    const [darkModeEnabled, setDarkModeEnabled] = useDarkMode()

    const toggleDarkMode = () => {
        setDarkModeEnabled(!darkModeEnabled)
    }

    const themeChangeIconClasses =
        "w-6 h-6 transition ease-linear duration-200 dark:hover:text-pink-500"
    return (
        <header className="flex items-center justify-between px-5 py-6 shadow dark:shadow-lg md:px-20">
            <a href="/">
                <h3 className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-the-pink">
                    <img src='/favicon.svg' alt={config.title[0].toUpperCase()} />
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
