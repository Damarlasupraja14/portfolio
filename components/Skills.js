function Skills() {
    try {
        // 🔧 EDIT: Update these skills with your actual proficiency levels
        const technicalSkills = [
            { name: "Python", level: 95, icon: "fab fa-python" },
            { name: "MYSQL", level: 90, icon: "fas fa-database" },
            { name: "PowerBI", level: 90, icon: "fas fa-chart-bar" },
            { name: "Excel", level: 90, icon: "fab fa-file-excel" },
            { name: "Hadoop", level: 85, icon: "fas fa-server" },
            { name: "Spark", level: 90, icon: "fas fa-bolt" }
        ];

        // 🔧 EDIT: Add/remove tools based on what you actually use
        const tools = [
            "Jupyter Notebook", "Power BI", "Microsoft Excel","DAX","PyTorch","Flask",
            "Pandas", "NumPy","Matplotlib", "Scikit-learn", "TensorFlow"
        ];

        return (
            <section id="skills" className="glass-card mb-8 p-8" data-name="skills-section" data-file="components/Skills.js">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    <i className="fas fa-cogs mr-3"></i>Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div data-name="technical-skills">
                        <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
                        <div className="space-y-4">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white flex items-center">
                                            <i className={`${skill.icon} mr-2`}></i>
                                            {skill.name}
                                        </span>
                                        <span className="text-white/80 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            style={{width: `${skill.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-name="tools-section">
                        <h3 className="text-xl font-semibold text-white mb-6">Tools & Frameworks</h3>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool, index) => (
                                <span 
                                    key={index} 
                                    className="bg-white/20 text-white px-3 py-2 rounded-full text-sm hover:bg-white/30 transition-colors"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-8" data-name="certifications">
                            <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                            <div className="space-y-3">
                                {/* 🔧 EDIT: Replace with your actual certifications */}
                                <div className="flex items-center text-white/90">
                                    <i className="fas fa-certificate text-yellow-400 mr-3"></i>
                                    Certified Data Scientist - IABAC
                                </div>
                                <div className="flex items-center text-white/90">
                                    <i className="fas fa-certificate text-yellow-400 mr-3"></i>
                                    Certified Data Scientist - NASSCOMM
                                </div>
                                <div className="flex items-center text-white/90">
                                    <i className="fas fa-certificate text-yellow-400 mr-3"></i>
                                    Data,Data Everywhere - COURSERA
                                </div>
                                <div className="flex items-center text-white/90">
                                    <i className="fas fa-certificate text-yellow-400 mr-3"></i>
                                    Data Visualizations and Job Simulation - ACCENTURE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
