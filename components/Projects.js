function Projects() {
    try {
        const projects = [
            {
                title: "Blinkit Sakes Analysis Using Excel",
                description: "Developed an interactive Excel dashboard to analyze Blinkit’s sales data.",
                technologies: ["Excel,Data Analysis,Pivot Tables,Slicers"],
                image: "https://miro.medium.com/v2/resize:fit:728/1*9vvGR5R1pjHaijtJbQxYQw.jpeg",
                github: "https://github.com/Damarlasupraja14/EXCEL_PROJECT",
                demo: [ "* Developed an interactive Excel dashboard to analyze Blinkit’s sales data, providing real-time insights into sales trends, product performance, and regional distribution. Utilized PivotTables, slicers, charts, and conditional formatting to enhance data visualization and interactivity",
                        "∗ Sales peaked during evening and late-night hours, indicating strong demand for instant deliveries and midnight cravings",
                        "*Snacks, dairy products, and beverages were the most purchased categories, showing a preference for quick essentials",
                        "∗ Amajority of orders fell in the 200-500 range, reflecting typical consumer spending on grocery essentials",
                        "*Seasonal trends impacted sales, with increased demand for cold beverages in summer and hot drinks in winter",
                        "∗ Excel (PivotTables, Charts, Slicers) Power Query, Data Validation, Conditional Formatting."
                      ]
            },
            {
                title: "Football Stats Analysis Using SQL",
                description: "Analyzed team performance and identified the top 3 teams that allowed the most total opponent points when playing home games, giving insight into home defense weaknesses",
                technologies: ["MySQL", "SQL", "Excel"],
                image: "https://thesportsschool.com/wp-content/uploads/2020/06/216-scaled-1.jpg",
                github: "https://github.com/Damarlasupraja14/Football_Game_Stats_Analysis_SQL",
                demo:["* Imported multiple CSV files containing football game data into MySQL and created structured tables to organize information about teams, players, game scores, and defensive stats",
                      "∗ Analyzed team performance and identified the top 3 teams that allowed the most total opponent points when playing,home games, giving insight into home defense weaknesses",
                      "∗ Filtered and analyzed the dataset to discover that 14 teams played on artificial turf during the 2008 season, providing a look at field surface trends across the league",
                      "∗ Summarized key stats like total points allowed, tackles, and sacks to get a big-picture view of team defenses."]
            },
            {
                title: "Web Scraping and Text Data Structuring Using Python",
                description: "Designed and implemented a web scraping script using Python and BeautifulSoup to extract inspirational quotes",
                technologies: ["Python", "Html", "pandas", "NumPy"],
                image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*J3sm5EvL-QAev0ajCeb6Vg.png",
                github: "https://www.linkedin.com/posts/damarla-supraja_web-scraping-using-python-activity-7259847585937391616-vvcC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWte4B1aR2UvUORm4SdyprrW4ITmxV4Pk",
                demo: ["∗ Designed and implemented a web scraping script using Python and BeautifulSoup to extract inspirational quotes, authors, and thematic tags from a public website",

                       "∗ Transformed unstructured HTML data into a clean and structured Pandas DataFrame, enabling further analysis or storage",

                       "∗ Applied data cleaning and parsing techniques to prepare the data for analytical use, demonstrating automation in data acquisition",
                       
                       "*Key Skills: Web Scraping, Data Cleaning, Text Parsing, Python, DataFrame Manipulation"]
            },
            {
                title: "Amazon Sales Analysis Dashboard Using PowerBI",
                description: "Designed and developed an interactive sales analysis dashboard in Power BI to provide actionable insights into Amazon data,",
                technologies: ["PowerBI", "Dashboards", "Reporting"],
                image: "https://www.theindianwire.com/wp-content/uploads/2020/08/Amazon-1.jpg",
                github: "https://www.linkedin.com/posts/damarla-supraja_techtip24-aditigupta-powerbi-activity-7200808694362615808-SNH3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtWte4B1aR2UvUORm4SdyprrW4ITmxV4Pk",
                demo:["* Designed and developed an interactive sales analysis dashboard in Power BI to provide actionable insights into Amazon sales data, focusing on trends, product performance, and customer behavior. Created dynamic charts, graphs, and visual reports to allow users to interact with data, enabling in-depth exploration of sales patterns and business performance",
                      "∗ Leveraged Power BI’s real-time reporting features to monitor and analyze changing sales trends, empowering business teams to make data-driven decisions quickly, offering a seamless experience for stakeholders to drill down into key metrics and insights",
                      "∗ Used Power BI for data visualization and reporting, ensuring the integration of real-time updates and interactive elements for maximum user engagement"]
            }
        ];

        return (
            <section id="projects" className="glass-card mb-8 p-8" data-name="projects-section" data-file="components/Projects.js">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    <i className="fas fa-project-diagram mr-3"></i>Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card bg-white/10 rounded-lg overflow-hidden" data-name="project-card">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-white/80 mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex space-x-4">
                                    <a 
                                        href={project.github}
                                        className="flex items-center text-white hover:text-blue-200 transition-colors"
                                    >
                                        <i className="fab fa-github mr-2"></i>Code
                                    </a>
                                    <a 
                                        href={project.demo}
                                        className="flex items-center text-white hover:text-blue-200 transition-colors"
                                    >
                                        <i className="fas fa-external-link-alt mr-2"></i>Demo
                                    </a>
                                </div>
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
