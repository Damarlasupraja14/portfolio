function Education() {
    try {
        return (
            <div className="mt-12" data-name="education-section">
                <h2 className="section-title education">EDUCATION</h2>
                <div className="space-y-8">
                    <div data-name="education-item">
                        <div className="text-red-500">2020-2024</div>
                        <div className="font-bold">Bachelor's of Technology in Data Science</div>
                        <div className="text-gray-600">Bapatla Engineering College</div>
                        <div className="text-gray-300">Graduated Bachelors in Data Science along with Honors Degree in Data Science at Bapatla Engineering College(BEC) Bapatla, India, has cgpa of 9.12 </div>
                    </div>
                    <div data-name="education-item">
                        <div className="text-red-500">2018-2020</div>
                        <div className="font-bold">High School</div>
                        <div className="text-gray-600">Sri Medhavi Junior College</div>
                        <div className="text-gray-300">Completed my high school Sri Medhavi Junior College, Chirala in the year 2020 with a percentage of 96.7 in 1st year and 97.1 in 2nd year and with an overall of 97. 
                            My subject stream was MPC(Maths, Physics, and Chemistry) with an additional subjects English and Sanskrit.</div>
                    </div>
                    <div data-name="education-item">
                        <div className="text-red-500">2017-2018</div>
                        <div className="font-bold">Primary School</div>
                        <div className="text-gray-600">Z.P Girls School</div>
                        <div className="text-gray-300">Completed my 10th class in the year 2018 from Z.P High School, Vetapalem with a grade point of 9.8 Apart from general subjects Telugu, Hindi and sanskrit were 1st, 2nd and 3rd language subjects.</div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
