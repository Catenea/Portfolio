import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImg from "../assets/background2.png"
import AvatarImg from "../assets/avatar.jpg"
import FlutterProjects from '../components/FlutterProjects'
import Negro from "../assets/negro5.jpg"
import { Button, Col, Row, Tabs } from 'antd'
import { RocketOutlined, GlobalOutlined, AndroidOutlined, DatabaseOutlined, ArrowLeftOutlined, ArrowDownOutlined} from '@ant-design/icons';
import UnityProjects from '../components/UnityProjects'
import Proximamente from '../components/Proximamente';
import { useHistory } from "react-router-dom";
import FlutterProjectsMobile from '../components/FlutterProjectsMobile'
import UnityProjectsMobile from '../components/UnityProjectsMobile'

export default function ProjectsPageMobile() {

    const { TabPane } = Tabs;
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/`; 
        console.log(path)
        // history.push(path);
    }

    return (
        <div>
            <Row  justify="start" gutter={[16, 16]} style={{ width: "100%", marginTop: "40px", height: "40px"}} >
            <Col span={12} >
                <Button onClick={routeChange} style={{fontSize: "20px", height: "40px", marginLeft: "20px"}} icon={<ArrowDownOutlined />}>Go Back</Button>
            </Col>
            <Col span={10}>
            </Col>
            </Row>
            <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "40px"}}>
            <Tabs type="card" tabPosition="left" style={{width: "100%"}} >
                <TabPane tab={<span style={{fontSize: "15px"}}> <AndroidOutlined />Flutter</span>} key="1">
                    <FlutterProjectsMobile />  
                </TabPane>
                <TabPane tab={<span style={{fontSize: "15px"}}> <DatabaseOutlined />Django</span>} key="2">
                    <Proximamente/>
                </TabPane>
                <TabPane tab={<span style={{fontSize: "15px"}}> <GlobalOutlined />Reactjs</span>} key="3">
                    <Proximamente/>
                </TabPane>
                <TabPane tab={<span style={{fontSize: "15px"}}> <RocketOutlined />Unity</span>} key="4">
                    <UnityProjectsMobile/>
                </TabPane>
            </Tabs>
            </div>
        </div> 
    )
}

