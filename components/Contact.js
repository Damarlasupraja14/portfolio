function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = (e) => {
            try {
                e.preventDefault();
                console.log('Form submitted:', formData);
                alert('Thank you for your message! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Form submission error:', error);
            }
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section id="contact" className="glass-card mb-8 p-8" data-name="contact-section" data-file="components/Contact.js">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    <i className="fas fa-envelope mr-3"></i>Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div data-name="contact-info">
                        <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
                        {/* 🔧 EDIT: Write your personal message */}
                        <p className="text-white/80 mb-6">
                            Turning data into stories—open to data analyst roles where insights meet impact.
                        </p>
                        
                        <div className="space-y-4">
                            {/* 🔧 EDIT: Replace with your actual contact information */}
                            <div className="flex items-center text-white">
                                <i className="fas fa-envelope mr-4 text-blue-400"></i>
                                suprajadamarla20@gmail.com.com
                            </div>
                            <div className="flex items-center text-white">
                                <i className="fas fa-phone mr-4 text-blue-400"></i>
                                +918074269316
                            </div>
                            <div className="flex items-center text-white">
                                <i className="fas fa-map-marker-alt mr-4 text-blue-400"></i>
                                Chirala, Andhra Pradesh
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-8">
                            {/* 🔧 EDIT: Add your actual social media links */}
                            <a href="https://www.linkedin.com/in/damarla-supraja/" className="text-white hover:text-blue-200 text-2xl transition-colors">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Damarlasupraja14" className="text-white hover:text-blue-200 text-2xl transition-colors">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://x.com/Suprajadamarla" className="text-white hover:text-blue-200 text-2xl transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" data-name="contact-form">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Supraja Damarla"
                                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
