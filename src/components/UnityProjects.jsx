import { Carousel, Col, Row, Tag, Image } from 'antd'
import React from 'react'
import Unity1 from "../assets/unity/Unity1.jpg"
import Unity2 from "../assets/unity/Unity2.jpg"
import Unity3 from "../assets/unity/Unity3.jpg"

export default function UnityProjects(props) {
    return (
        <Row gutter={[16, 16]} style={{marginTop: "100px", marginBottom: "100px"}}>
        <Col span={10} >
        <Carousel autoplay style={{ height: "250px", width: "450px"}}>
                <div>
                <Image width="100%" height="100%" src={Unity3} />
                </div>
                <div>
                <Image width="100%" height="100%" src={Unity1} />
                </div>
                <div>
                <Image width="100%" height="100%" src={Unity2} />
                </div>
            </Carousel>
        </Col>
        <Col span={14} style={{padding: "50px"}}>
        <h1>BREATHE: MSBR App</h1>
        <p>¡MSBR support app! In favor of your mental health, we offer you the opportunity to enter a VR environment design to practice mindfulness meditation</p>
        <br/>
        <Tag color="#5c7d7c" style={{marginBottom: "10px"}}>C#</Tag> <Tag style={{marginBottom: "10px"}} color="#5142f5">3D Modelling</Tag>
        <Tag color="#194d5e">OOP Principles</Tag><br/>  <Tag color="#5c7d7c">VR</Tag> <Tag color="#5142f5">Google Cardboard SDK</Tag>
        </Col>
        </Row>
    )
}
