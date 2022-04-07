

const MemePage = () => {


    return ( 
        <div>
            <h2>Meme Generator</h2>
            <select>
                <option value="fire">Girl and fire</option>
                <option value="futurama">Futurama</option>
                <option value="history">History channel man</option>
                <option value="matrix">Matrix</option>
                <option value="raptor">Velociraptor</option>
                <option value="smart">Be smart</option>
            </select>
            <span>Text on top:
                <input />
            </span>
            <span>Text on bottom:
                <input />
            </span>
            {/* <img alt={} /> */}
            <button>Generate</button>

        </div>

     )
}

export default MemePage