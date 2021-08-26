import React, { useState, useEffect } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

export default function BenefictsSection() {

    const [textIndex, setTextIndex] = useState(0)

    const texts = ["Mission", "React", "Django", "Unity"];

    const paragraphs = [
    "Inspired by awesome people to make even more awesome things, I love my job and I'm always seraching for new projects to get obsessed with",
    "¡I love watching your ideas come to life! Functional components, designs adapted to your needs, API requests and data management, Redux, Router",
    "¡With Django, I feel unstoppable! Development of API REST, SQL Databases (I have a preference for PSQL, but don't tell the others), excellent python skills, I'm also in charge of dealing with those APIs that cause you a headache",
    "¡Videogames are art, and I love being part of it! Unity, 3D Modelling, C# scripting, OOP Principles"
    ];

    useEffect(() => {
        var count = 0;
        setInterval(() => {
            count = count + 1;
            console.log("cambio " + count)
            setTextIndex(count % texts.length)
          }, 8000);
    }, [])

    return (
        <div style={{padding: "30px"}}>
            <ReactTextTransition
              text={texts[textIndex]}
              springConfig={presets.gentle}
              style={{fontSize: "70px", marginBottom: "40px", fontFamily: "monospace"}}
              delay={300}
              inline
            />
            <ReactTextTransition
              text={paragraphs[textIndex]}
              springConfig={presets.gentle}
              style={{fontSize: "18px", paddingTop: "40px", textAlign: "center", fontFamily: "monospace"}}
            />
        </div>
    )
}
