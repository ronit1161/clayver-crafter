# Clayver Crafter 🏺

**Clayver Crafter** is a beautifully designed web application dedicated to showcasing handmade clay art. It serves as a digital gallery and store for earthy, authentic clay pieces, emphasizing the warmth and imperfection of handcrafted items.

This project is built with **Next.js 16**, **React 19**, and styled with **Tailwind CSS v4**, featuring smooth animations powered by **Framer Motion**.

## ✨ Features

- **Immersive Hero Section**: A parallax-effect hero section that draws users in with high-quality visuals.
- **Brand Storytelling**: dedicated sections to share the "Earth to Heart" philosophy behind the art.
- **Product Showcase**: Dynamic product grids featuring highlighted pieces and categories.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Smooth Animations**: Interactive UI elements using `framer-motion` for reveal effects and scroll transitions.
- **Dark/Light Mode**: (Supported via `next-themes`)

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utils**: `clsx`, `tailwind-merge`

## 🚀 Getting Started

Follow these steps to get the project up and running locally:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ronit1161/clayver-crafter.git
   cd clayver-crafter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
clayver-crafter/
├── src/
│   ├── app/           # Next.js App Router pages and layouts
│   ├── components/    # Reusable UI components
│   │   ├── layout/    # Navbar, Footer, etc.
│   │   └── ui/        # Buttons, Cards, Inputs, etc.
│   ├── data/          # Static data files (e.g., products)
│   ├── contexts/      # React contexts (Theme, state)
│   └── styles/        # Global styles
├── public/            # Static assets (images, icons)
└── ...config files    # Next.js, Tailwind, ESLint configs
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
