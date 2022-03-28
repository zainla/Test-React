import { Button, Layout, Modal, Table, Steps, message, Input, Form, DatePicker, Select, Card } from "antd";
import React, { useState, useEffect, useCallback } from "react";
import DataPersonal from "./List/dataPersonal";
import RiwayatPendidikan from "./List/riwayatPendidikan";
import { ContactsOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import PengalamanKerja from "./List/pengalamanKerja";
import Keahlian from "./List/keahlian";
import moment from 'moment';



const { Content } = Layout
const { Step } = Steps
const { Option } = Select

export default function App() {
  const [showCreate, _showCreate] = useState(false)
  const [showDetail, _showDetail] = useState(false)
  const [current, setCurrent] = useState(0);
  const [dataPersonal, _dataPersonal] = useState([])
  const [dataPendidikan, _dataPendidikan] = useState([])
  const [dataPekerjaan, _dataPekerjaan] = useState([])
  const [dataKeahlian, _dataKeahlian] = useState([])
  const [dataSource, _dataSource] = useState([])
  const [refreshKey, setRefreshKey] = useState(0);

  const [submit, _submit] = useState(false)

  //Detail
  const [formDetail] = Form.useForm();
  const [detailPendidikan, _detailPendidikan] = useState([])
  const [detailPengalaman, _detailPengalaman] = useState([])
  const [detailKeahlian, _detailKeahlian] = useState([])


  const columns = [
    {
      title: 'ID No',
      dataIndex: 'idNo',
      key: 'idNo',
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Alamat',
      dataIndex: 'alamat',
      key: 'alamat',
    },
    {
      title: 'detail',
      dataIndex: 'detail',
      key: 'detail',
    },

  ];


  function AddData() {
    _showCreate(true)
  }


  const listData = () => {
    let list = [];
    console.log(dataPersonal)
    list.push({
      "key": dataPersonal.id,
      "idNo": dataPersonal.id,
      "nama": dataPersonal.namaLengkap,
      "alamat": dataPersonal.alamat,
      "gender": dataPersonal.gender,
      "email": dataPersonal.email,
      "tempatLahir": dataPersonal.tempatlahir,
      "tglLahir": moment(dataPersonal.tgllahir).format("YYYY-MM-DD"),
      "pendidikan": dataPendidikan,
      "pekerjaan": dataPekerjaan,
      "keahlian": dataKeahlian,
      "nohp": dataPersonal.nohp,
      "detail": <Button type="primary" shape="circle" onClick={Detail}><EyeOutlined /></Button>
    })

    _dataSource(list)
  }
  console.log(dataPendidikan)

  //Detail
  const Pendidikan = () => {
    let pen = []
    if (dataPendidikan.Pendidikan === undefined) {
      pen.push(null)
    } else {
      for (let i = 0; i < dataPendidikan.Pendidikan.length; i++) {
        let obj = dataPendidikan.Pendidikan[i]
        pen.push({
          "jenjang": obj.jenjang,
          "nama": obj.namaUniv,
          "jurusan": obj.jurusan,
          "masuk": obj.masuk,
          "keluar": obj.lulus,
        })
      }
    }
    _detailPendidikan(pen)
  }
  const Pengalaman = () => {
    let pen = []
    for (let i = 0; i < dataPekerjaan.Pengalaman.length; i++) {
      let obj = dataPekerjaan.Pengalaman[i]
      pen.push({
        "nama": obj.perusahaan,
        "masuk": obj.masuk,
        "keluar": obj.keluar,
      })

    }
    _detailPengalaman(pen)
  }
  const keahlianpelamar = () => {
    let pen = []
    for (let i = 0; i < dataKeahlian.Keahlian.length; i++) {
      let obj = dataKeahlian.Keahlian[i]
      pen.push({
        "nama": obj.keahlian,
        "tingkatan": obj.tingkatan,
      })

    }
    _detailKeahlian(pen)
  }

  const columnPendidikan = [
    {
      title: 'JenJang',
      dataIndex: 'jenjang',
      key: 'jenjang',
    },
    {
      title: 'Nama Universita/Sekolah',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Jurusan',
      dataIndex: 'jurusan',
      key: 'jurusan',
    },
    {
      title: 'Tahun Masuk',
      dataIndex: 'masuk',
      key: 'masuk',
    },
    {
      title: 'Tahun keluar',
      dataIndex: 'keluar',
      key: 'keluar',
    },

  ];
  const columnPengalaman = [
    {
      title: 'Nama Perusahaan',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Tahun Masuk',
      dataIndex: 'masuk',
      key: 'masuk',
    },
    {
      title: 'Tahun keluar',
      dataIndex: 'keluar',
      key: 'keluar',
    },

  ];
  const columnKeahlian = [
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Tingkatan',
      dataIndex: 'tingkatan',
      key: 'tingkatan',
    },
  ];
  const dataDetail = (
    <Form
      requiredMark={false}
      // onFinish={onFinish}
      form={formDetail} name="add-form"
      labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}
    >

      <Form.Item
        name="id"
        label="ID.no">
        <Input></Input>
      </Form.Item>
      <Form.Item
        name="namaLengkap"
        label="Nama Lengkap">
        <Input></Input>
      </Form.Item>
      <Form.Item
        label="Tempat Lahir"
        name="tempatlahir">
        <Input />
      </Form.Item>
      <Form.Item
        label="Tanggal Lahir"
        name="tgllahir">
        <DatePicker></DatePicker>
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender">
        <Select>
          <Option value="Pria">Pria</Option>
          <Option value="Wanita">Wanita</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email">
        <Input />
      </Form.Item>
      <Form.Item
        name="nohp"
        label="No.HP">
        <Input />
      </Form.Item>
      <Form.Item
        label="Alamat"
        name="alamat">
        <Input />
      </Form.Item>

      <Card title="Riwayat Pendidikan" bordered={false} style={{ width: 900 }}>
        <Table
          bordered
          size='small'
          columns={columnPendidikan}
          pagination={false}
          dataSource={detailPendidikan}
          expandable={true} />
      </Card>
      <Card title="Pengalaman Kerja" bordered={false} style={{ width: 900 }}>
        <Table
          bordered
          size='small'
          columns={columnPengalaman}
          pagination={false}
          dataSource={detailPengalaman}
          expandable={true} />
      </Card>
      <Card title="Keahlian" bordered={false} style={{ width: 900 }}>
        <Table
          bordered
          size='small'
          columns={columnKeahlian}
          pagination={false}
          dataSource={detailKeahlian}
          expandable={true} />
      </Card>
    </Form>
  )


  function Detail() {
    _showDetail(true)
    Pendidikan()
    Pengalaman()
    keahlianpelamar()
    formDetail.setFieldsValue({
      id: dataPersonal.id,
      namaLengkap: dataPersonal.namaLengkap,
      tempatlahir: dataPersonal.tempatlahir,
      tgllahir: moment(dataPersonal.tgllahir),
      gender: dataPersonal.gender,
      email: dataPersonal.email,
      alamat: dataPersonal.alamat,
      nohp: dataPersonal.nohp,
    })
    // _showDetail(true)
  }

  console.log(dataSource)
  useEffect(() => {
    listData()
    if (showDetail === true) {
      console.log("au")
    }

  }, [refreshKey])

  //Steps
  const steps = [
    {
      title: 'Data Personal',
      content: <DataPersonal coba={setCurrent} current={current} data={_dataPersonal} />,
    },
    {
      title: 'Riwayat Pendidikan',
      content: <RiwayatPendidikan coba={setCurrent} current={current} data={_dataPendidikan} />,
    },
    {
      title: 'Pengalaman Kerja',
      content: <PengalamanKerja coba={setCurrent} current={current} data={_dataPekerjaan} />,
    },
    {
      title: 'Keahlian',
      content: <Keahlian coba={setCurrent} current={current} data={_dataKeahlian} _showCreate={_showCreate} refresh={setRefreshKey} />,
    },
  ];

  const StepInput = (
    <>
      <Steps progressDot current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </>
  )
  const show = <>
    <h1>Teravin Test React.js</h1><br />
    <Button onClick={AddData} type="primary" shape="round"><PlusOutlined />Add Data</Button>
    <Table
      bordered
      size='small'
      columns={columns}
      pagination={true}
      dataSource={dataSource}
      expandable={true} />
  </>

  const close = () => {
    _showCreate(false)
    _showDetail(false)
    setCurrent(0)
  }
  return (

    <>
      <Modal
        title="Form submission"
        visible={showCreate}
        onCancel={close}
        footer={null}
        width={1000}
      >
        {StepInput}
      </Modal>
      <Modal
        title="Detail Pelamar"
        visible={showDetail}
        // onOk={() => onFinish}
        onCancel={close}
        footer={null}
        width={1000}
      >
        {dataDetail}
      </Modal>

      <Content>
        {show}
      </Content>
    </>
  )
}