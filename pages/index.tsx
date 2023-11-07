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
import Intro from '../intro/Intro.js'
import Footer from '../components/Footer'
import {experience, projects, skills} from '../personal-info/info'




const Home: NextPage = () => {
  

  const [index, setIndex] = useState(true);
  useEffect(() => {
    const intervalDelayMilliseconds = 5000;
    const interval = setInterval(() => {
      setIndex(false);
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  
  return (
    <div className="relative h-screen w-screen">
      <Head>
        <title>Aman's profile</title>
        <link rel="icon" href="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" />
      </Head>
      {index ? (
        <Intro />
      ) : (
        <div>
          <Header />
          <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
            <Banner />

            <section className="md:space-y-24">
              <Row title={'Experience'} movies={experience} type='square'/>
              <Row title={'Skills'} movies={skills} type='circle'/>
              <Row title={'Projects'} movies={projects} type='square'/>
              

            </section>
          </main>
          <Footer/>
        </div>
      )}
    </div>
  )
}

export default Home
