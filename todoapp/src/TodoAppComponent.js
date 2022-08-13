import React from 'react';

class TodoAppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {items: [],text:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
<div>
<h4>TODO APP</h4>

<TodoList items={this.state.items}/>

<form onSubmit={this.handleSubmit}>

<label htmlFor='new-todo'>
    WHAT DO YOU NEED TO DO TODAY BUDDY ??
</label>

<input 
id="new-todo"
onChange={this.handleChange}
value={this.state.text}
/>

<button>
    ADD NEW TO-DO
</button>

</form>

 </div>

    );
  }

handleChange(e){
  this.setState({text: e.target.value})
}

handleSubmit(e){
e.preventDefault();
if(this.state.text.length === 0){
  return;
}

const newItem = {
  text: this.state.text,
  id: Date.now()
};


this.setState(state => ({
  items: state.items.concat(newItem),
  text: ''
}));

}
}



class TodoList extends React.Component{
    render(){
        return(
<ul>
{this.props.items.map(item => (
    <li key={item.id}>item.text</li>
))}

</ul>
        );
    }
}

export default TodoAppComponent;