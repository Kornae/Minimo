import React from "react";
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


export default function Section1() {
    return (
        <div id="s1-container">
            <div id="title-div">
                {/* <div id="chip">
                    <Chip id="chip-content" label="Hello Everyone 👋" />
                </div> */}
                <h1 id="title">Combine top-notch tools to simplify your daily routine</h1>
                <p id="paragraph">Bring the best experiences across the internet to one place</p>
                <div id="buttons">
                    <Button id="btn1" variant="contained" color="inherit">Search</Button>
                </div>
            </div>
        </div>
    )
}