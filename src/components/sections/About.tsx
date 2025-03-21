import React from "react";

const About: React.FC = () => {
  const points = [
    {
      number: "01",
      title: "Electrical Engineering",
      description:
        "We leverage AI-driven solutions to enhance electrical engineering processes, optimizing efficiency and precision.",
    },
    {
      number: "02",
      title: "Computer Programming",
      description:
        "Our expertise in software development enables us to craft cutting-edge solutions tailored to diverse business needs.",
    },
    {
      number: "03",
      title: "Data Prototyping",
      description:
        "With advanced AI and big data techniques, we facilitate data prototyping, ensuring insightful analytics and decision-making.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-semibold">
          How The <span className="text-gradient">App Works</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          It is a long established fact that a reader will be of a page when
          established fact looking at its layout.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {points.map((point, index) => (
          <div key={index} className="text-left p-6 transition-transform hover:scale-105">
            <h3 className="text-6xl font-bold text-purple-400 mb-2">{point.number}</h3>
            <h4 className="text-xl font-semibold mb-3">{point.title}</h4>
            <p className="text-gray-400">{point.description}</p>
            <button className="mt-4 px-4 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all">
              View More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;