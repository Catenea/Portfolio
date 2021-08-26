import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImg from "../assets/background2.png"
import AvatarImg from "../assets/avatar.jpg"
import FlutterProjects from '../components/FlutterProjects'
import Negro from "../assets/negro5.jpg"
import { Button, Tabs } from 'antd'
import { RocketOutlined, GlobalOutlined, AndroidOutlined, DatabaseOutlined} from '@ant-design/icons';
import UnityProjects from '../components/UnityProjects'
import Proximamente from '../components/Proximamente'

export default function ProjectsPage() {

    const { TabPane } = Tabs;

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
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

