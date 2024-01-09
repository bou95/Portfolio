import React from "react";
import ReactPlayer from 'react-player'
// import myVideo from '../assets/videos/1.mp4'

const Video1 = () => {
    document.body.classList.add("light");
    return (
        <div style={{backgroundColor:'black', height: "100vh"}}>
            <iframe src="https://drive.google.com/file/d/1wIolMdXpodgCynVlQEEaUEQLyDJYswCA/preview"
                    height="100%" width="100%"
                    allow="autoplay"></iframe>
        </div>
    );
};

export default Video1;


