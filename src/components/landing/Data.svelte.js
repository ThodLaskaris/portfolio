export const profile = $state({
    name: 'Thodoris Laskaris',
    role: 'Software Engineer',
    location: 'Athens, Greece',
    stack: 'C#, TS, GO',
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
        description: 'Interested in collaborating or have a project in mind? Feel free to reach out via email or connect through my digital profiles below.'
    }, 
    projects: [
        {                                                                                                                                                                                                                                                                          
      id: 'restaurant-suite',                                                                                                                                                                                                                                                    
      title: "Hospitality Suite — POS, KDS, Delivery & Cloud CRM",                                                                                                                                                                                                   
      description: [                                                                                                                                                                                                                                                         
          "Architected and delivered an end-to-end restaurant operations suite that unifies point-of-sale, kitchen display, delivery management, back-office and cloud CRM into a single multi-tenant platform, currently running an entire hospitality group in Poland from one cloud server.",                                                                                                                                                                                                                                            
          "Replaces the multi-vendor stack that hospitality groups typically stitch together (separate POS license, separate KDS subscription, separate delivery platform, separate CRM, separate reporting tool) with one cohesive product under one contract.",            
          "Ships as a true product suite with clearly bounded modules (POS, KDS, Delivery, CRM, Subscription Channels, Mobile) that can be enabled per venue or per tenant, allowing the same suite to serve a single café and a multi-country group from the same codebase.",                                                                                                                                                                                                                                                                
          "Designed the runtime to operate on under 30 MB of RAM from a single binary, allowing the entire suite to ship and update as one artifact across every venue, terminal, kitchen and back-office machine.",                                                      
          "Built fully cross-platform with no operating system restrictions. The same backend runs on macOS, iPadOS, Linux, Windows and Android, allowing terminals, tablets, kitchen displays and back-office machines to share one stack.",                                
          "Built native multi-tenancy and first-class multi-timezone support from day one, allowing one deployment to serve unlimited venues across regions, each with its own business day and reporting clock.",                                                           
          "Engineered full fiscal compliance for the regulatory environment of the deployment country, integrated natively into the suite rather than handled by an external provider.",                                                                                     
          "Integrated the suite directly with the in-venue hardware ecosystem, removing the entire category of third-party middleware that competing platforms rely on.",                                                                                                    
          "Developed an internal optimization layer that automates a wide range of operational decisions previously made manually by front and back of the house, turning hours of daily judgment work into instant outputs.",                                      
          "Built proprietary intelligence into the menu and ordering layer that improves operator decisions over time without any external machine-learning service or data pipeline.",                                                                                      
          "Designed and built a unified CRM cloud dashboard that consolidates every venue and every operational metric into a single real-time control surface for the group's owner.",                                                                                      
          "Architected the delivery, subscription and customer-facing modules of the suite as independent, distributed microservices, decoupled from the core POS and independently scalable.",                                                                              
          "Built the entire suite with zero third-party SaaS dependencies. No external mapping, payments-routing, analytics, observability or operational services. Every algorithm and integration is owned end-to-end."                                                    
      ],                                                                                                                                                                                                                                                                     
      impact: [                                                                                                                                                                                                                                                              
          "Replaces an entire vendor stack with one suite, removing the per-module licenses, integration overhead and contract surface that hospitality groups typically carry across POS, KDS, delivery and CRM tools.",                                                    
          "Operates at a fraction of the infrastructure footprint that competing SaaS POS suites require, with the engineering headroom to scale a full restaurant group on a single cloud host while incumbents demand per-terminal hardware and recurring license fees.",  
          "Sustained ~1,500 read and write requests per second under load testing, orders of magnitude beyond the real demand of a multi-venue restaurant group, leaving practically unlimited headroom for growth.",                                                        
          "Removed entire categories of repetitive manual work from the operational workflow. Staff and management now spend their time on service and strategy rather than on data entry, reconciliation or coordination tasks the suite handles automatically.",           
          "Gave the group's owner a single CRM cloud dashboard to oversee every venue and every revenue stream from one screen, replacing the patchwork of spreadsheets and per-venue reports used previously.",                                                             
          "Opens direct customer channels for the group that bypass third-party aggregator commissions entirely.",                                                                                                                                                           
          "Backed by an automated test suite larger than the production codebase itself, a level of discipline well above what typical systems of this size ship with."                                                                                                      
      ],                                                                                                                                                                                                                                                                     
      tech: [                                                                                                                                                                                                                                                                
          "Restaurant Operations Suite",                                                                                                                                                                                                                                     
          "POS Module", "KDS Module", "Delivery Module",                                                                                                                                                                                                                   
          "CRM Cloud Module", "Subscription Channel Module", "Mobile App Module",                                                                                                                                                                                            
          "Go", "PostgreSQL", "Distributed Microservices", "Multi-Tenancy",                                                                                                                                                                                                  
          "Cross-Platform (macOS / iPadOS / Linux / Windows / Android)",                                                                                                                                                                                                     
          "Fiscal Compliance Engine", "In-Venue Hardware Integration",                                                                                                                                                                                                       
          "Proprietary Optimization Layer", "Custom Intelligence Layer",                                                                                                                                                                                                   
          "Test Code Exceeds Production Code",                                                                                                                                                                                                                               
          "Zero Third-Party Dependencies"                                                                                                                                                                                                                                  
      ]                                                                                                                                                                                                                                                                      
  },
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
                "TanStack Query", "Azure VM", "CI/CD Pipelines","PostgreSQL" ],
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
                "Built all UI components from scratch using vanilla Svelte and native Web APIs only, with zero third-party dependencies, prioritizing performance, modularity and long-term maintainability.",
                "Developed a centralized intelligence platform using Go, Svelte, and PostgreSQL for multi-location business management.",
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
            tech: ["Go", "Svelte", "Astro", "PostgreSQL", "Redis", "Docker", "LLM Integration", "AI Prompt Engineering", "Azure VM", "Cloudflare Pages", "CI/CD Pipelines", "100% Unit Test Coverage" ],
        },
        {
    id: 'chef-portfolio',
    title: "Executive Chef Portfolio & Headless E-commerce",
    description: [
            "Built all UI components from scratch using vanilla Svelte and native Web APIs only, with zero third-party dependencies, prioritizing performance, modularity and long-term maintainability.",
        "Designed and developed a high-end personal portfolio for an Executive Chef operating across US and Europe, with a focus on editorial aesthetics and premium brand identity.",
        "Architected a single-page application using Svelte and Astro, with hash-based navigation and smooth scroll-driven section transitions.",
        "Implemented a scroll-reveal animation system using Intersection Observer API for performant, viewport-aware content choreography.",
        "Built a multi-image hero carousel with crossfade transitions and dynamic caption rendering, optimized for large format photography.",
        "Engineered a scroll-animated career timeline with alternating bi-directional layout and precise entry point triggering.",
        "Engineered a headless e-commerce integration using Shopify Storefront API and a custom Go backend, decoupling the storefront from platform constraints.",
    ],
    impact: [
        "Delivered a production-ready digital presence for a professional featured in Brummell, Spotify, Le Monde,Masterchef, LiFO and more, enhancing his online visibility and brand prestige.",
        "Achieved a fully responsive, performance-optimized site with minimal bundle footprint using Astro's partial hydration model.",
        "Enabled a fully custom purchasing experience through a headless Shopify architecture, maintaining design integrity without platform UI limitations.",
    ],
    tech: [
        "Svelte", "Astro", "Cloudflare Pages",
        "Intersection Observer API", "SPA Architecture",
        "Headless Shopify", "Shopify Storefront API", "Go", "REST API","E-commerce Integration","Azure VM", "CI/CD Pipelines", "Tailwind CSS"
    ]
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
            tech: ["Next.js", "React", "Framer Motion","Tailwind CSS", "Cloudflare Pages", "CI/CD Pipelines", "Asset Optimization", "Image Processing"]
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