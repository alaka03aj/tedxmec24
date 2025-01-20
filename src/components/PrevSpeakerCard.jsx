
const PrevSpeakerCard = ({image, name, designation}) => {
  return (
    <div className='flex flex-col bg-secondary-black1 rounded-md p-4 gap-2'> 
      <div>
        <img src={image} alt={name} className="rounded-md" />
      </div>
      <div className='text-secondary-white2'>
        <h1>{name}</h1>
        <p>{designation}</p>
      </div>
    </div>
  )
}

export default PrevSpeakerCard
