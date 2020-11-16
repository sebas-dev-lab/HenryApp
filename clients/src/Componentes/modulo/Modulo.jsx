import React, { useEffect, useState } from "react";
import Vimeo from '@u-wave/react-vimeo';
import "./Modulo.css"


export default function Modulo() {
    const videos = ["426044757", "425254623", "425235994", "423898676", "426044757", "425254623", "425235994", "423898676"]

    return (
        <div className="videos">
            {videos.map(e => {
                return (
                    <div className="vid">
                        <Vimeo
                            video={e}
                            autoplay
                            id={e}
                            onPlay={console.log("playo")}
                        />
                    </div>
                )
            })}
        </div>

    )
}