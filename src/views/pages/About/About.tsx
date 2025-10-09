export function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-4 sm:p-8">
            <div className="max-w-2xl sm:max-w-4xl text-center space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neonBlue">About Me</h1>
                <p className="text-base sm:text-lg leading-relaxed">I’m a passionate Full Stack Developer with
                    experience in creating modern web applications. My journey began with a curiosity for technology,
                    leading me to work on various exciting projects. I specialize in using the MERN Stack and Spring
                    Boot to build responsive and interactive user interfaces.</p>
                <p className="text-base sm:text-lg leading-relaxed">My approach to development is driven by a desire to
                    solve problems creatively and efficiently. I thrive on collaboration, enjoy learning new
                    technologies, and am committed to continuous skill improvement.</p>
                <a href="#/projects"
                   className="inline-block bg-neonBlue text-darkBlue px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-500 hover:scale-105">View
                    Projects</a>
            </div>
        </div>
    );
}