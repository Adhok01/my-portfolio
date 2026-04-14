export const portfolioData = {
  personal: {
    name: 'ADHOKSHAJA NAGARHALLI',
    shortName: 'AN',
    title: 'MBA Marketing · MS Data Science · AI Product Management',
    subtitle: 'Market Research · Data Analytics · Business Intelligence',
    tagline: 'I translate market signals into strategy and data into decisions.',
    description:
      "Sitting at the intersection of AI, analytics, and business storytelling — I help organisations uncover whitespace, map competitive landscapes, and turn raw data into insight-led decisions.",
    email: 'adhokshajasn04@gmail.com',
    phone: '+91 63624 57628',
    location: 'Bengaluru, India',
    linkedin: 'https://linkedin.com/in/Adhokshaja-Srinivas',
    resume: '/resume.pdf',
  },

  stats: [
    { num: '8.9', label: 'MBA GPA' },
    { num: '3+', label: 'Publications' },
    { num: '30%', label: 'Research Speed ↑' },
    { num: 'ISB', label: 'AI PM Certified' },
  ],

  education: [
    {
      degree: 'MBA in Marketing',
      school: 'CMS Business School',
      location: 'Bangalore, India',
      period: 'Aug 2025 – May 2027',
      gpa: '8.9',
      courses: ['Market Research', 'AI Product Management', 'Operations Research'],
      icon: '🎓',
    },
    {
      degree: 'MS(R) Data Science & Analytics',
      school: 'REVA University',
      location: 'Bangalore, India',
      period: 'Nov 2021 – Oct 2023',
      gpa: '8.4',
      courses: ['Statistics', 'NLP', 'Large Language Models', 'Analytics'],
      icon: '📊',
    },
    {
      degree: 'BS in Computer Science',
      school: 'Karnataka University',
      location: 'Dharwad, India',
      period: 'Jul 2018 – Sept 2021',
      gpa: '7.0',
      courses: ['SDLC', 'Python Programming', 'Management Information System'],
      icon: '💻',
    },
  ],

  skills: [
    {
      category: 'Research & Intelligence',
      icon: '🔍',
      color: 'gold',
      items: [
        'Secondary Research', 'Competitor Mapping', 'Market Landscape Analysis',
        'Customer Profiling', 'Hiring Demand Signals', 'Pricing Insights', 'Whitespace Identification',
      ],
    },
    {
      category: 'Report & Content',
      icon: '📝',
      color: 'cyan',
      items: [
        'Insight Reports', 'Research Briefs', 'Leadership Decks',
        'Infographics', 'Business Storytelling', 'Industry Reports',
      ],
    },
    {
      category: 'Data & Visualization',
      icon: '📈',
      color: 'green',
      items: [
        'Power BI Advanced', 'Tableau', 'Excel', 'Google Sheets',
        'SQL', 'Python', 'DAX', 'EDA', 'Quant + Qual Synthesis',
      ],
    },
    {
      category: 'AI & Research Tools',
      icon: '🤖',
      color: 'purple',
      items: [
        'ChatGPT', 'Claude AI', 'N8N Automation',
        'Prompt Engineering', 'AI Insight Extraction', 'Output Validation',
      ],
    },
    {
      category: 'Design & Collaboration',
      icon: '🤝',
      color: 'gold',
      items: [
        'PowerPoint', 'Google Slides', 'Notion',
        'Stakeholder Communication', 'Research Repository Management',
      ],
    },
  ],

  experience: [
    {
      role: 'Product Management Trainee',
      company: 'Indian Business School',
      location: 'Hyderabad, India',
      period: 'Present',
      type: 'Internship',
      highlights: [
        'Conducted market research and industry trend analysis to identify customer demands and growth opportunities across target segments.',
        'Supported product managers in mapping user needs to product roadmap inputs through structured research.',
        'Identified hiring demand signals, pricing benchmarks, and whitespace opportunities feeding into strategic planning.',
        'Leveraged LLMs (ChatGPT, Claude) to reduce research turnaround by ~30% while validating outputs.',
        'Prepared stakeholder reports, presentations, and product documentation for launches.',
      ],
      tags: ['ChatGPT', 'Claude AI', 'Market Research', 'Roadmapping', 'Competitive Analysis'],
    },
    {
      role: 'Data Analyst Intern',
      company: 'CDW',
      location: 'Bangalore, India',
      period: 'Sept 2023 – Jan 2024',
      type: 'Internship',
      highlights: [
        'Built customer segmentation models using Python & SQL — identifying 4 key segments and reducing churn by 10%.',
        'Produced quantitative narratives across 3+ parallel research projects with Power BI visuals.',
        'Conducted pricing and competitive analysis, delivering stakeholder-aligned research briefs.',
        'Synthesised multi-year campaign data into structured Excel trend reports for client benchmarking.',
      ],
      tags: ['Power BI', 'Python', 'SQL', 'Segmentation', 'Pricing Analysis'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Cloud Platform — Housing Data Analysis',
      desc: 'Interactive intelligence dashboard tracking regional price movements, sales growth, and geographic demand patterns across multiple city clusters.',
      long: 'Conducted comprehensive secondary research on housing sector trends. Built an interactive Power BI dashboard with regional price movement tracking, sales growth analytics, and geographic demand heatmaps. Synthesised quantitative pricing data into structured visual frameworks replicating real market research workflows.',
      tools: ['Power BI', 'Python', 'Excel'],
      category: 'Analytics',
      color: '#c9a84c',
    },
    {
      id: 2,
      title: 'Cloud Data Pipeline — AWS + Power BI',
      desc: 'End-to-end data pipeline via S3, Glue, Athena connected to Power BI with radar charts and interactive dashboards.',
      long: 'Developed a full AWS–Power BI pipeline. Used S3 for storage, Glue for ETL transformation, and Athena for querying. Connected to Power BI for visualisation with radar charts, slicers, and navigators. Published reports to Power BI service for stakeholder access.',
      tools: ['AWS S3', 'Glue', 'Athena', 'Power BI', 'SQL'],
      category: 'Cloud',
      color: '#00d4ff',
    },
    {
      id: 3,
      title: 'Power BI Data Modeling & Sales Analysis',
      desc: 'Star schema modeling, DAX measures, and interactive dashboards analysing products, sales trends, and profitability.',
      long: 'Built a complete Power BI solution from data loading and transformation to star schema modeling, defining relationships, and applying filters. Developed DAX measures and interactive dashboards to analyse top/bottom products, sales trends, and profitability metrics.',
      tools: ['Power BI', 'DAX', 'SQL'],
      category: 'Analytics',
      color: '#a78bfa',
    },
  ],

  publications: [
    {
      year: '2022',
      venue: 'RDECS 2022',
      title: 'Augmented Intelligence in Civil Engineering Data Collection',
      desc: 'Applied AI to improve data collection by 40%, enhancing design accuracy and operational efficiency by up to 35%.',
      tags: ['AI Application', 'Civil Engineering'],
    },
    {
      year: '2023',
      venue: 'ICICT 2023',
      title: 'ML-Based Framework for DDoS Attack Detection & Prevention',
      desc: 'Machine learning model achieving over 95% accuracy in detecting and preventing DDoS attacks.',
      tags: ['Cybersecurity', 'ML', '95%+ Accuracy'],
    },
    {
      year: '2025',
      venue: 'EconSpace 2025',
      title: "COVID-19's Impact on Crypto, Equities, Gold & Crude Oil",
      desc: 'Market research combining qualitative interpretation with quantitative trend data across four asset classes.',
      tags: ['Market Research', 'Finance', 'EconSpace'],
    },
  ],

  certifications: [
    {
      name: 'PGP in AI Product Management',
      issuer: 'Indian School of Business (ISB)',
      icon: '🏆',
      desc: 'Post-Graduate Programme covering AI strategy, product management frameworks, LLM application design, and AI-driven go-to-market approaches.',
    },
  ],

  marqueeItems: [
    'Market Research', 'Competitor Intelligence', 'AI Product Management',
    'Data Analytics', 'Business Storytelling', 'Power BI', 'Python',
    'LLM Workflows', 'Pricing Insights', 'ISB Certified',
  ],
}
