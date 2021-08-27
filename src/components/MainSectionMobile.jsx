import { Avatar, Button, Carousel, Col, Image, Row, Tag, Typography } from 'antd'
import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImg from "../assets/background2.png"
import AvatarImg from "../assets/avatar.jpg"
import FlutterProjects from '../components/FlutterProjects'
import Negro from "../assets/negro5.jpg"
import UnityProjects from '../components/UnityProjects'
import BenefictsSection from '../components/BenefictsSection'
import { ArrowLeftOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import BenefictsSectionMobile from './BenefictsSectionMobile'

export default function MainSectionMobile() {

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
                    <Row justify="center" align="middle" style={{ height: "350px"}}>
                        <Col style={{ display: "flex", justifyContent: "center", height: "350px"}} span={20}>
                            <div style={{height: "350px", backgroundColor: "blue", width: "100%", paddingRight: "20px", paddingLeft: "20px", backgroundColor: "white"}}>
                                <div style={{backgroundImage: {Negro}, width: "100%", height: "100%"}}>
                                    <BenefictsSectionMobile/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{backgroundColor: "green", width: "100%"}}>
                        <div style={{backgroundColor: "white", height: "100%", width: "100%"}}>
                        <Button onClick={() => {routeChange("info")}} style={{height: "100%", width: "100%", fontSize: "30px", fontFamily: "monospace"}} icon={<ArrowUpOutlined />} >  
                            About Me
                        </Button>
                        </div>
                        <div style={{backgroundColor: "white", height: "100%", width: "100%"}}>
                        <Button onClick={() => {routeChange("projects")}} style={{height: "100%", width: "100%", fontSize: "30px", fontFamily: "monospace"}} icon={<ArrowUpOutlined />} >  
                            Projects
                        </Button>
                        </div>
                    </div>
                    </div>
    )
}
