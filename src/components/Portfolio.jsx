import React from 'react';

const Portfolio = () => {
  return (
    <div id="porfolio" className="portfolio py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Work</h2>
      <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="portfolio-item bg-white rounded-lg shadow-md p-4">
          <img src="project1.jpg" alt="Project 1" className="mb-4 rounded-md" />
          <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
          <p>Description of the project</p>
        </div>
        <div className="portfolio-item bg-white rounded-lg shadow-md p-4">
          <img src="project2.jpg" alt="Project 2" className="mb-4 rounded-md" />
          <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
          <p>Description of the project</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
