'use client'

import React, { useEffect, useState } from "react"
import { useLocalStorage } from 'usehooks-ts';
import { FaSquare } from "react-icons/fa";

const name = () => {

    
    const [hasMounted, setHasMounted] = useState(false)

    const [squares, setSquares] = useLocalStorage('squares', "false")

    useEffect(() => {
        setHasMounted(true)
    }, []);

    return (
        <div>
            {hasMounted && squares == "true" &&
            <div className="flex justify-between items-center text-back-dark">
                <FaSquare size={12}/>
                &nbsp;
                <FaSquare size={12}/>
                &nbsp;
                <FaSquare size={12}/>
            </div>
            }
        </div>
    )
};

export default name;
