import { getValue } from "@testing-library/user-event/dist/utils";
import { Form, Layout, Input, Switch, Row, Col, Button, Space, Select } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Content } = Layout
const { Option } = Select

export default function Keahlian(props) {
    const [formCreate] = Form.useForm()

    const onFinish = async (values) => {

        console.log(values)
        // props.coba(props.current + 1)
        props.data(values)
        props._showCreate(false)
        props.coba(0)
        props.refresh(a => a + 1)

    }
    const close = () => {
        props.coba(props.current - 1)
    }

    const create = (
        <>
            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.List name="Keahlian">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: "list-item", marginBottom: 8 }} align="baseline">
                                    <Row>
                                        <Col span={10}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'keahlian']}
                                                rules={[{ required: true, message: 'Masukkan nama Skil' }]}
                                            >
                                                <Input placeholder="Nama Skil" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={1} />
                                        <Col span={10}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'tingkatan']}
                                                rules={[{ required: true, message: 'Masukkan tingkatan Skil' }]}
                                            >
                                                <Select placeholder="Masukkan tingkatan Skill ">
                                                    <Option value="pemula">Pemula</Option>
                                                    <Option value="mahir">Mahir</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={1} />
                                        <Col span={1}><Button type="danger" shape='circle'><DeleteOutlined onClick={() => remove(name)} /></Button></Col>
                                    </Row>


                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add another Skil
                                </Button>
                            </Form.Item>


                        </>
                    )}
                </Form.List>
                <Form.Item
                    wrapperCol={{
                        span: 14,
                        offset: 18,
                    }}>
                    <Button type="primary" htmlType="submit" shape='round'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
    return (
        create
    )
}