function Header() {
    try {
        const [currentRole, setCurrentRole] = React.useState(0);
        // 🔧 EDIT: Change these roles to match your expertise
        const roles = ["Data Analyst", "Python Developer"];

        React.useEffect(() => {
            const interval = setInterval(() => {
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }, 3000);
            return () => clearInterval(interval);
        }, []);

        return (
            <header className="glass-card mb-8 p-8" data-name="header" data-file="components/Header.js">
                <nav className="flex justify-between items-center mb-12" data-name="navigation">
                    <div className="text-2xl font-bold text-white">
                        <i className="fas fa-chart-line mr-2"></i>
                        {/* 🔧 EDIT: Change your portfolio brand name */}
                        Supraja Portfolio
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="text-white hover:text-blue-200 transition-colors">About</a>
                        <a href="#skills" className="text-white hover:text-blue-200 transition-colors">Skills</a>
                        <a href="#experience" className="text-white hover:text-blue-200 transition-colors">Experience</a>
                        <a href="#projects" className="text-white hover:text-blue-200 transition-colors">Projects</a>
                        <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
                    </div>
                </nav>

                <div className="text-center" data-name="hero-section">
                    {/* 🔧 EDIT: Change to your actual name */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Supraja Damarla
                    </h1>
                    <div className="text-2xl md:text-3xl text-blue-200 mb-6 typing-animation">
                        {roles[currentRole]}
                    </div>
                    {/* 🔧 EDIT: Write your personal tagline/description */}
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        I am a passionate and highly motivated individual with a degree in Data Science, actively seeking opportunities as a Data Analyst
                         With a strong foundation in data analysis, visualization, and excel, I enjoy transforming complex data into meaningful insights that drive informed decision-making.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="/SUPRAJA_RESUME_D.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                        >
                        Download CV
                        </a>

                    </div>
                </div>
            </header>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
