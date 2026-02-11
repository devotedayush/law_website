export type ServiceItem = {
    title: string;
    description?: string;
};

export type ItemGroup = {
    heading: string;
    items: ServiceItem[];
};

export type SubService = {
    title: string;
    description: string;
    icon: string;
    items: ServiceItem[];
    groups?: ItemGroup[];
};

export type ProcessStep = {
    title: string;
    description?: string;
    items?: string[];
};

export type ServiceCategory = {
    id: string;
    label: string[];
    title: string;
    subtitle: string;
    description?: string;
    sectionHeading?: string;
    sectionSubtitle?: string;
    subServices: SubService[];
    process?: {
        heading: string;
        subtitle: string;
        steps: ProcessStep[];
        outcome?: string;
    };
};

/* ───────────────────────────────────────────────
   1. Legal & Regulatory Compliance
   ─────────────────────────────────────────────── */

export const legalServices: ServiceCategory = {
    id: 'legal',
    label: ['Legal &', 'Regulatory'],
    title: 'Legal & Regulatory Compliance',
    subtitle:
        'Comprehensive legal solutions for businesses and individuals to navigate complex legal landscapes with confidence.',
    subServices: [
        {
            title: 'Intellectual Property Compliance',
            description: 'Protect and manage your intellectual assets effectively.',
            icon: 'shield',
            items: [
                { title: 'IP Prosecution & Registration', description: 'Trademark, patent, and design filings and registrations' },
                { title: 'IP Litigation & Enforcement', description: 'Protection and enforcement of intellectual property rights' },
                { title: 'IP Licensing, Commercialization & Technology Transfer', description: 'Structuring IP agreements for business growth' },
                { title: 'IP Audits & Protection Strategies', description: 'Identifying, valuing, and safeguarding IP assets' },
            ],
        },
        {
            title: 'Technology & Cybersecurity Compliance',
            description: 'Stay secure and compliant in the digital age.',
            icon: 'lock',
            items: [
                { title: 'Data Protection & Privacy Compliance', description: 'Compliance with applicable data protection laws' },
                { title: 'IT Contracts & Technology Transactions', description: 'Drafting and negotiating technology-related agreements' },
                { title: 'Cybersecurity & Risk Management Advisory', description: 'Cyber risk mitigation and compliance strategies' },
                { title: 'Digital Forensics & Cybercrime Advisory', description: 'Legal support in cybercrime investigations and responses' },
            ],
        },
        {
            title: 'Commercial Law Compliance',
            description: 'Comprehensive legal support for business operations.',
            icon: 'fileText',
            items: [
                { title: 'Contract Drafting & Negotiation', description: 'Legally sound commercial agreements' },
                { title: 'Regulatory Compliance Advisory', description: 'Adherence to business and commercial laws' },
                { title: 'Banking & Finance Advisory', description: 'Guidance on financial regulations and transactions' },
            ],
        },
        {
            title: 'Employment & Labor Law Compliance',
            description: 'Ensuring workplace compliance and risk mitigation.',
            icon: 'users',
            items: [
                { title: 'Employment Contracts & HR Policies', description: 'Drafting and reviewing employment documentation' },
                { title: 'Labor Law Compliance & Advisory', description: 'Compliance with labor laws and employee rights' },
                { title: 'Regulatory Representation', description: 'Representation before labor authorities' },
                { title: 'Workplace Investigations', description: 'Handling disputes, misconduct, and internal inquiries' },
            ],
        },
        {
            title: 'Corporate Legal Compliance',
            description: 'Legal support for businesses at every stage.',
            icon: 'building',
            items: [
                { title: 'Business Formation & Set-up Compliance', description: 'Legal structuring and registrations' },
                { title: 'Legal Risk Assessments', description: 'Identifying and mitigating corporate legal risks' },
                { title: 'Regulatory Compliance Audits', description: 'Industry-specific compliance reviews' },
                { title: 'General Legal Advisory & Opinions', description: 'Ongoing legal guidance and expert opinions' },
            ],
        },
        {
            title: 'Financial & Banking Compliance',
            description: 'Ensuring adherence to financial and banking regulations.',
            icon: 'landmark',
            items: [
                { title: 'SARFAESI Act Compliance & Proceedings', description: 'Secured asset recovery matters' },
                { title: 'Debt Recovery Tribunal (DRT) Representation', description: 'Legal representation in debt recovery cases' },
                { title: 'Banking Regulation Act Compliance', description: 'Advisory on banking laws and regulations' },
                { title: 'Financial Institution Regulatory Compliance', description: 'Compliance support for financial entities' },
                { title: 'Banking Fraud Investigation & Litigation', description: 'Handling financial fraud disputes' },
                { title: 'Negotiable Instruments Act Compliance', description: 'Legal support for cheque bounce and related matters' },
                { title: 'Anti-Money Laundering (AML) Compliance', description: 'Advisory and compliance support' },
            ],
        },
        {
            title: 'Real Estate & Property Compliance',
            description: 'Comprehensive legal assistance for property matters.',
            icon: 'home',
            items: [
                { title: 'Property Transactions & Conveyancing', description: 'Structuring and execution of real estate transactions' },
                { title: 'Land Acquisition & Environmental Compliance', description: 'Legal support for acquisitions and clearances' },
                { title: 'Property Disputes & Litigation', description: 'Resolution of property-related disputes' },
                { title: 'Real Estate Due Diligence', description: 'Legal verification and risk assessment' },
            ],
        },
        {
            title: 'Litigation & Dispute Resolution',
            description: 'Effective representation across dispute forums.',
            icon: 'scale',
            items: [
                { title: 'Civil & Commercial Litigation', description: 'Representation in courts and tribunals' },
                { title: 'Criminal Litigation', description: 'Defense and prosecution support' },
                { title: 'Arbitration & Mediation', description: 'Alternative dispute resolution mechanisms' },
                { title: 'Debt Recovery & Enforcement', description: 'Legal action for recovery of dues' },
            ],
        },
    ],
};

/* ───────────────────────────────────────────────
   2. Tax Advisory Services
   ─────────────────────────────────────────────── */

export const taxServices: ServiceCategory = {
    id: 'tax',
    label: ['Tax', 'Advisory'],
    title: 'Tax Advisory Services',
    subtitle:
        'Comprehensive tax advisory, compliance, and financial support to help businesses stay compliant and growth-focused.',
    description:
        'With extensive experience in taxation, compliance, and financial planning, Cyinov Consulting helps businesses navigate complex tax regulations seamlessly. We specialize in GST, corporate taxation, payroll processing, and international tax advisory — delivering hassle-free solutions so you can focus on profitability.',
    sectionHeading: 'Our Tax Services',
    sectionSubtitle: 'End-to-end tax advisory and compliance solutions tailored to your business needs.',
    subServices: [
        {
            title: 'Book-keeping & Statutory Compliance',
            description: 'Keeping your financial records accurate, organized, and compliant.',
            icon: 'bookOpen',
            items: [
                { title: 'Book-keeping Services', description: 'Systematic recording and maintenance of financial transactions' },
                { title: 'Secretarial Compliance', description: 'Statutory and governance-related compliance support' },
                { title: 'TDS / GST / MCA Compliance', description: 'End-to-end compliance under applicable laws' },
                { title: 'Other Regulatory Compliance', description: 'Support for additional statutory requirements' },
            ],
        },
        {
            title: 'GST Compliance',
            description: 'Complete GST compliance solutions for businesses of all sizes.',
            icon: 'receipt',
            items: [
                { title: 'GST Registration' },
                { title: 'Monthly / Quarterly Return Filing' },
                { title: 'Annual & Final Return Filing' },
                { title: 'Modification in Existing Registration' },
                { title: 'Letter of Undertaking (LUT)' },
                { title: 'E-Way Bill & E-Invoicing Compliance' },
            ],
        },
        {
            title: 'Payroll Compliance',
            description: 'End-to-end payroll processing and statutory compliance.',
            icon: 'wallet',
            items: [
                { title: 'Salary Structuring & Payslip Preparation' },
                { title: 'Monthly Payroll Processing' },
                { title: 'Year-end Income Tax Computation' },
                { title: 'Quarterly TDS Return Filing' },
                { title: 'Income Tax Proof Collection & Verification' },
                { title: 'ESI & PF Registration' },
                { title: 'ESI & PF Challan Preparation' },
                { title: 'Other Payroll-related Regulatory Compliance' },
            ],
        },
        {
            title: 'Corporate Laws & MCA Compliance',
            description: 'Expert support for corporate law and MCA-related requirements.',
            icon: 'building',
            items: [
                { title: 'Company / LLP Registration' },
                { title: 'Annual Compliance Management' },
                { title: 'ROC Filings' },
                { title: 'Corporate Governance Advisory' },
                { title: 'Legal & Statutory Documentation' },
                { title: 'Ongoing Corporate Support' },
            ],
        },
        {
            title: 'Income Tax & TDS Compliance',
            description: 'Comprehensive income tax and TDS services for businesses and individuals.',
            icon: 'calculator',
            items: [
                { title: 'Income Tax Return Filing' },
                { title: 'Filing of Other Income Tax Forms' },
                { title: 'PAN & TAN Application' },
                { title: 'TDS Compliance & Return Filing' },
                { title: 'Reply to Income Tax Notices' },
                { title: 'Lower / Nil Deduction Certificate Assistance' },
            ],
        },
    ],
    process: {
        heading: 'Our Process',
        subtitle: 'A structured approach to ensure accuracy, compliance, and long-term support.',
        steps: [
            { title: 'Initial Consultation', description: 'Understanding your business requirements and challenges' },
            { title: 'Strategy Development', description: 'Designing customized tax and compliance solutions' },
            { title: 'Implementation', description: 'Executing filings and compliance with precision' },
            { title: 'Ongoing Support', description: 'Continuous monitoring, updates, and advisory' },
        ],
    },
};

/* ───────────────────────────────────────────────
   3. Market & Product Research Services
   ─────────────────────────────────────────────── */

export const researchServices: ServiceCategory = {
    id: 'research',
    label: ['Market &', 'Research'],
    title: 'Market & Product Research Services',
    subtitle:
        'Data-driven insights to help you understand your market, customers, and competition with precision.',
    description:
        'Cyinov Consulting delivers actionable research that supports strategic decision-making, product success, and sustainable growth. Our research solutions combine robust methodologies with real-world business relevance.',
    sectionHeading: 'Our Research Services',
    sectionSubtitle: 'Comprehensive market, consumer, and product research solutions tailored to your objectives.',
    subServices: [
        {
            title: 'Forecasting & Market Intelligence',
            description: 'Anticipate market trends and plan for future growth.',
            icon: 'trendingUp',
            items: [],
            groups: [
                {
                    heading: 'Market Forecasting',
                    items: [
                        { title: 'Volume & Demand Estimation', description: 'Predicting future product and service demand' },
                        { title: 'Market Size Analysis', description: 'Evaluating current and potential market opportunities' },
                        { title: 'Growth Trend Prediction', description: 'Identifying key industry growth patterns' },
                        { title: 'Competitive Landscape Assessment', description: 'Analyzing competitor positioning and strategies' },
                    ],
                },
                {
                    heading: 'Industry & Risk Analysis',
                    items: [
                        { title: 'Sector-Specific Forecasting', description: 'Identifying industry-specific opportunities and challenges' },
                        { title: 'Economic Impact Studies', description: 'Assessing macroeconomic and policy impacts' },
                        { title: 'Technology Adoption Trends', description: 'Evaluating emerging technologies across sectors' },
                        { title: 'Risk Assessment', description: 'Identifying potential threats and mitigation strategies' },
                    ],
                },
            ],
        },
        {
            title: 'Product & Concept Testing',
            description: 'Ensure product success through rigorous validation and testing.',
            icon: 'flaskConical',
            items: [],
            groups: [
                {
                    heading: 'Product Testing',
                    items: [
                        { title: 'Usage & Attitude Studies', description: 'Understanding consumer interaction with products' },
                        { title: 'Product Satisfaction Analysis', description: 'Measuring customer experience and preferences' },
                        { title: 'Competitive Product Benchmarking', description: 'Comparing offerings against competitors' },
                        { title: 'Package Testing', description: 'Evaluating packaging effectiveness and appeal' },
                    ],
                },
                {
                    heading: 'Concept Testing',
                    items: [
                        { title: 'Concept Evaluation', description: 'Testing new product or service ideas pre-launch' },
                        { title: 'Price Sensitivity Testing', description: 'Determining optimal pricing strategies' },
                        { title: 'Brand Concept Validation', description: 'Measuring resonance of new brand concepts' },
                        { title: 'Market Acceptance Studies', description: 'Assessing consumer readiness and adoption' },
                    ],
                },
            ],
        },
        {
            title: 'Consumer & Market Research',
            description: 'Deep insights into consumer behavior and market performance.',
            icon: 'search',
            items: [],
            groups: [
                {
                    heading: 'Consumer Insights',
                    items: [
                        { title: 'Consumer Behavior Analysis', description: 'Understanding motivations, habits, and preferences' },
                        { title: 'Purchase Decision Mapping', description: 'Identifying key drivers influencing buying decisions' },
                        { title: 'Brand Perception Studies', description: 'Measuring brand awareness and perception' },
                        { title: 'Customer Satisfaction Tracking', description: 'Monitoring ongoing customer experience' },
                    ],
                },
                {
                    heading: 'Market Tracking',
                    items: [
                        { title: 'Sales Leakage Analysis', description: 'Identifying gaps in sales performance' },
                        { title: 'Market Share Tracking', description: 'Monitoring competitive market positions' },
                        { title: 'Distribution Audit', description: 'Evaluating channel effectiveness' },
                        { title: 'Retail Audit Services', description: 'Analyzing retail performance and shopper behavior' },
                    ],
                },
            ],
        },
        {
            title: 'Specialized Research',
            description: 'Customized research solutions for unique and complex environments.',
            icon: 'microscope',
            items: [],
            groups: [
                {
                    heading: 'Rural Research',
                    items: [
                        { title: 'Rural Market Assessment', description: 'Understanding rural market dynamics' },
                        { title: 'Agricultural Sector Studies', description: 'Analysis of agricultural production and trade' },
                        { title: 'Rural Consumer Behavior', description: 'Identifying non-urban buying patterns' },
                        { title: 'Distribution Channel Analysis', description: 'Optimizing rural supply chains' },
                    ],
                },
                {
                    heading: 'Social & Development Research',
                    items: [
                        { title: 'Social Impact Assessment', description: 'Evaluating the impact of policies and programs' },
                        { title: 'Community Needs Analysis', description: 'Understanding socio-economic development needs' },
                        { title: 'Policy Research', description: 'Supporting evidence-based policymaking' },
                        { title: 'Development Sector Studies', description: 'Assessing impact and growth opportunities' },
                    ],
                },
            ],
        },
    ],
    process: {
        heading: 'Our Research Process',
        subtitle: 'A structured approach to deliver accurate, actionable insights.',
        steps: [
            { title: 'Research Design', description: 'Crafting the right methodology for your objectives' },
            { title: 'Data Collection', description: 'Gathering insights through qualitative and quantitative channels' },
            { title: 'Analysis', description: 'Converting data into meaningful insights' },
            { title: 'Reporting', description: 'Delivering clear, actionable recommendations' },
        ],
    },
};

/* ───────────────────────────────────────────────
   4. Human Capital Management
   ─────────────────────────────────────────────── */

export const hcmServices: ServiceCategory = {
    id: 'hcm',
    label: ['Human', 'Capital'],
    title: 'Transform Your Workforce & Market Strategy',
    subtitle:
        'Comprehensive Human Capital Management (HCM) solutions to optimize performance, engagement, and growth.',
    description:
        'Cyinov Consulting delivers structured Human Capital Management solutions designed to optimize workforce planning, enhance employee engagement, and improve organizational effectiveness across the entire employee lifecycle.',
    sectionHeading: 'Our Human Capital Management (HCM) Services',
    sectionSubtitle: 'End-to-end workforce solutions tailored to your business objectives.',
    subServices: [
        {
            title: 'Talent Acquisition',
            description: 'Attract, hire, and retain the right talent with strategic recruitment solutions.',
            icon: 'userPlus',
            items: [
                { title: 'Streamlined Recruitment Processes', description: 'Leveraging technology and expertise to identify, assess, and hire the right candidates efficiently' },
                { title: 'Onboarding & Integration', description: 'Ensuring seamless cultural and operational integration of new hires to improve early employee experience' },
            ],
        },
        {
            title: 'Workforce Management',
            description: 'Maximize employee productivity through structured workforce solutions.',
            icon: 'clock',
            items: [
                { title: 'Time & Attendance Tracking', description: 'Implementing systems to monitor work hours, attendance, and productivity' },
                { title: 'Performance Management', description: 'Developing appraisal frameworks, goal-setting systems, and continuous feedback mechanisms' },
            ],
        },
        {
            title: 'Payroll & Compensation Management',
            description: 'Ensuring accurate payroll operations and competitive compensation structures.',
            icon: 'banknote',
            items: [
                { title: 'Payroll Processing', description: 'Managing payroll operations to ensure timely and error-free salary disbursement' },
                { title: 'Compensation Structures & Benefits', description: 'Designing competitive pay and benefits frameworks to attract and retain high performers' },
            ],
        },
        {
            title: 'Training & Development',
            description: 'Fostering continuous learning and long-term organizational capability.',
            icon: 'graduationCap',
            items: [
                { title: 'Skill Development & Training Programs', description: 'Structured training initiatives to enhance productivity and career growth' },
                { title: 'Succession Planning', description: 'Identifying and developing future leaders to ensure organizational continuity' },
            ],
        },
    ],
    process: {
        heading: 'Our Workforce Transformation Approach',
        subtitle: 'A structured methodology to build an optimized and future-ready workforce.',
        steps: [
            { title: 'Phase 1: Assessment', description: 'Understanding Your Workforce', items: ['Workforce Analysis', 'Process Evaluation', 'Gap Identification', 'Needs Assessment'] },
            { title: 'Phase 2: Strategy', description: 'Developing the Roadmap', items: ['Solution Design', 'Resource Planning', 'Timeline Development', 'ROI Projections'] },
            { title: 'Phase 3: Implementation', description: 'Seamless Execution', items: ['System Setup', 'Process Integration', 'Team Training', 'Change Management'] },
            { title: 'Phase 4: Optimization', description: 'Continuous Improvement', items: ['Performance Monitoring', 'Data Analysis', 'Continuous Improvement', 'Regular Reviews'] },
        ],
        outcome: 'An optimized, agile, and high-performing workforce.',
    },
};
