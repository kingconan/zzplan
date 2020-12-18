import Head from 'next/head'
import {Button} from 'antd'

export default function Home() {
    return (
        <div className="container">
        <Head>
            <title>ZZ Plan</title>
        </Head>

        <main>
            <Button>I am a button, hh</Button>
        </main>

    <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #000;
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
