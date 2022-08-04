import React from "react";
import {useRouter} from "next/router";

function Button({variant, text, link}){

    const router = useRouter();

    return(
        <button onClick={() => router.push(link)} className={variant}>{text}</button>
    )
}

export default Button;