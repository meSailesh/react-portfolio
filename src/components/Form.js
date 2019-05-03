import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';


const FormContainer = styled.form
        `border: solid 2px;
         padding: 20px;
        `;
class Form extends Component {
    state= {
        isValid: true,
    }
    notify = (name, isValid) =>{
        this.setState({
            [name]: isValid,
        },() =>{
            this.setState({
                isValid: this.validForm(),
            })
        })

    }
    validForm =() =>{
        const keys = Object.keys(this.state);
        for(let i =0; i<keys.length; i++){
            if(keys[i] === 'isValid'){
                continue;
            }
            if(!this.state[keys[i]]){
                return false;
            }
        }
        return true;
    }
    render() {
        return (
        <FormContainer>
            <div>
                <Input 
                errMessage="Must contain 2-3 digits"
                desc= "2-3 characters"
                name="first-name"
                notify={this.notify}
                title="I am a custom inbox" />
            </div>
            <button disabled={!this.state.isValid}>Submit</button>
        </FormContainer>

        );
    }
}

export default Form;