import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const pages = [
        {
            name: "Home",
            path: "/",
            subpages: []
        },
        {
            name: "Sponsorships",
            path: "/sponsorships",
            subpages: [
                {
                    name: "Today's Sponsorships",
                    path: "/sponsorships/todays-sponsorships",
                },
                {
                    name: "Meal Calendar",
                    path: "/sponsorships/meal-calendar",
                },
                {
                    name: "Support Requests",
                    path: "/sponsorships/support-requests",
                },
            ]
        },
        {
            name: "Gallery",
            path: "/gallery",
            subpages: [
                {
                    name: "Today's Images",
                    path: "/gallery/todays-images",
                },
                {
                    name: "Image Library",
                    path: "/gallery/image-library",
                },
            ]
        },
        {
            name: "About Us",
            path: "/about-us",
            subpages: []
        },
        {
            name: "Contact Us",
            path: "/contact-us",
            subpages: []
        },
    ];

    return (
        <header className="sticky top-0 z-30 min-h-84px w-full bg-seafoam-300 backdrop-blur-md">
            <div className="relative flex items-center justify-between px-5 py-5 sm:px-8 md:px-12 md:pr-14">
                <div id="logo">
                    <Link href="/">
                        <Image alt="Hrudaya Shanthi Old Age Home Logo" height={56} width={120} src="/Logo.png" />
                    </Link>
                </div>
                <nav id="navbar" className="flex items-center justify-between">
                    {pages.map((page) => {
                        return (
                            <Link href={page.path} key={page.name}>
                                {page.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    );
}