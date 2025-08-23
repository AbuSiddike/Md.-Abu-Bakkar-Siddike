export const projects = [
    {
        id: 1,
        title: "Employee Management System",
        description:
            "A full-featured online store with product listings, shopping cart, user authentication, and admin dashboard. Implemented secure payment processing with Stripe integration.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Stripe API",
        ],
        image: "/assets/images/projects/ecommerce.jpg",
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://your-ecommerce-app.vercel.app",
        features: [
            "Product catalog with filters and search",
            "User authentication (login/register)",
            "Shopping cart functionality",
            "Order history and tracking",
            "Admin dashboard for product management",
            "Stripe payment integration",
        ],
        challenges:
            "Implementing real-time inventory updates and handling concurrent user purchases required careful transaction management in MongoDB.",
        solution:
            "Used MongoDB transactions and implemented a reservation system for products during checkout to prevent overselling.",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, team workspaces, and drag-and-drop task organization. Built with Socket.io for real-time functionality.",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Socket.io",
            "JWT",
            "React Beautiful DnD",
        ],
        image: "/assets/images/projects/taskapp.jpg",
        githubUrl: "https://github.com/yourusername/task-management-app",
        liveUrl: "https://your-task-app.netlify.app",
        features: [
            "Real-time task updates across clients",
            "Drag-and-drop task organization",
            "Team workspaces with user roles",
            "Task assignments and due dates",
            "Activity feed",
            "Markdown support in task descriptions",
        ],
        challenges:
            "Managing complex state for real-time updates while maintaining performance with many connected clients.",
        solution:
            "Optimized Socket.io event emissions and implemented client-side state normalization with Redux.",
    },
    {
        id: 3,
        title: "Rootly - Gardener's Companion App",
        description:
            "An analytics dashboard for social media metrics with data visualization, customizable reports, and API integrations with major social platforms.",
        technologies: [
            "Next.js",
            "Chart.js",
            "MongoDB",
            "REST API",
            "Tailwind CSS",
            "JWT",
        ],
        image: "/assets/images/projects/dashboard.jpg",
        githubUrl:
            "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-AbuSiddike.git",
        liveUrl: " https://deluxe-empanada-890ba4.netlify.app",
        features: [
            "Interactive data visualizations",
            "Custom report generation",
            "Multiple social platform integrations",
            "Scheduled report emails",
            "Responsive design",
            "User authentication",
        ],
        challenges:
            "Handling rate limits from social media APIs and aggregating large datasets efficiently.",
        solution:
            "Implemented data caching with MongoDB and optimized API call scheduling to stay within rate limits.",
    },
];
