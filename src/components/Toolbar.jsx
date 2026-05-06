import ButtonCom from "./ButtonCom/ButtonCom"
import {handlePlay, handleStop} from "./handle"
import sampleVideo from "../assets/s.mp4"

// export default function Toolbar () {
//     return(
//         <>
//             <ButtonCom message="버튼1 클릭" handle={handleClick}>
//                 버튼1
//             </ButtonCom>
//             <ButtonCom message="버튼2 클릭" handle={handleClick}>
//                 버튼2
//             </ButtonCom>
//         </>
//     )
// }

export default function Toolbar() {
    return(
        <>
            <nav>
                <ButtonCom message="videoPlayer" handle={handlePlay}>
                    Play
                </ButtonCom>
                &nbsp;
                <ButtonCom message="videoPlayer" handle={handleStop}>
                    Stop
                </ButtonCom>
            </nav>
            <br/>
            <section>
                <video id="videoPlayer" src={sampleVideo} controls width="350" />
            </section>
        </>
    )
}