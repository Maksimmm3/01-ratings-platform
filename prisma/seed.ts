import { PrismaClient } from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.review.deleteMany();
  await prisma.course.deleteMany();
  await prisma.category.deleteMany();

  // ─── CATEGORIES ───────────────────────────────────────────────────────────

  const programming = await prisma.category.create({
    data: { name: 'Programming', alias: 'programming' },
  });

  const webDesign = await prisma.category.create({
    data: { name: 'Web Design', alias: 'web-design' },
  });

  const dataScience = await prisma.category.create({
    data: { name: 'Data Science', alias: 'data-science' },
  });

  const mobileDev = await prisma.category.create({
    data: { name: 'Mobile Development', alias: 'mobile-development' },
  });

  const projectManagement = await prisma.category.create({
    data: { name: 'Project Management', alias: 'project-management' },
  });

  const digitalMarketing = await prisma.category.create({
    data: { name: 'Digital Marketing', alias: 'digital-marketing' },
  });

  const cloudComputing = await prisma.category.create({
    data: { name: 'Cloud Computing', alias: 'cloud-computing' },
  });

  // ─── COURSES: PROGRAMMING ─────────────────────────────────────────────────

  const jsBeginners = await prisma.course.create({
    data: {
      title: 'JavaScript for Beginners',
      alias: 'javascript-beginners',
      description:
        'Learn the fundamentals of JavaScript from scratch. This course covers variables, functions, loops, and DOM manipulation with hands-on projects.',
      price: 49.99,
      categoryId: programming.id,
    },
  });

  const pythonCrashCourse = await prisma.course.create({
    data: {
      title: 'Python Crash Course',
      alias: 'python-crash-course',
      description:
        'A fast-paced introduction to Python programming. You will build real-world applications including a web scraper and a data dashboard.',
      price: 59.99,
      categoryId: programming.id,
    },
  });

  const reactMastery = await prisma.course.create({
    data: {
      title: 'React Mastery: From Zero to Hero',
      alias: 'react-mastery',
      description:
        'Master React including hooks, context, and performance optimisation. Build five complete projects including a full-stack social app.',
      price: 89.99,
      categoryId: programming.id,
    },
  });

  const nodeJsBackend = await prisma.course.create({
    data: {
      title: 'Node.js Backend Development',
      alias: 'nodejs-backend',
      description:
        'Build scalable REST APIs with Node.js, Express, and MongoDB. Covers authentication, file uploads, caching, and deployment.',
      price: 79.99,
      categoryId: programming.id,
    },
  });

  const typescriptPro = await prisma.course.create({
    data: {
      title: 'TypeScript Professional',
      alias: 'typescript-professional',
      description:
        'Deep dive into TypeScript generics, decorators, and advanced types. Learn how to migrate a JavaScript codebase to TypeScript step by step.',
      price: 69.99,
      categoryId: programming.id,
    },
  });

  const csPrinciples = await prisma.course.create({
    data: {
      title: 'Computer Science Principles',
      alias: 'cs-principles',
      description:
        'Understand algorithms, data structures, and computational thinking. This course is perfect for developers who want a solid theoretical foundation.',
      price: 44.99,
      categoryId: programming.id,
    },
  });

  const sqlMastery = await prisma.course.create({
    data: {
      title: 'SQL & Database Design Mastery',
      alias: 'sql-database-design',
      description:
        'Learn SQL from basic queries to advanced joins, indexes, and query optimisation. Covers PostgreSQL and MySQL with real-world schema design exercises.',
      price: 54.99,
      categoryId: programming.id,
    },
  });

  const goLang = await prisma.course.create({
    data: {
      title: 'Go Programming Language',
      alias: 'go-programming',
      description:
        'Learn Go from the ground up and build high-performance microservices. Topics include goroutines, channels, and building REST APIs.',
      price: 74.99,
      categoryId: programming.id,
    },
  });

  const rustIntro = await prisma.course.create({
    data: {
      title: 'Introduction to Rust',
      alias: 'introduction-to-rust',
      description:
        'Explore Rust ownership model, memory safety, and concurrency. Build command-line tools and a simple web server as part of the course projects.',
      price: 84.99,
      categoryId: programming.id,
    },
  });

  // ─── COURSES: WEB DESIGN ──────────────────────────────────────────────────

  const uiUxFundamentals = await prisma.course.create({
    data: {
      title: 'UI/UX Design Fundamentals',
      alias: 'uiux-fundamentals',
      description:
        'Master the basics of user interface and user experience design. Learn wireframing, prototyping, and usability testing using Figma.',
      price: 59.99,
      categoryId: webDesign.id,
    },
  });

  const figmaAdvanced = await prisma.course.create({
    data: {
      title: 'Figma Advanced: Design Systems',
      alias: 'figma-advanced',
      description:
        'Build scalable design systems and component libraries in Figma. Covers auto-layout, variables, and developer handoff best practices.',
      price: 69.99,
      categoryId: webDesign.id,
    },
  });

  const cssGridFlex = await prisma.course.create({
    data: {
      title: 'CSS Grid & Flexbox Mastery',
      alias: 'css-grid-flexbox',
      description:
        'Create complex, responsive layouts with CSS Grid and Flexbox. Includes 20 real-world layout challenges and a final portfolio project.',
      price: 39.99,
      categoryId: webDesign.id,
    },
  });

  const webTypography = await prisma.course.create({
    data: {
      title: 'Web Typography & Color Theory',
      alias: 'web-typography-color',
      description:
        'Learn how to choose fonts, set type scales, and build colour palettes that work. Practical exercises in both Figma and CSS.',
      price: 34.99,
      categoryId: webDesign.id,
    },
  });

  const motionDesign = await prisma.course.create({
    data: {
      title: 'Motion Design for the Web',
      alias: 'motion-design-web',
      description:
        'Add life to your interfaces with CSS animations, transitions, and Framer Motion. Learn the 12 principles of animation applied to UI.',
      price: 64.99,
      categoryId: webDesign.id,
    },
  });

  const responsiveDesign = await prisma.course.create({
    data: {
      title: 'Responsive Web Design Bootcamp',
      alias: 'responsive-web-design',
      description:
        'Build websites that look great on any device. Covers mobile-first workflow, media queries, and accessibility best practices.',
      price: 49.99,
      categoryId: webDesign.id,
    },
  });

  const illustrationForUI = await prisma.course.create({
    data: {
      title: 'Illustration for UI Designers',
      alias: 'illustration-for-ui',
      description:
        'Create custom icons, illustrations, and graphics for digital products. Uses Figma and Adobe Illustrator with a focus on product design.',
      price: 54.99,
      categoryId: webDesign.id,
    },
  });

  const portfolioDesign = await prisma.course.create({
    data: {
      title: 'Design Portfolio That Gets You Hired',
      alias: 'design-portfolio',
      description:
        'Build a standout design portfolio from scratch. Includes case study writing, presentation tips, and how to pitch your work to recruiters.',
      price: 44.99,
      categoryId: webDesign.id,
    },
  });

  // ─── COURSES: DATA SCIENCE ────────────────────────────────────────────────

  const pythonDataScience = await prisma.course.create({
    data: {
      title: 'Python for Data Science',
      alias: 'python-data-science',
      description:
        'Use Python, Pandas, and NumPy to analyse and visualise data. Covers the complete data science workflow from data cleaning to insights.',
      price: 79.99,
      categoryId: dataScience.id,
    },
  });

  const mlFundamentals = await prisma.course.create({
    data: {
      title: 'Machine Learning Fundamentals',
      alias: 'machine-learning-fundamentals',
      description:
        'Learn supervised and unsupervised learning algorithms with scikit-learn. Build models for classification, regression, and clustering.',
      price: 99.99,
      categoryId: dataScience.id,
    },
  });

  const deepLearning = await prisma.course.create({
    data: {
      title: 'Deep Learning with TensorFlow',
      alias: 'deep-learning-tensorflow',
      description:
        'Build neural networks for image recognition, NLP, and time series forecasting. Covers CNNs, RNNs, and transformer architectures.',
      price: 119.99,
      categoryId: dataScience.id,
    },
  });

  const dataViz = await prisma.course.create({
    data: {
      title: 'Data Visualisation with Power BI',
      alias: 'data-viz-power-bi',
      description:
        'Create interactive dashboards and reports in Power BI. Learn DAX formulas, data modelling, and publishing to the Power BI service.',
      price: 64.99,
      categoryId: dataScience.id,
    },
  });

  const statisticsForDS = await prisma.course.create({
    data: {
      title: 'Statistics for Data Scientists',
      alias: 'statistics-data-scientists',
      description:
        'Master probability, hypothesis testing, and statistical inference. Learn how to apply statistical thinking to real data problems.',
      price: 54.99,
      categoryId: dataScience.id,
    },
  });

  const nlpCourse = await prisma.course.create({
    data: {
      title: 'Natural Language Processing with Python',
      alias: 'nlp-python',
      description:
        'Build NLP pipelines for sentiment analysis, text classification, and named entity recognition. Covers spaCy, NLTK, and HuggingFace.',
      price: 89.99,
      categoryId: dataScience.id,
    },
  });

  const sqlDataAnalysis = await prisma.course.create({
    data: {
      title: 'SQL for Data Analysis',
      alias: 'sql-data-analysis',
      description:
        'Write complex queries to extract insights from large datasets. Covers window functions, CTEs, and query performance tuning.',
      price: 49.99,
      categoryId: dataScience.id,
    },
  });

  const bigDataSpark = await prisma.course.create({
    data: {
      title: 'Big Data with Apache Spark',
      alias: 'big-data-spark',
      description:
        'Process and analyse massive datasets using Apache Spark and PySpark. Covers Spark SQL, streaming, and deployment on cloud clusters.',
      price: 109.99,
      categoryId: dataScience.id,
    },
  });

  // No reviews intentionally
  const timeSeriesAnalysis = await prisma.course.create({
    data: {
      title: 'Time Series Analysis',
      alias: 'time-series-analysis',
      description:
        'Forecast future values using ARIMA, Prophet, and LSTM models. Hands-on projects with financial and weather datasets.',
      price: 74.99,
      categoryId: dataScience.id,
    },
  });

  // ─── COURSES: MOBILE DEVELOPMENT ──────────────────────────────────────────

  const reactNative = await prisma.course.create({
    data: {
      title: 'React Native: Build Mobile Apps',
      alias: 'react-native-mobile',
      description:
        'Build cross-platform iOS and Android apps with React Native. Covers navigation, animations, and publishing to app stores.',
      price: 89.99,
      categoryId: mobileDev.id,
    },
  });

  const swiftUI = await prisma.course.create({
    data: {
      title: 'SwiftUI for iOS Development',
      alias: 'swiftui-ios',
      description:
        'Create beautiful iOS apps with SwiftUI. Learn state management, animations, and integrating with REST APIs and Core Data.',
      price: 94.99,
      categoryId: mobileDev.id,
    },
  });

  const flutterDart = await prisma.course.create({
    data: {
      title: 'Flutter & Dart: Complete Guide',
      alias: 'flutter-dart',
      description:
        'Build stunning cross-platform apps with Flutter. Covers widgets, state management with Provider and Riverpod, and Firebase integration.',
      price: 84.99,
      categoryId: mobileDev.id,
    },
  });

  const androidKotlin = await prisma.course.create({
    data: {
      title: 'Android Development with Kotlin',
      alias: 'android-kotlin',
      description:
        'Learn Android development using modern Kotlin and Jetpack Compose. Build real apps with MVVM architecture and Room database.',
      price: 79.99,
      categoryId: mobileDev.id,
    },
  });

  const mobileUX = await prisma.course.create({
    data: {
      title: 'Mobile UX Design Patterns',
      alias: 'mobile-ux-patterns',
      description:
        'Design intuitive mobile experiences by studying proven UX patterns. Covers gesture navigation, micro-interactions, and accessibility.',
      price: 54.99,
      categoryId: mobileDev.id,
    },
  });

  const firebaseMobile = await prisma.course.create({
    data: {
      title: 'Firebase for Mobile Developers',
      alias: 'firebase-mobile',
      description:
        'Integrate Firebase into your mobile apps for auth, real-time database, push notifications, and analytics.',
      price: 59.99,
      categoryId: mobileDev.id,
    },
  });

  const appStoreOptimization = await prisma.course.create({
    data: {
      title: 'App Store Optimisation (ASO)',
      alias: 'app-store-optimisation',
      description:
        'Increase your app downloads with proven ASO techniques. Covers keyword research, screenshots, ratings strategy, and A/B testing.',
      price: 44.99,
      categoryId: mobileDev.id,
    },
  });

  const mobilePerformance = await prisma.course.create({
    data: {
      title: 'Mobile App Performance Optimisation',
      alias: 'mobile-performance',
      description:
        'Profile and fix performance bottlenecks in iOS and Android apps. Covers memory management, rendering pipelines, and battery usage.',
      price: 69.99,
      categoryId: mobileDev.id,
    },
  });

  // ─── COURSES: PROJECT MANAGEMENT ──────────────────────────────────────────

  const pmpPrep = await prisma.course.create({
    data: {
      title: 'PMP Exam Preparation',
      alias: 'pmp-exam-prep',
      description:
        'Prepare for the Project Management Professional exam with comprehensive study material. Includes 500 practice questions and mock exams.',
      price: 99.99,
      categoryId: projectManagement.id,
    },
  });

  const agileScrumMaster = await prisma.course.create({
    data: {
      title: 'Agile & Scrum Master Certification',
      alias: 'agile-scrum-master',
      description:
        'Learn Agile principles and Scrum framework to lead high-performing teams. Prepares you for the PSM I and CSM certifications.',
      price: 79.99,
      categoryId: projectManagement.id,
    },
  });

  const jiraConfluence = await prisma.course.create({
    data: {
      title: 'Jira & Confluence for Teams',
      alias: 'jira-confluence',
      description:
        'Master Jira for issue tracking and Confluence for documentation. Learn board configuration, automation rules, and reporting.',
      price: 49.99,
      categoryId: projectManagement.id,
    },
  });

  const riskManagement = await prisma.course.create({
    data: {
      title: 'Risk Management in Projects',
      alias: 'risk-management',
      description:
        'Identify, assess, and mitigate project risks using industry frameworks. Includes real-world case studies from IT and construction sectors.',
      price: 64.99,
      categoryId: projectManagement.id,
    },
  });

  const kanbanMethod = await prisma.course.create({
    data: {
      title: 'Kanban Method Practitioner',
      alias: 'kanban-method',
      description:
        'Implement Kanban to improve workflow and reduce bottlenecks. Covers WIP limits, flow metrics, and service delivery optimisation.',
      price: 54.99,
      categoryId: projectManagement.id,
    },
  });

  const stakeholderManagement = await prisma.course.create({
    data: {
      title: 'Stakeholder Management & Communication',
      alias: 'stakeholder-management',
      description:
        'Build strong relationships with stakeholders and deliver clear project communication. Learn how to manage expectations and resolve conflicts.',
      price: 59.99,
      categoryId: projectManagement.id,
    },
  });

  const projectBudgeting = await prisma.course.create({
    data: {
      title: 'Project Budgeting & Cost Control',
      alias: 'project-budgeting',
      description:
        'Plan and control project budgets with earned value management. Learn forecasting, variance analysis, and cost reporting.',
      price: 69.99,
      categoryId: projectManagement.id,
    },
  });

  const remoteTeams = await prisma.course.create({
    data: {
      title: 'Managing Remote & Distributed Teams',
      alias: 'managing-remote-teams',
      description:
        'Lead remote teams effectively with the right tools and communication strategies. Covers async workflows, team culture, and performance tracking.',
      price: 54.99,
      categoryId: projectManagement.id,
    },
  });

  // ─── COURSES: DIGITAL MARKETING ───────────────────────────────────────────

  const seoMastery = await prisma.course.create({
    data: {
      title: 'SEO Mastery: Rank #1 on Google',
      alias: 'seo-mastery',
      description:
        'Learn on-page, off-page, and technical SEO to dominate search rankings. Covers keyword research, link building, and Core Web Vitals.',
      price: 79.99,
      categoryId: digitalMarketing.id,
    },
  });

  const googleAds = await prisma.course.create({
    data: {
      title: 'Google Ads: Complete Guide',
      alias: 'google-ads-complete',
      description:
        'Run profitable Google Ads campaigns from day one. Covers search, display, shopping, and Performance Max with real budget examples.',
      price: 84.99,
      categoryId: digitalMarketing.id,
    },
  });

  const socialMediaMarketing = await prisma.course.create({
    data: {
      title: 'Social Media Marketing Strategy',
      alias: 'social-media-strategy',
      description:
        'Build and execute a social media strategy that drives real business results. Covers Instagram, LinkedIn, TikTok, and content planning.',
      price: 64.99,
      categoryId: digitalMarketing.id,
    },
  });

  const emailMarketing = await prisma.course.create({
    data: {
      title: 'Email Marketing That Converts',
      alias: 'email-marketing-converts',
      description:
        'Build email funnels, write high-converting copy, and grow your list from zero. Uses Mailchimp and Klaviyo with real campaign examples.',
      price: 54.99,
      categoryId: digitalMarketing.id,
    },
  });

  const contentMarketing = await prisma.course.create({
    data: {
      title: 'Content Marketing & Copywriting',
      alias: 'content-marketing-copywriting',
      description:
        'Create content that attracts, engages, and converts your target audience. Learn blogging, video scripts, and landing page copywriting.',
      price: 59.99,
      categoryId: digitalMarketing.id,
    },
  });

  const analyticsGA4 = await prisma.course.create({
    data: {
      title: 'Google Analytics 4 & Data Studio',
      alias: 'google-analytics-4',
      description:
        'Set up GA4, create custom reports, and build dashboards in Looker Studio. Learn how to track conversions, funnels, and user journeys.',
      price: 49.99,
      categoryId: digitalMarketing.id,
    },
  });

  const influencerMarketing = await prisma.course.create({
    data: {
      title: 'Influencer Marketing Playbook',
      alias: 'influencer-marketing',
      description:
        'Find, negotiate with, and manage influencers to grow your brand. Covers micro-influencers, campaign briefs, and ROI measurement.',
      price: 44.99,
      categoryId: digitalMarketing.id,
    },
  });

  const ecommerceMarketing = await prisma.course.create({
    data: {
      title: 'E-commerce Marketing Accelerator',
      alias: 'ecommerce-marketing',
      description:
        'Drive traffic and sales to your online store with proven marketing strategies. Covers paid ads, email flows, and conversion rate optimisation.',
      price: 89.99,
      categoryId: digitalMarketing.id,
    },
  });

  // ─── COURSES: CLOUD COMPUTING ─────────────────────────────────────────────

  const awsFundamentals = await prisma.course.create({
    data: {
      title: 'AWS Cloud Practitioner Essentials',
      alias: 'aws-cloud-practitioner',
      description:
        'Get a solid understanding of AWS core services and cloud concepts. Prepares you for the AWS Certified Cloud Practitioner exam.',
      price: 79.99,
      categoryId: cloudComputing.id,
    },
  });

  const awsSolutionsArchitect = await prisma.course.create({
    data: {
      title: 'AWS Solutions Architect Associate',
      alias: 'aws-solutions-architect',
      description:
        'Design highly available and fault-tolerant systems on AWS. Covers EC2, S3, RDS, VPC, and IAM with hands-on labs.',
      price: 119.99,
      categoryId: cloudComputing.id,
    },
  });

  const dockerKubernetes = await prisma.course.create({
    data: {
      title: 'Docker & Kubernetes: The Complete Guide',
      alias: 'docker-kubernetes',
      description:
        'Containerise applications with Docker and orchestrate them with Kubernetes. Learn deployments, services, ingress, and Helm charts.',
      price: 99.99,
      categoryId: cloudComputing.id,
    },
  });

  const terraformIaC = await prisma.course.create({
    data: {
      title: 'Terraform: Infrastructure as Code',
      alias: 'terraform-iac',
      description:
        'Provision and manage cloud infrastructure with Terraform. Covers AWS, Azure, and GCP providers with real-world multi-environment setups.',
      price: 89.99,
      categoryId: cloudComputing.id,
    },
  });

  const gcpAssociate = await prisma.course.create({
    data: {
      title: 'Google Cloud Associate Engineer',
      alias: 'gcp-associate-engineer',
      description:
        'Prepare for the Google Cloud Associate Cloud Engineer exam. Covers Compute Engine, GKE, Cloud Storage, and IAM management.',
      price: 109.99,
      categoryId: cloudComputing.id,
    },
  });

  const devOpsCI = await prisma.course.create({
    data: {
      title: 'DevOps & CI/CD Pipelines',
      alias: 'devops-ci-cd',
      description:
        'Build and automate CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD. Covers testing, deployment strategies, and monitoring.',
      price: 94.99,
      categoryId: cloudComputing.id,
    },
  });

  const serverless = await prisma.course.create({
    data: {
      title: 'Serverless Architecture on AWS',
      alias: 'serverless-aws',
      description:
        'Build event-driven serverless applications with AWS Lambda, API Gateway, and DynamoDB. Covers the Serverless Framework and SAM.',
      price: 84.99,
      categoryId: cloudComputing.id,
    },
  });

  const cloudSecurity = await prisma.course.create({
    data: {
      title: 'Cloud Security Fundamentals',
      alias: 'cloud-security',
      description:
        'Protect your cloud infrastructure with security best practices. Covers IAM policies, encryption, network security groups, and compliance.',
      price: 74.99,
      categoryId: cloudComputing.id,
    },
  });

  // No reviews intentionally
  const azureAdmin = await prisma.course.create({
    data: {
      title: 'Microsoft Azure Administrator',
      alias: 'azure-administrator',
      description:
        'Manage Azure subscriptions, storage, VMs, and networking. Prepares you for the AZ-104 Microsoft Azure Administrator exam.',
      price: 99.99,
      categoryId: cloudComputing.id,
    },
  });

  // ─── REVIEWS ──────────────────────────────────────────────────────────────

  // JavaScript for Beginners — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Alice Johnson',
        rating: 5,
        text: 'This course changed the way I think about programming. The projects were practical and the explanations were crystal clear.',
        courseId: jsBeginners.id,
      },
      {
        name: 'Marcus Webb',
        rating: 5,
        text: 'Perfect starting point for anyone new to JavaScript. The instructor explains every concept patiently and with great examples.',
        courseId: jsBeginners.id,
      },
      {
        name: 'Priya Sharma',
        rating: 4,
        text: 'Very well structured course. I went from zero to building my own to-do app in just three weeks. Highly recommended.',
        courseId: jsBeginners.id,
      },
      {
        name: 'Tom Bradley',
        rating: 5,
        text: 'The best beginner JavaScript course I have found online. The quizzes and coding challenges kept me engaged throughout.',
        courseId: jsBeginners.id,
      },
      {
        name: 'Sofia Reyes',
        rating: 4,
        text: 'Great content and good pace. Some sections could go deeper but overall it gave me a solid foundation to continue learning.',
        courseId: jsBeginners.id,
      },
      {
        name: 'Daniel Kim',
        rating: 3,
        text: 'Good for absolute beginners but I expected more on async JavaScript. The exercises were helpful though.',
        courseId: jsBeginners.id,
      },
    ],
  });

  // Python Crash Course — rating 4-5
  await prisma.review.createMany({
    data: [
      {
        name: 'Emma Wilson',
        rating: 5,
        text: 'Brilliant course that covers Python essentials at a great speed. The web scraper project was my favourite part by far.',
        courseId: pythonCrashCourse.id,
      },
      {
        name: 'James Carter',
        rating: 4,
        text: 'Really enjoyed learning Python through this course. The examples are up to date and the instructor is very knowledgeable.',
        courseId: pythonCrashCourse.id,
      },
      {
        name: 'Yuki Tanaka',
        rating: 4,
        text: 'Clear explanations and great projects. I especially liked how the course connects theory to practical use cases immediately.',
        courseId: pythonCrashCourse.id,
      },
      {
        name: 'Laura Petrov',
        rating: 5,
        text: 'I have tried many Python courses and this one is the most beginner-friendly. Finished it in two weeks and felt confident afterwards.',
        courseId: pythonCrashCourse.id,
      },
      {
        name: 'Ben Okafor',
        rating: 3,
        text: 'The content is good but some videos are a bit long. Breaking them into shorter segments would improve the learning experience.',
        courseId: pythonCrashCourse.id,
      },
    ],
  });

  // React Mastery — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Chris Anderson',
        rating: 5,
        text: 'The most comprehensive React course available. Hooks, context, and performance patterns are all covered with real projects.',
        courseId: reactMastery.id,
      },
      {
        name: 'Natalie Cruz',
        rating: 5,
        text: 'Absolutely loved this course. The social app project taught me more than months of reading documentation on my own.',
        courseId: reactMastery.id,
      },
      {
        name: 'Oliver Smith',
        rating: 5,
        text: 'Exceptional quality and depth. This course helped me land my first frontend developer job after just one month of practice.',
        courseId: reactMastery.id,
      },
      {
        name: 'Hannah Lee',
        rating: 4,
        text: 'Fantastic course overall. I would love a section on testing with React Testing Library but everything else is top notch.',
        courseId: reactMastery.id,
      },
      {
        name: 'Raj Patel',
        rating: 5,
        text: 'The best investment I made for my career. The instructor explains React internals in a way that finally made everything click.',
        courseId: reactMastery.id,
      },
      {
        name: 'Mia Foster',
        rating: 4,
        text: 'Great course with solid projects. Some advanced sections require prior knowledge of JavaScript promises and async patterns.',
        courseId: reactMastery.id,
      },
    ],
  });

  // Node.js Backend — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Sam Torres',
        rating: 4,
        text: 'Really solid Node.js course that covers both Express and real-world patterns like JWT auth and file uploads.',
        courseId: nodeJsBackend.id,
      },
      {
        name: 'Grace Nguyen',
        rating: 5,
        text: 'I built three production APIs after completing this course. The deployment section using Docker was particularly valuable.',
        courseId: nodeJsBackend.id,
      },
      {
        name: 'Ethan Brooks',
        rating: 4,
        text: 'Good balance of theory and practice. The caching section with Redis was a bonus that most courses skip entirely.',
        courseId: nodeJsBackend.id,
      },
      {
        name: 'Isabella Clark',
        rating: 3,
        text: 'Decent content but the audio quality in a few early videos was poor. The latter half of the course is significantly better.',
        courseId: nodeJsBackend.id,
      },
      {
        name: 'Lucas Martin',
        rating: 4,
        text: 'Covered everything I needed to start building APIs professionally. The MongoDB integration section was especially well explained.',
        courseId: nodeJsBackend.id,
      },
    ],
  });

  // TypeScript Professional — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Anna White',
        rating: 4,
        text: 'Finally a TypeScript course that goes beyond the basics. Generics and decorators are explained with real-world examples.',
        courseId: typescriptPro.id,
      },
      {
        name: 'Kevin Hall',
        rating: 5,
        text: 'This course transformed how I write code. TypeScript strict mode no longer scares me thanks to the systematic approach here.',
        courseId: typescriptPro.id,
      },
      {
        name: 'Sophie Turner',
        rating: 4,
        text: 'Well paced and very practical. The migration project from JavaScript to TypeScript was exactly what I needed at work.',
        courseId: typescriptPro.id,
      },
      {
        name: 'Ryan Davis',
        rating: 3,
        text: 'Good course but some concepts like conditional types are rushed. Would benefit from more exercises in the advanced sections.',
        courseId: typescriptPro.id,
      },
      {
        name: 'Nina Scott',
        rating: 4,
        text: 'Comprehensive and well structured. I feel confident using TypeScript in production projects after completing this.',
        courseId: typescriptPro.id,
      },
    ],
  });

  // CS Principles — rating 3
  await prisma.review.createMany({
    data: [
      {
        name: 'Aaron Mitchell',
        rating: 3,
        text: 'Decent introduction to CS theory but some topics feel rushed. Better suited for complete beginners than practising developers.',
        courseId: csPrinciples.id,
      },
      {
        name: 'Jessica Brown',
        rating: 4,
        text: 'I appreciated the focus on algorithms and problem solving. The visualisations of sorting algorithms were particularly helpful.',
        courseId: csPrinciples.id,
      },
      {
        name: 'Carlos Rivera',
        rating: 3,
        text: 'A good refresher on fundamentals but nothing groundbreaking. The quizzes are a nice touch but more coding practice is needed.',
        courseId: csPrinciples.id,
      },
      {
        name: 'Rachel Green',
        rating: 2,
        text: 'The content is too theoretical for my taste. I expected more hands-on coding but most of the course is lecture-based.',
        courseId: csPrinciples.id,
      },
      {
        name: 'Mark Thompson',
        rating: 4,
        text: 'Great for building a theoretical foundation. Understanding Big O notation finally clicked for me through this course.',
        courseId: csPrinciples.id,
      },
    ],
  });

  // SQL Mastery — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Diana Prince',
        rating: 5,
        text: 'The best SQL course I have taken. Window functions are explained so clearly that I was using them confidently within days.',
        courseId: sqlMastery.id,
      },
      {
        name: 'Frank Miller',
        rating: 5,
        text: 'Excellent course that covers both the basics and advanced topics. The schema design exercises are worth the price alone.',
        courseId: sqlMastery.id,
      },
      {
        name: 'Sara Lane',
        rating: 4,
        text: 'Very thorough and practical. I used the skills from this course immediately in my data analyst role.',
        courseId: sqlMastery.id,
      },
      {
        name: 'Patrick Wu',
        rating: 5,
        text: 'This course gave me the SQL skills to pass a technical interview and land a data engineering position. Highly recommend.',
        courseId: sqlMastery.id,
      },
      {
        name: 'Linda Johnson',
        rating: 4,
        text: 'Great content and well structured. The PostgreSQL-specific sections are especially useful for backend developers.',
        courseId: sqlMastery.id,
      },
    ],
  });

  // Go Programming — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'George Harris',
        rating: 4,
        text: 'Great introduction to Go. The goroutines and channels section was mind-bending but the instructor explained it very well.',
        courseId: goLang.id,
      },
      {
        name: 'Monica Bell',
        rating: 5,
        text: 'Go clicked for me with this course. The REST API project is production ready and I learned so much building it.',
        courseId: goLang.id,
      },
      {
        name: 'Peter Grant',
        rating: 4,
        text: 'Well paced and comprehensive. I appreciated the comparisons with Python and JavaScript which made the transition smoother.',
        courseId: goLang.id,
      },
      {
        name: 'Amy Wilson',
        rating: 3,
        text: 'Solid course but the error handling section felt a bit repetitive. The concurrency chapters more than make up for it though.',
        courseId: goLang.id,
      },
      {
        name: 'Jake Roberts',
        rating: 4,
        text: 'Good course for switching to Go from another language. The tooling and project structure sections are particularly useful.',
        courseId: goLang.id,
      },
    ],
  });

  // Rust — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Helen Adams',
        rating: 4,
        text: 'Finally a Rust course that explains ownership without making your head spin. The CLI project was a great way to apply the concepts.',
        courseId: rustIntro.id,
      },
      {
        name: 'Victor Cole',
        rating: 5,
        text: 'Outstanding quality. The instructor takes a bottom-up approach that really helps you understand why Rust works the way it does.',
        courseId: rustIntro.id,
      },
      {
        name: 'Chloe Evans',
        rating: 3,
        text: 'Good introduction but Rust is inherently hard and some sections go too fast. Plan to watch lectures multiple times.',
        courseId: rustIntro.id,
      },
      {
        name: 'David Parker',
        rating: 4,
        text: 'Very well structured for a language as complex as Rust. The web server project at the end tied everything together nicely.',
        courseId: rustIntro.id,
      },
      {
        name: 'Emily Stone',
        rating: 4,
        text: 'Rust is challenging but this course makes it approachable. I especially liked the section comparing Rust to C++ memory management.',
        courseId: rustIntro.id,
      },
    ],
  });

  // UI/UX Fundamentals — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'John Reed',
        rating: 5,
        text: 'This course completely changed how I approach design. The usability testing section alone is worth the price of the course.',
        courseId: uiUxFundamentals.id,
      },
      {
        name: 'Claire Moore',
        rating: 5,
        text: 'Fantastic course for anyone switching into design from a development background. Practical, well structured, and up to date.',
        courseId: uiUxFundamentals.id,
      },
      {
        name: 'Adrian Ross',
        rating: 4,
        text: 'Really enjoyed the wireframing and prototyping sections. The Figma exercises were immediately applicable to my freelance projects.',
        courseId: uiUxFundamentals.id,
      },
      {
        name: 'Stella King',
        rating: 5,
        text: 'One of the best online courses I have ever taken. The instructor has real industry experience and it shows in every lecture.',
        courseId: uiUxFundamentals.id,
      },
      {
        name: 'Trevor Ward',
        rating: 4,
        text: 'Well balanced between theory and practice. The section on accessibility and inclusive design was a highlight for me.',
        courseId: uiUxFundamentals.id,
      },
      {
        name: 'Fiona Walsh',
        rating: 5,
        text: 'Completed this course and immediately redesigned my portfolio. Got three freelance clients within a month of finishing.',
        courseId: uiUxFundamentals.id,
      },
    ],
  });

  // Figma Advanced — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Nathan Cole',
        rating: 4,
        text: 'Great advanced Figma course. Auto-layout and variables are explained thoroughly with practical design system examples.',
        courseId: figmaAdvanced.id,
      },
      {
        name: 'Rebecca Hall',
        rating: 5,
        text: 'This course made me significantly more efficient at design. Our team adopted the design system approach after I recommended it.',
        courseId: figmaAdvanced.id,
      },
      {
        name: 'Simon Foster',
        rating: 4,
        text: 'Exactly what I needed to level up my Figma skills. The developer handoff section saved hours of back and forth at work.',
        courseId: figmaAdvanced.id,
      },
      {
        name: 'Zoe Barnes',
        rating: 4,
        text: 'Good content on design tokens and component libraries. I would love more coverage of Figma variables for theming.',
        courseId: figmaAdvanced.id,
      },
      {
        name: 'Leo Coleman',
        rating: 3,
        text: 'Solid course but some sections assume too much prior knowledge. Beginners should take the fundamentals course first.',
        courseId: figmaAdvanced.id,
      },
    ],
  });

  // CSS Grid & Flexbox — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Amy Chen',
        rating: 5,
        text: 'I finally understand CSS layout after this course. The 20 layout challenges were challenging but incredibly rewarding to complete.',
        courseId: cssGridFlex.id,
      },
      {
        name: 'Brian Scott',
        rating: 5,
        text: 'Best CSS course out there. The way the instructor explains the difference between Grid and Flexbox is so clear and intuitive.',
        courseId: cssGridFlex.id,
      },
      {
        name: 'Catherine Lee',
        rating: 4,
        text: 'Extremely practical course with lots of exercises. My CSS confidence went from zero to solid after completing the challenges.',
        courseId: cssGridFlex.id,
      },
      {
        name: 'Derek Young',
        rating: 5,
        text: 'Brilliant course. I have been writing CSS for years and still learned new techniques from this. The Grid section is superb.',
        courseId: cssGridFlex.id,
      },
      {
        name: 'Elisa Brown',
        rating: 4,
        text: 'Very good course overall. A small section on CSS subgrid would make it a perfect ten. Still highly recommended.',
        courseId: cssGridFlex.id,
      },
      {
        name: 'Frank Nelson',
        rating: 5,
        text: 'This course is a gem. Short, focused, and packed with real examples. I completed it in a weekend and felt transformed.',
        courseId: cssGridFlex.id,
      },
    ],
  });

  // Web Typography — rating 3
  await prisma.review.createMany({
    data: [
      {
        name: 'Grace Taylor',
        rating: 3,
        text: 'Interesting topic but the course feels a bit thin. I expected more depth on variable fonts and type systems.',
        courseId: webTypography.id,
      },
      {
        name: 'Henry Lewis',
        rating: 4,
        text: 'Good introduction to typography principles. The colour theory section helped me understand why some palettes work and others do not.',
        courseId: webTypography.id,
      },
      {
        name: 'Isla Robinson',
        rating: 3,
        text: 'Decent content but the Figma exercises are basic. More advanced typography projects would make this a much stronger course.',
        courseId: webTypography.id,
      },
      {
        name: 'James Evans',
        rating: 4,
        text: 'The section on type scales was excellent and immediately improved the look of my design projects. Short but effective.',
        courseId: webTypography.id,
      },
      {
        name: 'Karen White',
        rating: 2,
        text: 'Too short for the price. The content is fine but there are free resources that cover the same material in more depth.',
        courseId: webTypography.id,
      },
    ],
  });

  // Motion Design — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Liam Harris',
        rating: 5,
        text: 'This course made my web projects come alive. The section on Framer Motion is the best I have found anywhere online.',
        courseId: motionDesign.id,
      },
      {
        name: 'Megan Clark',
        rating: 5,
        text: 'Incredible course. Applying the 12 animation principles to UI design is a concept I had never encountered before and it is transformative.',
        courseId: motionDesign.id,
      },
      {
        name: 'Noah Lewis',
        rating: 4,
        text: 'Great content with well crafted examples. The CSS animation section is especially thorough and the projects are genuinely fun.',
        courseId: motionDesign.id,
      },
      {
        name: 'Olivia Walker',
        rating: 5,
        text: 'Wow. I had no idea motion design could be so impactful. My portfolio now stands out from everyone else applying for design roles.',
        courseId: motionDesign.id,
      },
      {
        name: 'Paul Martinez',
        rating: 4,
        text: 'Very good course with some real gems. I especially liked the section on easing functions and how they affect the feel of animations.',
        courseId: motionDesign.id,
      },
    ],
  });

  // Responsive Web Design — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Quinn Adams',
        rating: 4,
        text: 'Comprehensive guide to responsive design. The mobile-first approach was a mindset shift that improved all my projects.',
        courseId: responsiveDesign.id,
      },
      {
        name: 'Rachel Brown',
        rating: 5,
        text: 'The accessibility section alone makes this course worth it. I have learned things here that most designers completely overlook.',
        courseId: responsiveDesign.id,
      },
      {
        name: 'Steve Garcia',
        rating: 4,
        text: 'Well structured and practical. The section on fluid typography and container queries covered modern techniques I had been missing.',
        courseId: responsiveDesign.id,
      },
      {
        name: 'Tina Wilson',
        rating: 3,
        text: 'Good course for beginners. If you already know responsive design basics you may find the first half of the course too slow.',
        courseId: responsiveDesign.id,
      },
      {
        name: 'Uma Patel',
        rating: 4,
        text: 'Really enjoyed this course. The media query deep-dive and real-world project examples were exactly what I was looking for.',
        courseId: responsiveDesign.id,
      },
    ],
  });

  // Illustration for UI — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Victor Hughes',
        rating: 4,
        text: 'Great course that fills a gap I did not know I had. Custom illustrations instantly elevated the quality of my design work.',
        courseId: illustrationForUI.id,
      },
      {
        name: 'Wendy Foster',
        rating: 5,
        text: 'I was intimidated by illustration before this course. Now it is one of my strongest skills and clients love it.',
        courseId: illustrationForUI.id,
      },
      {
        name: 'Xavier Lane',
        rating: 4,
        text: 'Solid course with good balance between Figma and Illustrator. The icon design section is particularly well done.',
        courseId: illustrationForUI.id,
      },
      {
        name: 'Yvonne Price',
        rating: 3,
        text: 'Good concept but the Illustrator sections require a subscription that was not mentioned upfront. Figma parts are excellent.',
        courseId: illustrationForUI.id,
      },
      {
        name: 'Zachary Reed',
        rating: 4,
        text: 'Fun and creative course. The instructor has a unique style that is inspiring and the project brief was a good challenge.',
        courseId: illustrationForUI.id,
      },
    ],
  });

  // Portfolio Design — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Abigail Scott',
        rating: 5,
        text: 'This course helped me get interviews at three top companies. The case study writing section was a complete game changer.',
        courseId: portfolioDesign.id,
      },
      {
        name: 'Bradley King',
        rating: 5,
        text: 'Best career-focused design course I have found. Practical, direct, and full of tips that you will not find in generic design courses.',
        courseId: portfolioDesign.id,
      },
      {
        name: 'Courtney Bell',
        rating: 4,
        text: 'Really valuable course. The section on presenting your work and handling critique prepared me well for my first design interview.',
        courseId: portfolioDesign.id,
      },
      {
        name: 'Dylan Morris',
        rating: 5,
        text: 'I rebuilt my portfolio after this course and went from no callbacks to three interviews in two weeks. Absolutely worth it.',
        courseId: portfolioDesign.id,
      },
      {
        name: 'Eleanor Cook',
        rating: 4,
        text: 'Great tips on portfolio structure and storytelling. I only wish there was more on personal branding but the core content is excellent.',
        courseId: portfolioDesign.id,
      },
    ],
  });

  // Python Data Science — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Felix Murphy',
        rating: 5,
        text: 'This course gave me a complete data science toolkit. Pandas and NumPy are now second nature after the extensive exercises.',
        courseId: pythonDataScience.id,
      },
      {
        name: 'Gabrielle Ross',
        rating: 5,
        text: 'Excellent course with real-world datasets. The visualisation section with Matplotlib and Seaborn was worth the price alone.',
        courseId: pythonDataScience.id,
      },
      {
        name: 'Harry James',
        rating: 4,
        text: 'Very thorough and well structured. I went from basic Python to complete data analysis workflows in about six weeks.',
        courseId: pythonDataScience.id,
      },
      {
        name: 'Irene Cooper',
        rating: 5,
        text: 'Best data science foundation course available. The workflow from raw data to insights is taught in a way that actually sticks.',
        courseId: pythonDataScience.id,
      },
      {
        name: 'Julian Brooks',
        rating: 4,
        text: 'Great course overall. The data cleaning section deserves special mention as it is the most practical part of any data science job.',
        courseId: pythonDataScience.id,
      },
    ],
  });

  // Machine Learning — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Katherine Long',
        rating: 5,
        text: 'The best ML fundamentals course available. Theory and practice are perfectly balanced with real datasets throughout.',
        courseId: mlFundamentals.id,
      },
      {
        name: 'Leonard Hill',
        rating: 5,
        text: 'I have tried three other ML courses and this one is far superior. The explanation of bias-variance tradeoff finally made sense here.',
        courseId: mlFundamentals.id,
      },
      {
        name: 'Margaret Young',
        rating: 4,
        text: 'Excellent course with strong scikit-learn coverage. The section on model evaluation metrics is thorough and very practical.',
        courseId: mlFundamentals.id,
      },
      {
        name: 'Nicholas Baker',
        rating: 5,
        text: 'Life-changing course. I completed it and immediately started applying ML techniques at work to solve real business problems.',
        courseId: mlFundamentals.id,
      },
      {
        name: 'Ophelia Green',
        rating: 4,
        text: 'Very good ML course. I especially appreciated the feature engineering section which is often skipped in other courses.',
        courseId: mlFundamentals.id,
      },
      {
        name: 'Paul Wright',
        rating: 5,
        text: 'Outstanding quality from start to finish. This course gave me the confidence to take on ML projects professionally.',
        courseId: mlFundamentals.id,
      },
    ],
  });

  // Deep Learning — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Quinn Nelson',
        rating: 4,
        text: 'Solid deep learning course with great TensorFlow coverage. The CNN section for image recognition was particularly impressive.',
        courseId: deepLearning.id,
      },
      {
        name: 'Rose Carter',
        rating: 5,
        text: 'This course took me from zero neural networks knowledge to building a working transformer. Absolutely brilliant teaching.',
        courseId: deepLearning.id,
      },
      {
        name: 'Sean Phillips',
        rating: 4,
        text: 'Very technical but worth every minute. The RNN and LSTM sections are the clearest explanations I have found anywhere.',
        courseId: deepLearning.id,
      },
      {
        name: 'Tara Campbell',
        rating: 3,
        text: 'Good content but requires a solid Python and ML foundation. I had to pause many times to review prerequisites before continuing.',
        courseId: deepLearning.id,
      },
      {
        name: 'Ulrich Parker',
        rating: 4,
        text: 'Great course for anyone serious about deep learning. The GPU setup guide saved me a lot of time before getting started.',
        courseId: deepLearning.id,
      },
    ],
  });

  // Power BI — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Vera Edwards',
        rating: 4,
        text: 'Very practical Power BI course. I built three dashboards for my manager within a week of starting this course.',
        courseId: dataViz.id,
      },
      {
        name: 'Walter Collins',
        rating: 4,
        text: 'Good coverage of DAX which is the hardest part of Power BI. The calculated columns and measures sections are excellent.',
        courseId: dataViz.id,
      },
      {
        name: 'Xena Stewart',
        rating: 5,
        text: 'Completely transformed how my team reports data. The publishing and sharing section was especially useful for our organisation.',
        courseId: dataViz.id,
      },
      {
        name: 'Yannick Turner',
        rating: 3,
        text: 'Good course but it could use more advanced DAX examples. The basics are well covered but intermediate users may feel the depth is lacking.',
        courseId: dataViz.id,
      },
      {
        name: 'Zara Mitchell',
        rating: 4,
        text: 'Really solid Power BI course. The data modelling section alone made this worth purchasing over other options I considered.',
        courseId: dataViz.id,
      },
    ],
  });

  // Statistics — rating 3
  await prisma.review.createMany({
    data: [
      {
        name: 'Alan Peterson',
        rating: 3,
        text: 'Decent statistics course but the pace is too fast for true beginners. Prior knowledge of basic maths is strongly recommended.',
        courseId: statisticsForDS.id,
      },
      {
        name: 'Barbara Jackson',
        rating: 4,
        text: 'Good coverage of hypothesis testing. The practical examples using real datasets made the abstract concepts much easier to grasp.',
        courseId: statisticsForDS.id,
      },
      {
        name: 'Charles Martin',
        rating: 3,
        text: 'Solid fundamentals but the course jumps from easy to very hard too quickly. More intermediate exercises would help a lot.',
        courseId: statisticsForDS.id,
      },
      {
        name: 'Donna Thompson',
        rating: 2,
        text: 'Too much theory and not enough coding. I expected to apply statistics in Python but most of the course is lecture based.',
        courseId: statisticsForDS.id,
      },
      {
        name: 'Edward Garcia',
        rating: 4,
        text: 'The Bayesian statistics section is the best I have found in any online course. The rest is solid but that part alone justifies enrolling.',
        courseId: statisticsForDS.id,
      },
    ],
  });

  // NLP — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Frances Rodriguez',
        rating: 5,
        text: 'Superb NLP course. The HuggingFace section is incredibly valuable and the sentiment analysis project is impressive.',
        courseId: nlpCourse.id,
      },
      {
        name: 'Gerald Wilson',
        rating: 5,
        text: 'The best NLP course available. Covers everything from basic text preprocessing to fine-tuning transformer models.',
        courseId: nlpCourse.id,
      },
      {
        name: 'Harriet Moore',
        rating: 4,
        text: 'Really enjoyed this course. spaCy is covered in depth and the named entity recognition project is a great portfolio addition.',
        courseId: nlpCourse.id,
      },
      {
        name: 'Ivan Taylor',
        rating: 5,
        text: 'This course landed me a job in NLP engineering. The practical focus and real-world datasets set it apart from other options.',
        courseId: nlpCourse.id,
      },
      {
        name: 'Julia Anderson',
        rating: 4,
        text: 'Excellent content throughout. The text classification section using BERT was challenging but the instructor explained it very well.',
        courseId: nlpCourse.id,
      },
    ],
  });

  // SQL Data Analysis — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Kevin Thomas',
        rating: 4,
        text: 'Great SQL course focused specifically on analysis rather than development. Window functions are explained with fantastic examples.',
        courseId: sqlDataAnalysis.id,
      },
      {
        name: 'Laura Jackson',
        rating: 5,
        text: 'This course made me an SQL power user. CTEs and window functions are now my go-to tools for any analysis task.',
        courseId: sqlDataAnalysis.id,
      },
      {
        name: 'Michael White',
        rating: 4,
        text: 'Very practical and well structured. The query performance section was an eye-opener and immediately useful at work.',
        courseId: sqlDataAnalysis.id,
      },
      {
        name: 'Nancy Harris',
        rating: 3,
        text: 'Good content but assumes you already know basic SQL. Complete beginners should start with an introductory course first.',
        courseId: sqlDataAnalysis.id,
      },
      {
        name: 'Oscar Lewis',
        rating: 4,
        text: 'Excellent course for data analysts. The real business datasets and scenario-based exercises make the learning stick.',
        courseId: sqlDataAnalysis.id,
      },
    ],
  });

  // Big Data Spark — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Patricia Robinson',
        rating: 4,
        text: 'Solid Apache Spark course. The PySpark section is thorough and the cluster deployment lab on AWS was very educational.',
        courseId: bigDataSpark.id,
      },
      {
        name: 'Quentin Walker',
        rating: 5,
        text: 'Outstanding course for anyone moving into big data engineering. The streaming section using Spark Structured Streaming was a highlight.',
        courseId: bigDataSpark.id,
      },
      {
        name: 'Rebecca Hall',
        rating: 4,
        text: 'Very comprehensive. I appreciated the Spark SQL coverage and how it bridges the gap between SQL analysts and big data engineers.',
        courseId: bigDataSpark.id,
      },
      {
        name: 'Samuel Allen',
        rating: 3,
        text: 'Good course but setting up the local Spark environment took much longer than expected. More setup guidance would be helpful.',
        courseId: bigDataSpark.id,
      },
      {
        name: 'Teresa Young',
        rating: 4,
        text: 'Great course that gave me the Spark skills needed to join a data engineering team. The optimisation section is particularly valuable.',
        courseId: bigDataSpark.id,
      },
    ],
  });

  // React Native — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Umar King',
        rating: 5,
        text: 'Best React Native course available. Navigation, animations, and app store submission are all covered in impressive depth.',
        courseId: reactNative.id,
      },
      {
        name: 'Vanessa Scott',
        rating: 5,
        text: 'I published my first app on the App Store two months after starting this course. The instructor is outstanding.',
        courseId: reactNative.id,
      },
      {
        name: 'William Green',
        rating: 4,
        text: 'Excellent course with practical projects. The Expo versus bare workflow comparison section helped me make the right choice for my app.',
        courseId: reactNative.id,
      },
      {
        name: 'Xenia Turner',
        rating: 5,
        text: 'Fantastic course. My React web skills transferred easily to mobile thanks to the clear explanations of what is different in React Native.',
        courseId: reactNative.id,
      },
      {
        name: 'Yasmine Phillips',
        rating: 4,
        text: 'Really solid course. The animations section using Reanimated is the best introduction to the topic I have found online.',
        courseId: reactNative.id,
      },
    ],
  });

  // SwiftUI — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Zachary Brooks',
        rating: 4,
        text: 'Excellent SwiftUI course. The way State and Binding are explained finally made iOS state management click for me.',
        courseId: swiftUI.id,
      },
      {
        name: 'Amber Carter',
        rating: 5,
        text: 'I built a complete fitness tracking app with this course. The Core Data integration section is thorough and very practical.',
        courseId: swiftUI.id,
      },
      {
        name: 'Benjamin Murphy',
        rating: 4,
        text: 'Great course for anyone coming from UIKit. The SwiftUI previews and live reloading features are game changers for productivity.',
        courseId: swiftUI.id,
      },
      {
        name: 'Camille Ross',
        rating: 3,
        text: 'Good content but the pacing in the later sections is too fast. Pausing and rewatching is necessary to absorb everything fully.',
        courseId: swiftUI.id,
      },
      {
        name: 'Dominic Hill',
        rating: 4,
        text: 'Really well structured SwiftUI course. The API integration and async/await sections are excellent and very up to date.',
        courseId: swiftUI.id,
      },
    ],
  });

  // Flutter — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Eleanor James',
        rating: 5,
        text: 'Flutter is a joy to work with and this course made it even better. Riverpod state management is explained beautifully.',
        courseId: flutterDart.id,
      },
      {
        name: 'Freddie Collins',
        rating: 5,
        text: 'Best Flutter course available. The Firebase integration section is comprehensive and the final project is production quality.',
        courseId: flutterDart.id,
      },
      {
        name: 'Georgina Stewart',
        rating: 4,
        text: 'Really enjoyed learning Flutter through this course. The widget tree concept finally clicked thanks to the visual explanations.',
        courseId: flutterDart.id,
      },
      {
        name: 'Harold Edwards',
        rating: 5,
        text: 'Outstanding course. I switched from React Native to Flutter after this and have not looked back. Highly recommended.',
        courseId: flutterDart.id,
      },
      {
        name: 'Isla Mitchell',
        rating: 4,
        text: "Excellent content with great projects. The animations section using Flutter's built-in tools is particularly impressive.",
        courseId: flutterDart.id,
      },
    ],
  });

  // Android Kotlin — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Jacob Turner',
        rating: 4,
        text: 'Solid Android course with modern Jetpack Compose coverage. The MVVM architecture section is excellent and very practical.',
        courseId: androidKotlin.id,
      },
      {
        name: 'Katherine Walker',
        rating: 4,
        text: 'Great course for getting into Android development. Kotlin is a much nicer language than Java and this course teaches it well.',
        courseId: androidKotlin.id,
      },
      {
        name: 'Liam Anderson',
        rating: 5,
        text: 'This course helped me publish my first Android app. The Room database and ViewModel sections are particularly well explained.',
        courseId: androidKotlin.id,
      },
      {
        name: 'Mia Thompson',
        rating: 3,
        text: 'Good course but the older sections using XML layouts feel outdated. The Jetpack Compose sections are modern and excellent.',
        courseId: androidKotlin.id,
      },
      {
        name: 'Nathan Garcia',
        rating: 4,
        text: 'Really comprehensive Android course. I especially liked the testing section which is usually an afterthought in other courses.',
        courseId: androidKotlin.id,
      },
    ],
  });

  // Mobile UX — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Olivia Martin',
        rating: 4,
        text: 'Really insightful course on mobile UX. The gesture navigation patterns section changed how I approach mobile design entirely.',
        courseId: mobileUX.id,
      },
      {
        name: 'Peter Robinson',
        rating: 5,
        text: 'Excellent course that bridges design and development. The micro-interactions section is the most practical treatment of the topic I have seen.',
        courseId: mobileUX.id,
      },
      {
        name: 'Quinn Lewis',
        rating: 4,
        text: 'Well structured and practical. The accessibility section is thorough and helped me build more inclusive apps at work.',
        courseId: mobileUX.id,
      },
      {
        name: 'Rachel White',
        rating: 3,
        text: 'Good overview but I expected more platform-specific guidance for iOS versus Android design differences.',
        courseId: mobileUX.id,
      },
      {
        name: 'Samuel Harris',
        rating: 4,
        text: 'Valuable course for any mobile developer. Understanding UX patterns makes the apps I build significantly better and more intuitive.',
        courseId: mobileUX.id,
      },
    ],
  });

  // Firebase Mobile — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Tara Jackson',
        rating: 4,
        text: 'Excellent Firebase course for mobile developers. Auth and Firestore are covered in real depth with practical app examples.',
        courseId: firebaseMobile.id,
      },
      {
        name: 'Ulrich Taylor',
        rating: 5,
        text: 'This course saved me weeks of Firebase documentation reading. Everything is explained clearly with real-world project code.',
        courseId: firebaseMobile.id,
      },
      {
        name: 'Vera Scott',
        rating: 4,
        text: 'Great course overall. The push notifications section was exactly what I needed and the analytics setup is very well explained.',
        courseId: firebaseMobile.id,
      },
      {
        name: 'Walter Green',
        rating: 3,
        text: 'Good Firebase coverage but the real-time database section is showing its age. A stronger Firestore focus would be more relevant today.',
        courseId: firebaseMobile.id,
      },
      {
        name: 'Xena King',
        rating: 4,
        text: 'Really helpful course. The Firebase security rules section alone is worth enrolling for as it is rarely covered well elsewhere.',
        courseId: firebaseMobile.id,
      },
    ],
  });

  // ASO — rating 3
  await prisma.review.createMany({
    data: [
      {
        name: 'Yannick Carter',
        rating: 3,
        text: 'Decent ASO course but the content feels a bit thin for the price. A deeper look at A/B testing would significantly improve it.',
        courseId: appStoreOptimization.id,
      },
      {
        name: 'Zara Moore',
        rating: 4,
        text: 'Really useful practical tips. The keyword research section helped me double my organic downloads within a month.',
        courseId: appStoreOptimization.id,
      },
      {
        name: 'Adam Phillips',
        rating: 3,
        text: 'Good overview but some strategies are quite generic. More app category-specific advice would make this much more actionable.',
        courseId: appStoreOptimization.id,
      },
      {
        name: 'Bella Collins',
        rating: 4,
        text: 'Good course for indie developers. The screenshots and preview video optimisation section had an immediate impact on my conversion rate.',
        courseId: appStoreOptimization.id,
      },
      {
        name: 'Carl Stewart',
        rating: 2,
        text: 'Too superficial for experienced marketers. Beginners will find value here but there is nothing new for anyone with ASO experience.',
        courseId: appStoreOptimization.id,
      },
    ],
  });

  // Mobile Performance — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Diana Edwards',
        rating: 4,
        text: 'Great course on a topic that is rarely covered in depth. The memory profiling section helped me fix a critical bug in production.',
        courseId: mobilePerformance.id,
      },
      {
        name: 'Elliot Mitchell',
        rating: 5,
        text: 'Outstanding course. I reduced my app launch time by 60% using techniques from the rendering pipeline section alone.',
        courseId: mobilePerformance.id,
      },
      {
        name: 'Flora Turner',
        rating: 4,
        text: 'Very technical and detailed. The battery usage optimisation section is something every mobile developer needs to understand.',
        courseId: mobilePerformance.id,
      },
      {
        name: 'George Brooks',
        rating: 3,
        text: 'Good content but quite advanced for the stated beginner level. Prior experience with profiling tools is recommended.',
        courseId: mobilePerformance.id,
      },
      {
        name: 'Hannah James',
        rating: 4,
        text: 'Excellent course for senior mobile developers. The Instruments and Android Studio profiler sections are particularly valuable.',
        courseId: mobilePerformance.id,
      },
    ],
  });

  // PMP Prep — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Ian Carter',
        rating: 5,
        text: 'This course was instrumental in me passing the PMP exam on the first attempt. The 500 practice questions are superb.',
        courseId: pmpPrep.id,
      },
      {
        name: 'Julia Robinson',
        rating: 5,
        text: 'Best PMP prep course available. The instructor explains the PMBOK concepts in a way that is actually understandable and memorable.',
        courseId: pmpPrep.id,
      },
      {
        name: 'Kevin Lewis',
        rating: 4,
        text: 'Very thorough preparation. The mock exams are harder than the real thing which left me feeling very confident on exam day.',
        courseId: pmpPrep.id,
      },
      {
        name: 'Laura White',
        rating: 5,
        text: 'Passed my PMP exam after just eight weeks with this course. The process group explanations were clear and the examples were excellent.',
        courseId: pmpPrep.id,
      },
      {
        name: 'Marcus Harris',
        rating: 4,
        text: 'Excellent course that balances agile and predictive approaches as required by the updated PMP exam. Highly recommended.',
        courseId: pmpPrep.id,
      },
      {
        name: 'Natalie Jackson',
        rating: 5,
        text: 'I have recommended this course to my entire team. The quality is outstanding and the practice exams are essential for success.',
        courseId: pmpPrep.id,
      },
    ],
  });

  // Agile Scrum — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Oscar Taylor',
        rating: 5,
        text: 'This course transformed how our team works. We implemented Scrum ceremonies the week after I completed the sprint planning module.',
        courseId: agileScrumMaster.id,
      },
      {
        name: 'Patricia Scott',
        rating: 5,
        text: 'Excellent Agile course. Passed the PSM I exam on my first attempt thanks to the thorough preparation this course provides.',
        courseId: agileScrumMaster.id,
      },
      {
        name: 'Quentin Green',
        rating: 4,
        text: 'Really well structured and practical. The case studies showing real Scrum implementations at tech companies were particularly valuable.',
        courseId: agileScrumMaster.id,
      },
      {
        name: 'Rebecca King',
        rating: 5,
        text: 'Best Scrum course I have found. The facilitating retrospectives section gave me techniques that my team immediately adopted.',
        courseId: agileScrumMaster.id,
      },
      {
        name: 'Samuel Moore',
        rating: 4,
        text: 'Great course overall. The section comparing Scrum, Kanban, and SAFe was very helpful for understanding when to use each framework.',
        courseId: agileScrumMaster.id,
      },
    ],
  });

  // Jira Confluence — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Tara Phillips',
        rating: 4,
        text: 'Really practical Jira course. The automation rules section saved our team hours of manual work within the first week of implementation.',
        courseId: jiraConfluence.id,
      },
      {
        name: 'Ulrich Collins',
        rating: 4,
        text: 'Good coverage of both tools. I especially appreciated the Confluence page templates and macros section for documentation.',
        courseId: jiraConfluence.id,
      },
      {
        name: 'Vera Stewart',
        rating: 5,
        text: 'This course made me the go-to Jira expert at my company. The board configuration and reporting sections are excellent.',
        courseId: jiraConfluence.id,
      },
      {
        name: 'Walter Edwards',
        rating: 3,
        text: 'Decent course but some features covered are only available in the paid Jira cloud plan which limits accessibility for learners.',
        courseId: jiraConfluence.id,
      },
      {
        name: 'Xena Mitchell',
        rating: 4,
        text: 'Very useful course for anyone using Atlassian tools professionally. The Confluence space architecture section was a revelation.',
        courseId: jiraConfluence.id,
      },
    ],
  });

  // Risk Management — rating 3
  await prisma.review.createMany({
    data: [
      {
        name: 'Yannick Turner',
        rating: 3,
        text: 'Good introduction to risk management but the IT-specific examples are limited. Construction case studies dominate too much.',
        courseId: riskManagement.id,
      },
      {
        name: 'Zara Brooks',
        rating: 4,
        text: 'Very thorough coverage of risk frameworks. The quantitative risk analysis section using Monte Carlo simulation was excellent.',
        courseId: riskManagement.id,
      },
      {
        name: 'Adam James',
        rating: 3,
        text: 'Decent content but quite dry delivery. The risk register templates are useful but the lecture sections could be more engaging.',
        courseId: riskManagement.id,
      },
      {
        name: 'Bella Carter',
        rating: 4,
        text: 'Good practical focus. Learning to build a risk register and run a risk workshop was immediately applicable to my current project.',
        courseId: riskManagement.id,
      },
      {
        name: 'Carl Robinson',
        rating: 2,
        text: 'Too much theoretical content and not enough practical exercises. The case studies are interesting but the learning activities are lacking.',
        courseId: riskManagement.id,
      },
    ],
  });

  // Kanban — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Diana Lewis',
        rating: 4,
        text: 'Excellent Kanban course. The WIP limits section fundamentally changed how I think about team capacity and workflow efficiency.',
        courseId: kanbanMethod.id,
      },
      {
        name: 'Elliot White',
        rating: 5,
        text: 'Outstanding course on Kanban. The flow metrics section is the most practical treatment of throughput and cycle time I have found.',
        courseId: kanbanMethod.id,
      },
      {
        name: 'Flora Harris',
        rating: 4,
        text: 'Really well structured and evidence based. The section on implementing Kanban without disrupting existing workflows is invaluable.',
        courseId: kanbanMethod.id,
      },
      {
        name: 'George Jackson',
        rating: 3,
        text: 'Good content but quite academic. More case studies from software teams would make this more applicable for tech professionals.',
        courseId: kanbanMethod.id,
      },
      {
        name: 'Hannah Taylor',
        rating: 4,
        text: 'Great course for anyone looking to improve team flow. The cumulative flow diagram section is complex but explained very clearly.',
        courseId: kanbanMethod.id,
      },
    ],
  });

  // Stakeholder Management — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Ian Scott',
        rating: 4,
        text: 'Very practical course on a soft skill that is often underestimated. The conflict resolution frameworks are genuinely useful.',
        courseId: stakeholderManagement.id,
      },
      {
        name: 'Julia Green',
        rating: 5,
        text: 'This course made me a significantly better project manager. Managing stakeholder expectations is now my strongest skill.',
        courseId: stakeholderManagement.id,
      },
      {
        name: 'Kevin King',
        rating: 4,
        text: 'Excellent content on communication planning. The stakeholder mapping exercise was one of the best practical activities I have done.',
        courseId: stakeholderManagement.id,
      },
      {
        name: 'Laura Moore',
        rating: 3,
        text: 'Good course but quite repetitive in places. The core concepts are solid but could be delivered in half the time.',
        courseId: stakeholderManagement.id,
      },
      {
        name: 'Marcus Phillips',
        rating: 4,
        text: 'Really valuable course. The escalation framework and difficult conversation scripts are tools I use every week at work.',
        courseId: stakeholderManagement.id,
      },
    ],
  });

  // Project Budgeting — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Natalie Collins',
        rating: 4,
        text: 'Really solid course on project finance. Earned value management is explained clearly with practical examples that make it stick.',
        courseId: projectBudgeting.id,
      },
      {
        name: 'Oscar Stewart',
        rating: 4,
        text: 'Great coverage of cost control techniques. The variance analysis section helped me identify budget overruns much earlier at work.',
        courseId: projectBudgeting.id,
      },
      {
        name: 'Patricia Edwards',
        rating: 5,
        text: 'Excellent course that filled a real gap in my PM skills. The forecasting section using EVM is something I apply every month.',
        courseId: projectBudgeting.id,
      },
      {
        name: 'Quentin Mitchell',
        rating: 3,
        text: 'Good fundamentals but the Excel templates feel outdated. More coverage of modern PM tools for budget tracking would improve this.',
        courseId: projectBudgeting.id,
      },
      {
        name: 'Rebecca Turner',
        rating: 4,
        text: 'Very practical and well structured. The cost reporting section was exactly what I needed for my current role in a PMO.',
        courseId: projectBudgeting.id,
      },
    ],
  });

  // Remote Teams — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Samuel Brooks',
        rating: 4,
        text: 'Really relevant course for the modern workplace. The async communication frameworks are immediately applicable to any remote team.',
        courseId: remoteTeams.id,
      },
      {
        name: 'Tara James',
        rating: 5,
        text: 'This course transformed how I manage my distributed team. Meetings dropped by 40% and output quality improved significantly.',
        courseId: remoteTeams.id,
      },
      {
        name: 'Ulrich Carter',
        rating: 4,
        text: 'Great practical advice for remote team leaders. The tool selection framework for async workflows saved me weeks of research.',
        courseId: remoteTeams.id,
      },
      {
        name: 'Vera Robinson',
        rating: 3,
        text: 'Good overview but some sections feel generic. More specific advice for engineering and design teams would improve the course.',
        courseId: remoteTeams.id,
      },
      {
        name: 'Walter Lewis',
        rating: 4,
        text: 'Valuable course with actionable strategies. The section on building team culture remotely was the most unique content I have seen on this topic.',
        courseId: remoteTeams.id,
      },
    ],
  });

  // SEO — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Xena White',
        rating: 5,
        text: 'This course completely transformed my website traffic. Organic visits tripled within three months of applying the techniques taught here.',
        courseId: seoMastery.id,
      },
      {
        name: 'Yannick Harris',
        rating: 5,
        text: 'Best SEO course available bar none. Technical SEO, link building, and Core Web Vitals are all covered in exceptional depth.',
        courseId: seoMastery.id,
      },
      {
        name: 'Zara Jackson',
        rating: 4,
        text: 'Excellent course. The keyword research section using multiple tools gave me a system I use for every client website I manage.',
        courseId: seoMastery.id,
      },
      {
        name: 'Adam Taylor',
        rating: 5,
        text: 'Brilliant course that pays for itself many times over. I landed a senior SEO role directly because of the skills I gained here.',
        courseId: seoMastery.id,
      },
      {
        name: 'Bella Scott',
        rating: 4,
        text: 'Very thorough and up to date. The section on AI and SEO was a great addition that most courses have not caught up with yet.',
        courseId: seoMastery.id,
      },
      {
        name: 'Carl Green',
        rating: 5,
        text: 'Outstanding quality from start to finish. The local SEO section helped my client double their Google Business enquiries.',
        courseId: seoMastery.id,
      },
    ],
  });

  // Google Ads — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Diana King',
        rating: 4,
        text: 'Really solid Google Ads course. The campaign structure section helped me reduce my cost per acquisition by 30% immediately.',
        courseId: googleAds.id,
      },
      {
        name: 'Elliot Moore',
        rating: 5,
        text: 'Best Google Ads course I have taken. The Performance Max section is the most up to date coverage of this campaign type available.',
        courseId: googleAds.id,
      },
      {
        name: 'Flora Phillips',
        rating: 4,
        text: 'Great practical course. The bid strategy section finally clarified when to use manual CPC versus smart bidding options.',
        courseId: googleAds.id,
      },
      {
        name: 'George Collins',
        rating: 3,
        text: 'Good content but the shopping campaigns section is a bit dated. Google has changed a lot in this area recently.',
        courseId: googleAds.id,
      },
      {
        name: 'Hannah Stewart',
        rating: 4,
        text: 'Excellent course for anyone managing Google Ads professionally. The quality score optimisation section was particularly eye-opening.',
        courseId: googleAds.id,
      },
    ],
  });

  // Social Media — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Ian Edwards',
        rating: 4,
        text: 'Very practical social media course. The content calendar framework alone is worth the price and I use it with every client.',
        courseId: socialMediaMarketing.id,
      },
      {
        name: 'Julia Mitchell',
        rating: 5,
        text: 'This course gave me the strategy framework I had been missing. My LinkedIn engagement increased tenfold within two months.',
        courseId: socialMediaMarketing.id,
      },
      {
        name: 'Kevin Turner',
        rating: 4,
        text: 'Great course covering all the major platforms. The TikTok section is refreshingly practical and not just theoretical.',
        courseId: socialMediaMarketing.id,
      },
      {
        name: 'Laura Brooks',
        rating: 3,
        text: 'Good overview but social media moves fast and some sections already feel slightly dated. Regular updates would help.',
        courseId: socialMediaMarketing.id,
      },
      {
        name: 'Marcus James',
        rating: 4,
        text: 'Really well structured with excellent case studies. The organic reach section was particularly useful for small business marketing.',
        courseId: socialMediaMarketing.id,
      },
    ],
  });

  // Email Marketing — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Natalie Carter',
        rating: 5,
        text: 'This course completely changed my approach to email marketing. My open rates went from 18% to 42% after applying the techniques.',
        courseId: emailMarketing.id,
      },
      {
        name: 'Oscar Robinson',
        rating: 5,
        text: 'Best email marketing course available. The copywriting frameworks and funnel structure content is genuinely world class.',
        courseId: emailMarketing.id,
      },
      {
        name: 'Patricia Lewis',
        rating: 4,
        text: 'Excellent course with great Klaviyo coverage. The abandoned cart flow section alone generated significant revenue for my e-commerce store.',
        courseId: emailMarketing.id,
      },
      {
        name: 'Quentin White',
        rating: 5,
        text: 'Outstanding quality. I built my first email list from zero to five thousand subscribers using strategies directly from this course.',
        courseId: emailMarketing.id,
      },
      {
        name: 'Rebecca Harris',
        rating: 4,
        text: 'Really practical and up to date. The deliverability section covering spam filters and authentication setup is essential knowledge.',
        courseId: emailMarketing.id,
      },
    ],
  });

  // Content Marketing — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Samuel Jackson',
        rating: 4,
        text: 'Really practical course on content marketing. The SEO writing framework is something I now use for every blog post I create.',
        courseId: contentMarketing.id,
      },
      {
        name: 'Tara Taylor',
        rating: 4,
        text: 'Great course covering both strategy and execution. The landing page copywriting section directly improved my conversion rates.',
        courseId: contentMarketing.id,
      },
      {
        name: 'Ulrich Scott',
        rating: 5,
        text: 'Excellent course that bridges content creation and business results. The ROI measurement section is something most content courses skip.',
        courseId: contentMarketing.id,
      },
      {
        name: 'Vera Green',
        rating: 3,
        text: 'Good introduction to content marketing but the video script section felt rushed. More examples of successful content formats would help.',
        courseId: contentMarketing.id,
      },
      {
        name: 'Walter King',
        rating: 4,
        text: 'Solid course overall. The audience persona development section was thorough and gave me a framework I now use with every new client.',
        courseId: contentMarketing.id,
      },
    ],
  });

  // GA4 — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Xena Moore',
        rating: 4,
        text: 'Really helpful GA4 course during a confusing transition period. The custom events and conversions setup section is excellent.',
        courseId: analyticsGA4.id,
      },
      {
        name: 'Yannick Phillips',
        rating: 5,
        text: 'Best GA4 course available. The Looker Studio dashboard section gave me reporting capabilities that impressed every client.',
        courseId: analyticsGA4.id,
      },
      {
        name: 'Zara Collins',
        rating: 4,
        text: 'Very practical course. The funnel exploration and user journey analysis sections are immediately applicable to real marketing work.',
        courseId: analyticsGA4.id,
      },
      {
        name: 'Adam Stewart',
        rating: 3,
        text: 'Good GA4 coverage but the course could benefit from more advanced attribution modelling content. Basics are well covered though.',
        courseId: analyticsGA4.id,
      },
      {
        name: 'Bella Edwards',
        rating: 4,
        text: 'Excellent course for marketers migrating from Universal Analytics. The side by side comparisons are very helpful for the transition.',
        courseId: analyticsGA4.id,
      },
    ],
  });

  // Influencer Marketing — rating 3
  await prisma.review.createMany({
    data: [
      {
        name: 'Carl Mitchell',
        rating: 3,
        text: 'Decent overview of influencer marketing but the ROI measurement section is quite superficial. Expected more depth on analytics.',
        courseId: influencerMarketing.id,
      },
      {
        name: 'Diana Turner',
        rating: 4,
        text: 'Good practical course. The negotiation scripts and brief templates are immediately useful for anyone working with influencers.',
        courseId: influencerMarketing.id,
      },
      {
        name: 'Elliot Brooks',
        rating: 3,
        text: 'Average course. The micro-influencer section has some gems but the rest feels generic and could apply to any marketing channel.',
        courseId: influencerMarketing.id,
      },
      {
        name: 'Flora James',
        rating: 4,
        text: 'Really useful for brands just starting with influencer marketing. The vetting process for finding authentic influencers is well covered.',
        courseId: influencerMarketing.id,
      },
      {
        name: 'George Carter',
        rating: 2,
        text: 'Too basic for anyone with marketing experience. The content barely scratches the surface of what is needed for serious influencer campaigns.',
        courseId: influencerMarketing.id,
      },
    ],
  });

  // E-commerce Marketing — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Hannah Robinson',
        rating: 5,
        text: 'This course directly contributed to a 150% increase in my store revenue. The paid ads and email flow combination is powerful.',
        courseId: ecommerceMarketing.id,
      },
      {
        name: 'Ian Lewis',
        rating: 5,
        text: 'Best e-commerce marketing course available. The conversion rate optimisation section alone is worth ten times the course price.',
        courseId: ecommerceMarketing.id,
      },
      {
        name: 'Julia White',
        rating: 4,
        text: 'Excellent course with very actionable content. The product page optimisation section helped me increase my add to cart rate significantly.',
        courseId: ecommerceMarketing.id,
      },
      {
        name: 'Kevin Harris',
        rating: 5,
        text: 'Outstanding course. I implemented the abandoned cart strategy from the email section and recovered thousands of dollars in revenue.',
        courseId: ecommerceMarketing.id,
      },
      {
        name: 'Laura Jackson',
        rating: 4,
        text: 'Really solid course overall. The customer lifetime value section changed how I think about acquisition costs and long-term profitability.',
        courseId: ecommerceMarketing.id,
      },
    ],
  });

  // AWS Practitioner — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Marcus Taylor',
        rating: 5,
        text: 'Perfect preparation for the Cloud Practitioner exam. Passed on my first attempt after two weeks of study with this course.',
        courseId: awsFundamentals.id,
      },
      {
        name: 'Natalie Scott',
        rating: 5,
        text: 'Outstanding course for anyone new to cloud computing. AWS services are explained clearly without unnecessary jargon.',
        courseId: awsFundamentals.id,
      },
      {
        name: 'Oscar Green',
        rating: 4,
        text: 'Really well structured. The shared responsibility model and pricing sections were crucial for passing the exam.',
        courseId: awsFundamentals.id,
      },
      {
        name: 'Patricia King',
        rating: 5,
        text: 'Best AWS fundamentals course I found. The hands-on labs with real AWS accounts made the learning stick in a way videos alone cannot.',
        courseId: awsFundamentals.id,
      },
      {
        name: 'Quentin Moore',
        rating: 4,
        text: 'Excellent course overall. A bit more depth on the networking services would make it perfect but the core content is excellent.',
        courseId: awsFundamentals.id,
      },
    ],
  });

  // AWS Solutions Architect — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Rebecca Phillips',
        rating: 5,
        text: 'This course is the reason I passed the Solutions Architect exam. The VPC and IAM sections are extraordinarily thorough.',
        courseId: awsSolutionsArchitect.id,
      },
      {
        name: 'Samuel Collins',
        rating: 5,
        text: 'Best AWS course on the market. The high availability architecture patterns are explained in a way that changes how you design systems.',
        courseId: awsSolutionsArchitect.id,
      },
      {
        name: 'Tara Stewart',
        rating: 4,
        text: 'Really comprehensive course. The hands-on labs are invaluable and the exam tips throughout saved me significant study time.',
        courseId: awsSolutionsArchitect.id,
      },
      {
        name: 'Ulrich Edwards',
        rating: 5,
        text: 'Passed the SAA-C03 exam on my first attempt after this course. The practice exams are harder than the real thing which is exactly right.',
        courseId: awsSolutionsArchitect.id,
      },
      {
        name: 'Vera Mitchell',
        rating: 4,
        text: 'Outstanding quality throughout. I especially appreciated the real-world architecture diagrams showing how major companies use AWS.',
        courseId: awsSolutionsArchitect.id,
      },
      {
        name: 'Walter Turner',
        rating: 5,
        text: 'Career-defining course. The AWS skills from this course helped me negotiate a 40% salary increase at my next job interview.',
        courseId: awsSolutionsArchitect.id,
      },
    ],
  });

  // Docker Kubernetes — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Xena Brooks',
        rating: 5,
        text: 'The most complete Docker and Kubernetes course available. The Helm charts section is the clearest explanation I have found anywhere.',
        courseId: dockerKubernetes.id,
      },
      {
        name: 'Yannick James',
        rating: 5,
        text: 'This course transformed my deployment workflow. We moved to Kubernetes at work using patterns I learned here and the transition was smooth.',
        courseId: dockerKubernetes.id,
      },
      {
        name: 'Zara Carter',
        rating: 4,
        text: 'Excellent course. The multi-stage Docker builds and resource management sections were highlights that I immediately applied at work.',
        courseId: dockerKubernetes.id,
      },
      {
        name: 'Adam Robinson',
        rating: 5,
        text: 'Outstanding course that covers both tools in the right depth. The ingress controller configuration section alone saved me days of troubleshooting.',
        courseId: dockerKubernetes.id,
      },
      {
        name: 'Bella Lewis',
        rating: 4,
        text: 'Really well structured with excellent projects. I now containerise everything I build and understand exactly what I am doing thanks to this.',
        courseId: dockerKubernetes.id,
      },
    ],
  });

  // Terraform — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Carl White',
        rating: 4,
        text: 'Really solid Terraform course. The multi-environment setup with workspaces is exactly what I needed for our staging and production setup.',
        courseId: terraformIaC.id,
      },
      {
        name: 'Diana Harris',
        rating: 5,
        text: 'This course made IaC finally click for me. The remote state and locking section is essential for anyone working in a team.',
        courseId: terraformIaC.id,
      },
      {
        name: 'Elliot Jackson',
        rating: 4,
        text: 'Excellent course covering AWS, Azure, and GCP with Terraform. The module structure section significantly improved my code organisation.',
        courseId: terraformIaC.id,
      },
      {
        name: 'Flora Taylor',
        rating: 3,
        text: 'Good course but the GCP sections are less polished than the AWS content. Terraform itself is well explained throughout.',
        courseId: terraformIaC.id,
      },
      {
        name: 'George Scott',
        rating: 4,
        text: 'Very practical course. The CI/CD pipeline integration with GitHub Actions and Terraform Cloud was a great bonus section.',
        courseId: terraformIaC.id,
      },
    ],
  });

  // GCP — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Hannah Green',
        rating: 4,
        text: "Great GCP course. The GKE section is comprehensive and the IAM role hierarchy is explained more clearly than in Google's own documentation.",
        courseId: gcpAssociate.id,
      },
      {
        name: 'Ian King',
        rating: 4,
        text: 'Really solid exam preparation. The hands-on labs with real GCP free tier accounts make a huge difference to the learning experience.',
        courseId: gcpAssociate.id,
      },
      {
        name: 'Julia Moore',
        rating: 5,
        text: 'Passed the ACE exam after three weeks with this course. The networking section is especially thorough and exam-focused.',
        courseId: gcpAssociate.id,
      },
      {
        name: 'Kevin Phillips',
        rating: 3,
        text: 'Good content but the Cloud Storage section is less detailed than I expected. The Compute Engine and GKE sections more than compensate.',
        courseId: gcpAssociate.id,
      },
      {
        name: 'Laura Collins',
        rating: 4,
        text: 'Excellent course for anyone coming from AWS who wants to add GCP to their skill set. The service comparison tables are particularly useful.',
        courseId: gcpAssociate.id,
      },
    ],
  });

  // DevOps CI/CD — rating 5
  await prisma.review.createMany({
    data: [
      {
        name: 'Marcus Stewart',
        rating: 5,
        text: "This course elevated my entire team's deployment process. GitHub Actions is explained in more depth here than anywhere else online.",
        courseId: devOpsCI.id,
      },
      {
        name: 'Natalie Edwards',
        rating: 5,
        text: 'Outstanding DevOps course. The ArgoCD and GitOps section was a completely new concept for me and has become central to my work.',
        courseId: devOpsCI.id,
      },
      {
        name: 'Oscar Mitchell',
        rating: 4,
        text: 'Really comprehensive course covering the entire CI/CD pipeline. The blue-green deployment section was a highlight with excellent examples.',
        courseId: devOpsCI.id,
      },
      {
        name: 'Patricia Turner',
        rating: 5,
        text: 'Best CI/CD course available. I rebuilt our entire pipeline after this course and deployment frequency went from monthly to daily.',
        courseId: devOpsCI.id,
      },
      {
        name: 'Quentin Brooks',
        rating: 4,
        text: 'Excellent quality throughout. The monitoring and observability section with Prometheus and Grafana was a great addition to the core content.',
        courseId: devOpsCI.id,
      },
    ],
  });

  // Serverless — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Rebecca James',
        rating: 4,
        text: 'Really solid serverless course. The Lambda cold start optimisation section was exactly the kind of practical depth I was looking for.',
        courseId: serverless.id,
      },
      {
        name: 'Samuel Carter',
        rating: 5,
        text: 'This course changed my architecture approach entirely. Event-driven serverless patterns are now my default for new AWS projects.',
        courseId: serverless.id,
      },
      {
        name: 'Tara Robinson',
        rating: 4,
        text: 'Excellent course. The API Gateway and DynamoDB integration section is the most complete treatment of that combination I have found.',
        courseId: serverless.id,
      },
      {
        name: 'Ulrich Lewis',
        rating: 3,
        text: 'Good course but the Serverless Framework sections are showing their age slightly. More AWS SAM coverage would improve the balance.',
        courseId: serverless.id,
      },
      {
        name: 'Vera White',
        rating: 4,
        text: 'Really practical serverless course. The cost calculation exercises helped me understand when serverless makes financial sense versus containers.',
        courseId: serverless.id,
      },
    ],
  });

  // Cloud Security — rating 4
  await prisma.review.createMany({
    data: [
      {
        name: 'Walter Harris',
        rating: 4,
        text: 'Excellent cloud security course. The IAM least privilege section is something every cloud engineer needs to understand deeply.',
        courseId: cloudSecurity.id,
      },
      {
        name: 'Xena Jackson',
        rating: 5,
        text: 'This course should be mandatory for anyone working in cloud. The encryption at rest and in transit section is thorough and very clear.',
        courseId: cloudSecurity.id,
      },
      {
        name: 'Yannick Taylor',
        rating: 4,
        text: 'Really well structured security course. The compliance frameworks section covering SOC 2 and ISO 27001 was a valuable bonus.',
        courseId: cloudSecurity.id,
      },
      {
        name: 'Zara Scott',
        rating: 3,
        text: 'Good fundamentals but could go deeper on threat modelling and penetration testing in cloud environments. Solid starting point though.',
        courseId: cloudSecurity.id,
      },
      {
        name: 'Adam Green',
        rating: 4,
        text: 'Excellent course overall. The network security groups and VPC security section helped me identify and fix several vulnerabilities at work.',
        courseId: cloudSecurity.id,
      },
    ],
  });

  // timeSeriesAnalysis and azureAdmin intentionally have no reviews

  console.log('Seed completed successfully!');
  console.log('Created: 7 categories, 63 courses, ~300 reviews');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
