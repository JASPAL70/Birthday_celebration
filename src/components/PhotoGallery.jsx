import { useState } from 'react';

const PhotoGallery = ({ id }) => {
  const [photos] = useState([
    {
      id: 1,
      src: '/images/sample1.jpg',
      alt: 'Sample Photo 1',
      description: 'This is a placeholder description for the first image in the gallery.',
    },
    {
      id: 2,
      src: '/images/sample2.jpg',
      alt: 'Sample Photo 2',
      description: 'Another sample description. Replace with your own image and story.',
    },
    {
      id: 3,
      src: '/images/sample3.jpg',
      alt: 'Sample Photo 3',
      description: 'Here is a third placeholder. Add your real photo and text when ready.',
    },
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id={id} className="gallery-section">
      <div className="container">
        <h2 className="memories-title">Memories 💖</h2> 
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="gallery-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.alt} />
              <p className="image-caption">{photo.alt}</p>
            </div>
          ))}
        </div>
        
        {selectedPhoto && (
          <div className="modal" onClick={() => setSelectedPhoto(null)}>
            <div className="modal-content">
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
