import MasonryGrid from '../components/MasonryGrid'
const Gallery = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <div className="w-full md:pt-10 md:pb-10 px-4 md:px-16 justify-between">
        <div className=" text-secondary-white2 pt-[5rem]">
            <h1 className="font-bold font-helvetica text-[36px] text-center sm:text-5xl">Gallery</h1>
            {/* <div>
                <p className='text-xl font-helvetica'>We have tried our best to capture the most amazing moments of TEDxMEC 2023 using each image &apos; s <i>dimensions</i>. Get it ?!</p>
                <button>Dive into the dimensions</button>
            </div> */}
        </div>
        <MasonryGrid />
      </div>
    </div>
  )
}

export default Gallery
