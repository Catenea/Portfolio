import { Carousel, Col, Row, Tag, Image, Divider } from 'antd'
import React from 'react'
import Bronexion1 from "../assets/flutter/Bronexion_1.jpg"
import Bronexion2 from "../assets/flutter/Bronexion_2.jpg"
import Limonada from "../assets/flutter/Limonada.jpg"
import Limonada1 from "../assets/flutter/Limonada_1.jpg"
import Limonada2 from "../assets/flutter/Limonada_3.jpg"
import Limonada3 from "../assets/flutter/Limonada_1.jpg"

export default function FlutterProjectsMobile(props) {
    
    return (
        <Row  gutter={[16, 16]} style={{marginTop: "30px"}} >
            <div style={{width: "100%",textAlign: "center"}}>
            <h1>Bronexion</h1>
                </div>
         <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <Carousel autoplay style={{width: "180px"}}>
            <div>
                 <Image width="100%" height="100%" src={Bronexion1} />
                 </div>
                 <div>
                 <Image width="100%" height="100%" src={Bronexion2} />
                </div>
            </Carousel>
         </div>
         <div style={{width: "80%",textAlign: "center", marginLeft: "20px"}}>
         <p>¡Have your friend group social network! Bronexion is an app that allows you to have your group chat, sharing pictures, and interacting in a timeline with only your close friends. Made with dart, Firebase and available for Android</p>
         <br/>
         <Tag color="#989c67" style={{marginBottom: "10px"}}>Firebase email authentication</Tag> <Tag style={{marginBottom: "10px"}} color="#363636">Save images in Firebase Storage</Tag>
         <Tag color="#747840">Group chat updated in real time</Tag>
         </div>
         <Divider />
         <div style={{width: "100%",textAlign: "center"}}>
            <h1>Limonada</h1>
                </div>
         <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", width: "100%"}}>
        <Carousel autoplay style={{width: "180px"}}>
                <div>
                <Image width="100%" height="100%" src={Limonada} />
                </div>
                <div>
                <Image width="100%" height="100%" src={Limonada1} />
                </div>
                <div>
                <Image width="100%" height="100%" src={Limonada2} />
                </div>
                <div>
                <Image width="100%" height="100%" src={Limonada3} />
                </div>
            </Carousel>
        </div>
        <div style={{width: "80%",textAlign: "center", marginLeft: "20px"}}>
        <p>¡Organize the drinks preferences of your team! This app allows you to save and remember the orders of any registered user, and of course change and share your own, that way it's easier to order for big groups on a daily basis with updated preferences </p>
         <br/>
         <Tag color="#7da66c" style={{marginBottom: "10px"}}>Firebase email authentication</Tag> <Tag style={{marginBottom: "10px"}} color="#1f6600">Save in a no SQL database</Tag>
         <Tag color="#609e46">Firebase basic CRUD</Tag>
         </div>
     </Row>
        
    )
}
