import React from "react"
import "./About.css"
import AboutImg from "../../images/about.jpg"

const About = () =>{
    return(
       <section className="about section" id="about">
        <div className='about-container container grid'>
            <img src={AboutImg} alt="Aditi's pic" className="about-img"/>
            <div className="about-data">
                <h2 className="section-title">About Me</h2>
                <span className="section-subtitle">My Introduction</span>
                <p className="about-description">
                    Currently, I'm studying Computer Science Engineering in Techno Main Salt Lake.
                    Although, college life is a bit stressful it never affected the passion 
                    I have for doing art. I love to paint. I love to make crafts. And, You guessed it! 
                    I enjoy Music!
                </p>
                <p className="about-description">
                    I have been playing with colours since I was a kid. And I was also that kid who ruined a well
                    painted wall with oil pastels. Well, among all types of mediums watercolour is my favourite and then comes
                    acrylic. Scroll down to see my own artworks!
                </p>
            </div>
        </div>
        
       </section>

    )
}

export default About