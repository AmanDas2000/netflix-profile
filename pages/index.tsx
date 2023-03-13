import type { NextPage } from 'next'
import { useState,useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/ModalComponent'
import Row from '../components/Row'
import useWindowDimensions from '../hooks/useWindowDimension'
import parse from 'html-react-parser';
import Intro from '../intro/Intro'
import animate from '../intro/animations'
import Footer from '../components/Footer'

const arr = [
  {
    name: 'Oracle',
    designation: 'Software Engineer 1',
    detail: `Front-end<br/>
      • Developed complete gold purchase website from scratch. <a className='membershipLink' href='https://gold.spennyapp.com'>link</a><br/>
      • Handled authentication, gold purchase APIs, payments and edge cases using Nextjs, React and Redux<br/>
      • Built completely responsive UI/UX using CSS and theme-ui<br/>
      Back-end<br/>
      • Designed micro-service architecture for different modules<br/>
      • Asset baskets include queue architecture (rabbit-mq) for efficient order placement<br/>
      • Implemented production level purchase and sell rest APIs with node.js and express<br/>
      • Worked on baskets and SIP module<br/>`,
    imageUrl:
      'https://imageio.forbes.com/specials-images/imageserve/5ff3492e056b3292f9c39749/0x0.jpg?format=jpg&width=1200',
  },
  {
    name: 'Microsoft',
    designation: 'Software Engineer 1',
    detail: `Front-end<br/>
    • Developed complete gold purchase website from scratch. <a className='membershipLink' href='https://gold.spennyapp.com'>link</a><br/>
    • Handled authentication, gold purchase APIs, payments and edge cases using Nextjs, React and Redux<br/>
    • Built completely responsive UI/UX using CSS and theme-ui<br/>
    Back-end<br/>
    • Designed micro-service architecture for different modules<br/>
    • Asset baskets include queue architecture (rabbit-mq) for efficient order placement<br/>
    • Implemented production level purchase and sell rest APIs with node.js and express<br/>
    • Worked on baskets and SIP module<br/>`,
    imageUrl:
      'https://www.cnet.com/a/img/resize/f92ae43457ac52e0b761737181264a82aa0765bb/hub/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg?auto=webp&fit=crop&height=675&width=1200',
  },
  {
    name: 'Google',
    designation: 'Software Engineer 1',
    detail: `Front-end<br/>
    • Developed complete gold purchase website from scratch. <a className='membershipLink' href='https://gold.spennyapp.com'>link</a><br/>
    • Handled authentication, gold purchase APIs, payments and edge cases using Nextjs, React and Redux<br/>
    • Built completely responsive UI/UX using CSS and theme-ui<br/>
    Back-end<br/>
    • Designed micro-service architecture for different modules<br/>
    • Asset baskets include queue architecture (rabbit-mq) for efficient order placement<br/>
    • Implemented production level purchase and sell rest APIs with node.js and express<br/>
    • Worked on baskets and SIP module<br/>`,
    imageUrl:
      'https://dam.nmhmedia.sk/image/cd21770f-6da6-45d1-957a-7c183cb556f6_phpbbgdhj.jpg/960/540',
  },
  {
    name: 'Apple',
    designation: 'Software Engineer 1',
    detail: `Front-end<br/>
    • Developed complete gold purchase website from scratch. <a className='membershipLink' href='https://gold.spennyapp.com'>link</a><br/>
    • Handled authentication, gold purchase APIs, payments and edge cases using Nextjs, React and Redux<br/>
    • Built completely responsive UI/UX using CSS and theme-ui<br/>
    Back-end<br/>
    • Designed micro-service architecture for different modules<br/>
    • Asset baskets include queue architecture (rabbit-mq) for efficient order placement<br/>
    • Implemented production level purchase and sell rest APIs with node.js and express<br/>
    • Worked on baskets and SIP module<br/>`,
    imageUrl:
      'https://youthincmag.com/wp-content/uploads/2018/04/apple-office.jpg',
  },
  {
    name: 'Amazon',
    designation: 'Software Engineer 1',
    detail: `Front-end<br/>
    • Developed complete gold purchase website from scratch. <a className='membershipLink' href='https://gold.spennyapp.com'>link</a><br/>
    • Handled authentication, gold purchase APIs, payments and edge cases using Nextjs, React and Redux<br/>
    • Built completely responsive UI/UX using CSS and theme-ui<br/>
    Back-end<br/>
    • Designed micro-service architecture for different modules<br/>
    • Asset baskets include queue architecture (rabbit-mq) for efficient order placement<br/>
    • Implemented production level purchase and sell rest APIs with node.js and express<br/>
    • Worked on baskets and SIP module<br/>`,
    imageUrl:
      'https://static.toiimg.com/thumb/msid-98031821,width-400,resizemode-4/98031821.jpg',
  },
  {
    name: 'Uber',
    designation: 'Software Engineer 1',
    detail: `Front-end<br/>
    • Developed complete gold purchase website from scratch. <a className='membershipLink' href='https://gold.spennyapp.com'>link</a><br/>
    • Handled authentication, gold purchase APIs, payments and edge cases using Nextjs, React and Redux<br/>
    • Built completely responsive UI/UX using CSS and theme-ui<br/>
    Back-end<br/>
    • Designed micro-service architecture for different modules<br/>
    • Asset baskets include queue architecture (rabbit-mq) for efficient order placement<br/>
    • Implemented production level purchase and sell rest APIs with node.js and express<br/>
    • Worked on baskets and SIP module<br/>`,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLdEPeumjNOhTKtNYjviEqb10yjnj8P39_Q&usqp=CAU',
  },
]


const skills = [
  {
    name: 'React',
    imageUrl: 'https://reactjs.org/logo-og.png',
  },
  {
    name: 'Redux',
    imageUrl: 'https://www.filepicker.io/api/file/sJCfo5xMRL6Blf9H6OSP',
  },
  {
    name: 'JavaScript',
    imageUrl:
      'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
  },
  {
    name: 'NodeJS',
    imageUrl:
      'https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png',
  },
  {
    name: 'Express',
    imageUrl:
      'https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
  },
  {
    name: 'HTML',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png',
  },
  {
    name: 'CSS',
    imageUrl:
      'https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/laptop-skin-decal/t/h/9/css-logo-laptop-trackpad-stickers-woopme-15-6-original-imag66dsgjmrq5pp.jpeg?q=70',
  },
  {
    name: 'MongoDB',
    imageUrl:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld',
  },
  {
    name: 'SQL',
    imageUrl:
      'https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-white-inscription-shadowl-circle-frame-96842158.jpg',
  },
  {
    name: 'Docker',
    imageUrl:'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-docker-icon-logo-vector-symbol-198642048.jpg',
  },
]

const Home: NextPage = () => {
  

  const [index, setIndex] = useState(true);
  useEffect(() => {
    const intervalDelayMilliseconds = 5000;
    const interval = setInterval(() => {
      setIndex(false);
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });


  useEffect(() => {
    animate();
  }, [])
  
  
  
  return (
    <div className="relative h-screen w-screen">
      <Head>
        <title>Aman's profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {index ? (
        <Intro />
      ) : (
        <div>
          <Header />
          <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
            <Banner />

            <section className="md:space-y-24">
              <Row title={'Experience'} movies={arr} type='square'/>
              <Row title={'Skills'} movies={skills} type='circle'/>
              <Row title={'Projects'} movies={arr} type='square'/>
              <Row title={'Projects'} movies={arr} type='square'/>

            </section>
          </main>
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Home
