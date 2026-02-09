export const profile = $state({
    name: 'Thodoris Laskaris',
    role: 'Software Engineer',
    location: 'Athens, Greece',
    stack: 'TS, C#, Python, GO',
    focus: 'Backend, Architecture, DevOps',
    os: 'MacOS, Linux',
miniCv: [
    'Leveraging fifteen years of extreme discipline and high pressure execution from the culinary industry across Europe, into Software Engineering',
    'Focusing on scalable backend architectures and high performance system design',
    'Expertise in optimizing resource intensive applications and data-heavy processing',
    'Implementing robust software solutions with a focus on efficiency, long term maintainability, scalability and clean architecture principles',
    'Enhanced skillset in reverse engineering, analytical thinking, and technical problem solving'
],
    contact: {
        email: 'contact@thodlaskaris.dev',
        linkedIn: 'https://www.linkedin.com/in/thodLaskaris/',
        github: 'https://github.com/thodLaskaris',
        description: "Interested in collaborating or have a project in mind? Feel free to reach out via email or connect through my digital profiles below."
    }, 
    projects: [
        {
            id: 'iot-light-control',
            title: "IoT Light Control National Scale",
            description: [
                "Implemented a distributed microservices ecosystem using .NET Core, MQTT, and Docker to monitor and manage national-scale street lighting infrastructure.",
                "Deployed a highly scalable Cloud native environment to orchestrate thousands of IoT devices, real time metrics, and remote command execution.",
                "Engineered real time monitoring dashboards and automated GIS mapping systems using precise geospatial coordinates.",
                "Managed high-concurrency device telemetry and command execution using SemaphoreSlim to orchestrate asynchronous resource access.",
                "Developed and maintained NuGet, Python, and JavaScript SDKs to facilitate seamless third-party integration and client onboarding."
            ],
            impact: [
                "Reduced energy consumption by 30% and maintenance costs by 18% for the national street lighting system.",
                "Reduced query times for device status and metrics by 40% through optimized data handling and real time processing.",
            ],
            tech: [".NET Core", "MQTT", "Docker", "Microservices", "Python SDK", "GeoLocation", "Devops",
                "React", "EFCore", "Domain Driven Design", "CQRS", "MediatR","Clean Architecture", "100% Unit Test Coverage",
                "TanStack Query" ],
        },
        {
            id: 'municipal-gis-engine',
            title: 'Municipal GIS Engine',
            description: [
                "Modernized legacy infrastrcture by replacing hardcoded radio coverage systems with dynamic, GeoJSON based boundary mapping.",
                "Engineered a high performance engine handling more than 5 million lines of Json for nationwide municipality borders and geospatial data.",
                "Developed a dynamic, boundary aware loading system to efficiently render and manage large scale datasets without performance degradation.",
                "Implemented advanced vector based mathematical algorithms to accurately calculate distances, areas and intersections between complex shapes.",
                "Built an automated Geocoding pipeline to transform municipal Excel-based street data into precise geographic coordinates json format.",
                "Created an interactive spatial analysis map for real time visualization of signal overlap, coverage, optimization metrics and positioning."
            ],
            impact: [
                "Reduced municipal project costs by up to 65% by automating the placement and spatial planning of IoT devices",
                "Enabled precise infrastructure deployment by converting fragmented manual records into standardized spatial data.",
            ],
            tech: ["Python", "GeoPandas", "NumPy", "Mathematical Algorithms"],
        },
        {
            id: 'groom-intelligence-platform',
            title: "Groom Intelligence Platform",
            description: [
                "Developed a centralized intelligence platform using Go, Svelte, and Cloudflare D1 for multi-location business management.",
                "Implemented Natural Language Processing interfaces to replace traditional static forms, allowing data entry and commands through AI-driven prompts.",
                "Designed a modular architecture to facilitate the integration of disparate data sources and automated processing modules.",
                "Created high performance interactive dashboards for real time visualization of multi salon operational metrics."
            ],
            impact: [
                "Centralized management for 5 business venues, providing unified oversight through a single, real time dashboard.",
                "Drastically reduced data entry time by transitioning from manual form filling to AI-assisted prompt interfaces.",
                "Eliminated manual data aggregation across branches, significantly cutting down administrative overhead for the owner.",
                "Enhanced operational control by transforming raw input into actionable insights for staff and inventory management."
            ],
            tech: ["Go", "Svelte", "Cloudflare D1", "Redis", "Docker", "LLM Integration", "AI Prompt Engineering"],
        },
        {
            id: 'phd-visual-artist-portfolio',
            title: "PhD Visual Artist Portfolio",
            description: [
                "Developed a high-performance digital archive for a PhD visual artist using Next.js and Tailwind CSS, prioritizing high-fidelity visual representation.",
                "Engineered a custom lightbox and zoom system to handle high-resolution artworks without compromising page performance.",
                "Implemented advanced asset optimization and lazy-loading strategies to ensure seamless navigation through large-scale image galleries.",
                "Integrated smooth, fluid transitions using Framer Motion to align the digital experience with the artist's aesthetic."
            ],
            impact: [
                "Achieved superior Core Web Vitals, ensuring fast load times for high-resolution media-heavy content.",
                "Delivered a minimalist, distraction-free UI that centers on artistic content, enhancing academic and professional visibility.",
                "Optimized global asset delivery through edge caching, significantly reducing latency for international art curators and visitors."
            ],
            tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel Edge Network", "Asset Optimization", "Image Processing"]
        }
    ]
});

const getInitialTab = () => {
    if (typeof window !== 'undefined' && window.location.hash) {
        return window.location.hash.replace('#', '');
    }
    return 'about';
};

export const ui = $state({
    activeTab: getInitialTab()
});

$effect.root(() => {
    $effect(() => {
        if (typeof window !== 'undefined') {
            const currentHash = window.location.hash.replace('#', '');
            if (currentHash !== ui.activeTab) {
                window.location.hash = ui.activeTab;
            }
        }
    });
});

const _bioString = $derived(profile.miniCv.join('. ') + '.');
export const getBioString = () => _bioString;