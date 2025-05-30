function About() {
    try {
        // 🔧 EDIT: Update these stats to match your actual experience
        const stats = [
            { number: "7+", label: "Projects Completed" },
            { number: "IABAC & NASSCOM Certified" },
            { number: "8+", label: "Technologies" },
            { number: " Data Science Graduate",label:"Data Enthusiast"}
        ];

        return (
            <section id="about" className="glass-card mb-8 p-8" data-name="about-section" data-file="components/About.js">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    <i className="fas fa-user mr-3"></i>About Me
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div data-name="about-content">
                        {/* 🔧 EDIT: Replace with your actual background and experience */}
                        <p className="text-white/90 text-lg leading-relaxed mb-6">
                            I am a passionate and highly motivated Data Science graduate with 8 months of hands-on experience as a Data Science Intern. 
                            During this time, I’ve worked on real-world projects involving data analysis, dashboard creation, excel,querying, and business intelligence. 
                            I specialize in using Python, SQL, Excel, and Power BI to extract insights, visualize trends, and support data-driven decision-making. 
                            My goal is to apply these skills in a dynamic environment as a Data Analyst to help organizations turn data into strategic value.


                        </p>
                        <p className="text-white/90 text-lg leading-relaxed mb-6">
                            My core specializations include data cleaning, exploratory data analysis (EDA), and building interactive dashboards to uncover meaningful insights.
                             I’m proficient in tools such as Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Power BI, and Excel, which I use to analyze trends, track performance metrics, and solve business problems. 
                             I'm particularly passionate about using data visualization to tell compelling stories and make complex information easy to understand.
                             I enjoy turning raw data into clear, actionable insights that drive smarter decisions.


                        </p>
                        <div className="flex flex-wrap gap-3">
                            {/* 🔧 EDIT: Update your location and availability status */}
                            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                                <i className="fas fa-map-marker-alt mr-2"></i>Bangalore, Karnataka
                            </span>
                            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                                <i className="fas fa-envelope mr-2"></i>Let's Connect
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4" data-name="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-white/80 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
