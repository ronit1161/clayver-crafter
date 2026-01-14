"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [variant, setVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
                setVariant("hover");
            } else {
                setVariant("default");
            }
        };

        document.addEventListener("mouseover", handleMouseOver);
        return () => document.removeEventListener("mouseover", handleMouseOver);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 16,
            width: 16,
            backgroundColor: "var(--primary)",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                mass: 0.1
            }
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "var(--primary)",
            opacity: 0.3,
            mixBlendMode: "normal",
            transition: {
                type: "spring",
                mass: 0.1
            }
        }
    };

    return (
        <>
            {/* Dot cursor (always visible/small) */}
            <motion.div
                className="fixed top-0 left-0 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                style={{ width: 8, height: 8 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            {/* Following ring/blob */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block"
                variants={variants}
                animate={variant}
            />
        </>
    );
}
