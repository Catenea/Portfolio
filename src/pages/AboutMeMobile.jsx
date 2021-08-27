import { Col, Row, Card, Divider, List, Progress, Button } from 'antd'
import React from 'react'
import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function AboutMeMobile() {

    const history = useHistory();

    const programmingLanguages = [
        {
          title: 'Python',
          percent: '85'
        },
        {
          title: 'JavaScript',
          percent: '70'
        },
        {
          title: 'Dart',
          percent: '75'
        },
        {
          title: 'Java',
          percent: '60'
        }
    ];

    const Languages = [
        {
          title: 'Spanish',
          percent: '100'
        },
        {
          title: 'English',
          percent: '95'
        },
        {
          title: 'Japanese',
          percent: '50'
        }
      ];

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <div style={{width: "100%"}}>
            <Row  justify="start" gutter={[16, 16]} style={{ width: "100%", marginTop: "40px", height: "40px"}} >
            <Col span={14} >
                <Button onClick={routeChange} style={{fontSize: "20px", height: "40px", marginLeft: "20px"}} icon={<ArrowDownOutlined />}>Go Back</Button>
            </Col>
            <Col span={10}>
            </Col>
            </Row>
            <Row  gutter={[16, 16]} style={{ width: "100%",  marginBottom: "20px"}} >
                <Col span={24} style={{ paddingTop: "40px"}} >
                <Divider orientation="left">Skills</Divider>
                <Row gutter={16} style={{marginBottom: "30px"}}>
                    <Col span={12} >
                        <Card title="API REST" bordered={true} style={{marginLeft: "8px"}}>
                        Development / management of APIs using Django, FastApi, Alembic
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card title="Flutter" bordered={true} style={{height: "100%"}}>
                        Flutter mobile and web, responsive, adaptative designs
                        </Card>
                    </Col>
                    
                </Row>
                <Row gutter={16} style={{marginBottom: "30px"}}>
                    <Col span={12} >
                        <Card title="ReactJS" bordered={true} style={{marginLeft: "8px"}}>
                        Data management, reusable commponents, Hooks, Redux
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card title="Unity" bordered={true} style={{height: "100%"}}>
                        C# Scripts, basic 3D Modeling, Game design
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom: "30px"}}>
                    <Col span={12}>
                        <Card title="Agile Frameworks" bordered={true} style={{marginLeft: "8px"}}>
                        Worked hand by hand with SCRUM masters usign tools like Trello
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Git" bordered={true} style={{height: "100%"}}>
                        Git workflow, GitHub, Gitlab, version control
                        </Card>
                    </Col>
                </Row>
                <Card title="Languages" bordered={true} style={{marginTop: "10%", marginLeft: "8px", marginBottom: "16px"}}>
                <List
                    itemLayout="horizontal"
                    dataSource={programmingLanguages}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.title}
                        description={
                            <Progress  strokeColor="gray" status="active" percent={item.percent} size="small" />
                        }
                        />
                    </List.Item>
                    )}
                />
                <Divider>Also I speak</Divider>
                <List
                    itemLayout="horizontal"
                    dataSource={Languages}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.title}
                        description={
                            <Progress  strokeColor="gray" status="active" percent={item.percent} size="small" />
                        }
                        />
                    </List.Item>
                    )}
                />
                </Card>

                <Card title="Summary" bordered={true} style={{marginLeft: "8px"}}>
                I've worked 2+ years with mobile apps, websites, front with Flutter, React and pure JavaScript as well as backend with Python, Django, Firebase and PSQL. But there's nothing that I love more than video games and game development.

                What can I bring to your team?
                -Responsibility and efficiency, I take pride in always delivering on time and never let my colleagues, down.
                -Fast adaptability, I can easily get the hang of things, I'm a jack of all trades, even if it's developing or using a new API, modify a product to adapt to new market opportunities, or simply make everything more efficient.
                -Passion, and I can't stress this enough, I love what I do, and I always make sure that the product that I deliver reflects that.
                -Clean and readable code
                -Experience with agile frameworks like SCRUM and XP, GIT and Trello

                I'm constantly learning so I can give you better solutions and experiences.
                </Card>
                </Col>
            </Row>
            </div>
            </div>
        </div>
    )
}
