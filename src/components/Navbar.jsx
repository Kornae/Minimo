import React from "react";
import ShortTextIcon from '@mui/icons-material/ShortText';
import { Button } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><BubbleChartIcon /> MINIMO</a>
                    <Button color="inherit" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <ShortTextIcon fontSize="large" color="inherit" />
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a href="https://twitter.com/"><i class="icons fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.facebook.com/"><i class="icons fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/"><i class="icons fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.flaticon.com/free-icons/business-and-finance" ><i class="icons fa-solid fa-caret-down"></i></a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}