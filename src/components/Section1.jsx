import React, { useState } from "react";
import BasicTextFields from "./Searchbar";
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Section1() {

    const [isSubscribe, setIsSubscribe] = useState(false);

    let handleClick = () => {
        setIsSubscribe(true)
    }

    return (
        <div id="s1-container">
            <div id="title-div">
                <h1 id="title">Embrace frugality and minimalism</h1>
                <p id="paragraph">Discover ways to declutter your website, your living space, and your inner self. <br /> Join our FREE weekly email newsletter for valuable insights.</p>
                <div>
                    {isSubscribe ? <>  <h6 id="subscribe">Subscribed <VerifiedIcon fontSize="small" /></h6></> : <>
                        <BasicTextFields
                            click={handleClick}
                        />
                    </>}
                </div>
            </div>
        </div>
    )
}