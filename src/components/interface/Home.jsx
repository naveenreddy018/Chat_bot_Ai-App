import React from 'react';
import "./home.css"

function Home() {
  return (
    <div className='homeContainer' style={styles.homeContainer}>
      <h1 className='heading' style={styles.heading}>Welcome to Gemini AI!</h1>
      <p className="sub-heading" style={styles.subHeading}>Your personal assistant for smarter interactions and updates!</p>


      <div className='featuresection' style={styles.featureSection}>
     
        <div className='featuretext' style={styles.featureText}>
          <h2 className='latest_text'>Latest Feature: Real-time Chat</h2>

        </div>
      </div>


      <div className='highlightsSection'  style={styles.highlightsSection}>

        <div className='cards' style={styles.cardsContainer}>
         <a href="https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/#ceo-message">
         <div className='card' style={styles.card}>
            <img
              src="https://miro.medium.com/v2/resize:fit:900/1*57YDg0EsnSBYsTnwYPkSDg.jpeg"
              alt="Highlight 1"
              style={styles.cardImage}
            />
            <h3  className='h1text'>Introducing Gemini 2.0</h3>
            <p className='ptext'>Gemini 2.0 available in Gemini app, our AI assistant</p>
          </div>
         </a>
         <a href="https://cloud.google.com/products/gemini?hl=en">
         <div className='card' style={styles.card}>
            <img
              src="https://media.licdn.com/dms/image/D5612AQEGCSfNv37tmQ/article-cover_image-shrink_720_1280/0/1687019467852?e=2147483647&v=beta&t=rBh04UHlEc2sknOiVnaTIrrO3KiFh4N6s6e-4s4OdGE"
              alt="Highlight 2"
              style={styles.cardImage}
            />
            <h3 className='h1text'>AI-Powered Assistance</h3>
            <p className='ptext'>Let Gemini AI handle repetitive tasks efficiently for you.</p>
          </div>
         </a>
          <a href="https://support.google.com/gemini/answer/14286560?hl=en&co=GENIE.Platform%3DDesktop">
          <div  className='card' style={styles.card}>
            <img
              src="https://helios-i.mashable.com/imagery/articles/04imK4lcXZcMDygow99xUaG/hero-image.fill.size_1248x702.v1724855738.jpg"
              alt="Highlight 3"
              style={styles.cardImage}
            />
            <h3 className='h1text'>Generate images </h3>
            <p className='ptext'> Gemini can help you generate images to bring ur imagination to real</p>
          </div>
          </a>
        </div>
      </div>
      <footer className='footer' style={styles.footer}>
        <p className='ptext' style={styles.text}>&copy; 2025 NovaMind  AI. All rights reserved.</p>
        <p  className="ptext" style={styles.text}>
          Follow us: <a href="#" style={styles.footerLink}>Twitter</a> | <a href="#" style={styles.footerLink}>LinkedIn</a> | <a href="#" style={styles.footerLink}>GitHub</a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  homeContainer: {
    padding: '0px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop:"40px",
  },
  heading: {
    fontSize: '46px',
    color: '#4A90E2',
  },
  subHeading: {
    fontSize: '18px',
    margin: '30px 0 30px',
    color: '#fff',
  },
  featureSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    margin: '30px 0',
  },
  featureSubText : {
    color : "#FFFFFF"
  },
  featureImage: {
    width: '150px',
    
    objectFit: 'cover',
    borderRadius: '8px',
  },
  featureText: {
    maxWidth: '400px',
    textAlign: 'left',
    color : '#fff',
 
  },

  sectionHeading: {
    fontSize: '44px',
    color: '#4A90E2',
  },
  cardsContainer: {
    display: 'flex',
   paddingBottom: '0px',
    gap: '130px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom  : "75px"
  },
  card: {
    width: '300px',
    textAlign: 'center',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardImage: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  footer: {
    marginTop: '0px',
    marginBottom:'0px',
    padding: '10px 10px ',
    backgroundColor: '#4A90E2',
    marginLeft : "0px",
    marginRight :"0px",
    color: '#fff',
    borderRadius: '8px',
    display:'flex',
    justifyContent :"center", 
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'underline',
    fontSize : "1rem",
    fontFamily : " 'Times New Roman', Times, serif;"
  },
};





export default Home;
