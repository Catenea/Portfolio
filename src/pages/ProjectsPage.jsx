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

export default function ProjectsPage() {

    const { TabPane } = Tabs;
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
    }

    return (
        <div>
            <Row  justify="start" gutter={[16, 16]} style={{ width: "100%", marginTop: "40px", height: "20px"}} >
            <Col span={4}>
                <Button onClick={routeChange} style={{fontSize: "20px", height: "40px", marginLeft: "20px"}} icon={<ArrowDownOutlined />}>Go Back</Button>
            </Col>
            <Col span={10}>
            </Col>
            </Row>
            <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "40px"}}>
            <Tabs type="card" style={{width: "100%", marginLeft: "80px"}} >
            <TabPane tab={<span style={{fontSize: "20px"}}> <AndroidOutlined /> Flutter </span>} key="1">
                    <FlutterProjects />
                </TabPane>
                <TabPane tab={<span style={{fontSize: "20px"}}> <DatabaseOutlined /> Django </span>} key="2">
                    <Proximamente/>
                </TabPane>
                <TabPane tab={<span style={{fontSize: "20px"}}> <GlobalOutlined /> Reactjs </span>} key="3">
                    <Proximamente/>
                </TabPane>
                <TabPane tab={<span style={{fontSize: "20px"}}> <RocketOutlined /> Unity </span>} key="4">
                    <UnityProjects/>
                </TabPane>
            </Tabs>
            </div>
        </div> 
    )
}

