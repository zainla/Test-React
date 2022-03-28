import { getValue } from "@testing-library/user-event/dist/utils";
import { Form, Layout, Input, Switch, Row, Col, Button, Space, Select } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Content } = Layout
const { Option } = Select

export default function RiwayatPendidikan(props) {
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
                <Form.List name="Pendidikan">
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
                                                        label="Jenjang"
                                                        name={[name, 'jenjang']}
                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                    >
                                                        <Select placeholder="Jenjang">
                                                            <Option value="SD">SD</Option>
                                                            <Option value="SMP">SMP</Option>
                                                            <Option value="SMA">SMA</Option>
                                                            <Option value="S1">S1</Option>
                                                            <Option value="S2">S2</Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        label="Nama Univ/Sklh"
                                                        name={[name, 'namaUniv']}
                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                    >
                                                        <Input placeholder="Nama Universitas/Sekolah" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        label="Jurusan"
                                                        name={[name, 'jurusan']}
                                                        rules={[{ required: true, message: 'Masukkan nama Jurusasn' }]}
                                                    >
                                                        <Input placeholder="Jurusan" />
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
                                                        label="Tahun Lulus"
                                                        name={[name, 'lulus']}
                                                        rules={[{ required: true, message: 'Masukkan tahun lulus' }]}
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
                                            Add Riwayat Pendidikan
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