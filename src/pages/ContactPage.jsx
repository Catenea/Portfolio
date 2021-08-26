import { Avatar, Carousel, Col, Image, Row, Tag, Typography } from 'antd'
import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImg from "../assets/background2.png"
import AvatarImg from "../assets/avatar.jpg"
import FlutterProjects from '../components/FlutterProjects'
import Negro from "../assets/negro5.jpg"
import UnityProjects from '../components/UnityProjects'

export default function ContactPage(props) {

    const { Title } = Typography;

    return (
        <Parallax bgImage={Negro} strength={500}>
            <div style={{ marginTop: "100px"}}>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <Avatar size="large" size={180} src={ <Image src={AvatarImg} />} />
                </div>
                <div style={{backgroundColor: "white", width: "80%", paddingTop:"100px", marginLeft: "10%", marginRight: "10%", marginTop: "-80px", borderRadius: "20px", justifyContent: "center"}}>
                    <div style={{textAlign: "center"}}>
                    <Title style={{color: "#3b3b3b"}}>Ariana Amador</Title>
                    <Title level={4} style={{color: "#3b3b3b"}}>SSR DEVELOPER</Title>
                    <Title style={{color: "#3b3b3b"}}>Flutter</Title>
                    <FlutterProjects/>
                    <Title style={{color: "#3b3b3b"}}>Unity</Title>
                    <UnityProjects/>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

