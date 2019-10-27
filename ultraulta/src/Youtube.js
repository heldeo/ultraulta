import React from 'react';
import './Yotube.css';
import Queries from './Queries'

function Youtube({youtubeId}){



    return(
        <div>

        <iframe
                  frameBorder = "1"
            class = "iframe-youtube"
          style={{
            position: "absolute",
            top: 120,
            left: 350,
            width: "45%",
            height: "50%"

          }}
          src={`https://www.youtube.com/embed/${youtubeId}`}
        />
</div>
    );

}

export default Youtube;