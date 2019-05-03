import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Avatar from '../profile.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
               <Grid className="contact-grid">
               <Cell col={6}>
               <h2>Sailesh Dhakal</h2>
               <img 
               src={Avatar}
               alt="avatar"
               style={{height: '250px', boxShadow: '0 3px 4px 2px rgba(0, 0, 0, 0.12), 0 4px 5px 5px rgba(0, 0, 0, 0.12), 0 5px 12px -5px rgba(0, 0, 0, 0.1)'}}
               />
               <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
               </Cell>
               <Cell col={6}>
               <h2>Contact Me</h2>
               <hr />
               <div className="contact-list">
                  <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        +91-9632478062
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                        <i className="fa fa-fax" aria-hidden="true" />
                        +91-9632478062
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        mesailesh05@gmail.com
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                        <i className="fa fa-skype" aria-hidden="true" />
                        sailesh_dhakal
                        </ListItemContent>
                    </ListItem>
                    
                    
                  </List>
                </div>
               </Cell>
               </Grid>
            </div>
        );
    }
}

export default Contact;