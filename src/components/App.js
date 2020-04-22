import React from "react";
import Pokemon from './Pokemon';



class App extends React.Component {
    state = {
        allPokemon : [],
        fetched : false,
        loading : false,
      };

      componentWillMount(){
        this.setState({
          loading : true
        });
        fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
        .then(response=>{
          this.setState({
            allPokemon : response.results,
            loading : true,
            fetched : true
          });
        });
      }

    render(){
        const {fetched, loading, allPokemon} = this.state;
        let content ;
        if(fetched){
          content = <div className="pokemon--species--list">
              {allPokemon.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
        }else if(loading && !fetched){
            content = <p> Loading ...</p>;
        }
        else{
          content = <div/>;
        }
        return  <div>
          {content}
        </div>;
      }
}

export default App;