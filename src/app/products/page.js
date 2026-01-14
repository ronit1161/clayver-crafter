"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { clsx } from "clsx";

const categories = ["All", "Accessories", "Decor", "Stationery"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-20 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">The Collection</h1>
        <p className="text-lg text-foreground/70">
          Explore our range of handcrafted ceramics, each unique and made with intention.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={clsx(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              selectedCategory === cat
                ? "bg-primary text-white shadow-md"
                : "bg-white text-foreground/70 hover:bg-stone-100"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {filteredProducts.map((product) => (
          <motion.div
            layout
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-foreground/50">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
