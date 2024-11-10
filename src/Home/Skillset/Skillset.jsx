import Skill from './Skill/Skill'
import './Skillset.css'
import imgArduino from "./skillsAssets/arduino.svg"
import imgCpp from "./skillsAssets/cpp.svg"
import imgFlask from "./skillsAssets/flask.svg"
import imgJava from "./skillsAssets/java.svg"
import imgJavascript from "./skillsAssets/javascript.svg"
import imgMysql from "./skillsAssets/mysql.svg"
import imgOpencv from "./skillsAssets/opencv.svg"
import imgPhotoshop from "./skillsAssets/photoshop.svg"
import imgPython from "./skillsAssets/python.svg"
import imgSolidworks from "./skillsAssets/solidworks.svg"
import imgSql from "./skillsAssets/sql.svg"

function Skillset() {
  return (
    <>
      <div className='skillset-container'>
        <Skill title="Arduino" imgSrc={imgArduino}/>
        <Skill title="C++" imgSrc={imgCpp}/>
        <Skill title="Flask" imgSrc={imgFlask}/>
        <Skill title="Java" imgSrc={imgJava}/>
        <Skill title="JavaScript" imgSrc={imgJavascript}/>
        <Skill title="MySQL" imgSrc={imgMysql}/>
        <Skill title="OpenCV" imgSrc={imgOpencv}/>
        <Skill title="Photoshop" imgSrc={imgPhotoshop}/>
        <Skill title="Python" imgSrc={imgPython}/>
        <Skill title="SolidWorks" imgSrc={imgSolidworks}/>
        <Skill title="SQL" imgSrc={imgSql}/>
      </div>
    </>
  )
}

export default Skillset
