import { LazyLoadImage } from 'react-lazy-load-image-component';

const MasonryGrid = () => {
    const gallery_images = [
      {id: 1, src: "https://d2856clr1j4q66.cloudfront.net/2.jpg"},
      {id: 2, src: "https://d2856clr1j4q66.cloudfront.net/3.jpg"},
      {id: 3, src: "https://d2856clr1j4q66.cloudfront.net/4.jpg"},
      {id: 4, src: "https://d2856clr1j4q66.cloudfront.net/5.jpg"},
      {id: 5, src: "https://d2856clr1j4q66.cloudfront.net/6.jpg"},
      {id: 6, src: "https://d2856clr1j4q66.cloudfront.net/7.jpg"},
      {id: 7, src: "https://d2856clr1j4q66.cloudfront.net/8.JPG"},
      {id: 8, src: "https://d2856clr1j4q66.cloudfront.net/9.JPG"},
      {id: 9, src: "https://d2856clr1j4q66.cloudfront.net/10.JPG"},
      {id: 10, src: "https://d2856clr1j4q66.cloudfront.net/11.JPG"},
      {id: 11, src: "https://d2856clr1j4q66.cloudfront.net/12.JPG"},
      {id: 12, src: "https://d2856clr1j4q66.cloudfront.net/13.JPG"},
      {id: 13, src: "https://d2856clr1j4q66.cloudfront.net/14.JPG"},
      {id: 14, src: "https://d2856clr1j4q66.cloudfront.net/15.JPG"},
      {id: 15, src: "https://d2856clr1j4q66.cloudfront.net/1.JPG"},
      {id: 16, src: "https://d2856clr1j4q66.cloudfront.net/16.JPG"},

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
  