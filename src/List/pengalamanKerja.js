import { getValue } from "@testing-library/user-event/dist/utils";
import { Form, Layout, Input, Switch, Row, Col, Button, Space, Select } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Content } = Layout
const { Option } = Select

export default function PengalamanKerja(props) {
    const [formCreate] = Form.useForm()

    const onFinish = async (values) => {

        console.log(values)
        props.coba(props.current + 1)
        props.data(values)

    }
    const close = () => {
        props.coba(props.current - 1)
    }

    const create = (
        <>
            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.List name="Pengalaman">
                    {(fields, { add, remove }) => (
                        <>
                            <Row>
                                <Col span={10}>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: "list-item", marginBottom: 8 }} align="baseline">
                                            <Row>
                                                <Col span={22}>
                                                    <Form.Item
                                                        {...restField}
                                                        label="Nama Perusahaan"
                                                        name={[name, 'perusahaan']}
                                                        rules={[{ required: true, message: 'Masukkan nama Perusahaan' }]}
                                                    >
                                                        <Input placeholder="Nama Perusahaan" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        label="Tahun Masuk"
                                                        name={[name, 'masuk']}
                                                        rules={[{ required: true, message: 'Masukkan tahun masuk' }]}
                                                    >
                                                        <Input placeholder="Tahun Masuk" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        label="Tahun Keluar"
                                                        name={[name, 'keluar']}
                                                        rules={[{ required: true, message: 'Masukkan tahun keluar' }]}
                                                    >
                                                        <Input placeholder="Tahun Lulus" />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={1} />
                                                <Col span={1}><Button type="danger" shape='circle'><DeleteOutlined onClick={() => remove(name)} /></Button></Col>
                                            </Row>


                                        </Space>
                                    ))}
                                </Col>
                                <Col span={2}></Col>
                                <Col span={5}>
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add Riwayat Pekerjaan
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>


                        </>
                    )}
                </Form.List>
                <Form.Item
                    wrapperCol={{
                        span: 14,
                        offset: 18,
                    }}>
                    <Button type="primary" htmlType="submit" shape='round'>
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
    return (
        create
    )
}