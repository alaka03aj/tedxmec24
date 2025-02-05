
const MasonryGrid = () => {
    const gallery_images = [
      {id: 1, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/2-gdpvm0VbXlW4F4Bk0SfyyLwiEKdCWj.jpg"},
      {id: 2, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/3-zqo6MKIbPfmyz95lFZwF4wLC479EvE.jpg"},
      {id: 3, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/4-zRUzXthB5Oj0TsIbMA3pZMzsJsmwjS.jpg"},
      {id: 4, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/5-f2nvBqFW4BLHZUVdAQDHg1NfBWdhT7.jpg"},
      {id: 5, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/6-L99SD0lx6cosZOjuHpYmAXhI5eGhV9.jpg"},
      {id: 6, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/7-CnUFqDlDJyE6ekle3tPbpDWEzA3NZN.jpg"},
      {id: 7, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/8-Kst56EY0LiSn3CZiN8FZyZntKctssJ.JPG"},
      {id: 8, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/9-oPN4zqsI8GqjPROZEjgbKf6SJplf7f.JPG"},
      {id: 9, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/10-jFLLbPBPSMVq4zQGnrh2h0FdxpFMi4.JPG"},
      {id: 10, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/11-hTawCRAPzXpeb4jR0IHVpFrlEti9hi.JPG"},
      {id: 11, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/12-L3mvyb69LRIBRlGQix5nzY16PSPtLi.JPG"},
      {id: 12, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/13-R8SLJU8XRKAKjYBjkeEq03E0zCnfER.JPG"},
      {id: 13, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/14-2FpjYR01W346oZ1aS1nzgAom6HADzR.JPG"},
      {id: 14, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/15-Npps0EhjNdGEvRC5zkCsSMdgL0AG0Y.JPG"},
      {id: 15, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/1-iiHP7WBPaviZSkeCH2VauH42eQvvKZ.JPG"},
      {id: 16, src: "https://6f1jtxzh4ssgtqig.public.blob.vercel-storage.com/16-lf0eZLqa20PmFMriuYM5gZmLj6qksk.JPG"},

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
  