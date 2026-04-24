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
    github: 'https://github.com/adhok01',
    x: 'https://x.com/AdhokshajaSN',
    instagram: 'https://instagram.com/adhok_18',
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
      degree: 'MBA in Marketing & Product Management',
      school: 'CMS Business School',
      location: 'Bangalore, India',
      period: 'Aug 2026 – May 2027',
      gpa: '8.9',
      courses: ['Market Research', 'AI Product Management', 'Operations Research'],
      icon: '🎓',
    },
    {
      degree: 'MS by Research Data Science & AI',
      school: 'REVA University',
      location: 'Bangalore, India',
      period: 'Nov 2021 – Oct 2023',
      gpa: '8.4',
      courses: ['Statistics', 'NLP', 'Large Language Models', 'Analytics'],
      icon: '🎓',
    },
    {
      degree: 'BS in Computer Science',
      school: 'Karnataka University',
      location: 'Dharwad, India',
      period: 'Jul 2018 – Sept 2021',
      gpa: '7.0',
      courses: ['SDLC', 'Python Programming', 'Management Information System'],
      icon: '🎓',
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

  projectCategories: [
    {
      id: 'ai',
      title: 'AI Projects',
      slug: 'ai-projects',
      desc: 'Generative AI, Large Language Models, and Neural Networks.',
      icon: '🤖',
      color: '#a78bfa'
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      slug: 'ml-projects',
      desc: 'Predictive modeling, classification, and statistical learning.',
      icon: '🧠',
      color: '#00d4ff'
    },
    {
      id: 'bi',
      title: 'Business Intelligence',
      slug: 'bi-projects',
      desc: 'Data visualization, dashboards, and strategic insights.',
      icon: '📈',
      color: '#c9a84c'
    },
    {
      id: 'automation',
      title: 'AI Automation',
      slug: 'ai-automation',
      desc: 'Workflow optimization using agents and automated pipelines.',
      icon: '⚡',
      color: '#22c55e'
    }
  ],

  projects: [
    {
      id: 1,
      slug: 'housing-analysis',
      title: 'Cloud Platform — Housing Data Analysis',
      desc: 'Interactive intelligence dashboard tracking regional price movements and geographic demand patterns.',
      long: 'Conducted comprehensive secondary research on housing sector trends. Built an interactive Power BI dashboard with regional price movement tracking, sales growth analytics, and geographic demand heatmaps. Synthesised quantitative pricing data into structured visual frameworks replicating real market research workflows.',
      impact: 'Identified 15% undervalued growth clusters in Tier-2 cities.',
      tools: ['Power BI', 'Python', 'Excel'],
      category: 'bi',
      featured: true,
      color: '#c9a84c',
      demoLink: 'https://app.powerbi.com',
      githubLink: 'https://github.com/adhok01',
    },
    {
      id: 2,
      slug: 'aws-pipeline',
      title: 'Cloud Data Pipeline — AWS + Power BI',
      desc: 'End-to-end data pipeline via S3, Glue, Athena connected to Power BI for real-time analytics.',
      long: 'Developed a full AWS–Power BI pipeline. Used S3 for storage, Glue for ETL transformation, and Athena for querying. Connected to Power BI for visualisation with radar charts, slicers, and navigators. Published reports to Power BI service for stakeholder access.',
      impact: 'Reduced data latency by 40% using automated ETL triggers.',
      tools: ['AWS S3', 'Glue', 'Athena', 'Power BI', 'SQL'],
      category: 'bi',
      color: '#00d4ff',
      demoLink: 'https://aws.amazon.com',
      githubLink: 'https://github.com/adhok01',
    },
    {
      id: 3,
      slug: 'ddos-detection',
      title: 'ML Framework for DDoS Detection',
      desc: 'Machine learning model achieving high accuracy in detecting and preventing DDoS attacks in real-time.',
      long: 'Developed a robust ML-based framework for identifying anomalous traffic patterns associated with DDoS attacks. Implemented feature engineering on network packet data and trained multiple classifiers including Random Forest and XGBoost.',
      impact: 'Achieved 95.8% detection accuracy on benchmark datasets.',
      tools: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas'],
      category: 'ml',
      color: '#a78bfa',
      githubLink: 'https://github.com/adhok01',
    },
    {
      id: 4,
      slug: 'n8n-researcher',
      title: 'AI Research Agent — N8N + Claude',
      desc: 'Automated research pipeline that scrapes web data and synthesizes industry reports using LLMs.',
      long: 'Built a multi-agent workflow using N8N to automate market research. The system triggers on demand, searches the web for specific industry signals, extracts key data points using Claude 3.5, and generates a structured research brief in Notion.',
      impact: 'Reduced manual research time from 6 hours to 12 minutes per report.',
      tools: ['N8N', 'Claude AI', 'Notion API', 'Puppeteer'],
      category: 'automation',
      color: '#22c55e',
      featured: true,
      githubLink: 'https://github.com/adhok01',
    },
    {
      id: 5,
      slug: 'sales-analysis',
      title: 'Power BI Data Modeling & Sales Analysis',
      desc: 'Star schema modeling and DAX measures for deep profitability analysis.',
      long: 'Built a complete Power BI solution from data loading and transformation to star schema modeling. Developed DAX measures and interactive dashboards to analyse top/bottom products, sales trends, and profitability metrics.',
      impact: 'Uncovered $12k in hidden costs through granular margin analysis.',
      tools: ['Power BI', 'DAX', 'SQL'],
      category: 'bi',
      color: '#a78bfa',
      demoLink: 'https://app.powerbi.com',
      githubLink: 'https://github.com/adhok01',
    },
    {
      id: 6,
      slug: 'ai-storyteller',
      title: 'AI Narrative Engine',
      desc: 'Generative AI system that converts raw market data into compelling business narratives.',
      long: 'Leveraged OpenAI GPT-4 API to build a tool that takes CSV data and generates 5-slide executive summaries. The system identifies outliers, trends, and suggests strategic actions.',
      impact: 'Adopted by 3 teams for weekly stakeholder reporting.',
      tools: ['Python', 'GPT-4', 'Streamlit', 'LangChain'],
      category: 'ai',
      color: '#a78bfa',
      githubLink: 'https://github.com/adhok01',
    },
    {
      id: 7,
      slug: 'customer-segmentation',
      title: 'ML Customer Segmentation',
      desc: 'Unsupervised learning project to identify high-value customer clusters for targeted marketing.',
      long: 'Implemented K-Means clustering and PCA to segment a customer base of 50k users. Analyzed RFM (Recency, Frequency, Monetary) metrics to define 4 distinct personas.',
      impact: 'Increased campaign CTR by 22% through personalized targeting.',
      tools: ['Python', 'Scikit-Learn', 'Matplotlib', 'SQL'],
      category: 'ml',
      color: '#00d4ff',
      githubLink: 'https://github.com/adhok01',
    }
  ],

  publications: [
    {
      year: '2022',
      venue: 'RDECS 2022',
      title: 'Augmented Intelligence in Civil Engineering Data Collection',
      desc: 'Applied AI to improve data collection by 40%, enhancing design accuracy and operational efficiency by up to 35%.',
      tags: ['AI Application', 'Civil Engineering'],
      link: 'https://ebooks.iospress.nl/volumearticle/62434?_gl=1*1xvdil1*_up*MQ..*_ga*MTM3MDE2OTIyNC4xNzc2MjU4Mzky*_ga_6N3Q0141SM*czE3NzYyNTgzOTEkbzEkZzAkdDE3NzYyNTgzOTEkajYwJGwwJGgw',
    },
    {
      year: '2023',
      venue: 'ICICT 2023',
      title: 'ML-Based Framework for DDoS Attack Detection & Prevention',
      desc: 'Machine learning model achieving over 95% accuracy in detecting and preventing DDoS attacks.',
      tags: ['Cybersecurity', 'ML', '95%+ Accuracy'],
    },
    {
      year: '2026',
      venue: 'EconSpace 2026',
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
