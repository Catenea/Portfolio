import { Avatar, Button, Carousel, Col, Image, Row, Tag, Tooltip, Typography } from 'antd'
import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImg from "../assets/background2.png"
import AvatarImg from "../assets/avatar.jpg"
import FlutterProjects from '../components/FlutterProjects'
import Negro from "../assets/negro5.jpg"
import UnityProjects from '../components/UnityProjects'
import BenefictsSection from '../components/BenefictsSection'
import { TwitterOutlined, LinkedinOutlined,SearchOutlined, GithubOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import MainSection from '../components/MainSection'
import SlideRoutes from 'react-slide-routes';
import { Route, useLocation } from 'react-router-dom';
import ProjectsPage from './ProjectsPage'
import AboutMe from './AboutMe'

export default function HomePage(props) {

    const { Title } = Typography;
    const history = useHistory();
    const location = useLocation();

    return (
        <Parallax bgImage={Negro} strength={500}>
            <div style={{ marginTop: "70px"}}>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <Avatar size="large" size={180} src={ <Image src={AvatarImg} />} />
                </div>
                <div style={{backgroundColor: "white", width: "100%", paddingTop:"70px", marginTop: "-80px", borderRadius: "20px", justifyContent: "center"}}>
                <div style={{height: "40px", width: "100%", marginBottom: "10px"}}>
                    <Row style={{ marginLeft: "5%", marginRight: "5%", height: "100%"}} align="bottom">
                        <Col span={20}>
                        <div>
                        <Title level={4} style={{color: "#3b3b3b", fontFamily: "monospace", border: "1px solid gray", width: "30%", textAlign:"center"}}>arianaamador@hotmail.com</Title>
                        </div>
                        </Col>
                        <Col>
                        <Tooltip title="GitHub">
                        <Button style={{height: "50px", width: "50px"}} shape="circle" icon={<GithubOutlined style={{fontSize: "40px"}} />} size="large" />
                        </Tooltip>
                        </Col>
                        <Col style={{marginLeft: "8px", marginRight: "8px"}}>
                        <Tooltip title="LinkedIn">
                        <Button style={{height: "50px", width: "50px"}} shape="circle" icon={<LinkedinOutlined style={{fontSize: "40px"}} />} size="large" />
                        </Tooltip>
                        </Col>
                        <Col >
                        <Tooltip title="Twitter">
                        <Button style={{height: "50px", width: "50px"}} shape="circle" icon={<TwitterOutlined style={{fontSize: "40px"}} />} size="large" />
                        </Tooltip>
                        </Col>
                    </Row>
                </div>
                <SlideRoutes location={location} duration={400} animation="vertical-slide">
                    <Route path="/" component={MainSection} exact />
                    <Route path="/projects" component={ProjectsPage} exact />
                    <Route path="/info" component={AboutMe} exact />
                </SlideRoutes>
                </div>
            </div>
        </Parallax>
    )
}

