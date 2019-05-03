import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab ===0){
            return(
                <div className="projects-grid">
                    {/*PRoject 3 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:'url(https://cdn-images-1.medium.com/max/2600/1*jDIj2SKAE-Bp32owLoHDjw.png) center/cover'}}>React Project #3</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CardText>
                <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
                </CardMenu>
            </Card>
               {/*PRoject 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://cdn-images-1.medium.com/max/2600/1*jDIj2SKAE-Bp32owLoHDjw.png) center/cover'}}>React Project #2</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                 {/*PRoject 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://cdn-images-1.medium.com/max/2600/1*jDIj2SKAE-Bp32owLoHDjw.png) center/cover'}}>React Project #1</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab ===1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }
        else if(this.state.activeTab ===2){
            return(
                <div><h1>This is PHP</h1></div>
            )
        }
        else{
            return(
                <div><h1>This is Ionic</h1></div>
            )
        }
    }

    
    render() {
        return (
            <div className="categoruy-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>PHP</Tab>
                <Tab>Ionic</Tab>
            </Tabs>

            <section className="project-grid">
            <Grid>
            <Cell col={12}>
            <div className="content">
            {this.toggleCategories()}
            </div>
            </Cell>
            </Grid>
            
            </section>
               
            </div>
        );
    }
}

export default Projects;