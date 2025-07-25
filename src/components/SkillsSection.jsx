import { useState } from "react"
import { cn } from "./lib/utils";


const skills = [
    // Frontend
    {name: "HTML/CSS", level: 95, category: "frontend" },
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 89, category: "frontend"},
    {name: "TypeScript", level: 85, category: "frontend"},
    {name: "Tailwind CSS", level: 90, category: "frontend"},
    {name: "Nextjs", level: 80, category: "frontend"},

     // Backend
    {name: "Node.js", level: 80, category: "backend"},
    {name: "Express", level: 75, category: "backend"},
    {name: "MongoDB", level: 70, category: "backend"},
    {name: "PostgreSQL", level: 65, category: "backend"},
    {name: "GraphQL", level: 60, category: "backend"},

     // Tools
    {name: "Git/GitHub", level: 90, category: "tools"},
    {name: "Docker", level: 70, category: "tools"},
    {name: "Figma", level: 85, category: "tools"},
    {name: "Vs Code", level: 95, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];




export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
);
    return (
         <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap- text-2xl">
                {categories.map((category, key) => (
                    <button key={key} 
                    onClick={()=> setActiveCategory(category)}
                    className={cn(
                        "px-6 py-3 rounded-full transition-colors duration-300 capitalize mb-5",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                    >{category}</button>
                ))}
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill, key)=> (
                    <div key={key} className="bg-card p-4 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-xl"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className=" bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                        style={{width: skill.level + "%"}}
                        />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-xl text-muted-foreground"> {skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)};