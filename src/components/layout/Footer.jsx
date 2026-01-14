import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
    return (
        <footer className="bg-white border-t border-stone-200 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-bold text-primary tracking-tight">ClayverCrafter</h3>
                        <p className="text-foreground/80 max-w-sm">
                            Handcrafted clay art made with joy. Each piece tells a story of earth, fire, and creativity.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Explore</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/products" className="text-foreground/70 hover:text-primary transition-colors">Collection</Link></li>
                            <li><Link href="/#story" className="text-foreground/70 hover:text-primary transition-colors">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-stone rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-stone rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                            <a href="#" className="p-2 bg-stone rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Phone size={20} />
                            </a>
                        </div>
                        <div className="pt-4">
                            <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent">
                                Subscribe to updates &rarr;
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-100 text-center text-sm text-foreground/50">
                    &copy; {new Date().getFullYear()} ClayverCrafter. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
