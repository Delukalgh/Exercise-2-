import Head from 'next/head'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { useState } from 'react'

export default function Home() {
  const [itemOne, setItemOne] = useState(0);
  const [itemTwo, setItemTwo] = useState([]);
  const [position, setPosition] = useState({
    y:0,
    x:0
  });



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>

      <main className={`${styles.main}`}>
        <Button/>
        <Button title="Click me" color="grey"/>

        <button onClick={() => {
          setItemOne(itemOne +1);
          console.log(itemOne);
        }}>Button 1 Number</button>

        <button onClick={() => {
          setItemTwo([...itemTwo, "testing"])
          console.log(itemTwo);
        }}>
          Button 2 Array
        </button>

        <div
          onPointerMove={e => {
            setPosition({
              x: e.clientX,
              y: e.clientY
            })
          }}
          style={{
            position: 'relative',
            width: '100vw',
            height: '50vh'
          }}
        >
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              borderRadius: '50%', 
              transform: `translate(${position.x}px, ${position.y}px)`,
              left: 0,
              top: -200,
              width: 20, 
              height: 20
            }}
          />
          
        </div>
      </main>

      <Footer/>
    </>
  )
}
