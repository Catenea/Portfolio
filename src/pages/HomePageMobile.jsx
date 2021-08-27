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
import MainSectionMobile from '../components/MainSectionMobile'
import ProjectsPageMobile from './ProjectsPageMobile'
import AboutMeMobile from './AboutMeMobile'

export default function HomePageMobile(props) {

    const { Title } = Typography;
    const history = useHistory();
    const location = useLocation();

    return (
        <Parallax bgImage={Negro} strength={500}>
            <div style={{ marginTop: "70px"}}>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <Avatar size="large" size={180} src={ <Image src={AvatarImg} />} />
                </div>
                <div style={{backgroundColor: "white", width: "100%", paddingBottom: "40px", paddingTop:"70px", marginTop: "-80px", borderRadius: "20px", justifyContent: "center"}}>
                <SlideRoutes location={location} duration={400} animation="vertical-slide">
                    <Route path="/" component={MainSectionMobile} exact />
                    <Route path="/projects" component={ProjectsPageMobile} exact />
                    <Route path="/info" component={AboutMeMobile} exact />
                </SlideRoutes>
                </div>
            </div>
        </Parallax>
    )
}

