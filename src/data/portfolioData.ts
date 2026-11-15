export interface ProjectCaseStudy {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  desc: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  borderColor: string;
  image: string;
  gallery?: string[];
  github: string;
  live?: string;
  overview: string;
  problem: string;
  solution: string;
  objectives: string[];
  workflow: { step: string; title: string; desc: string }[];
  architecture: { layer: string; tech: string; desc: string }[];
  features: { title: string; desc: string }[];
  trainingPipeline?: { phase: string; desc: string }[];
  challenges: { title: string; solution: string }[];
  results: { metric: string; value: string; desc: string }[];
  futureScope: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  mentor?: string;
  period: string;
  year: string;
  type: string;
  accent: string;
  gradient: string;
  tags: string[];
  summary: string;
  responsibilities: string[];
  techLearned: { category: string; items: string[] }[];
  challenges: { title: string; solution: string }[];
  reflection: string;
  outcomes: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  position: string;
  year: string;
  accent: string;
  gradient: string;
  desc: string;
  tags: string[];
  learnings: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  org: string;
  desc: string;
  link: string;
  accent: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institute: string;
  period: string;
  score: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sai Charan",
    fullName: "Godavarthi Sai Charan",
    initials: "SC",
    role: "AI/ML Engineer & Full-Stack Developer",
    location: "Hyderabad, India",
    email: "saicharangodavarthi7@gmail.com",
    phone: "+91 81252 46072",
    github: "https://github.com/Saicharan-077",
    linkedin: "https://linkedin.com/in/godavarthi-sai-charan",
    leetcode: "https://leetcode.com/Saicharan-077/",
    codechef: "https://www.codechef.com/users/saicharan_077",
    x: "https://x.com",
    portfolio: "https://saicharan-portfolio-one.vercel.app/",
    resumeUrl: "/resume.pdf",
    shortBio:
      "Computer Science Engineering student at VNR VJIET with a 9.55 CGPA. Passionate about building production-grade AI systems, real-time computer vision models with YOLOv11, robust Linux server infrastructure, and high-performance full-stack applications.",
    aboutText:
      "I am an AI/ML engineer and full-stack developer dedicated to building production-grade computer vision systems, resilient cloud infrastructure, and intelligent software that make a tangible real-world impact. From training custom YOLOv11 detectors for industrial hazard prevention to maintaining 10+ campus servers with 99.9% uptime, I bring first-principles engineering and precision to every product I build.",
  },

  stats: [
    { label: "CGPA (B.Tech)", value: "9.55", suffix: "" },
    { label: "Projects Shipped", value: "10", suffix: "+" },
    { label: "Internships Completed", value: "4", suffix: "" },
    { label: "Competitive Honors", value: "6", suffix: "+" },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "AI/ML & Systems Engineering",
      institute: "VNR Vignana Jyothi Institute of Engineering & Technology",
      period: "2024 – Present",
      score: "9.55 CGPA",
      highlights: [
        "Specialized coursework in Data Structures, Algorithms, DBMS, and Operating Systems",
        "Active member of ISTE Core Committee & VJStartups Infrastructure Wing",
        "Winner & Runner-Up in multiple national-level collegiate hackathons",
      ],
    },
    {
      degree: "Higher Secondary Certificate (TSBIE)",
      specialization: "MPC (Mathematics, Physics, Chemistry)",
      institute: "Sri Narayana Junior College",
      period: "2022 – 2024",
      score: "98.8%",
      highlights: [
        "Ranked among top percentile across the state board examination",
        "Strong foundation in analytical mathematics and classical physics",
      ],
    },
    {
      degree: "Secondary School Certificate (TSBSE)",
      specialization: "General Sciences & Mathematics",
      institute: "D.A.V Model School",
      period: "2021 – 2022",
      score: "10.0 GPA",
      highlights: [
        "Perfect 10.0 GPA academic distinction",
        "Active participant in science exhibitions and algorithmic problem solving",
      ],
    },
  ] as EducationItem[],

  philosophy: [
    {
      title: "Precision Over Perfection",
      desc: "Ship reliable, production-tested software fast, measure real-world feedback, and continuously refine.",
      icon: "target",
    },
    {
      title: "First Principles Thinking",
      desc: "Deconstruct complex challenges into fundamental truths before drafting architectural solutions.",
      icon: "bulb",
    },
    {
      title: "Continuous Deep Learning",
      desc: "Technology moves rapidly. Staying insatiably curious and hands-on is non-negotiable for engineering excellence.",
      icon: "book",
    },
    {
      title: "Impact-Driven Engineering",
      desc: "Every line of code and neural weight should serve a measurable purpose and solve real human problems.",
      icon: "rocket",
    },
  ],

  interests: [
    { title: "Computer Vision", icon: "eye", desc: "Object detection, real-time edge inference, model quantization" },
    { title: "Full-Stack Platforms", icon: "bolt", desc: "Modern microservices, reactive frontends, WebSocket telemetry" },
    { title: "Linux & Cloud Systems", icon: "server", desc: "Nginx reverse proxy, Docker containers, load testing, SSL/TLS" },
    { title: "UAV Avionics", icon: "hardware", desc: "Flight controller firmware, ArduPilot automated missions, thermal sensors" },
    { title: "LLM Cognitive Systems", icon: "brain", desc: "RAG architectures, function calling, agentic workflows, voice synthesis" },
    { title: "Entrepreneurship", icon: "globe", desc: "Technical startup infrastructure, product validation, innovation incubation" },
  ],

  experiences: [
    {
      id: "innovision-ai-ml-intern",
      role: "AI/ML Intern",
      company: "Innovision Limited",
      period: "July 2026 – December 2026",
      year: "2026",
      type: "Internship",
      accent: "#f97316",
      gradient: "from-orange-500/30 via-red-500/20 to-rose-900/20",
      tags: ["YOLOv11", "PyTorch", "Computer Vision", "FastAPI", "Python", "OpenCV", "ONNX"],
      summary:
        "Engineered an industrial-scale fire and smoke detection system utilizing YOLOv11 for 24/7 video monitoring across factory floors. Curated custom datasets, trained models, and achieved 92%+ mAP with low-latency inference.",
      responsibilities: [
        "Curated, cleaned, and annotated thousands of multi-scenario fire and smoke training images using LabelImg",
        "Fine-tuned YOLOv11 architectures with aggressive data augmentation and transfer learning",
        "Architected an asynchronous FastAPI streaming server delivering detection coordinates and alerts via WebSockets",
        "Exported and quantized models to ONNX runtime, maintaining stable 30+ FPS real-time processing",
        "Integrated multi-camera RTSP ingestion and automated threshold-based safety alert broadcasting",
      ],
      techLearned: [
        { category: "Deep Learning & Vision", items: ["YOLOv11", "PyTorch", "OpenCV", "ONNX Runtime", "Data Augmentation"] },
        { category: "Backend & Streaming", items: ["FastAPI", "WebSockets", "Asyncio", "RTSP Video Ingestion", "RESTful APIs"] },
      ],
      challenges: [
        {
          title: "False Positives in Fog & Dust",
          solution: "Implemented temporal frame filtering and calibrated confidence thresholds across sequential frames.",
        },
        {
          title: "Low Latency Multi-Stream Processing",
          solution: "Quantized weights to FP16 and optimized frame queues using asynchronous multithreaded consumers.",
        },
      ],
      reflection:
        "Working on safety-critical computer vision made every line of code meaningful. Taking a deep learning model from raw annotated frames to a live industrial deployment taught me the true rigor of production ML.",
      outcomes: [
        "Achieved 92%+ mAP@0.5 with under 5% false positive rate in demanding factory environments",
        "Streamlined real-time inference latency to <35ms per frame on edge hardware",
        "Delivered end-to-end monitoring dashboard deployed in production",
      ],
    },
    {
      id: "aarna-connect-devops-intern",
      role: "DevOps Intern",
      company: "Aarna Connect",
      period: "June 2026 – July 2026",
      year: "2026",
      type: "Internship",
      accent: "#06b6d4",
      gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-900/20",
      tags: ["Docker", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD", "Cloud Deployment"],
      summary:
        "Architected cloud infrastructure and automated continuous deployment workflows. Containerized services with Docker, optimized Nginx reverse proxies, and maintained 99.9% environment reliability.",
      responsibilities: [
        "Containerized full-stack application microservices with Docker and multi-stage builds",
        "Implemented automated GitHub Actions CI/CD pipelines to build, test, and deploy code changes seamlessly",
        "Configured Nginx reverse proxy blocks, SSL certificate renewal, and gzip/brotli asset caching",
        "Monitored server health metrics, resource bottlenecks, and network uptime across environments",
      ],
      techLearned: [
        { category: "DevOps & Containers", items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD Pipelines"] },
        { category: "Systems & Web Servers", items: ["Linux Administration", "Nginx Configuration", "SSL/TLS", "DNS Routing"] },
      ],
      challenges: [
        {
          title: "Environment Drift Between Staging and Prod",
          solution: "Created standardized Docker container images and parameterized environment configs.",
        },
      ],
      reflection:
        "Gained hands-on mastery over the production deployment lifecycle. Seeing how robust DevOps automation accelerates developer velocity reinforced my passion for reliable systems engineering.",
      outcomes: [
        "Reduced deployment downtime by 40% using automated container rollouts",
        "Ensured zero-downtime SSL certificate renewals with automated cron tasks",
      ],
    },
    {
      id: "server-management-intern",
      role: "Server Management Intern",
      company: "Innovation & Incubation Cell, VNR VJIET",
      mentor: "Mr. M Krishna Prasad (Head of Innovation)",
      period: "October 2025 – March 2026",
      year: "2025",
      type: "Internship",
      accent: "#10b981",
      gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-900/20",
      tags: ["Linux", "Nginx", "Google Cloud", "SSL", "DNS", "Load Testing", "Security Hardening"],
      summary:
        "6-month server management internship under the mentorship of Mr. M Krishna Prasad. Maintained 10+ campus-scale production servers, configured Nginx reverse proxies, conducted load tests, and ensured 99.9% uptime.",
      responsibilities: [
        "Administered and maintained 10+ Linux production servers supporting thousands of campus users",
        "Configured Nginx reverse proxy, virtual hosts, upstream load balancing, and rate limiting",
        "Managed Google Cloud Console VM instances, VPC networks, and persistent cloud disks",
        "Executed stress testing and ApacheBench load simulations to detect system bottlenecks",
        "Automated administrative maintenance scripts and security patch management",
      ],
      techLearned: [
        { category: "Operating Systems & Networking", items: ["Linux (Ubuntu/CentOS)", "TCP/IP", "DNS Management", "Process Scheduling"] },
        { category: "Cloud & Infrastructure", items: ["Google Cloud Console", "Reverse Proxying", "Firewall Rules", "SSL/HTTPS"] },
      ],
      challenges: [
        {
          title: "Handling Traffic Spikes During Campus Events",
          solution: "Tuned Nginx worker connections, enabled fastcgi caching, and optimized Linux kernel socket parameters.",
        },
      ],
      reflection:
        "Working under Mr. M Krishna Prasad's mentorship bridged theory and production engineering. Managing live servers with real stakes was an invaluable milestone in my career.",
      outcomes: [
        "Maintained 99.9% uptime across all institutional applications throughout the 6-month tenure",
        "Reduced server response latency by 15% through Nginx caching and connection reuse",
      ],
    },
    {
      id: "flydronics-uav-intern",
      role: "UAV Systems Intern (Drone Technology)",
      company: "Flydronics",
      period: "January 2025 – April 2025",
      year: "2025",
      type: "Internship",
      accent: "#8b5cf6",
      gradient: "from-purple-500/30 via-indigo-500/20 to-violet-900/20",
      tags: ["UAV Assembly", "ArduPilot", "Flight Controllers", "Sensor Calibration", "Arduino", "Thermal Vision"],
      summary:
        "Engineered end-to-end assembly of 5+ multi-rotor UAV airframes, calibrated avionics flight controllers, and programmed 15+ automated waypoint missions using ArduPilot for thermal solar panel fault inspection.",
      responsibilities: [
        "Assembled drone frames, ESCs, brushless motors, and payload gimbal mechanisms",
        "Calibrated flight controllers (Pixhawk) for precision roll/pitch/yaw PID stability",
        "Configured telemetry links and Mission Planner GCS software for autonomous flight planning",
        "Integrated lightweight thermal imaging cameras for solar array defect detection",
      ],
      techLearned: [
        { category: "Hardware & Avionics", items: ["UAV Airframes", "Flight Controllers", "Sensor Calibration", "ESC Tuning"] },
        { category: "Software & Ground Control", items: ["ArduPilot", "Mission Planner GCS", "Arduino", "Thermal Analytics"] },
      ],
      challenges: [
        {
          title: "In-Flight GPS Drift and Wind Disruption",
          solution: "Fine-tuned dual-compass Kalman filters and tuned barometer altitude hold parameters.",
        },
      ],
      reflection:
        "Bridging embedded firmware, aerial mechanics, and intelligent sensing showed me the vast power of cyber-physical systems.",
      outcomes: [
        "Completed 15+ successful automated waypoint inspection flights with 100% mission reliability",
        "Reduced flight drift error margins by 12% through meticulous sensor calibration",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "fire-smoke-detection",
      num: "01",
      title: "Fire & Smoke Detection System",
      subtitle: "Industrial AI Safety Platform",
      category: "Computer Vision & Deep Learning",
      desc: "Production-grade industrial AI safety solution utilizing YOLOv11 to detect fire and smoke in real-time from multi-camera feeds with low latency and automated alert broadcasting.",
      tags: ["YOLOv11", "PyTorch", "Computer Vision", "FastAPI", "React", "OpenCV", "ONNX", "WebSockets"],
      gradient: "from-orange-500/40 via-red-500/30 to-rose-900/40",
      accentColor: "#f97316",
      borderColor: "border-orange-500/30",
      image: "/images/fire-smoke-demo.webp",
      gallery: ["/images/fire-smoke-demo.webp", "/images/fire-smoke-detection.jpg"],
      github: "https://github.com/Saicharan-077",
      overview:
        "A safety-critical computer vision system built to detect early-stage fire and smoke in industrial manufacturing environments. By running optimized YOLOv11 inference over live video feeds, the platform alerts safety operators before small flare-ups escalate into catastrophic fires.",
      problem:
        "Traditional heat and optical smoke sensors only trigger after a fire is already widespread and smoke reaches the ceiling. Meanwhile, standard CCTV networks have dozens of feeds that human security staff cannot continuously monitor, leaving hazardous industrial blind spots.",
      solution:
        "Engineered an automated AI monitoring pipeline where video feeds are processed through a fine-tuned YOLOv11 model. Confirmed hazard detections instantly trigger WebSocket alerts, audio alarms, and graphical bounding box overlays on a real-time React operator dashboard.",
      objectives: [
        "Detect fire and smoke within 200ms of video feed ingestion",
        "Achieve >90% precision to prevent disruptive false alarms",
        "Support concurrent multi-camera RTSP ingestion streams",
        "Provide operator threshold tuning for different lighting conditions",
      ],
      workflow: [
        { step: "01", title: "RTSP Video Ingestion", desc: "Captures IP camera feeds via high-efficiency OpenCV video streams." },
        { step: "02", title: "Frame Preprocessing", desc: "Resizes, normalizes, and batches frames for GPU/CPU inference." },
        { step: "03", title: "YOLOv11 Inference", desc: "Extracts bounding boxes, classification scores, and confidence levels." },
        { step: "04", title: "Temporal Filtering", desc: "Filters transient artifacts across sequential frames to eliminate noise." },
        { step: "05", title: "WebSocket Broadcast", desc: "Pushes detection coordinates and alerts to the live React dashboard." },
        { step: "06", title: "Incident Logging", desc: "Stores timestamps, confidence, and snapshot logs for compliance audits." },
      ],
      architecture: [
        { layer: "Presentation", tech: "React Dashboard", desc: "Real-time multi-camera grid, alert notifications, and threshold sliders" },
        { layer: "Inference Server", tech: "FastAPI + WebSockets", desc: "Asynchronous frame routing, event broadcasting, and REST endpoints" },
        { layer: "AI Engine", tech: "YOLOv11 & PyTorch", desc: "Custom-trained object detector optimized with ONNX runtime" },
      ],
      features: [
        { title: "Real-Time Hazard Detection", desc: "Operates at 30+ FPS with sub-35ms frame latency." },
        { title: "Dual Class Detection", desc: "Distinguishes between dynamic smoke plumes and open flame signatures." },
        { title: "Multi-Camera Grid View", desc: "Monitors multiple live warehouse zones concurrently." },
        { title: "Operator Alert Audio & Visuals", desc: "Flashing HUD indicators and immediate operator notifications." },
      ],
      trainingPipeline: [
        { phase: "Dataset Collection", desc: "Curated 10,000+ images covering industrial warehouses, daylight, night, and outdoor scenarios." },
        { phase: "Data Annotation", desc: "Precision bounding box labeling with LabelImg in YOLO coordinate format." },
        { phase: "Data Augmentation", desc: "Applied mosaic, perspective transforms, and HSV color jittering to enhance generalization." },
        { phase: "Model Training", desc: "Fine-tuned YOLOv11 with transfer learning on multi-GPU instances." },
      ],
      challenges: [
        {
          title: "Dust & Steam Artifacts",
          solution: "Trained on negative samples of steam, dust clouds, and incandescent lighting to harden classification boundaries.",
        },
        {
          title: "Inference Latency on Edge",
          solution: "Exported model to ONNX with half-precision (FP16) quantization for rapid inference.",
        },
      ],
      results: [
        { metric: "mAP@0.5", value: "92.4%", desc: "Mean Average Precision" },
        { metric: "Inference Speed", value: "30+ FPS", desc: "Live video throughput" },
        { metric: "False Positive Rate", value: "<4.5%", desc: "Post temporal verification" },
      ],
      futureScope: [
        "Deploy on NVIDIA Jetson edge compute devices for fully local offline processing",
        "Integrate automated dry-chemical fire suppression trigger relays",
        "Add automated thermal camera telemetry fusion",
      ],
    },
    {
      id: "voxscholar",
      num: "02",
      title: "VoxScholar",
      subtitle: "AI Academic Podcast & Q&A Companion",
      category: "Generative AI & Audio Synthesis",
      desc: "Transforms dense academic PDFs and research papers into interactive audio podcast conversations and provides context-aware intelligent Q&A using RAG.",
      tags: ["React.js", "Node.js", "FastAPI", "MongoDB", "TTS", "RAG", "Web Speech API", "Python"],
      gradient: "from-violet-500/40 via-purple-500/30 to-fuchsia-900/40",
      accentColor: "#a855f7",
      borderColor: "border-purple-500/30",
      image: "/images/placeholder.webp",
      github: "https://github.com/Saicharan-077/vox-scholar-ai",
      overview:
        "VoxScholar reimagines academic learning for auditory and active learners. Students upload complex research papers, textbooks, or lecture slides, which the AI engine synthesizes into structured, conversational podcast dialogues with dual virtual hosts, accompanied by interactive Q&A and flashcard generators.",
      problem:
        "Students suffer from reading fatigue and cognitive overload when reviewing hundreds of pages of technical literature. Static educational materials lack adaptability and interactivity.",
      solution:
        "Created an end-to-end pipeline: PDF parsing → semantic chunking → LLM dialogue generation → neural Text-to-Speech synthesis with synchronized playback, complemented by a Retrieval-Augmented Generation (RAG) chatbot.",
      objectives: [
        "Generate conversational audio explanations from uploaded documents in under 60 seconds",
        "Enable hands-free voice-driven Q&A through Web Speech API integration",
        "Automatically extract key definitions into interactive flashcard decks",
      ],
      workflow: [
        { step: "01", title: "Document Upload", desc: "Students upload PDF textbooks or lecture notes via the React interface." },
        { step: "02", title: "Vector Chunking", desc: "Text is extracted, chunked, and embedded into vector representations." },
        { step: "03", title: "Dialogue Scripting", desc: "LLM transforms technical concepts into engaging multi-speaker dialogue." },
        { step: "04", title: "TTS Audio Generation", desc: "Neural voices render lifelike audio with realistic pauses and inflections." },
        { step: "05", title: "Interactive Player", desc: "Synchronized audio player highlights corresponding transcript paragraphs." },
        { step: "06", title: "RAG Q&A", desc: "Students query specific sections with instantaneous contextual responses." },
      ],
      architecture: [
        { layer: "Frontend UI", tech: "React.js + Tailwind", desc: "Interactive waveform player, voice input, and study tools" },
        { layer: "Orchestrator", tech: "Node.js / Express", desc: "User sessions, document uploads, and audio asset streaming" },
        { layer: "AI Backend", tech: "FastAPI + LangChain", desc: "Document embeddings, RAG query pipeline, and prompt engineering" },
      ],
      features: [
        { title: "Dual-Host Podcast Generation", desc: "Generates natural conversational discussions between two simulated experts." },
        { title: "Voice-Activated Study Q&A", desc: "Ask verbal questions and receive immediate spoken explanations." },
        { title: "Automated Flashcard Extraction", desc: "Extracts formulas, theorems, and definitions into interactive study decks." },
        { title: "Smart Summaries", desc: "Produces executive chapter recaps and key takeaways." },
      ],
      challenges: [
        {
          title: "Math & Technical Notation in TTS",
          solution: "Engineered preprocessing prompts to expand LaTeX and math symbols into natural spoken English.",
        },
      ],
      results: [
        { metric: "Retrieval Speed", value: "+30%", desc: "Faster information discovery" },
        { metric: "Audio Latency", value: "<15s", desc: "Per chapter synthesis" },
        { metric: "Student Engagement", value: "4.8/5", desc: "User satisfaction rating" },
      ],
      futureScope: [
        "Multi-lingual podcast translation for international scholarship",
        "Integration with Canvas and Blackboard university portals",
      ],
    },
    {
      id: "vnr-parking",
      num: "03",
      title: "VNR Parking Management System",
      subtitle: "Campus Vehicle Coordination Platform",
      category: "Full-Stack & Real-Time WebSockets",
      desc: "Bridges the communication gap between security personnel and faculty members with real-time parking slot tracking, WebSocket notifications, and role-based portals.",
      tags: ["Spring Boot", "React.js", "WebSockets", "MySQL", "Java", "REST APIs", "Tailwind CSS"],
      gradient: "from-blue-500/40 via-cyan-500/30 to-teal-900/40",
      accentColor: "#3b82f6",
      borderColor: "border-blue-500/30",
      image: "/images/placeholder.webp",
      github: "https://github.com/Manikanth8910/VNRPARKING",
      overview:
        "A campus platform deployed at VNR VJIET that eliminates parking bottlenecks. It provides security guards and 200+ faculty members with a shared, live digital interface for slot availability, parking requests, and immediate notifications.",
      problem:
        "Faculty members frequently wasted 15–20 minutes circling parking lots during peak morning hours. Security guards had no digital medium to communicate slot availability, resulting in congestion, double parking, and unauthorized vehicle entry.",
      solution:
        "Constructed a full-stack Spring Boot and React platform with bi-directional WebSocket messaging. When faculty arrive, security staff allocate open slots instantly on a graphical parking grid, notifying faculty directly on their mobile/web portal.",
      objectives: [
        "Reduce campus gate congestion and search times during peak hours",
        "Provide instantaneous WebSocket notifications with sub-100ms latency",
        "Implement secure role-based access for guards, faculty, and administrators",
      ],
      workflow: [
        { step: "01", title: "Faculty Approach", desc: "Faculty arrives at campus entrance gate." },
        { step: "02", title: "Guard Slot Allocation", desc: "Security guard marks slot occupancy on real-time interactive campus grid." },
        { step: "03", title: "WebSocket Broadcast", desc: "STOMP protocol pushes update immediately to faculty member's app." },
        { step: "04", title: "Seamless Navigation", desc: "Faculty drives directly to designated reserved slot." },
        { step: "05", title: "Departure Clearance", desc: "Slot status auto-resets when vehicle exits, updating global count." },
      ],
      architecture: [
        { layer: "Frontend Client", tech: "React.js + Vite", desc: "Responsive interactive parking map and notification feed" },
        { layer: "Enterprise Backend", tech: "Spring Boot 3", desc: "STOMP WebSocket server, JWT authentication, and business logic" },
        { layer: "Database", tech: "MySQL 8", desc: "Normalized relational schema for users, vehicles, slots, and logs" },
      ],
      features: [
        { title: "Real-Time Slot Occupancy Grid", desc: "Color-coded live representation of all 200+ parking spaces." },
        { title: "WebSocket Instant Alerts", desc: "Direct notifications without page refreshes or polling." },
        { title: "Role-Based Access Control", desc: "Guards have check-in rights; faculty view assignments; admins view analytics." },
        { title: "Audit & Congestion Analytics", desc: "Historical occupancy trends to optimize campus traffic flow." },
      ],
      challenges: [
        {
          title: "Concurrent Slot Reservation Race Conditions",
          solution: "Implemented optimistic locking in Spring Boot JPA to prevent double booking of slots.",
        },
      ],
      results: [
        { metric: "Unauthorized Parking", value: "-40%", desc: "Incidents reduced in semester 1" },
        { metric: "Delivery Latency", value: "<100ms", desc: "WebSocket message speed" },
        { metric: "Faculty Vehicles", value: "200+", desc: "Actively managed daily" },
      ],
      futureScope: [
        "Automatic number plate recognition (ANPR) camera integration at gate barrier",
        "Mobile companion app with Bluetooth beacon proximity detection",
      ],
    },
    {
      id: "clearscore-ai",
      num: "04",
      title: "ClearScore AI",
      subtitle: "Automated Assignment Evaluation Platform",
      category: "AI & Educational Automation",
      desc: "Architected an automated grading and assessment engine using LLMs to evaluate student conceptual depth, providing structured feedback in under 5 seconds.",
      tags: ["React.js", "FastAPI", "Python", "LLM APIs", "Tailwind CSS", "REST APIs"],
      gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-900/40",
      accentColor: "#10b981",
      borderColor: "border-emerald-500/30",
      image: "/images/placeholder.webp",
      github: "https://github.com/Saicharan-077/clear-score-ai.git",
      overview:
        "ClearScore AI automates the tedious, inconsistent grading of descriptive technical assignments. By evaluating student submissions against rubric matrices using structured LLM reasoning, it delivers immediate, actionable feedback to students and analytics to professors.",
      problem:
        "Grading descriptive engineering assignments manually takes weeks. Students receive scores without detailed feedback, leaving knowledge gaps unaddressed until semester exams.",
      solution:
        "Built a FastAPI evaluation pipeline that scores submissions across conceptual accuracy, logical flow, and code correctness, outputting detailed line-by-line critiques in seconds.",
      objectives: [
        "Cut instructor grading time by 80%",
        "Provide immediate constructive improvement tips to students",
        "Eliminate grader bias through standardized evaluation rubrics",
      ],
      workflow: [
        { step: "01", title: "Assignment Ingestion", desc: "Student submits written or code solution." },
        { step: "02", title: "Rubric Alignment", desc: "Engine matches submission against course rubric criteria." },
        { step: "03", title: "LLM Conceptual Scoring", desc: "Evaluates core reasoning and identifies misconception patterns." },
        { step: "04", title: "Feedback Generation", desc: "Formats actionable recommendations and score breakdown." },
      ],
      architecture: [
        { layer: "Frontend Portal", tech: "React.js", desc: "Student submission dashboard and professor analytics" },
        { layer: "Backend Server", tech: "FastAPI", desc: "Submission queue and async LLM processing" },
      ],
      features: [
        { title: "Sub-5 Second Turnaround", desc: "Instant scoring eliminates multi-week grading lag." },
        { title: "Rubric Consistency", desc: "Evaluates every submission uniformly based on objective criteria." },
        { title: "Misconception Diagnosis", desc: "Pinpoints exactly which mathematical or coding concept was missed." },
      ],
      challenges: [
        {
          title: "LLM Hallucinations in Technical Grading",
          solution: "Implemented strict JSON schema enforcement and verification stages against textbook answer keys.",
        },
      ],
      results: [
        { metric: "Evaluation Speed", value: "<5s", desc: "Average response time" },
        { metric: "Grading Accuracy", value: "96%", desc: "Agreement with human professors" },
      ],
      futureScope: [
        "Handwriting OCR integration for handwritten paper submissions",
        "Automated code execution sandbox for dynamic programming verification",
      ],
    },
    {
      id: "solar-drone-fault-detection",
      num: "05",
      title: "Autonomous Solar Drone System",
      subtitle: "UAV Thermal Fault Detection & Analytics",
      category: "UAV Avionics & Computer Vision",
      desc: "Autonomous drone system engineered for solar panel thermal inspection, utilizing ArduPilot autonomous navigation and computer vision to identify micro-cracks and hot-spots.",
      tags: ["ArduPilot", "Flight Controllers", "Thermal Vision", "Arduino", "Python", "GCS"],
      gradient: "from-amber-500/40 via-yellow-500/30 to-orange-900/40",
      accentColor: "#f59e0b",
      borderColor: "border-amber-500/30",
      image: "/images/placeholder.webp",
      github: "https://github.com/Saicharan-077",
      overview:
        "Developed during UAV systems research at VNR VJIET, this platform integrates autonomous multi-rotor drones with dual-sensor visual and thermal cameras to inspect multi-acre solar farms, pinpointing damaged cells that cause power loss.",
      problem:
        "Manual solar panel inspection across massive utility-scale installations requires hours of dangerous field walking. Micro-cracks and defective bypass diodes cannot be seen with the naked human eye.",
      solution:
        "Programmed automated grid-based flight missions that capture radiometric thermal imagery. AI segmentation algorithms detect anomalies and generate geo-tagged maintenance punch lists.",
      objectives: [
        "Automate solar farm inspection flights without manual piloting",
        "Detect thermal hot-spots with temperature differentials >5°C",
        "Generate geo-referenced defect map reports for technicians",
      ],
      workflow: [
        { step: "01", title: "Mission Planning", desc: "Generates optimal flight grid paths based on farm perimeter GPS coordinates." },
        { step: "02", title: "Autonomous Flight", desc: "ArduPilot executes waypoint mission at fixed altitude and velocity." },
        { step: "03", title: "Thermal Capture", desc: "Captures synchronized RGB and long-wave infrared (LWIR) frames." },
        { step: "04", title: "Defect Analysis", desc: "Identifies hot-spots, shading defects, and snail-trail micro-cracks." },
      ],
      architecture: [
        { layer: "Aerial Platform", tech: "Pixhawk + ArduPilot", desc: "Carbon fiber multirotor with GPS & telemetry radio" },
        { layer: "Sensor Payload", tech: "Thermal Cam + Arduino", desc: "Dual sensor gimbal with synchronized trigger" },
        { layer: "Ground Station", tech: "Python + Mission Planner", desc: "Telemetry monitoring and thermal image processing" },
      ],
      features: [
        { title: "100% Autonomous Navigation", desc: "Auto takeoff, grid flight, obstacle clearance, and precision landing." },
        { title: "Thermal Hot-Spot Mapping", desc: "Highlights cells operating above safe thermal operating thresholds." },
        { title: "Geo-Tagged Defect Reports", desc: "Pinpoints exact panel string and coordinate for rapid ground repair." },
      ],
      challenges: [
        {
          title: "Vibration in Flight Affecting Thermal Imagery",
          solution: "Constructed customized silicone damping mounts and tuned gimbal brushless PID loops.",
        },
      ],
      results: [
        { metric: "Inspection Speed", value: "10x", desc: "Faster than ground inspection" },
        { metric: "Mission Success", value: "100%", desc: "Across 15+ automated test runs" },
      ],
      futureScope: [
        "Onboard real-time edge AI processing using NVIDIA Jetson Orin Nano",
        "Automated dust and soiling thickness quantification",
      ],
    },
    {
      id: "safehaven-app",
      num: "06",
      title: "SafeHaven Security Platform",
      subtitle: "Incident Reporting & Campus Safety Network",
      category: "Full-Stack Security & Emergency Response",
      desc: "Full-stack web application designed for campus security personnel and students to report incidents, broadcast emergency advisories, and coordinate emergency responses.",
      tags: ["React.js", "Vite", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
      gradient: "from-rose-500/40 via-pink-500/30 to-red-900/40",
      accentColor: "#f43f5e",
      borderColor: "border-rose-500/30",
      image: "/images/placeholder.webp",
      github: "https://github.com/Saicharan-077",
      overview:
        "SafeHaven is a responsive crisis management and safety reporting platform that streamlines communication between campus administration, security response teams, and students during critical situations.",
      problem:
        "Emergency reporting on college campuses is often fragmented across physical phones and word of mouth, slowing emergency response times during accidents or medical emergencies.",
      solution:
        "Built a high-reliability web platform with instant SOS triggers, GPS incident tagging, and automated priority queueing for on-duty security officers.",
      objectives: [
        "Enable one-tap emergency incident reporting with geo-location",
        "Provide campus security with live dispatch queue and incident resolution tracking",
      ],
      workflow: [
        { step: "01", title: "SOS Trigger", desc: "User triggers emergency alert or files detailed incident report." },
        { step: "02", title: "Dispatch Routing", desc: "System tags location and alerts nearest active security personnel." },
        { step: "03", title: "Resolution Tracking", desc: "Guards update status from 'dispatched' to 'resolved'." },
      ],
      architecture: [
        { layer: "Frontend Portal", tech: "React.js + Tailwind", desc: "High-contrast, accessible UI for rapid crisis reporting" },
        { layer: "API Backend", tech: "Node.js + Express", desc: "Secure REST endpoints, incident routing, and user auth" },
      ],
      features: [
        { title: "One-Tap SOS", desc: "Instantly notifies security with user's verified location." },
        { title: "Anonymous Reporting", desc: "Allows students to report harassment or hazards without fear." },
        { title: "Broadcast Advisories", desc: "Administrators can push campus-wide safety alerts." },
      ],
      challenges: [
        {
          title: "High-Stress UI Accessibility",
          solution: "Designed high-contrast, large touch-target buttons following WCAG AA accessibility standards.",
        },
      ],
      results: [
        { metric: "Response Time", value: "<2min", desc: "Average campus officer dispatch" },
        { metric: "Platform Uptime", value: "99.9%", desc: "Continuous emergency readiness" },
      ],
      futureScope: [
        "Push notification integration with mobile native alerts",
        "Integration with automated door access control systems",
      ],
    },
  ] as ProjectCaseStudy[],

  skills: {
    categories: [
      {
        name: "Programming Languages",
        icon: "code",
        skills: [
          { name: "C++", level: 90, desc: "Competitive programming, STL, memory management" },
          { name: "Java", level: 88, desc: "OOPs, multithreading, enterprise backend" },
          { name: "Python", level: 92, desc: "AI/ML, PyTorch, computer vision, FastAPI" },
          { name: "JavaScript (ES6+)", level: 90, desc: "Modern frontend, async patterns, DOM" },
          { name: "TypeScript", level: 86, desc: "Type safety, generics, interfaces, scalable code" },
          { name: "SQL", level: 85, desc: "Relational modeling, indexing, ACID transactions" },
        ],
      },
      {
        name: "Frameworks & Web Tech",
        icon: "bolt",
        skills: [
          { name: "React.js", level: 92, desc: "Hooks, state management, component architecture" },
          { name: "Next.js", level: 85, desc: "SSR, SSG, App Router, production SEO" },
          { name: "Spring Boot", level: 82, desc: "REST APIs, Spring Security, JPA/Hibernate" },
          { name: "Node.js & Express", level: 88, desc: "REST microservices, middleware, async I/O" },
          { name: "FastAPI", level: 88, desc: "Python async endpoints, model inference APIs" },
          { name: "WebSockets / STOMP", level: 84, desc: "Real-time bi-directional telemetry & alerts" },
          { name: "Three.js / WebGL", level: 80, desc: "3D scene graphs, lighting, shaders, cameras" },
        ],
      },
      {
        name: "AI, Machine Learning & Vision",
        icon: "brain",
        skills: [
          { name: "YOLOv11", level: 92, desc: "Object detection, real-time tracking, custom training" },
          { name: "PyTorch", level: 85, desc: "Tensor operations, neural layers, backpropagation" },
          { name: "Computer Vision & OpenCV", level: 88, desc: "Image filtering, morphological ops, frame queues" },
          { name: "ONNX Runtime", level: 82, desc: "Model quantization, cross-platform inference" },
          { name: "RAG & LLM Integration", level: 86, desc: "Vector embeddings, LangChain, prompt engineering" },
          { name: "Data Annotation & LabelImg", level: 90, desc: "Dataset curation, bounding boxes, augmentations" },
        ],
      },
      {
        name: "Databases & Systems",
        icon: "database",
        skills: [
          { name: "MySQL", level: 88, desc: "Query optimization, schema design, constraints" },
          { name: "PostgreSQL", level: 82, desc: "ACID compliance, relational integrity, JSONB" },
          { name: "MongoDB", level: 80, desc: "Document collections, aggregation pipelines" },
          { name: "Linux Server Administration", level: 88, desc: "Shell scripting, daemon management, logs, security" },
          { name: "Nginx", level: 86, desc: "Reverse proxy, SSL termination, load balancing" },
          { name: "Docker", level: 84, desc: "Multi-stage builds, container orchestration" },
          { name: "Google Cloud Console", level: 80, desc: "Compute Engine VMs, networking, cloud storage" },
        ],
      },
      {
        name: "Hardware, UAV & Embedded",
        icon: "hardware",
        skills: [
          { name: "UAV Assembly", level: 88, desc: "Frame assembly, power distribution, soldering" },
          { name: "ArduPilot", level: 86, desc: "Autonomous flight modes, waypoint missions" },
          { name: "Flight Controllers (Pixhawk)", level: 85, desc: "PID tuning, gyro/accelerometer calibration" },
          { name: "Arduino / Embedded C", level: 80, desc: "Sensor interfacing, I2C, SPI, PWM actuators" },
          { name: "Thermal Vision Inspection", level: 84, desc: "LWIR camera integration, defect heat analysis" },
        ],
      },
    ],
  },

  achievements: [
    {
      id: "echo-hackathon-2026",
      title: "Echo Hackathon 2026 – Runner-Up",
      event: "Student Alumni Association, VNR VJIET",
      position: "Runner-Up",
      year: "2026",
      accent: "#818cf8",
      gradient: "from-indigo-400/30 via-purple-500/20 to-slate-900/20",
      desc: "Secured Runner-Up in the Echo Hackathon 2026 organized by the Student Alumni Association. Collaborated in a cross-functional team to architect and build a working full-stack technical solution under 24-hour hackathon constraints.",
      tags: ["Hackathon", "Team Collaboration", "Full-Stack Development", "Rapid Prototyping", "Pitching"],
      learnings: [
        "Rapid MVP scoping and prioritized architectural trade-offs under severe time constraints",
        "Seamless teamwork and high-velocity collaborative coding under pressure",
        "Presenting technical value propositions and live demos effectively to executive alumni judges",
      ],
    },
    {
      id: "solution-sprint-2",
      title: "Runner-Up – Solution Sprint 2.0",
      event: "Solution Sprint 2.0 Hackathon",
      position: "Runner-Up",
      year: "2024",
      accent: "#cbd5e1",
      gradient: "from-slate-400/30 via-gray-500/20 to-slate-900/20",
      desc: "Recognized as Runner-Up at Solution Sprint 2.0 for engineering a viable software architecture addressing real-world operational bottlenecks with a live working prototype.",
      tags: ["Hackathon", "Problem Solving", "System Architecture", "Team Leadership"],
      learnings: [
        "Translating abstract problem statements into structured, modular software components",
        "Fast-paced debugging and continuous feedback incorporation",
      ],
    },
    {
      id: "webathon-2",
      title: "Runner-Up – Webathon 2.0",
      event: "Webathon 2.0 Development Challenge",
      position: "Runner-Up",
      year: "2024",
      accent: "#60a5fa",
      gradient: "from-blue-400/30 via-cyan-500/20 to-blue-900/20",
      desc: "Won Runner-Up honors at Webathon 2.0, a competitive web engineering sprint focusing on frontend craftsmanship, responsive layout polish, and robust API integration.",
      tags: ["Web Engineering", "Frontend Excellence", "React.js", "UI/UX Design"],
      learnings: [
        "Building aesthetic, performant user interfaces under strict deadline pressure",
        "Ensuring mobile responsiveness and cross-browser visual fidelity",
      ],
    },
    {
      id: "startup-premier-league",
      title: "Winner – Startup Premier League",
      event: "Startup Premier League Entrepreneurship Challenge",
      position: "1st Place Winner",
      year: "2024",
      accent: "#facc15",
      gradient: "from-yellow-400/30 via-amber-500/20 to-orange-900/20",
      desc: "Secured 1st Place overall in the Startup Premier League competition by presenting a market-validated product concept, complete technical architecture, and a working MVP demo.",
      tags: ["Entrepreneurship", "Product Strategy", "Technical Feasibility", "1st Place Winner"],
      learnings: [
        "Synthesizing technical capabilities with sustainable product-market fit",
        "Pitching to investors and articulating return on technical investment",
      ],
    },
    {
      id: "iste-core-member",
      title: "ISTE Core Committee Member",
      event: "Indian Society for Technical Education",
      position: "Core Member",
      year: "2023 – Present",
      accent: "#c084fc",
      gradient: "from-violet-400/30 via-purple-500/20 to-violet-900/20",
      desc: "Selected to the Core Executive Committee of ISTE, organizing technical symposiums, hands-on coding workshops, and peer mentorship sessions for 200+ engineering students.",
      tags: ["Leadership", "Community Building", "Workshops", "Technical Mentorship"],
      learnings: [
        "Large-scale event management and institutional coordination",
        "Mentoring junior peers in programming, DSA, and career development",
      ],
    },
    {
      id: "wing-master-vjstartups",
      title: "Wing Master – Infrastructure Wing",
      event: "VJStartups Incubation Cell",
      position: "Wing Master",
      year: "2024 – Present",
      accent: "#34d399",
      gradient: "from-emerald-400/30 via-teal-500/20 to-emerald-900/20",
      desc: "Appointed as Wing Master leading the Infrastructure Wing at VJStartups, consulting for student-led startup ventures on cloud hosting, Linux server configuration, and DevOps pipelines.",
      tags: ["Leadership", "Cloud Architecture", "Startup Mentoring", "Infrastructure"],
      learnings: [
        "Diagnosing cloud infrastructure needs for early-stage startup prototypes",
        "Conducting workshops on Nginx, Linux administration, and deployment safety",
      ],
    },
  ] as AchievementItem[],

  certifications: [
    {
      id: "nptel-dbms",
      title: "Database Management Systems (Elite Certification)",
      org: "NPTEL (IIT Kharagpur)",
      desc: "Comprehensive certification covering relational algebra, SQL optimization, normalization (1NF-BCNF), concurrency control, indexing, and ACID transaction mechanics.",
      link: "https://drive.google.com/file/d/1F4m5VwaSjdicvNqYa7FqpmnJhiKympy_/view?usp=drive_link",
      accent: "#3b82f6",
      icon: "database",
    },
    {
      id: "quantum-computing",
      title: "Quantum Computing Principles & Algorithms",
      org: "Certification Authority",
      desc: "Rigorous coursework in quantum gates, superposition, entanglement, quantum circuit design, and algorithms including Grover's search and Shor's factorization.",
      link: "https://drive.google.com/file/d/1esyjnsSk5pGuU0z9ls-MG49eqcpZCxm_/view?usp=drive_link",
      accent: "#a855f7",
      icon: "atom",
    },
    {
      id: "drone-technology",
      title: "Drone Technology & Autonomous Navigation",
      org: "Certification Authority",
      desc: "Covers multi-rotor dynamics, avionics hardware, sensor telemetry, autonomous mission planning with ArduPilot, and industrial drone safety regulations.",
      link: "https://drive.google.com/file/d/1maPK-rYC75ghm5tgqPU7Vk5HQyFKG-0O/view?usp=drive_link",
      accent: "#10b981",
      icon: "hardware",
    },
    {
      id: "servicenow-virtual-internship",
      title: "ServiceNow Enterprise Platform Internship",
      org: "ServiceNow",
      desc: "Hands-on virtual internship in enterprise IT Service Management (ITSM), automated workflow scripting, portal customization, and security administration.",
      link: "https://drive.google.com/file/d/1hWp708VpuRp6fXxKbdSZFQrVo5t4cM9F/view?usp=drive_link",
      accent: "#06b6d4",
      icon: "cloud",
    },
    {
      id: "vjstartups-summer-internship",
      title: "VJStartups Summer Incubation Program",
      org: "VJStartups",
      desc: "Summer residency focusing on startup prototyping, product roadmapping, cloud architecture setup, and business strategy modeling.",
      link: "https://drive.google.com/file/d/1veqdYehssaCOMDWfhqjuM3fgKcVsUt7g/view?usp=drive_link",
      accent: "#f97316",
      icon: "rocket",
    },
  ] as CertificationItem[],
};

export default PORTFOLIO_DATA;
