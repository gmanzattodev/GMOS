import '../css/Cpu.css'

export default function Cpu({ Gpu }){
    return(
        <>
            <div className="monitoramento" ref={Gpu}>
                <div className="moni">
                    <p>CPU</p>
                    <p>18%</p>
                </div>
                <div className="moni">
                    <p>RAM</p>
                    <p>5.2 GB</p>
                </div>
                <div className="moni">
                    <p>SSD</p>
                    <p>124 GB</p>
                </div>
            </div>
        
        </>
    )
}