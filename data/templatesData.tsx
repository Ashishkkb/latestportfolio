// data/templatesData.tsx
import React, { useState } from "react";

export interface MarketplaceItem {
  name: string;
  price: string;
  link: string;
  // demo is a React Functional Component
  demo: React.FC;
  code: string;
}

export const templates: MarketplaceItem[] = [
    {
      name: "AI-Powered Portfolio",
      price: "$49.99",
      link: "/templates/ai-portfolio",
      demo: () => (
        <div className="w-full h-40 bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">AI Portfolio</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-500 h-4 rounded"></div>
              <div className="bg-green-500 h-4 rounded"></div>
              <div className="bg-purple-500 h-4 rounded"></div>
            </div>
          </div>
        </div>
      ),
      code: `
  function AIPortfolio() {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">AI Portfolio</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-500 h-4 rounded"></div>
          <div className="bg-green-500 h-4 rounded"></div>
          <div className="bg-purple-500 h-4 rounded"></div>
        </div>
      </div>
    );
  }
      `,
    },
    {
      name: "VR Experience Showcase",
      price: "$79.99",
      link: "/templates/vr-showcase",
      demo: () => (
        <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-white rounded-full"></div>
            <div className="absolute inset-2 border-4 border-blue-500 rounded-full transform rotate-45"></div>
          </div>
        </div>
      ),
      code: `
  function VRShowcase() {
    return (
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-white rounded-full"></div>
        <div className="absolute inset-2 border-4 border-blue-500 rounded-full transform rotate-45"></div>
      </div>
    );
  }
      `,
    },
    {
      name: "E-commerce Dashboard",
      price: "$89.99",
      link: "/templates/ecommerce-dashboard",
      demo: () => (
        <div className="w-full h-40 bg-gray-800 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-gray-700 rounded-lg p-2">
              <div className="text-sm text-gray-400">Revenue</div>
              <div className="text-lg font-bold text-white">$12,345</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2">
              <div className="text-sm text-gray-400">Orders</div>
              <div className="text-lg font-bold text-white">1,234</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2">
              <div className="text-sm text-gray-400">Customers</div>
              <div className="text-lg font-bold text-white">5,678</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2">
              <div className="text-sm text-gray-400">Conversion</div>
              <div className="text-lg font-bold text-white">3.45%</div>
            </div>
          </div>
        </div>
      ),
      code: `
  function EcommerceDashboard() {
    return (
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="bg-gray-700 rounded-lg p-2">
          <div className="text-sm text-gray-400">Revenue</div>
          <div className="text-lg font-bold text-white">$12,345</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-2">
          <div className="text-sm text-gray-400">Orders</div>
          <div className="text-lg font-bold text-white">1,234</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-2">
          <div className="text-sm text-gray-400">Customers</div>
          <div className="text-lg font-bold text-white">5,678</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-2">
          <div className="text-sm text-gray-400">Conversion</div>
          <div className="text-lg font-bold text-white">3.45%</div>
        </div>
      </div>
    );
  }
      `,
    },
    // --- Additional "Big" Excellent Templates ---
    {
      name: "Enterprise Landing Page",
      price: "$129.99",
      link: "/templates/enterprise-landing",
      demo: () => (
        <div className="w-full h-96 bg-gradient-to-r from-purple-800 to-blue-800 rounded-lg p-8 text-white">
          <header className="mb-6">
            <h1 className="text-4xl font-bold">Enterprise Solutions</h1>
            <p className="mt-2 text-lg">Innovative solutions for large-scale businesses</p>
          </header>
          <section className="flex flex-wrap gap-4">
            <div className="flex-1 bg-gray-700 p-4 rounded">
              <h2 className="text-xl font-semibold">Scalability</h2>
              <p>Grow without limits.</p>
            </div>
            <div className="flex-1 bg-gray-700 p-4 rounded">
              <h2 className="text-xl font-semibold">Security</h2>
              <p>Protect your data with top-notch security.</p>
            </div>
            <div className="flex-1 bg-gray-700 p-4 rounded">
              <h2 className="text-xl font-semibold">Performance</h2>
              <p>Experience lightning-fast performance.</p>
            </div>
          </section>
          <footer className="mt-6 text-center">
            <button className="bg-blue-500 px-6 py-3 rounded-lg font-bold">Get Started</button>
          </footer>
        </div>
      ),
      code: `
  function EnterpriseLandingPage() {
    return (
      <div className="w-full h-96 bg-gradient-to-r from-purple-800 to-blue-800 rounded-lg p-8 text-white">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Enterprise Solutions</h1>
          <p className="mt-2 text-lg">Innovative solutions for large-scale businesses</p>
        </header>
        <section className="flex flex-wrap gap-4">
          <div className="flex-1 bg-gray-700 p-4 rounded">
            <h2 className="text-xl font-semibold">Scalability</h2>
            <p>Grow without limits.</p>
          </div>
          <div className="flex-1 bg-gray-700 p-4 rounded">
            <h2 className="text-xl font-semibold">Security</h2>
            <p>Protect your data with top-notch security.</p>
          </div>
          <div className="flex-1 bg-gray-700 p-4 rounded">
            <h2 className="text-xl font-semibold">Performance</h2>
            <p>Experience lightning-fast performance.</p>
          </div>
        </section>
        <footer className="mt-6 text-center">
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-bold">Get Started</button>
        </footer>
      </div>
    );
  }
      `,
    },
    {
      name: "Advanced E-commerce Storefront",
      price: "$149.99",
      link: "/templates/advanced-storefront",
      demo: () => (
        <div className="w-full h-96 bg-white rounded-lg shadow-lg p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Shop the Future</h1>
            <p className="text-gray-500">Discover the latest trends and innovations</p>
          </header>
          <section className="grid grid-cols-3 gap-4 flex-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-24 rounded"></div>
            ))}
          </section>
          <footer className="mt-6 text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold">
              Shop Now
            </button>
          </footer>
        </div>
      ),
      code: `
  function AdvancedEcommerceStorefront() {
    return (
      <div className="w-full h-96 bg-white rounded-lg shadow-lg p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Shop the Future</h1>
          <p className="text-gray-500">Discover the latest trends and innovations</p>
        </header>
        <section className="grid grid-cols-3 gap-4 flex-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-24 rounded"></div>
          ))}
        </section>
        <footer className="mt-6 text-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold">
            Shop Now
          </button>
        </footer>
      </div>
    );
  }
      `,
    },
    {
      name: "Corporate Website Template",
      price: "$99.99",
      link: "/templates/corporate-website",
      demo: () => (
        <div className="w-full h-96 bg-gray-100 rounded-lg p-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Corporate Excellence</h1>
            <p className="mt-2 text-gray-600">Delivering quality and innovation for your enterprise</p>
          </header>
          <section className="flex justify-around mb-6">
            <div className="w-1/4 bg-white shadow p-4 rounded">
              <h2 className="font-semibold">Our Mission</h2>
              <p className="text-sm text-gray-500">To provide exceptional services.</p>
            </div>
            <div className="w-1/4 bg-white shadow p-4 rounded">
              <h2 className="font-semibold">Our Vision</h2>
              <p className="text-sm text-gray-500">Leading the market in innovation.</p>
            </div>
            <div className="w-1/4 bg-white shadow p-4 rounded">
              <h2 className="font-semibold">Our Values</h2>
              <p className="text-sm text-gray-500">Integrity, Excellence, Commitment.</p>
            </div>
          </section>
          <footer className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">Learn More</button>
          </footer>
        </div>
      ),
      code: `
  function CorporateWebsiteTemplate() {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Corporate Excellence</h1>
          <p className="mt-2 text-gray-600">Delivering quality and innovation for your enterprise</p>
        </header>
        <section className="flex justify-around mb-6">
          <div className="w-1/4 bg-white shadow p-4 rounded">
            <h2 className="font-semibold">Our Mission</h2>
            <p className="text-sm text-gray-500">To provide exceptional services.</p>
          </div>
          <div className="w-1/4 bg-white shadow p-4 rounded">
            <h2 className="font-semibold">Our Vision</h2>
            <p className="text-sm text-gray-500">Leading the market in innovation.</p>
          </div>
          <div className="w-1/4 bg-white shadow p-4 rounded">
            <h2 className="font-semibold">Our Values</h2>
            <p className="text-sm text-gray-500">Integrity, Excellence, Commitment.</p>
          </div>
        </section>
        <footer className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">Learn More</button>
        </footer>
      </div>
    );
  }
      `,
    },
    {
      name: "Sleek Agency Portfolio",
      price: "$119.99",
      link: "/templates/sleek-agency",
      demo: () => (
        <div className="w-full h-96 bg-black rounded-lg p-8 text-white">
          <header className="text-center mb-8">
            <h1 className="text-5xl font-bold">Sleek Agency</h1>
            <p className="mt-2 text-lg">We build brands that last.</p>
          </header>
          <section className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-700 h-24 rounded"></div>
            <div className="bg-gray-700 h-24 rounded"></div>
            <div className="bg-gray-700 h-24 rounded"></div>
            <div className="bg-gray-700 h-24 rounded"></div>
          </section>
          <footer className="text-center">
            <button className="bg-red-500 px-6 py-3 rounded-lg font-bold">View Portfolio</button>
          </footer>
        </div>
      ),
      code: `
  function SleekAgencyPortfolio() {
    return (
      <div className="w-full h-96 bg-black rounded-lg p-8 text-white">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold">Sleek Agency</h1>
          <p className="mt-2 text-lg">We build brands that last.</p>
        </header>
        <section className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-700 h-24 rounded"></div>
          <div className="bg-gray-700 h-24 rounded"></div>
          <div className="bg-gray-700 h-24 rounded"></div>
          <div className="bg-gray-700 h-24 rounded"></div>
        </section>
        <footer className="text-center">
          <button className="bg-red-500 px-6 py-3 rounded-lg font-bold">View Portfolio</button>
        </footer>
      </div>
    );
  }
      `,
    },
  ];
  
export const components: MarketplaceItem[] = [
  {
    name: "3D Carousel",
    price: "Free",
    link: "/components/3d-carousel",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="animate-spin w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
    ),
    code: `
  function Carousel() {
    return (
      <div className="animate-spin w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    )
  }
      `,
  },
  {
    name: "AI Chat Widget",
    price: "Free",
    link: "/components/ai-chat-widget",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-[80%]">
              Hello! How can I assist you today?
            </div>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
          />
        </div>
      </div>
    ),
    code: `
  function ChatWidget() {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-[80%]">
            Hello! How can I assist you today?
          </div>
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded-lg bg-gray-700 text-white"
        />
      </div>
    )
  }
      `,
  },
  {
    name: "Interactive Data Visualization",
    price: "$19.99",
    link: "/components/data-viz",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4 flex items-end justify-around">
        {[40, 60, 30, 70, 50].map((height, index) => (
          <div
            key={index}
            className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    ),
    code: `
  function DataVisualization() {
    const data = [40, 60, 30, 70, 50]
    return (
      <div className="flex items-end justify-around h-full">
        {data.map((height, index) => (
          <div
            key={index}
            className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
            style={{height: \`\${height}%\`}}
          ></div>
        ))}
      </div>
    )
  }
      `,
  },
  {
    name: "AR Product Viewer",
    price: "$29.99",
    link: "/components/ar-product-viewer",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="w-20 h-20 bg-white rounded-lg transform rotate-45 absolute"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">AR View</span>
        </div>
      </div>
    ),
    code: `
  function ARViewer() {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="w-20 h-20 bg-white rounded-lg transform rotate-45 absolute"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">AR View</span>
        </div>
      </div>
    )
  }
      `,
  },
  {
    name: "Voice-Controlled UI",
    price: "$24.99",
    link: "/components/voice-ui",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
    code: `
  function VoiceUI() {
    return (
      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
      </div>
    )
  }
      `,
  },
  {
    name: "Animated Progress Tracker",
    price: "$14.99",
    link: "/components/progress-tracker",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    ),
    code: `
  function ProgressTracker() {
    return (
      <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
        <div className="w-1/2 h-full bg-green-500 rounded-full animate-pulse"></div>
      </div>
    )
  }
      `,
  },
  {
    name: "Responsive Grid Layout",
    price: "Free",
    link: "/components/responsive-grid",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-600 rounded-lg"></div>
          ))}
        </div>
      </div>
    ),
    code: `
  function ResponsiveGrid() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-600 rounded-lg"></div>
        ))}
      </div>
    )
  }
      `,
  },
  {
    name: "Animated Notification Badge",
    price: "$9.99",
    link: "/components/notification-badge",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full animate-pulse">
            99+
          </span>
        </div>
      </div>
    ),
    code: `
  function NotificationBadge() {
    return (
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full animate-pulse">
          99+
        </span>
      </div>
    )
  }
      `,
  },
  {
    name: "Customizable Theme Switcher",
    price: "$19.99",
    link: "/components/theme-switcher",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
          <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
        </div>
      </div>
    ),
    code: `
  function ThemeSwitcher() {
    return (
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
        <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
        <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
      </div>
    )
  }
      `,
  },
  {
    name: "Drag and Drop File Uploader",
    price: "$24.99",
    link: "/components/file-uploader",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="mt-1 text-sm text-gray-400">
            Drag and drop your files here
          </p>
        </div>
      </div>
    ),
    code: `
  function FileUploader() {
    return (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="mt-1 text-sm text-gray-400">Drag and drop your files here</p>
        </div>
      </div>
    )
  }
      `,
  },
  // 10 Additional Components
  {
    name: "Notification Center",
    price: "$12.99",
    link: "/components/notification-center",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4">
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-700 p-2 rounded">New message received</div>
          <div className="bg-gray-700 p-2 rounded">Server update available</div>
          <div className="bg-gray-700 p-2 rounded">
            Your download is complete
          </div>
        </div>
      </div>
    ),
    code: `
  function NotificationCenter() {
    return (
      <div className="flex flex-col space-y-2">
        <div className="bg-gray-700 p-2 rounded">New message received</div>
        <div className="bg-gray-700 p-2 rounded">Server update available</div>
        <div className="bg-gray-700 p-2 rounded">Your download is complete</div>
      </div>
    )
  }
      `,
  },
  {
    name: "Interactive Calendar",
    price: "$15.99",
    link: "/components/interactive-calendar",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4">
        <div className="grid grid-cols-7 gap-1 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-sm font-bold text-gray-300">
              {day}
            </div>
          ))}
          {[...Array(28)].map((_, i) => (
            <div key={i} className="p-2 bg-gray-700 rounded">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
    code: `
  function InteractiveCalendar() {
    return (
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm font-bold text-gray-300">
            {day}
          </div>
        ))}
        {[...Array(28)].map((_, i) => (
          <div key={i} className="p-2 bg-gray-700 rounded">
            {i + 1}
          </div>
        ))}
      </div>
    )
  }
      `,
  },
  {
    name: "Chat Bubble Component",
    price: "Free",
    link: "/components/chat-bubble",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center p-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
          Hi there! This is a chat bubble.
        </div>
      </div>
    ),
    code: `
  function ChatBubble() {
    return (
      <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
        Hi there! This is a chat bubble.
      </div>
    )
  }
      `,
  },
  {
    name: "Image Gallery",
    price: "$29.99",
    link: "/components/image-gallery",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg grid grid-cols-3 gap-2 p-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-600 rounded-lg"></div>
        ))}
      </div>
    ),
    code: `
  function ImageGallery() {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-600 rounded-lg"></div>
        ))}
      </div>
    )
  }
      `,
  },
  {
    name: "Video Player",
    price: "$39.99",
    link: "/components/video-player",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="w-64 h-36 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white">Video Player</span>
        </div>
      </div>
    ),
    code: `
  function VideoPlayer() {
    return (
      <div className="flex items-center justify-center">
        <div className="w-64 h-36 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white">Video Player</span>
        </div>
      </div>
    )
  }
      `,
  },
  {
    name: "Countdown Timer",
    price: "Free",
    link: "/components/countdown-timer",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">00:10:23</span>
        <span className="text-sm text-gray-400">Time remaining</span>
      </div>
    ),
    code: `
  function CountdownTimer() {
    return (
      <div className="flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">00:10:23</span>
        <span className="text-sm text-gray-400">Time remaining</span>
      </div>
    )
  }
      `,
  },
  {
    name: "Weather Widget",
    price: "$19.99",
    link: "/components/weather-widget",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10a1 1 0 011-1h3V6a1 1 0 112 0v3h3a1 1 0 010 2h-3v3a1 1 0 11-2 0v-3H4a1 1 0 01-1-1z"
            />
          </svg>
          <div>
            <div className="text-2xl font-bold">72°F</div>
            <div className="text-sm text-gray-400">Sunny</div>
          </div>
        </div>
      </div>
    ),
    code: `
  function WeatherWidget() {
    return (
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10a1 1 0 011-1h3V6a1 1 0 112 0v3h3a1 1 0 010 2h-3v3a1 1 0 11-2 0v-3H4a1 1 0 01-1-1z"
          />
        </svg>
        <div>
          <div className="text-2xl font-bold">72°F</div>
          <div className="text-sm text-gray-400">Sunny</div>
        </div>
      </div>
    )
  }
      `,
  },
  {
    name: "Social Media Feed",
    price: "$29.99",
    link: "/components/social-media-feed",
    demo: () => (
      <div className="w-full h-40 bg-gray-800 rounded-lg p-4 overflow-y-auto">
        <div className="space-y-2">
          <div className="bg-gray-700 p-2 rounded">User1: This is a post.</div>
          <div className="bg-gray-700 p-2 rounded">
            User2: Another post here.
          </div>
          <div className="bg-gray-700 p-2 rounded">
            User3: Yet another interesting post.
          </div>
        </div>
      </div>
    ),
    code: `
  function SocialMediaFeed() {
    return (
      <div className="space-y-2">
        <div className="bg-gray-700 p-2 rounded">User1: This is a post.</div>
        <div className="bg-gray-700 p-2 rounded">User2: Another post here.</div>
        <div className="bg-gray-700 p-2 rounded">User3: Yet another interesting post.</div>
      </div>
    )
  }
      `,
  },
  {
    name: "Responsive Navbar",
    price: "Free",
    link: "/components/responsive-navbar",
    demo: () => (
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="text-lg font-bold">Logo</div>
        <ul className="hidden md:flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden">
          <button>Menu</button>
        </div>
      </nav>
    ),
    code: `
  function ResponsiveNavbar() {
    return (
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="text-lg font-bold">Logo</div>
        <ul className="hidden md:flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden">
          <button>Menu</button>
        </div>
      </nav>
    );
  }
      `,
  },
  {
    name: "Footer Section",
    price: "Free",
    link: "/components/footer-section",
    demo: () => (
      <footer className="bg-gray-800 text-gray-300 p-6 text-center">
        <p>&copy; 2025 Company Name. All rights reserved.</p>
      </footer>
    ),
    code: `
  function FooterSection() {
    return (
      <footer className="bg-gray-800 text-gray-300 p-6 text-center">
        <p>&copy; 2025 Company Name. All rights reserved.</p>
      </footer>
    );
  }
      `,
  },
  {
    name: "Sidebar Menu",
    price: "Free",
    link: "/components/sidebar-menu",
    demo: () => (
      <aside className="w-64 h-full bg-gray-900 text-white p-4">
        <ul className="space-y-2">
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
    ),
    code: `
  function SidebarMenu() {
    return (
      <aside className="w-64 h-full bg-gray-900 text-white p-4">
        <ul className="space-y-2">
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
    );
  }
      `,
  },
  {
    name: "Image Carousel",
    price: "Free",
    link: "/components/image-carousel",
    demo: () => (
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src="https://via.placeholder.com/800x400"
          className="w-full h-full object-cover"
          alt="Slide 1"
        />
      </div>
    ),
    code: `
  function ImageCarousel() {
    return (
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src="https://via.placeholder.com/800x400"
          className="w-full h-full object-cover"
          alt="Slide 1"
        />
      </div>
    );
  }
      `,
  },
  {
    name: "Modal Dialog",
    price: "Free",
    link: "/components/modal-dialog",
    demo: () => {
      const [open, setOpen] = useState(false);
      return (
        <div className="relative">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Open Modal
          </button>
          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p className="mb-4">This is a modal dialog.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      );
    },
    code: `
    import { useState } from 'react';
    
    function ModalDialog() {
      const [open, setOpen] = useState(false);
      return (
        <div className="relative">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Open Modal
          </button>
          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p className="mb-4">This is a modal dialog.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
      `,
  },
  {
    name: "Toast Notification",
    price: "Free",
    link: "/components/toast-notification",
    demo: () => {
      const [visible, setVisible] = useState(false);

      const handleShowToast = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000); // auto dismiss after 3 seconds
      };

      return (
        <div>
          <button
            onClick={handleShowToast}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Show Toast
          </button>
          {visible && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
              <p>Success! Action completed.</p>
            </div>
          )}
        </div>
      );
    },
    code: `
    import { useState } from 'react';
    
    function ToastNotification() {
      const [visible, setVisible] = useState(false);
    
      const handleShowToast = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
      };
    
      return (
        <div>
          <button
            onClick={handleShowToast}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Show Toast
          </button>
          {visible && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
              <p>Success! Action completed.</p>
            </div>
          )}
        </div>
      );
    }
      `,
  },
  {
    name: "Loading Spinner",
    price: "Free",
    link: "/components/loading-spinner",
    demo: () => (
      <div className="flex items-center justify-center h-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      </div>
    ),
    code: `
  function LoadingSpinner() {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }
      `,
  },
  {
    name: "Accordion",
    price: "Free",
    link: "/components/accordion",
    demo: () => (
      <div className="w-full max-w-md mx-auto">
        <div className="border rounded">
          <button className="w-full text-left p-4 font-bold">
            Accordion Header
          </button>
          <div className="p-4">Accordion content goes here.</div>
        </div>
      </div>
    ),
    code: `
  function Accordion() {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="border rounded">
          <button className="w-full text-left p-4 font-bold">Accordion Header</button>
          <div className="p-4">Accordion content goes here.</div>
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Tabs",
    price: "Free",
    link: "/components/tabs",
    demo: () => (
      <div className="w-full max-w-md mx-auto">
        <div className="flex border-b">
          <button className="px-4 py-2">Tab 1</button>
          <button className="px-4 py-2">Tab 2</button>
          <button className="px-4 py-2">Tab 3</button>
        </div>
        <div className="p-4">
          <p>Tab content displayed here.</p>
        </div>
      </div>
    ),
    code: `
  function Tabs() {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="flex border-b">
          <button className="px-4 py-2">Tab 1</button>
          <button className="px-4 py-2">Tab 2</button>
          <button className="px-4 py-2">Tab 3</button>
        </div>
        <div className="p-4">
          <p>Tab content displayed here.</p>
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Contact Form",
    price: "Free",
    link: "/components/contact-form",
    demo: () => (
      <form className="w-full max-w-md mx-auto p-4 border rounded">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </form>
    ),
    code: `
  function ContactForm() {
    return (
      <form className="w-full max-w-md mx-auto p-4 border rounded">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </form>
    );
  }
      `,
  },
  {
    name: "Product Card",
    price: "$29.99",
    link: "/components/product-card",
    demo: () => (
      <div className="border rounded p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 font-bold">Product Name</h3>
        <p className="text-gray-600">$29.99</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Buy Now
        </button>
      </div>
    ),
    code: `
  function ProductCard() {
    return (
      <div className="border rounded p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 font-bold">Product Name</h3>
        <p className="text-gray-600">$29.99</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Buy Now
        </button>
      </div>
    );
  }
      `,
  },
  {
    name: "User Profile Card",
    price: "Free",
    link: "/components/user-profile-card",
    demo: () => (
      <div className="border rounded p-4 flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80"
          alt="User"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-bold">John Doe</h3>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>
    ),
    code: `
  function UserProfileCard() {
    return (
      <div className="border rounded p-4 flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80"
          alt="User"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-bold">John Doe</h3>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Social Sharing Buttons",
    price: "Free",
    link: "/components/social-sharing-buttons",
    demo: () => (
      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-3 py-2 rounded">
          Facebook
        </button>
        <button className="bg-blue-400 text-white px-3 py-2 rounded">
          Twitter
        </button>
        <button className="bg-red-600 text-white px-3 py-2 rounded">
          Pinterest
        </button>
      </div>
    ),
    code: `
  function SocialSharingButtons() {
    return (
      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-3 py-2 rounded">
          Facebook
        </button>
        <button className="bg-blue-400 text-white px-3 py-2 rounded">
          Twitter
        </button>
        <button className="bg-red-600 text-white px-3 py-2 rounded">
          Pinterest
        </button>
      </div>
    );
  }
      `,
  },
  {
    name: "Pricing Table",
    price: "$49.99",
    link: "/components/pricing-table",
    demo: () => (
      <div className="flex flex-col md:flex-row border rounded overflow-hidden">
        <div className="p-4 bg-blue-500 text-white flex-1">
          <h3 className="font-bold text-xl">Basic</h3>
          <p className="text-2xl">$9.99</p>
        </div>
        <div className="p-4 flex-1">
          <h3 className="font-bold text-xl">Pro</h3>
          <p className="text-2xl">$19.99</p>
        </div>
        <div className="p-4 flex-1">
          <h3 className="font-bold text-xl">Enterprise</h3>
          <p className="text-2xl">$29.99</p>
        </div>
      </div>
    ),
    code: `
  function PricingTable() {
    return (
      <div className="flex flex-col md:flex-row border rounded overflow-hidden">
        <div className="p-4 bg-blue-500 text-white flex-1">
          <h3 className="font-bold text-xl">Basic</h3>
          <p className="text-2xl">$9.99</p>
        </div>
        <div className="p-4 flex-1">
          <h3 className="font-bold text-xl">Pro</h3>
          <p className="text-2xl">$19.99</p>
        </div>
        <div className="p-4 flex-1">
          <h3 className="font-bold text-xl">Enterprise</h3>
          <p className="text-2xl">$29.99</p>
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Feature List",
    price: "Free",
    link: "/components/feature-list",
    demo: () => (
      <ul className="list-disc pl-5">
        <li>High Performance</li>
        <li>Responsive Design</li>
        <li>Easy Customization</li>
      </ul>
    ),
    code: `
  function FeatureList() {
    return (
      <ul className="list-disc pl-5">
        <li>High Performance</li>
        <li>Responsive Design</li>
        <li>Easy Customization</li>
      </ul>
    );
  }
      `,
  },
  {
    name: "FAQ Accordion",
    price: "Free",
    link: "/components/faq-accordion",
    demo: () => (
      <div className="w-full max-w-md mx-auto">
        <div className="border rounded">
          <button className="w-full text-left p-4 font-bold">
            What is your return policy?
          </button>
          <div className="p-4">We offer a 30-day return policy.</div>
        </div>
      </div>
    ),
    code: `
  function FAQAccordion() {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="border rounded">
          <button className="w-full text-left p-4 font-bold">
            What is your return policy?
          </button>
          <div className="p-4">We offer a 30-day return policy.</div>
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Breadcrumb Navigation",
    price: "Free",
    link: "/components/breadcrumb-navigation",
    demo: () => (
      <nav className="text-gray-600 text-sm" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="text-blue-600">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>Library</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">Data</li>
        </ol>
      </nav>
    ),
    code: `
  function BreadcrumbNavigation() {
    return (
      <nav className="text-gray-600 text-sm" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="text-blue-600">Home</a>
          </li>
          <li><span className="mx-2">/</span></li>
          <li>Library</li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-500">Data</li>
        </ol>
      </nav>
    );
  }
      `,
  },
  {
    name: "Search Bar",
    price: "Free",
    link: "/components/search-bar",
    demo: () => (
      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded"
        />
      </div>
    ),
    code: `
  function SearchBar() {
    return (
      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded"
        />
      </div>
    );
  }
      `,
  },
  {
    name: "Filter Sidebar",
    price: "Free",
    link: "/components/filter-sidebar",
    demo: () => (
      <aside className="w-64 p-4 border">
        <h3 className="font-bold mb-2">Filters</h3>
        <div className="mb-2">
          <label className="block mb-1">Category</label>
          <select title="select" className="w-full p-2 border rounded">
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Price Range</label>
          <input placeholder="input" type="range" className="w-full" />
        </div>
      </aside>
    ),
    code: `
  function FilterSidebar() {
    return (
      <aside className="w-64 p-4 border">
        <h3 className="font-bold mb-2">Filters</h3>
        <div className="mb-2">
          <label className="block mb-1">Category</label>
          <select className="w-full p-2 border rounded">
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Price Range</label>
          <input type="range" className="w-full" />
        </div>
      </aside>
    );
  }
      `,
  },
  {
    name: "Progress Bar",
    price: "Free",
    link: "/components/progress-bar",
    demo: () => (
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: "60%" }}
        ></div>
      </div>
    ),
    code: `
  function ProgressBar() {
    return (
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div className="bg-blue-600 h-4 rounded-full" style={{ width: '60%' }}></div>
      </div>
    );
  }
      `,
  },
  {
    name: "Stepper",
    price: "Free",
    link: "/components/stepper",
    demo: () => (
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            1
          </div>
          <span className="mt-2 text-sm">Step 1</span>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
            2
          </div>
          <span className="mt-2 text-sm">Step 2</span>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
            3
          </div>
          <span className="mt-2 text-sm">Step 3</span>
        </div>
      </div>
    ),
    code: `
  function Stepper() {
    return (
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
          <span className="mt-2 text-sm">Step 1</span>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">2</div>
          <span className="mt-2 text-sm">Step 2</span>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">3</div>
          <span className="mt-2 text-sm">Step 3</span>
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Calendar",
    price: "Free",
    link: "/components/calendar",
    demo: () => (
      <div className="w-full max-w-md mx-auto p-4 border rounded">
        <div className="grid grid-cols-7 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-bold">
              {day}
            </div>
          ))}
          {[...Array(30)].map((_, i) => (
            <div key={i} className="p-2">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
    code: `
  function Calendar() {
    return (
      <div className="w-full max-w-md mx-auto p-4 border rounded">
        <div className="grid grid-cols-7 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-bold">{day}</div>
          ))}
          {[...Array(30)].map((_, i) => (
            <div key={i} className="p-2">{i + 1}</div>
          ))}
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Data Table",
    price: "Free",
    link: "/components/data-table",
    demo: () => (
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Age</th>
            <th className="px-4 py-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Alice</td>
            <td className="px-4 py-2 border">30</td>
            <td className="px-4 py-2 border">alice@example.com</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Bob</td>
            <td className="px-4 py-2 border">25</td>
            <td className="px-4 py-2 border">bob@example.com</td>
          </tr>
        </tbody>
      </table>
    ),
    code: `
  function DataTable() {
    return (
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Age</th>
            <th className="px-4 py-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Alice</td>
            <td className="px-4 py-2 border">30</td>
            <td className="px-4 py-2 border">alice@example.com</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Bob</td>
            <td className="px-4 py-2 border">25</td>
            <td className="px-4 py-2 border">bob@example.com</td>
          </tr>
        </tbody>
      </table>
    );
  }
      `,
  },
  {
    name: "Login Form",
    price: "Free",
    link: "/components/login-form",
    demo: () => (
      <form className="w-full max-w-sm mx-auto p-4 border rounded">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    ),
    code: `
  function LoginForm() {
    return (
      <form className="w-full max-w-sm mx-auto p-4 border rounded">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    );
  }
      `,
  },
  {
    name: "Registration Form",
    price: "Free",
    link: "/components/registration-form",
    demo: () => (
      <form className="w-full max-w-sm mx-auto p-4 border rounded">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
        />
        <button className="w-full bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    ),
    code: `
  function RegistrationForm() {
    return (
      <form className="w-full max-w-sm mx-auto p-4 border rounded">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
        />
        <button className="w-full bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    );
  }
      `,
  },
  {
    name: "Map Component",
    price: "$9.99",
    link: "/components/map-component",
    demo: () => (
      <div className="w-full h-64">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509007!2d144.9630577153166!3d-37.81410797975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f3d4a46!2sMelbourne%20CBD%2C%20Melbourne!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    ),
    code: `
  function MapComponent() {
    return (
      <div className="w-full h-64">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509007!2d144.9630577153166!3d-37.81410797975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f3d4a46!2sMelbourne%20CBD%2C%20Melbourne!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    );
  }
      `,
  },
  {
    name: "Lightbox Gallery",
    price: "$9.99",
    link: "/components/lightbox-gallery",
    demo: () => (
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            src={`https://via.placeholder.com/150?text=Image+${num}`}
            alt={`Image ${num}`}
            className="w-full h-auto rounded cursor-pointer"
          />
        ))}
      </div>
    ),
    code: `
  function LightboxGallery() {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            src={\`https://via.placeholder.com/150?text=Image+\${num}\`}
            alt={\`Image \${num}\`}
            className="w-full h-auto rounded cursor-pointer"
          />
        ))}
      </div>
    );
  }
      `,
  },
  {
    name: "Carousel Slider",
    price: "$9.99",
    link: "/components/carousel-slider",
    demo: () => (
      <div className="w-full h-64 overflow-hidden relative">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: "translateX(0%)" }}
        >
          <img
            src="https://via.placeholder.com/800x400"
            className="w-full object-cover"
            alt="Slide 1"
          />
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            className="w-full object-cover"
            alt="Slide 2"
          />
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            className="w-full object-cover"
            alt="Slide 3"
          />
        </div>
      </div>
    ),
    code: `
  function CarouselSlider() {
    return (
      <div className="w-full h-64 overflow-hidden relative">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: "translateX(0%)" }}
        >
          <img
            src="https://via.placeholder.com/800x400"
            className="w-full object-cover"
            alt="Slide 1"
          />
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            className="w-full object-cover"
            alt="Slide 2"
          />
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            className="w-full object-cover"
            alt="Slide 3"
          />
        </div>
      </div>
    );
  }
      `,
  },
  {
    name: "Video Player",
    price: "$9.99",
    link: "/components/video-player",
    demo: () => (
      <div className="w-full max-w-md mx-auto">
        <video controls className="w-full rounded">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
    code: `
  function VideoPlayer() {
    return (
      <div className="w-full max-w-md mx-auto">
        <video controls className="w-full rounded">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
      `,
  },
  {
    name: "Rating Component",
    price: "Free",
    link: "/components/rating-component",
    demo: () => (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.175 0l-3.367 2.447c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
    ),
    code: `
  function RatingComponent() {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.175 0l-3.367 2.447c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
    );
  }
      `,
  },
];
