import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


const TodoContainer = styled.div
    `padding: 30px;`
    ;

const Todo =styled.div
    `box-shadow: 0 0 5px gray;
    padding: 30px;
    margin-bottom: 10px
    `
    ;
    
class LearnProps extends Component {
  
    static propTypes = {
         todos: propTypes.array.isRequired,
    }
    state = {
        todos: this.props.todos,
    }
    handleChecked = (todo) =>{
        const newTodos = this.state.todos.map( t => {
            if(t.id === todo.id){
                return{ ...t, done: !t.done};
            }
            return t
        })
        this.setState({
            todos: newTodos,
        })
    }

    render() {
        return (
           <TodoContainer>
               <h2>Todos</h2>
               {this.state.todos.map (todo =>(
                   <Todo key={todo.id}>
                   <input type = "checkbox" onChange={() => this.handleChecked(todo)} checkde = {todo.done} />{todo.title}
                   </Todo>
               ))}
           </TodoContainer>
        );
    }
}

export default LearnProps;