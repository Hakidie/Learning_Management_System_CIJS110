// src/data/coursesData.js

const coursesData = [
  [
    {
      "id": 1,
      "title": "Full Stack Web Development",
      "instructor": "Ronald Richard",
      "introduction": "Master both front-end and back-end technologies to build robust, scalable web applications from scratch.",
      "description": "This comprehensive course covers the entire web development stack. You will learn HTML5, CSS3, JavaScript (ES6+), React for the frontend, and Node.js with MongoDB for the backend.",
      "certification": "Certified Full Stack Developer (CFSD)",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 1,
      "chapters": [
        {
          "chapterTitle": "Introduction to the MERN Stack",
          "lessons": [
            { "lessonTitle": "1. Course Overview and Setup", "duration": 300 },
            { "lessonTitle": "2. Understanding Node.js Architecture", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Frontend Mastery with React",
          "lessons": [
            { "lessonTitle": "1. Component Lifecycle and Hooks", "duration": 450 },
            { "lessonTitle": "2. State Management with Redux", "duration": 600 }
          ]
        },
        {
          "chapterTitle": "Database Design and Integration",
          "lessons": [
            { "lessonTitle": "1. MongoDB Schema Design", "duration": 400 },
            { "lessonTitle": "2. Connecting React to Express", "duration": 500 }
          ]
        }
      ],
      "languages": ["English", "Vietnamese"],
      "rating": 4.9,
      "totalRatings": 18450,
      "addedDate": "2026-03-15",
      "price": 89.99
    },
    {
      "id": 2,
      "title": "Advanced Rust Systems Programming",
      "instructor": "Aris Thorne",
      "introduction": "Deep dive into memory safety, concurrency, and performance using the Rust programming language.",
      "description": "Learn to leverage Rust's ownership model to build high-performance systems. Topics include smart pointers, multi-threading, and building CLI tools.",
      "certification": "Rust Professional Certificate",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 102,
      "chapters": [
        {
          "chapterTitle": "Understanding Ownership & Borrowing",
          "lessons": [
            { "lessonTitle": "1. The Memory Safety Model", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Generics and Lifetimes",
          "lessons": [
            { "lessonTitle": "1. Implementing Generic Traits", "duration": 400 },
            { "lessonTitle": "2. Validating References with Lifetimes", "duration": 350 }
          ]
        },
        {
          "chapterTitle": "Concurrent Programming",
          "lessons": [
            { "lessonTitle": "1. Fearless Concurrency with Threads", "duration": 500 },
            { "lessonTitle": "2. Using Arc and Mutex", "duration": 450 }
          ]
        }
      ],
      "languages": ["English"],
      "rating": 4.8,
      "totalRatings": 4200,
      "addedDate": "2026-03-18",
      "price": 79.99
    },
    {
      "id": 3,
      "title": "UI/UX Design with Figma",
      "instructor": "Elena Sterling",
      "introduction": "Create stunning user interfaces and seamless user experiences using industry-standard design tools.",
      "description": "Transition from wireframes to high-fidelity prototypes. This course covers typography, color theory, and responsive design patterns.",
      "certification": "UI/UX Design Specialist",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 103,
      "chapters": [
        {
          "chapterTitle": "Introduction to Design Thinking",
          "lessons": [
            { "lessonTitle": "1. The Five Stages of Design", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Mastering Figma Tools",
          "lessons": [
            { "lessonTitle": "1. Auto-Layout and Components", "duration": 400 },
            { "lessonTitle": "2. Design Systems and Styles", "duration": 450 }
          ]
        },
        {
          "chapterTitle": "User Testing and Prototyping",
          "lessons": [
            { "lessonTitle": "1. Building Interactive Prototypes", "duration": 500 },
            { "lessonTitle": "2. Conducting User Interviews", "duration": 350 }
          ]
        }
      ],
      "languages": ["English", "Vietnamese"],
      "rating": 4.7,
      "totalRatings": 9150,
      "addedDate": "2026-03-20",
      "price": 54.99
    },
    {
      "id": 4,
      "title": "Data Science with Python & SQL",
      "instructor": "Dr. Marcus Chen",
      "introduction": "Analyze large datasets and build predictive models using powerful data libraries.",
      "description": "Master Pandas, NumPy, and Scikit-Learn. Learn to query complex databases with PostgreSQL and visualize your findings.",
      "certification": "Data Science Associate",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 104,
      "chapters": [
        {
          "chapterTitle": "Data Cleaning and Manipulation",
          "lessons": [
            { "lessonTitle": "1. Working with Pandas DataFrames", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Exploratory Data Analysis",
          "lessons": [
            { "lessonTitle": "1. Statistical Visualization with Seaborn", "duration": 400 },
            { "lessonTitle": "2. Identifying Outliers and Trends", "duration": 350 }
          ]
        },
        {
          "chapterTitle": "SQL for Data Analysis",
          "lessons": [
            { "lessonTitle": "1. Complex Joins and Subqueries", "duration": 500 },
            { "lessonTitle": "2. Window Functions in Postgres", "duration": 450 }
          ]
        }
      ],
      "languages": ["English"],
      "rating": 4.9,
      "totalRatings": 12300,
      "addedDate": "2026-03-22",
      "price": 99.99
    },
    {
      "id": 5,
      "title": "Cybersecurity Fundamentals",
      "instructor": "Sarah Jenkins",
      "introduction": "Protect networks and data from cyber threats by learning the basics of ethical hacking.",
      "description": "Explore network security, encryption methods, and common vulnerability assessments.",
      "certification": "Certified Security Beginner",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 105,
      "chapters": [
        {
          "chapterTitle": "The OSI Model and Security",
          "lessons": [
            { "lessonTitle": "1. Layer-specific Vulnerabilities", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Network Defense Strategies",
          "lessons": [
            { "lessonTitle": "1. Firewalls and IDS/IPS", "duration": 450 },
            { "lessonTitle": "2. Secure Network Architecture", "duration": 400 }
          ]
        },
        {
          "chapterTitle": "Cryptography Basics",
          "lessons": [
            { "lessonTitle": "1. Symmetric vs Asymmetric Encryption", "duration": 500 },
            { "lessonTitle": "2. Hashing Algorithms and Salts", "duration": 350 }
          ]
        }
      ],
      "languages": ["English", "Spanish"],
      "rating": 4.6,
      "totalRatings": 5600,
      "addedDate": "2026-03-25",
      "price": 69.99
    },
    {
      "id": 6,
      "title": "Cloud Architecture with AWS",
      "instructor": "David Miller",
      "introduction": "Design and deploy scalable applications on the world's leading cloud platform.",
      "description": "Learn about EC2, S3, Lambda, and RDS. Understand how to architect highly available systems.",
      "certification": "AWS Solutions Architect Ready",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 106,
      "chapters": [
        {
          "chapterTitle": "Cloud Computing Concepts",
          "lessons": [
            { "lessonTitle": "1. IAAS vs PAAS vs SAAS", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Compute and Storage Services",
          "lessons": [
            { "lessonTitle": "1. Configuring EC2 Instances", "duration": 450 },
            { "lessonTitle": "2. Managing S3 Buckets", "duration": 400 }
          ]
        },
        {
          "chapterTitle": "Serverless Architecture",
          "lessons": [
            { "lessonTitle": "1. Lambda Function Triggers", "duration": 500 },
            { "lessonTitle": "2. API Gateway Integration", "duration": 450 }
          ]
        }
      ],
      "languages": ["English"],
      "rating": 4.8,
      "totalRatings": 7800,
      "addedDate": "2026-03-28",
      "price": 119.99
    },
    {
      "id": 7,
      "title": "Mobile App Development with Flutter",
      "instructor": "Nguyen Minh Quan",
      "introduction": "Build beautiful, natively compiled applications for mobile from a single codebase.",
      "description": "Master the Dart language and the Flutter framework. Create responsive UIs.",
      "certification": "Flutter Developer Expert",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 107,
      "chapters": [
        {
          "chapterTitle": "Getting Started with Dart",
          "lessons": [
            { "lessonTitle": "1. Dart Syntax Fundamentals", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Widget Fundamentals",
          "lessons": [
            { "lessonTitle": "1. Stateless vs Stateful Widgets", "duration": 450 },
            { "lessonTitle": "2. Layouts and Navigation", "duration": 400 }
          ]
        },
        {
          "chapterTitle": "Advanced State Management",
          "lessons": [
            { "lessonTitle": "1. Using Provider for Global State", "duration": 550 },
            { "lessonTitle": "2. Introduction to Riverpod", "duration": 500 }
          ]
        }
      ],
      "languages": ["English", "Vietnamese"],
      "rating": 4.9,
      "totalRatings": 3400,
      "addedDate": "2026-03-30",
      "price": 74.99
    },
    {
      "id": 8,
      "title": "Machine Learning Specialization",
      "instructor": "Sophia Varga",
      "introduction": "Understand the math and algorithms behind modern Artificial Intelligence.",
      "description": "Go beyond the basics with deep learning, neural networks, and reinforcement learning.",
      "certification": "ML Specialist Certification",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 108,
      "chapters": [
        {
          "chapterTitle": "Linear Regression and Gradient Descent",
          "lessons": [
            { "lessonTitle": "1. Cost Functions Explained", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Neural Networks Foundations",
          "lessons": [
            { "lessonTitle": "1. Backpropagation Algorithms", "duration": 600 },
            { "lessonTitle": "2. Activation Functions (ReLU, Sigmoid)", "duration": 400 }
          ]
        },
        {
          "chapterTitle": "Computer Vision Basics",
          "lessons": [
            { "lessonTitle": "1. Convolutional Neural Networks (CNN)", "duration": 700 },
            { "lessonTitle": "2. Image Recognition Projects", "duration": 650 }
          ]
        }
      ],
      "languages": ["English"],
      "rating": 4.7,
      "totalRatings": 8200,
      "addedDate": "2026-04-01",
      "price": 129.99
    },
    {
      "id": 9,
      "title": "DevOps Engineering Mastery",
      "instructor": "Liam O'Connor",
      "introduction": "Bridge the gap between development and operations with modern CI/CD pipelines.",
      "description": "Learn to use Docker, Kubernetes, Jenkins, and Terraform to automate software delivery.",
      "certification": "Certified DevOps Professional",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 109,
      "chapters": [
        {
          "chapterTitle": "Containerization with Docker",
          "lessons": [
            { "lessonTitle": "1. Creating your first Dockerfile", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Orchestration with Kubernetes",
          "lessons": [
            { "lessonTitle": "1. Pods, Services, and Deployments", "duration": 500 },
            { "lessonTitle": "2. Managing ConfigMaps and Secrets", "duration": 450 }
          ]
        },
        {
          "chapterTitle": "Continuous Integration Pipelines",
          "lessons": [
            { "lessonTitle": "1. Building Pipelines with Jenkins", "duration": 600 },
            { "lessonTitle": "2. GitHub Actions Fundamentals", "duration": 400 }
          ]
        }
      ],
      "languages": ["English"],
      "rating": 4.8,
      "totalRatings": 4500,
      "addedDate": "2026-04-02",
      "price": 94.99
    },
    {
      "id": 10,
      "title": "Digital Marketing Strategy",
      "instructor": "Le Thi Mai",
      "introduction": "Scale your brand's presence using SEO, SEM, and social media analytics.",
      "description": "Learn how to create high-converting content and manage ad spend effectively.",
      "certification": "Digital Marketing Guru",
      "img": "/src/assets/Pictures/courses/default.svg",
      "instructorId": 110,
      "chapters": [
        {
          "chapterTitle": "Search Engine Optimization (SEO)",
          "lessons": [
            { "lessonTitle": "1. On-page vs Off-page SEO", "duration": 300 }
          ]
        },
        {
          "chapterTitle": "Social Media Advertising",
          "lessons": [
            { "lessonTitle": "1. Targeting on Facebook and Instagram", "duration": 400 },
            { "lessonTitle": "2. Analyzing Campaign ROI", "duration": 350 }
          ]
        },
        {
          "chapterTitle": "Content Marketing Strategy",
          "lessons": [
            { "lessonTitle": "1. Creating Viral Content Hubs", "duration": 450 },
            { "lessonTitle": "2. Email Lead Generation", "duration": 400 }
          ]
        }
      ],
      "languages": ["English", "Vietnamese"],
      "rating": 4.5,
      "totalRatings": 15200,
      "addedDate": "2026-04-03",
      "price": 39.99
    }
  ]
];

export default coursesData;