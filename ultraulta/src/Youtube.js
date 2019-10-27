import React from 'react';
import './Yotube.css';
import Queries from './Queries'
import './Queries.css'
function Youtube({youtubeId}){



    return(

        <iframe
                  frameBorder = "1"
            class = "iframe-youtube"
          style={{
            position: "absolute",
            top: 120,
            left: 310,
            width: "53%",
            height: "58%"

          }}
          src={`https://www.youtube.com/embed/${youtubeId}`}
        />
    );

}

export default Youtube;