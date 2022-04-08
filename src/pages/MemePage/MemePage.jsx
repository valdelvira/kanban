import { Row,Col } from "antd";
import html2canvas from "html2canvas";
import { useState } from "react"
import {  } from "./MemePage.css";

const MemePage = () => {
    const [textTop, setTextTop] = useState('')
    const [textBottom, setTextBottom] = useState('')
    const [image, setImage] = useState('')

    const handleInputTextTop = e => setTextTop(e.target.value)
    const handleInputTextBottom = e => setTextBottom(e.target.value)
    const handleImage = e => setImage(e.target.value)
    const options = {
        image: image,
        width: 500,
        height: 500,
        backgroundColor: '#0000'

    }
    const handlesExport = e => {
      
        html2canvas(document.getElementById("meme"), options)
            .then(canvas => {
                const imgData = canvas.toDataURL("image/png")
                //download image    
                const link = document.createElement("a")
                link.download = "meme.png"
                link.href = imgData
                link.click()
            })
            .catch(err => console.log(err))
    }

    return ( 
        <Row justifyContent="center">
            <Col span={24} justify="center">
            
                <h2>Meme Generator</h2>
                <select onChange={handleImage}>
                    <option value="default">Select...</option>
                    <option value="fire">Girl and fire</option>
                    <option value="futurama">Futurama</option>
                    <option value="history">History channel man</option>
                    <option value="matrix">Matrix</option>
                    <option value="raptor">Velociraptor</option>
                    <option value="smart">Be smart</option>
                </select>
                <br/>
                <span>Text on top:
                    <input onChange={handleInputTextTop}/>
                </span>
                <br/>
                <span>Text on bottom:
                    <input onChange={handleInputTextBottom}/>
                </span>
                <br/>
                <div id="meme">
                    <span className="textBox topText">{textTop}</span>
                    <br/>
                    <span className="textBox bottomText">{textBottom}</span>
                    <img  src={`/img/${image}.jpeg`} alt={image} />
                </div>
                <button onClick={handlesExport}>Generate</button>
            </Col>
        </Row>

     )
}

export default MemePage