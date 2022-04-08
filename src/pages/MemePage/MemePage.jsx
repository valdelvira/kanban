import { Row, Col, Alert, Button } from "antd";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react"
import { } from "./MemePage.css";

const MemePage = () => {
    const [textTop, setTextTop] = useState('')
    const [textBottom, setTextBottom] = useState('')
    const [image, setImage] = useState('default')
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (image !== 'default') {
            document.querySelectorAll('#meme span').forEach(span => span.classList.add('textBox'))
        } else {
            document.querySelectorAll('#meme span').forEach(span => span.classList.remove('textBox'))
        }
    }, [image])

    const handleInputTextTop = e => setTextTop(e.target.value)
    const handleInputTextBottom = e => setTextBottom(e.target.value)
    const handleImage = e => {
        setImage(e.target.value)

    }
    const options = {
        image: image,
        width: 500,
        height: 500,
        backgroundColor: '#0000'

    }
    const handlesExport = e => {
        if (image === 'default' || textTop === '' || textBottom === '') {
            setVisible(true)
        } else {
            html2canvas(document.getElementById("meme"), options)
                .then(canvas => {
                    const imgData = canvas.toDataURL("image/png")
                    const link = document.createElement("a")
                    link.download = "meme.png"
                    link.href = imgData
                    link.click()
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <Row className="flex center">
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
                <br />
                <br />
                <span>Text on top:<br />
                    <input onChange={handleInputTextTop} />
                </span>
                <br />
                <br />
                <span>Text on bottom:<br />
                    <input onChange={handleInputTextBottom} />
                </span>
                <br />
                <br />
                <div id="meme">
                    <span className="topText">{textTop}</span>
                    <br />
                    <span className="bottomText">{textBottom}</span>
                    <img src={`/img/${image}.jpeg`} alt={image} />
                </div>
                <br />
                {visible
                    ?
                    (
                        <Alert message='Please select an image' type='error' />
                    )
                    : null
                }
                <Button type="primary" onClick={handlesExport}>Generate</Button>
            </Col>
        </Row>

    )
}

export default MemePage