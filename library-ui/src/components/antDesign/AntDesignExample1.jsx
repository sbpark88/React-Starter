import { Alert, Button, DatePicker, Space, message } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';

function AntDesignExample1() {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handelChange = (value) => {
    messageApi.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };

  return (
    <>
      <Space>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={handelChange} />
          <div style={{ marginTop: 16 }}>
            <Alert
              message='Selected Date'
              description={date ? date.format('YYYY-MM-DD') : 'None'}
            />
          </div>
          {contextHolder}
        </div>
      </Space>
    </>
  );
}

export default AntDesignExample1;
