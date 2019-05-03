import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Avatar from '../profile.png';

class Resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4} className="resume-left-col">
                   <div style={{textAlign: "center"}}>
                   <img 
                   src={Avatar}
                   alt="Avatar"
                   style={{height:'250px', borderRadius:"50%"}} 
                   />
                   </div>
                   <h2 style={{paddingTop:'2em'}}>Sailesh Dhakal</h2>
                   <h4 style={{color:'grey'}}>Programmer</h4>
                   <hr style={{borderTop:'3px solid #833fb2', width: '50%'}} />
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                   <hr style={{borderTop:'3px solid #833fb2', width: '50%'}} />
                   <h5>Address</h5>
                   <p>Kodathi, Sarjapura Road, Bangalore, 560035, India </p>
                   <h5>Phone</h5>
                   <p>+91-9632478062</p>
                   <h5>Email</h5>
                   <p>mesailesh05@gmail.com</p>
                   <h5>Website</h5>
                   <p>mywebsite.com</p>
                   <hr style={{borderTop:'3px solid #833fb2', width: '50%'}} />
                   </Cell>
                   <Cell col={8} className="resume-right-col">
                     <h2 style={{padding:'10px'}}>Education</h2>

                    <Education startYear={2002}
                      endYear={2013}
                      schoolName="Lyceum Model School"
                      schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />

                    <Education startYear={2014}
                      endYear={2015}
                      schoolName="National School of Sciences"
                      schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                       
                    <Education startYear={2015}
                      endYear={2019}
                      schoolName="Bangalore Technological Institute"
                      schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                    <hr style={{borderTop: '3px solid #e22947' }}/>
                    
                    <h2 style={{padding:'10px'}}>Experience</h2>
                    
                    <Experience
                    startYear={2018}
                    endYear={2018}
                    jobName="PHP Developer intern"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />

                    <Experience
                    startYear={2019}
                    endYear={2019}
                    jobName="React Developer intern"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />

                    <hr style={{borderTop: '3px solid #e22947' }}/>
                    <h2 style={{padding:'10px'}}>Skills</h2>
                    <Skills 
                    skill="HTML"
                    progress={80}
                    />

                    <Skills 
                    skill="CSS"
                    progress={70}
                    />

                    <Skills 
                    skill="JavaScript"
                    progress={50}
                    />

                    <Skills 
                    skill="React"
                    progress={10}
                    />

                    <Skills 
                    skill="Ionic"
                    progress={20}
                    />

                    <Skills 
                    skill="PHP"
                    progress={60}
                    />

                   </Cell>
               </Grid>
            </div>
        );
    }
}

export default Resume;