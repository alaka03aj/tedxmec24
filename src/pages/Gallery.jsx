import MasonryGrid from '../components/MasonryGrid'
const Gallery = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <div className="w-full md:pt-10 md:pb-20 px-4 md:px-16 justify-between">
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 md:pt-[7rem]">
            <h1 className="">Gallery</h1>
            <div>
                <p>We have tried our best to capture the most amazing moments of TEDxMEC 2023 using each image &apos; s <i>dimensions</i>. Get it ?!</p>
                <button>Dive into the dimensions</button>
            </div>
        </div>
        <MasonryGrid />
      </div>
    </div>
  )
}

export default Gallery
