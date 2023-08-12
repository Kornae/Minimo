import React from "react";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ShortTextIcon from '@mui/icons-material/ShortText';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AppleIcon from '@mui/icons-material/Apple';
import { Button } from "@mui/material";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><BlurOnIcon fontSize="large" /></a>
                    <Button color="inherit" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <ShortTextIcon fontSize="large" color="inherit"/>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <a className="nav-link" href="#"></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}