import { ParagraphProps, resumeSectionProps, SkillBarProps } from "@/types/resume";

const educationData: resumeSectionProps[] = [
  {
    title: "West Bengal University  of Technology, Kolkata",
    subtitle: "Bachelor of Technology (B.TECH), Computer Science Engineering",
    year: "2012 - 2016",
    description: "Grade 7.79"
  },
  {
    title: "SKS Public School",
    subtitle: "12th, Science",
    year: "2010 - 2012",
    description: "Grade 78.9%"
  },
  {
    title: "SKS Public School",
    subtitle: "Class 10",
    year: "2009 - 2010",
    description: "Grade 8.2 CGPA"
  }
];

const experienceData: resumeSectionProps[] = [
    {
        title: "Fidelity National Financial",
        subtitle: "Senior Software Engineer",
        year: "2023 - Present",
        description: "Worked on developing web applications using React and Node.js."
    },
    {
        title: "Accenture",
        subtitle: "Application Development Senior Analyst",
        year: "2020 - 2023",
        description: "Worked on developing web applications using React and Node.js."
    },
    {
        title: "Tata Consultancy Services",
        subtitle: "System Engineer",
        year: "2016 - 2020",
        description: "Developed and maintained enterprise applications using .NET technologies."
    }
]

const awardsData: resumeSectionProps[] = [
    {
        title: "Accenture Celebration of Excellence",
        year: "2023",
        description: "In FY2023, I was recognized for being a consistent high performer and creating incredible value for our clients."
    },
    {
        title: "On the Spot Award",
        subtitle: "Tata Consultancy Services",
        year: "2016-2020",
        description: "I recieved multiple On the Spot Awards for my exceptional performance, contributions to various projects, for being quick learner, excellent team player who works without any supervision and fast turnaround on defect fixing."
    },
    {
        title: "Star Team Award",
        subtitle: "Tata Consultancy Services",
        year: "2019",
        description: "We received the Star Team Award for our successful execution of release without any issue in production."
    },
    {
        title: "Best Team Award",
        subtitle: "Tata Consultancy Services",
        year: "2017",
        description: "We received the Best Team Award for our successful delivery of CTLS Rebranding Phase 1 release very aggressive schedule."
    },
    {
        title: "Initial Learning Program Kudos Award",
        subtitle: "Tata Consultancy Services",
        year: "2016",
        description: "I was awarded for my excellence performance during the Initial Learning Program at TCS."
    }
]

export const aboutMeResume : ParagraphProps[] = [
    {
        text: "A senior full stack .NET developer with an extensive experience of 6.5 years. I have a strong understanding of web and RESTful API development, software design patterns & complex service design. Over the years, I have worked on multiple projects with different domain which upskilled me in understanding, maintaining and developing complex web applications."
    },
    {
        text: "Technically skilled in C#, .NET Frameworks, .NET Core, .NET 6, Web API, Entity Framework, Software Architecture & Design patterns, Microservices, TDD development and Azure DevOps services. Also familiar with Frontend technologies like HTML, CSS, JavaScript, Vue.js & react.js In addition to my technical skills, I am a proactive problem-solver who can work independently or as a part of team. I am skilled in agile methodologies and understand the importance of meeting project deadlines and managing stakeholder expectations."
    },


]

const skillBarData : SkillBarProps[] = [
    { label: ".NET 8", percent: 90 },
    { label: "Blazor", percent: 85 },
    { label: "Entity Framework/EF", percent: 75 },
    { label: "Azure Cloud", percent: 75 },
    { label: "SQL Server", percent: 75 },
    { label: "Design Pattern", percent: 75 },
    { label: "Azure DevOps", percent: 75 }
];

export { educationData, experienceData, awardsData, skillBarData };