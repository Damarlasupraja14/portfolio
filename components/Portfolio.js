function PortfolioCard({ title, category, image, description }) {
    try {
        return (
            <div className="portfolio-card group" data-name="portfolio-card">
                <div className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">{title}</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                            <span className="text-sm text-gray-600">{category}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

function Portfolio() {
    try {
        const projects = [
            {
                title: "Blinkit Sales Analysis Using Excel",
                category: "Excel Dashboard",
                image: "https://miro.medium.com/v2/resize:fit:728/1*9vvGR5R1pjHaijtJbQxYQw.jpeg",
                description: "Developed an interactive Excel dashboard to analyze Blinkit’s sales data, providing real-time insights into sales trends, product performance, and regional distribution."
            },
            {
                title: "Football Stats Analysis Using SQL",
                category: "SQL Analysis",
                image: "https://thesportsschool.com/wp-content/uploads/2020/06/216-scaled-1.jpg",
                description: "Analyzed team performance and identified the top 3 teams that allowed the most total opponent points when playing home games, giving insight into home defense weaknesses"
            },
            {
                title: "Web Scraping And Text Data Structuring Using Python",
                category: "Python",
                image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*J3sm5EvL-QAev0ajCeb6Vg.png",
                description: " Designed and implemented a web scraping script using Python and BeautifulSoup to extract inspirational quotes, authors and thematic tags from a public website."
            },
            {
                title: "Amazon Sales Analysis Dashboard Using PowerBI",
                category: "PowerBI Dashboard",
                image: "https://www.theindianwire.com/wp-content/uploads/2020/08/Amazon-1.jpg",
                description: "Designed and developed an interactive sales analysis dashboard in Power BI to provide actionable insights into Amazon data, focusing on trends, product performance, and customer behavior Created dynamic charts, graphs, and visual reports to allow users to interact with data, enabling in-depth exploration of sales patterns and business performance."
            }
        ];

        return (
            <div className="mt-16" data-name="portfolio-section">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="section-title portfolio">PORTFOLIO</h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-yellow-200 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} {...project} />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
