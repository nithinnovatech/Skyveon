import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
    const [activeTrack, setActiveTrack] = useState('All tracks');
    const [activeLevel, setActiveLevel] = useState('All levels');

    const tracks = [
        'All tracks',
        'Cloud DevOps',
        'SAP FICO',
        'SAP ABAP',
        '.NET',
        'Java',
        'Python',
        'Workday',
        'Data Analyst',
        'Data Engineer',
        'Data Science & AI',
    ];

    const levels = ['All levels', 'Entry', 'Mid'];

    const jobs = [
        {
            title: 'Software Engineer — Full Stack .NET (Mid Level)',
            tags: ['.NET', 'Mid level', 'On-site', 'Full-time'],
            summary: 'Own .NET services and modern front-ends; drive CI/CD and quality across the stack.',
            responsibilities: [
                'Design/implement ASP.NET Core services and REST APIs.',
                'Build responsive UIs (React/Angular); optimize SQL/EF.',
                'Unit/integration tests; CI/CD and code reviews; mentor juniors.',
            ],
            qualifications: [
                '2+ years full-stack .NET; C#/ASP.NET Core/MVC/REST proficiency.',
                'Front-end framework experience; SQL schema design; Agile/Git.',
            ],
            track: '.NET',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — Full Stack .NET (Entry Level)',
            tags: ['.NET', 'Entry level', 'On-site', 'Full-time'],
            summary: 'Learn and build business-critical web apps with ASP.NET Core, C#, and modern JS.',
            responsibilities: [
                'Develop features in ASP.NET Core/C# and Entity Framework.',
                'Contribute to front-end (HTML/CSS/JS + React/Angular).',
                'Assist with testing, debugging, API integrations, and docs.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent.",
                'Academic/internship experience with .NET; OOP fundamentals; basic SQL.',
            ],
            track: '.NET',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — Cloud DevOps (Mid Level)',
            tags: ['Cloud DevOps', 'Mid level', 'Cloud', 'Kubernetes', 'On-site', 'Full-time'],
            summary: 'Build/optimize IaC and CI/CD across clouds; container orchestration; reliability at scale.',
            responsibilities: [
                'Manage CI/CD (Jenkins/GitLab/GitHub Actions).',
                'Terraform/Ansible/CloudFormation for infrastructure-as-code.',
                'Deploy/manage Kubernetes; implement monitoring/logging/alerting.',
                'Troubleshoot production issues; enforce security/compliance.',
            ],
            qualifications: [
                '2+ years DevOps/SRE/Cloud Eng; AWS/Azure/GCP.',
                'Docker, Kubernetes, Helm; scripting (Python/Bash/Go).',
            ],
            track: 'Cloud DevOps',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — Cloud DevOps (Entry Level)',
            tags: ['Cloud DevOps', 'Entry level', 'Cloud', 'On-site', 'Full-time'],
            summary: 'Learn cloud automation and CI/CD; help ship scalable, reliable infrastructure.',
            responsibilities: [
                'Assist with IaC (Terraform/CloudFormation).',
                'Support CI/CD (Jenkins/GitHub Actions).',
                'Monitor production systems; learn Docker/Kubernetes.',
                'Document scripts and configurations.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent.",
                'Familiarity with AWS/Azure/GCP; scripting (Python/Bash/PowerShell).',
                'Understanding of CI/CD, Linux, and basic networking.',
            ],
            track: 'Cloud DevOps',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — SAP FICO (Mid Level)',
            tags: ['SAP FICO', 'Mid level', 'SAP Finance', 'On-site', 'Full-time'],
            summary: 'Configure and support SAP FICO across GL/AP/AR/AA/CO; integrations and cutovers.',
            responsibilities: [
                'Configure/maintain FICO (GL, AP, AR, AA, CO, Bank).',
                'Support period-end/year-end; handle transports/data migrations.',
                'Work on integrations with MM/SD/HR; testing/UAT/cutover.',
            ],
            qualifications: [
                '2+ years hands-on SAP FICO config; S/4HANA preferred.',
                'FICO integration points; LSMW/IDocs/BAPIs a plus.',
            ],
            track: 'SAP FICO',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — SAP FICO (Entry Level)',
            tags: ['SAP FICO', 'Entry level', 'SAP Finance', 'On-site', 'Full-time'],
            summary: 'Start your SAP FICO journey supporting configuration, testing, and documentation.',
            responsibilities: [
                'Assist with FICO config (GL/AP/AR/Assets).',
                'Support process mapping, master data, and testing.',
                'Document test cases/results; help with production support.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent; finance/IS background helpful.",
                'ERP basics + accounting principles; strong analytical skills.',
            ],
            track: 'SAP FICO',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — SAP ABAP (Mid Level)',
            tags: ['SAP ABAP', 'Mid level', 'On-site', 'Full-time'],
            summary: 'Design, build, and tune ABAP solutions across modules; forms, interfaces, and exits.',
            responsibilities: [
                'Custom programs/reports/interfaces; BADIs, User Exits, BAPIs.',
                'SmartForms/SAPScript/Adobe Forms; IDocs.',
                'Unit tests, performance tuning, documentation; cross-module collaboration.',
            ],
            qualifications: [
                '2+ years SAP ABAP; OO ABAP/CDS Views familiarity.',
                'Module exposure (FICO/MM/SD/HR); strong debugging.',
            ],
            track: 'SAP ABAP',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — SAP ABAP (Entry Level)',
            tags: ['SAP ABAP', 'Entry level', 'On-site', 'Full-time'],
            summary: 'Learn ABAP development: reports, forms, and enhancements in real projects.',
            responsibilities: [
                'Assist with custom reports/forms/enhancements.',
                'Support testing/debugging; document technical specs.',
                'Learn function modules, BAPIs, BADIs, User Exits.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent.",
                'Academic/training experience in ABAP; DB fundamentals; analytical mindset.',
            ],
            track: 'SAP ABAP',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — Full Stack Java (Mid Level)',
            tags: ['Java', 'Mid level', 'On-site', 'Full-time'],
            summary: 'Design and deliver enterprise web apps using Spring Boot and modern JS frameworks.',
            responsibilities: [
                'Backend services with Java/Spring Boot; REST APIs.',
                'Frontend with React/Angular/Vue; integrate third-party services.',
                'Unit/integration tests; CI/CD; mentor junior devs.',
            ],
            qualifications: [
                '2+ years Java full-stack; React/Angular/Vue.',
                'CI/CD, Git, SQL/relational DB design; Agile collaboration.',
            ],
            track: 'Java',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — Full Stack Java (Entry Level)',
            tags: ['Java', 'Entry level', 'On-site', 'Full-time'],
            summary: 'Build end-to-end web applications with Java, Spring Boot, and modern UIs.',
            responsibilities: [
                'Assist with Java/Spring Boot features and REST endpoints.',
                'UI development with HTML/CSS/JS + React/Angular.',
                'Testing/debugging; secure, maintainable code practices.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent.",
                'Academic project exposure to Java/Spring; Git/DB basics.',
            ],
            track: 'Java',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — Full Stack Python (Mid Level)',
            tags: ['Python', 'Mid level', 'On-site', 'Full-time'],
            summary: 'Build data-driven apps with Python APIs (Flask/Django) and modern JS front-ends.',
            responsibilities: [
                'Backend APIs with Flask/Django; OAuth/security best practices.',
                'Frontend with React/Vue/Angular; integrate third-party APIs.',
                'Automated tests; Docker; CI/CD; performance/scalability.',
            ],
            qualifications: [
                '2+ years full-stack Python; REST frameworks + modern JS.',
                'Docker, Git, CI/CD; cloud familiarity; strong API design.',
            ],
            track: 'Python',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — Full Stack Python (Entry Level)',
            tags: ['Python', 'Entry level', 'On-site', 'Full-time'],
            summary: 'Contribute to Python backends and modern front-ends; learn by shipping.',
            responsibilities: [
                'Assist in Flask/Django services and REST endpoints.',
                'Build responsive UIs (React/Vue/Angular).',
                'Write clean, testable code; collaborate in stand-ups and reviews.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent; Python exposure.",
                'Frontend fundamentals, Git/SQL basics; eagerness to learn.',
            ],
            track: 'Python',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — Workday (Mid Level)',
            tags: ['Workday', 'Mid level', 'On-site', 'Full-time'],
            summary: 'Configure Workday HCM; reporting, integrations, data migration, and security.',
            responsibilities: [
                'Maintain HCM modules (Comp, Benefits, Time, Recruiting).',
                'Reports, calculated fields, dashboards; Studio/Core Connectors.',
                'Data migration, security, compliance; change/enhancement delivery.',
            ],
            qualifications: [
                '2+ years Workday config/support; reporting/security/EIB.',
                'Strong problem-solving/communication; stakeholder collaboration.',
            ],
            track: 'Workday',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — Workday (Entry Level)',
            tags: ['Workday', 'Entry level', 'On-site', 'Full-time'],
            summary: 'Support Workday configuration, integrations, reporting, and real-time support.',
            responsibilities: [
                'Assist with HCM config (Core HR/Payroll/Benefits/Recruiting).',
                'Build custom reports; support data loads and testing.',
                'Troubleshoot access/transactions; document processes.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent; ERP/HCM exposure helpful.",
                'Excel + data basics; strong analytical and communication skills.',
            ],
            track: 'Workday',
            level: 'Entry',
        },
        {
            title: 'Software Engineer / Data Analyst (Mid Level)',
            tags: ['Data Analyst', 'Mid level', 'Analytics', 'On-site', 'Full-time'],
            summary: 'Build dashboards, automate reporting, and deliver analytical insights.',
            responsibilities: [
                'Create Power BI/Tableau dashboards for business KPIs.',
                'Write complex SQL; automate reporting workflows.',
                'Root-cause analysis; partner with data engineers/stakeholders.',
            ],
            qualifications: [
                '2+ years BI/analytics; SQL, Excel, and one viz tool.',
                'Large-dataset wrangling; clear communication of insights.',
            ],
            track: 'Data Analyst',
            level: 'Mid',
        },
        {
            title: 'Software Engineer / Data Analyst (Entry Level)',
            tags: ['Data Analyst', 'Entry level', 'Analytics', 'On-site', 'Full-time'],
            summary: 'Learn BI fundamentals: clean data, build reports, and track metrics.',
            responsibilities: [
                'Gather/clean data (Excel/SQL/APIs); create charts/reports.',
                'Define metrics; assist ad-hoc analysis; document definitions.',
                'Work with users to translate data needs.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent.",
                'Basic SQL/Excel; exposure to Power BI/Tableau; detail-oriented.',
            ],
            track: 'Data Analyst',
            level: 'Entry',
        },
        {
            title: 'Software Engineer / Data Engineer (Mid Level)',
            tags: ['Data Engineer', 'Mid level', 'Data', 'On-site', 'Full-time'],
            summary: 'Design/optimize pipelines, warehouses, and real-time/batch data flows.',
            responsibilities: [
                'Pipelines with Python/Spark/cloud ETL; data lakes/warehouses.',
                'Integrate structured/semi-structured sources; performance tuning.',
                'CI/CD and data testing frameworks.',
            ],
            qualifications: [
                '2+ years pipeline development; strong SQL + Python.',
                'Cloud data tools (Glue/Dataflow/ADF) familiarity.',
            ],
            track: 'Data Engineer',
            level: 'Mid',
        },
        {
            title: 'Software Engineer / Data Engineer (Entry Level)',
            tags: ['Data Engineer', 'Entry level', 'Data', 'On-site', 'Full-time'],
            summary: 'Help build pipelines and clean/load data across cloud/on-prem platforms.',
            responsibilities: [
                'Assist with ETL/ELT pipelines (Python/ETL tools).',
                'Map/clean/load source data; support warehouse modeling.',
                'Write automation scripts for batch loads.',
            ],
            qualifications: [
                "STEM bachelor's / master's or equivalent.",
                'Exposure to SQL/Python/cloud data tools; ETL concepts.',
            ],
            track: 'Data Engineer',
            level: 'Entry',
        },
        {
            title: 'Software Engineer — Data Science & AI Engineering (Mid Level)',
            tags: ['Data Science & AI', 'Mid level', 'AI/ML', 'On-site', 'Full-time'],
            summary: 'Design, train, and deploy ML/LLM solutions, RAG pipelines, and agentic workflows.',
            responsibilities: [
                'Build ML models (sklearn/XGBoost/TensorFlow/PyTorch).',
                'Fine-tune LLMs; implement RAG with vector DBs; agent frameworks.',
                'MLOps with MLflow/DVC + cloud; dashboards and AIOps contributions.',
            ],
            qualifications: [
                '2+ years ML development/deployment; Python/SQL; cloud (AWS/GCP/Azure).',
                'LangChain/LlamaIndex; Docker/K8s for AI workflows; strong communication.',
            ],
            track: 'Data Science & AI',
            level: 'Mid',
        },
        {
            title: 'Software Engineer — Data Science & AI Engineering (Entry Level)',
            tags: ['Data Science & AI', 'Entry level', 'AI/ML', 'On-site', 'Full-time'],
            summary: 'Learn ML/LLM basics, RAG workflows, and MLOps by building real prototypes.',
            responsibilities: [
                'Prep/clean/explore data; assist in model training/eval.',
                'Try LLM fine-tuning, embeddings, simple RAG pipelines.',
                'Document experiments and results; join reviews and discussions.',
            ],
            qualifications: [
                "STEM bachelor's (CS/Data/Stats/Math/etc.); Python/SQL basics.",
                'Familiarity with sklearn/HF/TensorFlow; strong curiosity for GenAI.',
            ],

            track: 'Data Science & AI',
            level: 'Entry',
        },
    ];

    const filteredJobs = jobs.filter((job) => {
        const trackMatch = activeTrack === 'All tracks' || job.track === activeTrack;
        const levelMatch = activeLevel === 'All levels' || job.level === activeLevel;
        return trackMatch && levelMatch;
    });

    return (
        <div className="min-h-screen bg-dark-900">
            {/* Hero */}
            <section className="section-container pt-32 md:pt-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Careers at <span className="gradient-text">Skyveon</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        We turn ideas into dependable systems. If you love practical engineering, clear ownership, and measurable impact, you'll fit right in.
                    </p>
                </motion.div>
            </section>

            {/* Filters */}
            <section className="section-container">
                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">All tracks</h3>
                    <div className="flex flex-wrap gap-2">
                        {tracks.map((track) => (
                            <button
                                key={track}
                                onClick={() => setActiveTrack(track)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTrack === track
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                                    }`}
                            >
                                {track}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">All levels</h3>
                    <div className="flex flex-wrap gap-2">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setActiveLevel(level)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeLevel === level
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-8">
                    {filteredJobs.map((job, index) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="card-hover"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {job.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-3 py-1 bg-dark-700 text-gray-400 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">{job.summary}</p>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Key responsibilities
                                </h4>
                                <ul className="space-y-2">
                                    {job.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="text-gray-400 flex items-start">
                                            <span className="text-blue-400 mr-2">*</span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Qualifications
                                </h4>
                                <ul className="space-y-2">
                                    {job.qualifications.map((qual, idx) => (
                                        <li key={idx} className="text-gray-400 flex items-start">
                                            <span className="text-blue-400 mr-2">*</span>
                                            {qual}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-sm text-gray-500 mb-4">
                                Columbus, OH (On-site; may include unanticipated U.S. locations)Full-time On-site
                            </div>

                            <div className="text-sm text-gray-500 mb-6">
                                Skyveon is an Equal Opportunity Employer. We participate in E-Verify. For accessibility or accommodations, email hr@skyveon.ai.
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                                    Apply
                                </button>
                                <p className="text-gray-400 text-sm self-center">
                                    Or email us directly at{' '}
                                    <a
                                        href="mailto:hr@skyveon.ai"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        hr@skyveon.ai
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Careers;
