
# E-Commerce Product Catalog

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS, showcasing products from the FakeStore API.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/e-commerce-catalog.git
   cd e-commerce-catalog
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── CategoryFilter.tsx
│   ├── ErrorDisplay.tsx
│   ├── LoadingSpinner.tsx
│   ├── ProductCard.tsx
│   ├── ProductSkeleton.tsx
│   └── SearchBar.tsx
├── pages/              # Page components
│   ├── Products.tsx    # Main product listing page
│   ├── ProductDetail.tsx # Product detail page
│   └── NotFound.tsx    # 404 page
├── services/           # API services
│   └── api.ts          # FakeStore API service
└── App.tsx             # Application routes
```

## Data Fetching Strategy

This project uses React Query for data fetching, which provides:

1. **Automatic caching**: Products are cached to minimize API calls
2. **Loading and error states**: Simplified handling of loading and error states
3. **Refetch capabilities**: Easy refetching of data when needed
4. **TypeScript integration**: Type-safe data fetching

Products data is fetched client-side using React Query's hooks, allowing for a smooth user experience with automatic loading states and error handling.

## Styling

The project uses Tailwind CSS for styling, providing:

1. Utility-first approach for rapid UI development
2. Responsive design out of the box
3. Consistency in design
4. Easy customization

## Features

- **Product Listing**: Grid layout showcasing all products with image, title, price, and category
- **Product Details**: Detailed view of each product with full description
- **Category Filtering**: Filter products by category
- **Search Functionality**: Search products by title or description
- **Loading States**: Skeleton loaders for better user experience
- **Error Handling**: User-friendly error messages
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Navigation**: Easy navigation between product listing and details pages

## License

MIT

