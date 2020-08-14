import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.container'
import SearchField from './components/search-field/search-field.component'
class App extends React.Component {
   constructor(props){
     super(props);
     this.state =  {
       monsters:[],
       searchText:'',
       
     }
   }

   textUpdated = (e) => {
    console.log("coming")
     this.setState({searchText:e.target.value})
   }

   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(users => this.setState({monsters: users,filterMonsters:users}))
     .catch(error => console.log(error))
   }

  render(){
    const { monsters, searchText} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.includes(searchText));
    return(
          <div className="App">
            <h1> Monsters Roldex</h1>
            <SearchField placeHolder='Search' handleChange={this.textUpdated}/>
              <CardList monster = {filterMonsters}> </CardList>    
          </div>
        )
  }
}

export default App;
