// data.js
const profile = {
    name: "Mahi Arora",
    role: "Full-Stack Developer & CSE Student",
    college: "ABES Engineering College",
    timeline: "2025 – 2029",
    location: "Delhi NCR, India",
    email: "mahiarora968@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    skills: {
        languages: ["C++ (Proficient)", "JavaScript (ES6+)"],
        frontend: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Bootstrap CSS"],
        backend: ["Node.js", "REST APIs", "JSON Data Handling"],
        tools: ["Git & GitHub", "VS Code", "Vibe Coding (AI Prototyping)", "OOP", "DSA"]
    },
    projects: [
        {
            title: "BookMyEvent",
            subtitle: "Dynamic Event Booking Platform",
            github: "https://github.com/Mahi157/BookMyEvent.git",
            demo: "https://mahi157.github.io/BookMyEvent/",
            tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap Icons"],
            description: "A high-fidelity web application inspired by BookMyShow. Implemented complex frontend application state logic for dynamic event filtering, interactive seat selection matrices, and persistent user booking tracks."
        },
        {
            title: "YouTube UI Clone",
            subtitle: "Responsive Interface Architecture",
            github: "https://github.com/Mahi157/youtube-homepage-ui-clone.git",
            demo: "https://mahi157.github.io/youtube-homepage-ui-clone/",
            tags: ["HTML5", "CSS3 Flexbox", "CSS Grid", "Responsive Design"],
            description: "A meticulously engineered static clone of the YouTube homepage layout. Restructured traditional item streaming into responsive multi-row interfaces, capturing intricate sidebars and structural media grids."
        },
        {
            title: "Student Management System",
            subtitle: "Persistent CLI Console Application",
            github: "https://github.com/Mahi157/Student-Management-System.git",
            demo: null,
            tags: ["C++", "DSA", "File Streams", "Data Structures"],
            description: "A logical console application utilizing modular object-oriented design and file-handling workflows. Formulated native filtering and search configurations to dynamically isolate and write records to local storage."
        }
    ]
};

module.exports = profile;
