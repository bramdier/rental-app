# Rental HT Abradhe - Professional Equipment Rental Website

A modern, clean rental website built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful hero section, product listings, testimonials, and a simple CMS for content management.

## Features

- 🎨 **Modern, Clean UI** - Beautiful, responsive design with smooth animations
- 🚀 **Classy Hero Section** - Eye-catching hero with gradients and modern styling
- 📦 **Product Management** - Display rental equipment with detailed information
- 💬 **Testimonials** - Showcase customer reviews and ratings
- 🔧 **Simple CMS** - Easy-to-use admin panel for managing content
- 📱 **Fully Responsive** - Works perfectly on all devices

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CMS Admin Panel

Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

**Default Password:** `admin123`

To change the password, set the `ADMIN_PASSWORD` environment variable:

```bash
# Create a .env.local file
ADMIN_PASSWORD=your_secure_password
```

### CMS Features

- **Product Management**: Add, edit, and delete rental products
- **Testimonial Management**: Manage customer testimonials and ratings
- **Simple Authentication**: Password-protected admin access
- **Data Storage**: Content is stored in JSON files in the `data/` directory

## Project Structure

```
src/
├── app/
│   ├── admin/          # CMS admin panel
│   ├── api/            # API routes for CMS
│   ├── components/     # React components
│   ├── data/          # Initial data (legacy)
│   └── types/         # TypeScript types
├── lib/
│   └── data.ts        # Data management utilities
└── public/
    └── images/        # Product images
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
