function App() {
    try {
        return (
            <div className="container" data-name="app" data-file="app.js">
                <Header />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                
                <footer className="text-center text-white/60 py-8" data-name="footer">
                    <p>&copy; 2024 Alex Chen. All rights reserved.</p>
                </footer>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
