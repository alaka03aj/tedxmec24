
const MasonryGrid = () => {
    const gallery_images = [
      {id: 1, src: "gallery/2.jpg"},
      {id: 2, src: "gallery/3.jpg"},
      {id: 3, src: "gallery/4.jpg"},
      {id: 4, src: "gallery/5.jpg"},
      {id: 5, src: "gallery/6.jpg"},
      {id: 6, src: "gallery/7.jpg"},
      {id: 7, src: "gallery/8.JPG"},
      {id: 8, src: "gallery/9.JPG"},
      {id: 9, src: "gallery/10.JPG"},
      {id: 10, src: "gallery/11.JPG"},
      {id: 11, src: "gallery/12.JPG"},
      {id: 12, src: "gallery/13.JPG"},
      {id: 13, src: "gallery/14.JPG"},
      {id: 14, src: "gallery/15.JPG"},
      {id: 15, src: "gallery/1.JPG"},
      {id: 16, src: "gallery/16.JPG"},

    ]
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {gallery_images.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid">
            <img src={image.src} alt="gallery" className="w-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    )
  }
  
  export default MasonryGrid
  