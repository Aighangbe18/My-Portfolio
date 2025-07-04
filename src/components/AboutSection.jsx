import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center mt-12">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="flex justify-center mb-8">
  <img
    src="./projects/blessing1.png"
    alt="Profile"
    className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-primary"
  />
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground text-xl">
                        With over 4 years of experience in web development, I specialize in 
                        creating responsive, accessible, and performance web applications using
                        modern technologies.
                    </p>

                    <p className="text-muted-foreground text-xl">
                        I'm Passionate about creating elegant solutions to complex problems, and i'm 
                        constantly learning new technologies and techniques to stay at the forefront of
                        the ever-evolving web landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            {" "}
                            Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/1o transition-colors duration-300"> 
                            {" "}
                            Download CV
                            </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-4 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code  className="h-3 w-3 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-2xl">Web Development</h4>
                                <p className="text-muted-foreground text-xl">
                                    Creating responsive websites and web applications with 
                                    modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className="gradient-border p-4 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User  className="h-3 w-3 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-2xl">UI/UX Design</h4>
                                <p className="text-muted-foreground text-xl">
                                    Designing intuitive user interfaces and seamless user
                                    experiences.
                                </p>
                            </div>
                        </div>
                     </div>
                      <div className="gradient-border p-4 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase  className="h-3 w-3 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-2xl">Project Management</h4>
                                <p className="text-muted-foreground text-xl">
                                   Leading projects from conception to completion with agile
                                   methodologies.
                                </p>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
}