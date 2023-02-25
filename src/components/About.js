import React, { useState, useEffect } from 'react';


export default function About() {

    const [info, setInfo] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
       
        setInfo(info);
        setCount(count);
    }, [info, count])

  
}
