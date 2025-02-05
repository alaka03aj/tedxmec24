import { LazyLoadImage } from 'react-lazy-load-image-component';

const MasonryGrid = () => {
    const gallery_images = [
      {id: 1, src: "gallery/2.webp"},
      {id: 2, src: "gallery/3.webp"},
      {id: 3, src: "gallery/4.webp"},
      {id: 4, src: "gallery/5.webp"},
      {id: 5, src: "gallery/6.webp"},
      {id: 6, src: "gallery/7.webp"},
      {id: 7, src: "gallery/8.webp"},
      {id: 8, src: "gallery/9.webp"},
      {id: 9, src: "gallery/10.webp"},
      {id: 10, src: "gallery/11.webp"},
      {id: 11, src: "gallery/12.webp"},
      {id: 12, src: "gallery/13.webp"},
      {id: 13, src: "gallery/14.webp"},
      {id: 14, src: "gallery/15.webp"},
      {id: 15, src: "gallery/1.webp"},
      {id: 16, src: "gallery/16.webp"},

    ]
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {gallery_images.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid">
            <LazyLoadImage src={image.src} alt="gallery" className="w-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    )
  }
  
  export default MasonryGrid
  