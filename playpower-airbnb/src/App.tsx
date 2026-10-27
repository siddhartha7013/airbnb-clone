
import { useState } from "react";
import "./App.css";

type PropertyPhoto = {
  src: string;
  title: string;
  room: string;
};


const photos = [
  
{
  src: "/images/living-room-1.jpeg.jpeg",
  title: "Kitchen and dining area",
  room: "Living room 1",
},
{
  src: "/images/living-room-2.jpeg.jpeg",
  title: "Kitchen and dining space",
  room: "Living room 1",
},
{
  src: "/images/living-room-3.jpeg.jpeg",
  title: "Living room entrance",
  room: "Living room 1",
},

  {
    src: "/images/living-room-2.jpg.jpeg",
    title: "Outdoor Jacuzzi",
    room: "Jacuzzi",
  },
  {
    src: "/images/indoor-bathtub.jpg.jpeg",
    title: "Relaxing bathtub",
    room: "Full bathroom",
  },
  
  
  {
    src: "/images/bedroom-1.jpg.jpeg",
    title: "Bedroom with green accent wall",
    room: "Bedroom",
  },
  {
    src: "/images/living-room-2.jpg.jpeg",
    title: "Colourful living room",
    room: "Living room 2",
  },
  {
    src: "/images/living-room-extra.jpg.jpeg",
    title: "Bright living room",
    room: "Additional photos",
  },
  {
    src: "/images/bedroom-2.jpg.jpeg",
    title: "Bedroom with balcony views",
    room: "Bedroom",
  },
  
{
  src: "/images/gym-1.jpeg.jpeg",
  title: "Gym with exercise equipment",
  room: "Gym",
},
{
  src: "/images/gym-2.jpeg.jpeg",
  title: "Multi-gym workout machine",
  room: "Gym",
},
{
  src: "/images/gym-3.jpeg.jpeg",
  title: "Gym interior with exercise equipment",
  room: "Gym",
},
{
  src: "/images/gym-4.jpeg.jpeg",
  title: "Gym with treadmill and weights",
  room: "Gym",
},
{
  src: "/images/gym-5.jpeg.jpeg",
  title: "Gym workout area",
  room: "Gym",
},

{
  src: "/images/pool-1.jpeg.jpeg",
  title: "Swimming pool overview",
  room: "Pool",
},
{
  src: "/images/pool-2.jpeg.jpeg",
  title: "Pool and wooden deck",
  room: "Pool",
},
{
  src: "/images/pool-3.jpeg.jpeg",
  title: "Pool and courtyard",
  room: "Pool",
},

{
  src: "/images/exterior-1.jpeg.jpeg",
  title: "Building exterior",
  room: "Exterior",
},
{
  src: "/images/exterior-2.jpeg.jpeg",
  title: "Apartment building",
  room: "Exterior",
},
{
  src: "/images/exterior-3.jpeg",
  title: "Building and surroundings",
  room: "Exterior",
},
{
  src: "/images/exterior-4.jpeg.jpeg",
  title: "Exterior aerial view",
  room: "Exterior",
},
{
  src: "/images/exterior-5.jpeg.jpeg",
  title: "Building entrance and surroundings",
  room: "Exterior",
},
{
  src: "/images/exterior-6.jpeg.jpeg",
  title: "Panoramic exterior view",
  room: "Exterior",
},
{
  src: "/images/additional-1.jpeg.jpeg",
  title: "Jacuzzi lounge seating",
  room: "Additional photos",
},
{
  src: "/images/additional-2.jpeg.jpeg",
  title: "Living space and jacuzzi",
  room: "Additional photos",
},
{
  src: "/images/additional-3.jpeg.jpeg",
  title: "Indoor jacuzzi lounge",
  room: "Additional photos",
},{
  src: "/images/additional-1.jpeg",
  title: "Jacuzzi lounge seating",
  room: "Additional photos",
},
{
  src: "/images/additional-2.jpeg",
  title: "Living space and jacuzzi",
  room: "Additional photos",
},
{
  src: "/images/additional-3.jpeg",
  title: "Indoor jacuzzi lounge",
  room: "Additional photos",
},
{
  src: "/images/additional-4.jpeg",
  title: "Kitchen and living area",
  room: "Additional photos",
},
{
  src: "/images/additional-5.jpeg",
  title: "Jacuzzi and dining area",
  room: "Additional photos",
},
{
  src: "/images/additional-6.jpg",
  title: "Living room interior",
  room: "Additional photos",
},
{
  src: "/images/additional-7.jpeg",
  title: "Living area with jacuzzi",
  room: "Additional photos",
},
{
  src: "/images/additional-8.jpeg",
  title: "Kitchen counter",
  room: "Additional photos",
},
{
  src: "/images/additional-9.jpeg",
  title: "Additional property interior",
  room: "Additional photos",
},
{
  src: "/images/additional-4.jpeg.jpeg",
  title: "Kitchen and living area",
  room: "Additional photos",
},
{
  src: "/images/additional-5.jpeg.jpeg",
  title: "Jacuzzi and dining area",
  room: "Additional photos",
},
{
  src: "/images/additional-6.jpeg.jpeg",
  title: "Living room interior",
  room: "Additional photos",
},
{
  src: "/images/additional-7.jpeg.jpeg",
  title: "Living area with jacuzzi",
  room: "Additional photos",
},
{
  src: "/images/additional-8.jpeg.jpeg",
  title: "Kitchen counter",
  room: "Additional photos",
},
{
  src: "/images/additional-9.jpeg",
  title: "Additional property interior",
  room: "Additional photos",
},



];



const roomOrder = [
  "Living room 1",
  "Living room 2",
  "Bedroom",
  "Full bathroom",
   "Gym",
    "Exterior",
  "Pool",
  
  "Jacuzzi",
  "Additional photos",
];

function App() {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PropertyPhoto | null>(
    null
  );

  const openPhoto = (photo: PropertyPhoto) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Airbnb home">
          <span className="brand-symbol">⌂</span>
          <span>airbnb</span>
        </a>

        <div className="topbar-center">
          <span>Anywhere</span>
          <span className="topbar-divider" />
          <span>Any week</span>
          <span className="topbar-divider" />
          <span className="muted">Add guests</span>
          <button className="search-button" aria-label="Search">
            <span>⌕</span>
          </button>
        </div>

        <button className="profile-button" aria-label="User menu">
          <span>☰</span>
          <span className="profile-avatar">●</span>
        </button>
      </header>

      <section className="property">
        <div className="property-heading">
          <h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>

          <div className="heading-actions">
            <button
              className="text-action"
              onClick={() => window.alert("Sharing will be available soon.")}
            >
              <span>↗</span> Share
            </button>
            <button
              className="text-action"
              onClick={() => window.alert("Saved feature will be available soon.")}
            >
              <span>♡</span> Save
            </button>
          </div>
        </div>

        <div className="photo-gallery">
          {photos.slice(0, 5).map((photo, index) => (
            <button
              key={photo.src}
              className={`gallery-image gallery-image-${index + 1}`}
              onClick={() => openPhoto(photo)}
              aria-label={`View ${photo.title}`}
            >
              <img src={photo.src} alt={photo.title} />
            </button>
          ))}

          <button
            className="show-photos-button"
            onClick={() => setPhotoTourOpen(true)}
          >
            ▦ Show all photos
          </button>
        </div>

        <div className="property-details">
          <div className="property-main">
            <div className="listing-intro">
              <div>
                <h2>Entire rental unit in Candolim, India</h2>
                <p>2 guests · 1 bedroom · 1 bed · 1 bathroom</p>
              </div>
              <div className="host-avatar">M</div>
            </div>

            <div className="divider" />

            <div className="feature-row">
              <span className="feature-icon">♨</span>
              <div>
                <h3>Relax with your own jacuzzi</h3>
                <p>Enjoy a relaxing stay in this unique space.</p>
              </div>
            </div>

            <div className="feature-row">
              <span className="feature-icon">⌂</span>
              <div>
                <h3>Entire place to yourself</h3>
                <p>Enjoy the space and make yourself at home.</p>
              </div>
            </div>

            <div className="feature-row">
              <span className="feature-icon">✦</span>
              <div>
                <h3>Designed for a comfortable stay</h3>
                <p>Explore the property photos to see the rooms and amenities.</p>
              </div>
            </div>

            <div className="divider" />

            <section className="about-section">
              <h2>About this place</h2>
              <p>
                Enjoy a romantic stay in this 1BHK property in Candolim.
                Explore the living spaces, bedroom, bathroom and jacuzzi
                through the photo gallery.
              </p>
              <button
                className="outline-button"
                onClick={() => setPhotoTourOpen(true)}
              >
                Explore all photos →
              </button>
            </section>
          </div>

          <aside className="booking-card">
            <div className="booking-price">
              <strong>₹4,500</strong>
              <span>night</span>
            </div>

            <div className="booking-inputs">
              <div>
                <label>CHECK-IN</label>
                <span>Add date</span>
              </div>
              <div>
                <label>CHECKOUT</label>
                <span>Add date</span>
              </div>
              <div className="guest-input">
                <label>GUESTS</label>
                <span>1 guest</span>
              </div>
            </div>

            <button
              className="reserve-button"
              onClick={() =>
                window.alert("This is a demo page. Booking is not connected.")
              }
            >
              Reserve
            </button>
            <p className="booking-note">You won't be charged yet</p>

            <div className="booking-total">
              <span>Demo nightly price</span>
              <span>₹4,500</span>
            </div>
          </aside>
        </div>

        <section className="photo-tour">
          <div className="section-heading">
            <div>
              <h2>Photo tour</h2>
              <p>Take a look around this property</p>
            </div>
            <button
              className="outline-button"
              onClick={() => setPhotoTourOpen(true)}
            >
              Show all photos
            </button>
          </div>

          {roomOrder.map((room) => {
            const roomPhotos = photos.filter((photo) => photo.room === room);

            if (roomPhotos.length === 0) return null;

            return (
              <section className="room-section" key={room}>
                <h3>{room}</h3>
                <div className="room-photo-grid">
                  {roomPhotos.map((photo) => (
                    <button
                      className="room-photo"
                      key={photo.src}
                      onClick={() => openPhoto(photo)}
                    >
                      <img src={photo.src} alt={photo.title} />
                      <span>{photo.title}</span>
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </section>

      {photoTourOpen && (
        <div
          className="tour-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="All property photos"
        >
          <header className="tour-header">
            <button
              className="close-button"
              onClick={() => setPhotoTourOpen(false)}
              aria-label="Close photo tour"
            >
              ✕
            </button>
            <strong>Photo tour</strong>
            <span>{photos.length} photos</span>
          </header>

          <div className="tour-content">
            {roomOrder.map((room) => {
              const roomPhotos = photos.filter((photo) => photo.room === room);

              if (roomPhotos.length === 0) return null;

              return (
                <section className="tour-room" key={room}>
                  <h2>{room}</h2>
                  <div className="tour-grid">
                    {roomPhotos.map((photo) => (
                      <button
                        key={photo.src}
                        className="tour-photo"
                        onClick={() => openPhoto(photo)}
                      >
                        <img src={photo.src} alt={photo.title} />
                        <span>{photo.title}</span>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      )}

      {selectedPhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={closePhoto}
        >
          <button
            className="lightbox-close"
            onClick={closePhoto}
            aria-label="Close image"
          >
            ✕
          </button>
          <button
            className="lightbox-prev"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              const index = photos.findIndex(
                (photo) => photo.src === selectedPhoto.src
              );
              setSelectedPhoto(photos[(index - 1 + photos.length) % photos.length]);
            }}
          >
            ‹
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.title}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lightbox-next"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              const index = photos.findIndex(
                (photo) => photo.src === selectedPhoto.src
              );
              setSelectedPhoto(photos[(index + 1) % photos.length]);
            }}
          >
            ›
          </button>
          <p>{selectedPhoto.title}</p>
        </div>
      )}

      <footer className="footer">
        <span>© 2026 Airbnb-style demo</span>
        <span>Privacy · Terms · Support</span>
      </footer>
    </main>
  );
}

export default App;
