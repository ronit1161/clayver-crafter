"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-20">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-stone-900">
          <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
             <Image
              src="/images/hero-bg.png"
              alt="Artist shaping clay"
              fill
              className="object-cover opacity-80 brightness-[0.8]"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 text-center text-white space-y-6 max-w-3xl z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-sm">
            Handmade with Joy
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90">
            Discover earthy, authentic clay pieces that bring warmth to your home.
          </p>
          <div className="pt-8">
            <Link href="/products">
              <Button size="lg" className="bg-white text-primary border-transparent hover:bg-stone-100 hover:text-primary-dark">
                Explore Collection
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section id="story" className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
             <Image
              src="/images/about-us.png"
              alt="Hands working with clay"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl text-primary font-bold">Earth to Heart</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              ClayverCrafter began with a simple lump of earth and a desire to create something tangible in a digital world. 
              Our pieces are slow-made, celebrating the imperfections that make them unique.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe in the power of touch and the emotional connection we share with the objects we use every day.
            </p>
            <Button variant="outline" onClick={() => window.open('https://instagram.com')}>
              Follow Our Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl text-primary font-bold">Featured Pieces</h2>
            <p className="text-foreground/60 mt-2">Curated favorites from the kiln.</p>
          </div>
          <Link href="/products">
            <Button variant="ghost">View All &rarr;</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
             <motion.div
               key={product.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
               <ProductCard product={product} />
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
