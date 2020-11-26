import React, { useEffect, useState } from "react";
import Vimeo from '@u-wave/react-vimeo';
import "./Modulo.css"
import { Button, MenuItem, Menu } from "@material-ui/core";

export default function Modulo() {
    const videos = ["426044757", "425254623", "425235994", "423898676", "426044757", "425254623", "425235994", "423898676"]
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    function handleClose() {
        setAnchorEl(null)
    }

    return (
        <div>
            <div className="boton">
                <Button className="bot" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Links utiles
                </Button>
                <Menu
                    id="simple-menu"
                    keepMounted
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>GitHub</MenuItem>
                    <MenuItem onClick={handleClose}>link daily</MenuItem>
                    <MenuItem onClick={handleClose}>link standUp</MenuItem>
                </Menu>
            </div>

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
        </div>
    )
}


