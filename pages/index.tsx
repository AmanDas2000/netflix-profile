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
// import {arr} from '../personal-info/info'


const arr = [
  {
    name: 'Oracle',
    designation: 'Software Engineering Intern',
    detail: `• Build the "Robot-server" which provides a all-in-one test running platform.<br/>
    • Created the UI which facilitates to check multiple microservices.<br/>
    • Worked on the Vendor-side simulation tool which improves delivery times by 1 to 2 months.<br/>
    • Deployed the entire simulation tool and the robot-server as a microservice using Docker and Kubernetes.<br/>
    • The languages used in the above projects include Python, Java and robot-framework<br/>`,
    imageUrl:
      'https://imageio.forbes.com/specials-images/imageserve/5ff3492e056b3292f9c39749/0x0.jpg?format=jpg&width=1200',
    startDate:'Jan 23',
  endDate:'Present'
  },
  {
    name: 'Spenny (YC 2020)',
    designation: 'Full stack Intern',
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
      'https://i.ytimg.com/vi/h8d70SFOqZ4/maxresdefault.jpg',
      startDate:'Mar 21',
      endDate:'Arp 22'
    },
  {
    name: 'Flodata Analytics',
    designation: 'Frontend Intern',
    detail: `• Worked on Delhi LDRA map dashboard.<br/>
    • Rendered polygons, tool tips and colours according to parameters using leafletjs, React-leaflet, React and css<br/>
    • Developed US ancestry map dashboard using AnyCharts and vanilla JavaSfcript<br/>`,
    imageUrl:
      'https://media.licdn.com/dms/image/C4D16AQH3A6VmJZoutQ/profile-displaybackgroundimage-shrink_200_800/0/1654535134753?e=2147483647&v=beta&t=oFfzbVd319269JS3IDNbstPjMpuwST0zlgieIIabnzY',
      startDate:'Mar 21',
  endDate:'Arp 22'
  },
  {
    name: 'Disorder of Creation',
    designation: 'Full Stack Dev (Freelance)',
    detail: `• Developed complete e-commerce website including client side application and admin side application.<br/>
    • Implemented product page, cart page, order page with order status, Products include variants and authentication including google.<br/>
    • Category nesting is implemented.<br/>
    • Complete mobile responsiveness with no external libraries for styling.<br/>
    • Technologies: React, React-Redux, Express, Node.js, MongoDB<br/>`,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2617/4984/collections/Disorder_of_Creation_1200x1200.jpg?v=1668494770',
      startDate:'Mar 21',
  endDate:'Arp 22'
  },
  {
    name: 'Laptop Nerd',
    designation: 'Founder',
    detail: `• Laptopnerd is a laptop review and information website.<a className='membershipLink' href='https://laptopnerd.in'>link</a><br/>
    • 10+ articles are ranked on Google’s front page. 20+ articles are on 2nd page on Google.<br/>
    • Designed complete UI/UX from scratch.<br/>
    • Managing on-page and off-page SEO. Leading the team and handling smooth running of the website.<br/>`,
    imageUrl:
      'https://laptopnerd.in/wp-content/uploads/2022/07/All-reviewsallTopLaptops.png',
      startDate:'Mar 21',
  endDate:'Arp 22'
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
      startDate:'Mar 21',
  endDate:'Arp 22'
  },
]

const projects = [
  {
    name: 'Netflix Profile',
    designation: 'THIS',
    detail: `• Build the "Robot-server" which provides a all-in-one test running platform.<br/>
    • Created the UI which facilitates to check multiple microservices.<br/>
    • Worked on the Vendor-side simulation tool which improves delivery times by 1 to 2 months.<br/>
    • Deployed the entire simulation tool and the robot-server as a microservice using Docker and Kubernetes.<br/>
    • The languages used in the above projects include Python, Java and robot-framework<br/>`,
    imageUrl:
      'https://imageio.forbes.com/specials-images/imageserve/5ff3492e056b3292f9c39749/0x0.jpg?format=jpg&width=1200',
    startDate:'Jan 23',
  endDate:'Present'
  },
  {
    name: 'Spenny (YC 2020)',
    designation: 'Full stack Intern',
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
      'https://i.ytimg.com/vi/h8d70SFOqZ4/maxresdefault.jpg',
      startDate:'Mar 21',
      endDate:'Arp 22'
    },
  {
    name: 'Flodata Analytics',
    designation: 'Frontend Intern',
    detail: `• Worked on Delhi LDRA map dashboard.<br/>
    • Rendered polygons, tool tips and colours according to parameters using leafletjs, React-leaflet, React and css<br/>
    • Developed US ancestry map dashboard using AnyCharts and vanilla JavaSfcript<br/>`,
    imageUrl:
      'https://media.licdn.com/dms/image/C4D16AQH3A6VmJZoutQ/profile-displaybackgroundimage-shrink_200_800/0/1654535134753?e=2147483647&v=beta&t=oFfzbVd319269JS3IDNbstPjMpuwST0zlgieIIabnzY',
      startDate:'Mar 21',
  endDate:'Arp 22'
  },
  {
    name: 'Disorder of Creation',
    designation: 'Full Stack Dev (Freelance)',
    detail: `• Developed complete e-commerce website including client side application and admin side application.<br/>
    • Implemented product page, cart page, order page with order status, Products include variants and authentication including google.<br/>
    • Category nesting is implemented.<br/>
    • Complete mobile responsiveness with no external libraries for styling.<br/>
    • Technologies: React, React-Redux, Express, Node.js, MongoDB<br/>`,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2617/4984/collections/Disorder_of_Creation_1200x1200.jpg?v=1668494770',
      startDate:'Mar 21',
  endDate:'Arp 22'
  },
  {
    name: 'Laptop Nerd',
    designation: 'Founder',
    detail: `• Laptopnerd is a laptop review and information website.<a className='membershipLink' href='https://laptopnerd.in'>link</a><br/>
    • 10+ articles are ranked on Google’s front page. 20+ articles are on 2nd page on Google.<br/>
    • Designed complete UI/UX from scratch.<br/>
    • Managing on-page and off-page SEO. Leading the team and handling smooth running of the website.<br/>`,
    imageUrl:
      'https://laptopnerd.in/wp-content/uploads/2022/07/All-reviewsallTopLaptops.png',
      startDate:'Mar 21',
  endDate:'Arp 22'
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
      startDate:'Mar 21',
  endDate:'Arp 22'
  },
]

const skills = [
  {
    name: 'React',
    imageUrl: 'https://ionicframework.com/docs/icons/logo-react-icon.png',
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
          <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
            <Banner />

            <section className="md:space-y-24">
              <Row title={'Experience'} movies={arr} type='square'/>
              <Row title={'Skills'} movies={skills} type='circle'/>
              <Row title={'Projects'} movies={projects} type='square'/>
              <Row title={'Achievements'} movies={arr} type='square'/>

            </section>
          </main>
          <Footer/>
        </div>
      )}
    </div>
  )
}

export default Home
