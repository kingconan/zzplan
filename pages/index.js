import Head from 'next/head';
import {Button, Tooltip, Radio, Dropdown, Menu} from 'antd';
import {SearchOutlined} from "@ant-design/icons";

export default function Home() {
    return (
        <div className="container">
        <Head>
            <title>ZZ Plan</title>
        </Head>

        <main>
            <Button>I am a button, hh</Button>
            <Button type="primary">Primary Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Radio.Button value="large">Large</Radio.Button>
            <Button disabled>Default(disabled)</Button>
            <Button type="primary" loading>
                Loading
            </Button>
            <Button type="primary">primary</Button>
            <Button>secondary</Button>
            <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
        </main>
    <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #FFF;
        }

        .bg {
            max-width:75%;
            max-height:85vh;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 100px;
        }
      `}</style>

    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
)
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);

function handleMenuClick(e) {
    console.log('click', e);
}
