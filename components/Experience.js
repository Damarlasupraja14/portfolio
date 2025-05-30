function Experience() {
    try {
        const experiences = [
            {
                title: "Data Science Intern",
                company: "Datamites",
                period: "July 2024 - Feb 2025",
                location: "Bangalore, Karnataka",
                achievements: [
                    " Built an end-to-end Freight Management Analytics project integrating Python, SQL, and Power BI to help a logistics company reduce operational fuel costs",
                    " Conducted data cleaning, transformation, and KPI extraction (fuel efficiency, maintenance costs, net revenue by city) developed an interactive Power BI dashboard with slicers and geo-analysis",
                    " Built a comprehensive Power BI dashboard integrating multiple visuals: bar charts, treemaps, maps, gauges, and trend lines.Conducted driver-level fuel analysis to identify inefficiencies. Discovered that addressing 3 key drivers’ behavior could cut fuel costs by 15%"
                ]
            },
            {
                title: "Data Analyst Intern",
                company: "Elevate Labs",
                period: "March 2025 - Apr 2025",
                location: "Remote",
                achievements: [
                    "Collected, cleaned, and analyzed user behavior and product performance data using Python and SQL.",
                    "Built and maintained interactive dashboards in Power BI and Excel for tracking key KPIs",
                    " Collaborated with cross-functional teams to provide data insights that informed design and feature decisions",
                    " Assisted in weekly data reviews, highlighting trends and anomalies to improve user retention and engagement.",
                    "Developed reports and presented insights to both technical and non-technical stakeholders."
                ]
            }
        ];

        return (
            <section id="experience" className="glass-card mb-8 p-8" data-name="experience-section" data-file="components/Experience.js">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    <i className="fas fa-briefcase mr-3"></i>Work Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-white/30" data-name="experience-item">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                            
                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                        <p className="text-blue-200 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-white/80 text-sm mt-2 md:mt-0">
                                        <div>{exp.period}</div>
                                        <div>{exp.location}</div>
                                    </div>
                                </div>
                                
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="text-white/90 flex items-start">
                                            <i className="fas fa-chevron-right text-blue-400 mr-3 mt-1 text-xs"></i>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
