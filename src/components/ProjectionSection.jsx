import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "A Booking Hotel Page",
        Description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/project 1.png",
        tags: ["React", "TaiLWindCSS", "Figma"],
        Url: "https://hotel-website-seven-delta.vercel.app/",
        githubURL: "https://github.com/Aighangbe18/Hotel-website",
    },

    {
        id: 2,
        title: "SaaS Landing Page",
        Description: "A beautiful Landing page using React and Tailwind",
        image: "/projects/project 2.png",
        tags: ["React", "TypeScript", "Supabase"],
        Url: "https://hotel-website-seven-delta.vercel.app/",
        githubURL: "https://github.com/Aighangbe18/Tallest_normal-web",
    },

    {
        id: 3,
        title: "A School Website Page",
        Description: "A beautiful Landing page using React and Tailwind",
        image: "/projects/project 3.png",
        tags: ["React", "Javascript", "Node.js"],
        Url: "https://hotel-website-seven-delta.vercel.app/",
        githubURL: "https://github.com/Aighangbe18/Tallest_blesscity",
    },
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with 
                    attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) =>(
                        <div
                        key={key}
                        className="group rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                             <h3 className="text-sm font-semibold mb-1 mt-2.5">{project.title}</h3>
                            <p className="text-muted-foreground text-xs mb-1">{project.Description}</p>
                            </div>

                            <div className="p-3">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-normal 
            border rounded-full bg-secondary text-secondary-foreground">
                {tag} </span>
                                    ))}

                                </div>
                            </div>

                           
                            <div className="flex justify-center items-center">
                                <div className="flex space-x-3">
                                    <a href={project.Url} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={16}/></a>
                                    <a href={project.githubURL}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={16}/></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/Aighangbe18" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 
                    py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-md hover:bg-primary/80 transitio">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
        </div>
    </section>;
};