import { getValue } from "@testing-library/user-event/dist/utils";
import { Form, Layout, Input, Switch, Row, Col, Button, DatePicker, Select, } from "antd";
import React from "react";

const { Content } = Layout
const { Option } = Select

export default function DataPersonal(props) {
    const [formCreate] = Form.useForm()

    const onFinish = async (values) => {

        console.log(values)
        props.coba(props.current + 1)
        props.data(values)

    }

    const create = (
        <>
            <Form
                requiredMark={true}
                onFinish={onFinish}
                preserve={false}
                form={formCreate} name="add-form"
                labelCol={{ span: 5 }} wrapperCol={{ span: 10 }}
            >

                <Form.Item
                    name="id"
                    label="ID.no"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan ID dari email',
                        },
                    ]}
                    hasFeedback>
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    name="namaLengkap"
                    label="Nama Lengkap"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan Nama Lengkap!',
                        },
                    ]}
                    hasFeedback>
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="Tempat Lahir"
                    name="tempatlahir"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan Tempat Lahir!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tanggal Lahir"
                    name="tgllahir"
                    // label="Nama Lengkap"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan Tanggal Lahir!',
                        },
                    ]}
                    hasFeedback>
                    <DatePicker></DatePicker>
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name="gender"
                    // label="Nama Lengkap"
                    rules={[
                        {
                            required: true,
                            message: 'Pilih Gender!',
                        },
                    ]}
                    hasFeedback>
                    <Select>
                        <Option value="Pria">Pria</Option>
                        <Option value="Wanita">Wanita</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    // label="Nama Lengkap"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan Email!',
                        },
                    ]}
                    hasFeedback>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="nohp"
                    label="No.HP"
                    // label="Nama Lengkap"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan No.Hp!',
                        },
                    ]}
                    hasFeedback>
                    <Input />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label="Alamat"
                    name="alamat"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan Alamat!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 14,
                        offset: 18,
                    }}
                >
                    <Button type="primary" htmlType="submit" shape="round">
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