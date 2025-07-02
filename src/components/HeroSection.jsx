import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10 mt-30 mb-24">
            <div className="space-y-2">
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight mt-7">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                         AIGHANGBE</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> BLESSING</span>
                </h1>
                <p className="text-sm md:text-2xl text-muted-foreground max-2-2xl mb-10 mx-auto opacity-0 animate-fade-in-delay-3">
                    I create stellar web experiences with modern technologies. specializing in 
                    front-end development, I build interfaces that are 
                    both beautiful and functional. With a keen eye for design and a passion for coding, I 
                    craft seamless user experiencs that drive engagement and deliver results.<br /> I'm well-versed
                    in a range of frontend technologies, including React, Nextjs and Angular, and I'm skilled
                    in using HTML5, CSS3, and JavaScript (ES6+) to bring my designs to life. i prioritize design,
                    accessibility, and user-centered approaches to ensure that my solutions meet the needs of diverse
                    users. <br />In my work, I'm my work, I'm driven by desire to create innovative solutions that exceed
                    user expectations. I stay up-to-date with the lastest frontendtrends and technologies, and i thrive
                    in collaborative environments where I can work with cross-functional teams to deliver exceptional results. 
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 mb-10 text-2xl">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-2xl text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 text-primary" />
        </div>
    </section>
}