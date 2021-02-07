import Head from 'next/head';
import Error from 'next/error';
import Footer from '../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import EducationList from '../components/EducationList';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Portfolio from '../components/Portfolio';
import memCache from 'memory-cache';
import Navbar from '../components/Navbar';
import reactDom from 'react-dom';

const minutes = 5; // time caching
const apiUrl = '/api';

export default function Home({ profile, portfolio, error}){

    const description = `A full-stack web developer portfolio of Hildebrand Elias Ligtas. He's passionate in web development and likes challenges in life.`;
    const pageTitle = "Hildebrand | Home Portfolio";
    const twitterHandle ="Hildebrand Ligtas";
    const myUrl = "https://www.hildebrand.xyz";
    const previewImage = "/image-src.png";
    const siteName = "Hildebrand";

    const imgUrl =`${profile?.profile_pic?.url}`;
    if(error){
        return <Error statusCode={404}/>
    }

    function onShow(event){
      if((document !== undefined || document !== null) ){
          const nav = document.getElementById('navbarNav')
          reactDom.findDOMNode(nav).classList.remove("show");
      }
    }
  return (
      <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={pageTitle} key="ogtitle"/>
        <meta property="og:description" content={description} key="ogdesc"/>

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <meta property="og:url" content={myUrl} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogurl" />
        <meta property="og:site_name" content={siteName} key="ogurl" />
        <meta property="og:title" content={pageTitle} key="ogurl" />
        <meta property="og:description" content={description} key="ogurl" />
        <title>Hildebrand - A simple portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/index.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&family=Montserrat&family=Kanit&family=Lexend+Giga&family=DM+Serif+Display&family=Mukta+Malar:wght@800&family=Raleway:wght@100&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>
      <div onClick={onShow} className="container-wrapper"><div className="body-img">
      <div className="back-ground"></div>
                <Navbar/>
                  <section className="body-home">
                      { profile?.name && (
                          <div className="header-title">
                          <p>{profile?.profile_header_text}</p>
                          <h2>I'm {profile?.name}</h2>
                          <p className="description-overview">
                              {profile?.profile_description}
                          </p>
                          <div className="btn-home">
                              <a href="#portfolio" className="btn btn-outline-dark">See my work</a>
                          </div>
                      </div>
                      )}
                  { profile?.profile_pic?.url && !!imgUrl && (
                      <div className="img-id">
                      <img src={imgUrl} alt="Myself during an event!"></img>
                      </div>
                  )}
                  </section>
    </div>
              <h3 className="about-me">About Me</h3>
              <section id="about" className="top-body">
                  { profile?.about_profile_img && (
                      <div className="about-body">
                      <img className="second-img" src={profile?.about_profile_img?.url} alt="Looking serious on an event"></img>
                      <p className="about-description">
                          {profile?.about_me_description}
                          <br></br>
                          <a className="btn btn-outline-light" href="#resume">Learn More</a>
                      </p>
                  </div>
                  )}
              </section>
              <h3 className="resume-class">Resume</h3>
              <section className="nav">
                  <a className="nav-link active" href="#education">Education</a>
                  <a className="nav-link" href="#experience">Experience</a>
                  <a className="nav-link" href="#skills">Skills</a>
              </section>
              <section id="resume" className="resume-body">
                  <div className="resume-content">
                      <i className="ion-university"></i>
                      <h4 id="education">Education</h4>
                      <div>
                          { profile?.resume_educations.map( (education, index) => (
                              <EducationList key={education.degree.toString()} education={education}/>
                          ))}
                      </div>
                      <i className="ion-ios-briefcase"></i>
                      <h4 id="experience">Experience</h4>
                      <div>
                      { profile?.resume_experiences.map( (experience, index) => (
                              <Experience key={experience.company_name.toString()} experience={experience}/>
                          ))}
                      </div>
                      <i className="ion-ios-lightbulb"></i>
                      <h4 id="skills">Skills</h4>
                          <div className="skill-content">
                              { profile?.resume_skills.map( (skill, index) => (
                                  <Skill key={skill.name.toString()} skill={skill}/>
                              ))}
                          </div>
                  </div>
              </section>
              <h3 className="portfolio-class">Portfolio</h3>
              <section id="portfolio" className="portfolio-body">
                  <div className="portfolio-content">
                      { portfolio?.map( (portfolio, index) => (
                                  <Portfolio key={portfolio.header_title.toString()} portfolios={portfolio}/>
                              ))}
                  </div>
              </section>
              <h3 className="contact-class">Contact</h3>
              <section id="contact" className="contact-body">
                  { profile?.profile_email && (
                      <div className="contact-content">
                      <p>
                        Feel free to get in touch. You can email me at:
                        <br/>
                        <a href={`mailto:${profile?.profile_email}`}>{profile?.profile_email}</a>
                      </p>
                      or
                      <p style={{textAlign: 'center', marginTop: '1rem'}}>
                        you can call / text me at:
                        <br/>
                        <a href={'tel:'+profile?.contact_number}>{profile?.contact_number}</a>
                      </p>
                    </div>
                  )}
              </section>
              <Footer socialLinks={ profile?.social_links} 
                  websiteText={profile?.custom_website_text} websiteUrl={profile?.custom_website_url} websiteName={profile?.name}
              /></div>
      
      </>
  )
}

export async function getServerSideProps() {
    try {
        const res = await fetchWithCache(`${process.env.API_URL}${apiUrl}/main-profile`);
        const profile = res;
        const portfolio = await fetchWithCache(`${process.env.API_URL}${apiUrl}/portfolios`);
        return { props: { profile, portfolio } };
    } catch (err) {
        const error = true;
        return { props: { error} };
    }
}

async function fetchWithCache(url) {
  const value = memCache.get(url);
  if (value) {
      return value;
  } else {
      const res = await axios.get(url);
      const data = await res.data;
      memCache.put(url, data, minutes * 1000 * 60);
      return data;
  }
}