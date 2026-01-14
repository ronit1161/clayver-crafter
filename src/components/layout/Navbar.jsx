"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "About", href: "/#story" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-stone/80 backdrop-blur-md border-stone-200/50 py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
                        ClayverCrafter
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-foreground/80"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm" onClick={() => window.open('https://instagram.com', '_blank')}>
                            Contact
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-stone-200 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center shadow-lg">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-primary py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="primary" className="w-full" onClick={() => window.open('https://instagram.com', '_blank')}>
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
