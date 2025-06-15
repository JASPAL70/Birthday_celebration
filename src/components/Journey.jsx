const Journey = ({ id }) => {
  const milestones = [
  { 
    year: '2019', 
    title: 'Milestone 1', 
    description: 'This is a placeholder description for milestone 1. You can update it with your own story or memory.' 
  },
  { 
    year: '2020-22', 
    title: 'Milestone 2', 
    description: 'This is a placeholder description for milestone 2. Add your own events or moments here.' 
  },
  { 
    year: '2022', 
    title: 'Milestone 3', 
    description: 'This is a placeholder description for milestone 3. Describe anything meaningful from this year.' 
  },
  { 
    year: '2023', 
    title: 'Milestone 4', 
    description: 'This is a placeholder description for milestone 4. Feel free to personalize it later.' 
  },
  { 
    year: '2024', 
    title: 'Milestone 5', 
    description: 'This is a placeholder description for milestone 5. You can replace it with real memories.' 
  },
  { 
    year: '2025-till ', 
    title: 'Milestone 6', 
    description: 'This is a placeholder description for milestone 6. Reflect your journey or goals here.' 
  },
];


  return (
    <section id={id} className="journey-section">
      <div className="container">
        <h2 className="journey-title">Our Beautiful Journey ❤️</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <h3>{milestone.year}</h3>
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;