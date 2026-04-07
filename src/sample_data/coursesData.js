// src/data/coursesData.js

const coursesData = [
  {
    "id": 1,
    "title": "Full Stack Web Development",
    "instructor": "Ronald Richard",
    "introduction": "Master both front-end and back-end technologies to build robust, scalable web applications from scratch.",
    "description": "This comprehensive course covers the entire web development stack. You will learn HTML5, CSS3, JavaScript (ES6+), React for the frontend, and Node.js with MongoDB for the backend. By the end, you will have built and deployed a production-ready social media application.",
    "certification": "Certified Full Stack Developer (CFSD)",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 1,
    "chapters": [
      {
        "title": "1. Introduction to the MERN Stack",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English",
      "Vietnamese"
    ],
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
    "description": "Learn to leverage Rust's ownership model to build high-performance systems. Topics include smart pointers, multi-threading, and building CLI tools or low-level network drivers.",
    "certification": "Rust Professional Certificate",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 102,
    "chapters": [
      {
        "title": "1. Understanding Ownership & Borrowing",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English"
    ],
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
    "description": "Transition from wireframes to high-fidelity prototypes. This course covers typography, color theory, and responsive design patterns for mobile and web applications.",
    "certification": "UI/UX Design Specialist",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 103,
    "chapters": [
      {
        "title": "1. Introduction to Design Thinking",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English",
      "Vietnamese"
    ],
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
    "description": "Master Pandas, NumPy, and Scikit-Learn. Learn to query complex databases with PostgreSQL and visualize your findings using Matplotlib and Seaborn.",
    "certification": "Data Science Associate",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 104,
    "chapters": [
      {
        "title": "1. Data Cleaning and Manipulation",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English"
    ],
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
    "description": "Explore network security, encryption methods, and common vulnerability assessments. This course prepares you for entry-level security analyst roles.",
    "certification": "Certified Security Beginner",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 105,
    "chapters": [
      {
        "title": "1. The OSI Model and Security",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English",
      "Spanish"
    ],
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
    "description": "Learn about EC2, S3, Lambda, and RDS. Understand how to architect highly available and fault-tolerant systems in the cloud.",
    "certification": "AWS Solutions Architect Ready",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 106,
    "chapters": [
      {
        "title": "1. Cloud Computing Concepts",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "totalRatings": 7800,
    "addedDate": "2026-03-28",
    "price": 119.99
  },
  {
    "id": 7,
    "title": "Mobile App Development with Flutter",
    "instructor": "Nguyen Minh Quan",
    "introduction": "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    "description": "Master the Dart language and the Flutter framework. Create responsive UIs and manage application state efficiently with Provider or Riverpod.",
    "certification": "Flutter Developer Expert",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 107,
    "chapters": [
      {
        "title": "1. Getting Started with Dart",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English",
      "Vietnamese"
    ],
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
    "description": "Go beyond the basics with deep learning, neural networks, and reinforcement learning. Build projects using TensorFlow and PyTorch.",
    "certification": "ML Specialist Certification",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 108,
    "chapters": [
      {
        "title": "1. Linear Regression and Gradient Descent",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English"
    ],
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
    "description": "Learn to use Docker, Kubernetes, Jenkins, and Terraform to automate software delivery and infrastructure management.",
    "certification": "Certified DevOps Professional",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 109,
    "chapters": [
      {
        "title": "1. Containerization with Docker",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English"
    ],
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
    "description": "Learn how to create high-converting content and manage ad spend effectively across Google, Facebook, and LinkedIn.",
    "certification": "Digital Marketing Guru",
    "img": "/src/assets/Pictures/courses/default.svg",
    "instructorId": 110,
    "chapters": [
      {
        "title": "1. Search Engine Optimization (SEO)",
        "content": "/src/assets/Videos/courses/default.mp4"
      }
    ],
    "languages": [
      "English",
      "Vietnamese"
    ],
    "rating": 4.5,
    "totalRatings": 15200,
    "addedDate": "2026-04-03",
    "price": 39.99
  }
];

export default coursesData;