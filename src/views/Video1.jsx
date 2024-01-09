import React from "react";
import ReactPlayer from 'react-player'
// import myVideo from '../assets/videos/1.mp4'

const Video1 = () => {
    document.body.classList.add("light");
    return (
        <div style={{backgroundColor:'black', height: "100vh"}}
            // className="beny_tm_intro_wrapper"
        >

            {/*<div className='player-wrapper'>*/}
            {/*    <ReactPlayer*/}
            {/*        className='react-player fixed-bottom'*/}
            {/*        url= 'https://drive.google.com/file/d/1pcDjQ-VEku95Oi43GH0sLpflsJvjlvyD/view?usp=drive_link'*/}
            {/*        width='100%'*/}
            {/*        height='100%'*/}
            {/*        controls = {true}*/}
            {/*    />*/}
            {/*</div>*/}
            <iframe src="https://drive.google.com/file/d/1pcDjQ-VEku95Oi43GH0sLpflsJvjlvyD/preview"
                    height="100%" width="100%"
                    allow="autoplay"></iframe>

        </div>
    );
};

export default Video1;


