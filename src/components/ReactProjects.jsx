import { Carousel, Col, Row, Tag, Image } from 'antd'
import React from 'react'
import Bronexion1 from "../assets/flutter/Bronexion_1.jpg"
import Bronexion2 from "../assets/flutter/Bronexion_2.jpg"
import Limonada from "../assets/flutter/Limonada.jpg"
import Limonada1 from "../assets/flutter/Limonada_1.jpg"
import Limonada2 from "../assets/flutter/Limonada_3.jpg"
import Limonada3 from "../assets/flutter/Limonada_1.jpg"

export default function FlutterProjects(props) {
    return (
        <Row gutter={[16, 16]}>
        <Col span={10} >
        <div>
            <Carousel autoplay>
                <div>
                <Image width="200px" height="400px" src={Bronexion1} />
                </div>
                <div>
                <Image width="200px" height="400px" src={Bronexion2} />
                </div>
            </Carousel>
        </div>
        </Col>
        <Col span={14} style={{padding: "50px"}}>
        <h1>Bronexion</h1>
        <p>¡Ten tu propia red social con tus amigos! Bronexion es una app que permite tener tu propio chat grupal, así como compartir fotos y textos en tu propio feed adaptado solamente a tus quienes te interesan</p>
        <br/>
        <Tag color="#989c67" style={{marginBottom: "10px"}}>Autenticación por correo con Firebase</Tag> <Tag style={{marginBottom: "10px"}} color="#363636">Compartir imágenes almacenadas en Firebase Storage</Tag>
        <Tag color="#747840">Chat grupal actualizado mediante Streams en tiempo real</Tag>
        </Col>

        <Col span={10} >
        <div style={{ marginTop: "30px"}}>
            <Carousel autoplay>
                <div>
                <Image width="200px" height="400px" src={Limonada} />
                </div>
                <div>
                <Image width="200px" height="400px" src={Limonada1} />
                </div>
                <div>
                <Image width="200px" height="400px" src={Limonada2} />
                </div>
                <div>
                <Image width="200px" height="400px" src={Limonada3} />
                </div>
            </Carousel>
        </div>


        </Col>
        <Col span={14}  style={{padding: "50px"}}>
        <h1>Limonada</h1>
        <p>¡Organiza las preferencias en bebidas de tu equipo! Esta app permite guardar órdenes de bebidas de cualquier usuario registrado, modificar las preferencias propias y facilitar el manejo de pedidos grandes</p>
        <br/>
        <Tag color="#7da66c" style={{marginBottom: "10px"}}>Autenticación por correo con Firebase</Tag> <Tag style={{marginBottom: "10px"}} color="#1f6600">Guardar preferencias asociadas a usuarios en una database no relacional</Tag>
        <Tag color="#609e46">Firebase CRUD</Tag>
        </Col>
    </Row>

    )
}
