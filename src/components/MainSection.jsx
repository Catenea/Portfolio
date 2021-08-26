import { Avatar, Button, Carousel, Col, Image, Row, Tag, Typography } from 'antd'
import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImg from "../assets/background2.png"
import AvatarImg from "../assets/avatar.jpg"
import FlutterProjects from '../components/FlutterProjects'
import Negro from "../assets/negro5.jpg"
import UnityProjects from '../components/UnityProjects'
import BenefictsSection from '../components/BenefictsSection'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function MainSection() {

    const history = useHistory();

    const { Title } = Typography;

    const routeChange = (route) =>{ 
        let path = `/${route}`; 
        history.push(path);
    }

    return (
        <div style={{textAlign: "center"}}>
                    <Title style={{color: "#3b3b3b", fontFamily: "monospace"}}>Ariana Amador</Title>
                    <Title level={4} style={{color: "#3b3b3b", fontFamily: "monospace"}}>JR DEVELOPER</Title>
                    <Row justify="center" align="middle" style={{backgroundColor: "green", height: "400px"}}>
                        <Col style={{backgroundColor: "#242424", height: "100%", display: "flex", alignItems: "center"}} span={4}>
                            <div style={{backgroundColor: "white", height: "50%", width: "100%"}}>
                            <Button onClick={() => {routeChange("info")}} style={{height: "100%", width: "100%", fontSize: "30px", fontFamily: "monospace"}} icon={<ArrowLeftOutlined />} >  
                                About Me
                            </Button>
                            </div>
                        </Col>
                        <Col style={{backgroundColor: "blue", display: "flex", justifyContent: "center"}} span={16}>
                            <div style={{height: "400px", width: "100%", paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white"}}>
                                <div style={{backgroundImage: {Negro}, width: "100%", height: "100%"}}>
                                    <BenefictsSection/>
                                </div>
                            </div>
                        </Col>
                        <Col style={{backgroundColor: "#242424", height: "100%", display: "flex", alignItems: "center"}} span={4}>
                        <div style={{backgroundColor: "white", height: "50%", width: "100%"}}>
                            <Button onClick={() => {routeChange("projects")}} style={{height: "100%", width: "100%", fontSize: "30px", fontFamily: "monospace"}} icon={<ArrowRightOutlined />} >  
                                Projects
                            </Button>
                            </div>
                        </Col>
                    </Row>
                    </div>
    )
}
