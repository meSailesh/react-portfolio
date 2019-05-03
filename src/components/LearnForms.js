import React, { Component } from 'react';

class LearnForms extends Component {
    state = {
        firstname: void 0,
        lastname: void 0,
    }
    onSubmit =(ev) =>{
        console.log('submit', ev.target)
        return false;
    }
    onChange = (ev) =>{
        this.setState({
            [ev.target.name]: ev.target.value,
        })
    }
    render() {
        return (
            <div>
              <form onSubmit = {this.onSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} />
                    {this.state.firstname}
                </div> 
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" value = {this.state.lastname} onChange = {this.onChange} />
                    {this.state.lastname}
                </div>
                 
                <div>
                    <button>Save</button>
                </div>
              </form>   
            </div>
        );
    }
}

export default LearnForms;