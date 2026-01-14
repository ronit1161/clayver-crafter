"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function ProductCard({ product }) {
    return (
        <motion.div
            className="group cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100 mb-4">
                <Image
                    src={product.images[0] || "/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay / Hover Action */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="primary" className="transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-75">
                        View Details
                    </Button>
                </div>
            </div>

            <div className="space-y-1">
                <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-foreground/60">{product.category}</p>
                {/* Price hidden for now, but ready */}
                {/* <p className="text-sm font-semibold text-primary">{product.price}</p> */}
            </div>
        </motion.div>
    );
}
