import './Skill.css'

function Skill( {title, imgSrc}) {
  return (
    <>
    <div className='skill-container'>
        <img src={imgSrc}></img>
        <p>{title}</p>
    </div>
    </>
  )
}

export default Skill
