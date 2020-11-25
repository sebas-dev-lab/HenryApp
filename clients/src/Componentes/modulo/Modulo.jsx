import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Vimeo from '@u-wave/react-vimeo';
import "./Modulo.css"
import { Button, MenuItem, Menu } from "@material-ui/core";
import Axios from "axios";

export default function Modulo() {
    var id = useSelector(store => store.auth.user.user.module)
    const [means, setMeans] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null)

    useEffect(() => {
        console.log(id)
        Axios.get(`http://localhost:3001/module/means/${id}`).then(res => {
            setMeans(res.data.means)
            console.log(res.data.means)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])

    useEffect(() => {

    }, [means])

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
                {means.map(e => {
                    return (
                        <div className="vid">
                            {console.log(e)}
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


