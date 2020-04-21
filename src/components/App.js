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
    // state = {
    //     fishes: {},
    //     order: {}
    // };

    // componentDidMount() {
    //     // sync with the name of this specific store
    //     const { params } = this.props.match;
    //     // first reinstate our local storage
    //     const localStorageRef = localStorage.getItem(params.storeId);
    //     if(localStorageRef) {
    //         // the opposite of JSON.stringify is JSON.parse -- turn it back into an object
    //         this.setState({order: JSON.parse(localStorageRef)});
    //     }
    //     // reference to the db
    //     this.ref = base.syncState(`${params.storeId}/fishes`, {
    //         context: this,
    //         state: 'fishes'
    //     });
    // };

    // componentDidUpdate() {
    //     //  set local storage // store order for that specific store
    //     localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order)); // JSON.stringify to convert object to string
    // };

    // componentWillUnmount() {
    //     base.removeBinding(this.ref);
    // };

    // addFish = (fish) => {
    //     // how do we update state?
    //     // 1. take a copy of existing state
    //     const fishes = {...this.state.fishes};
    //     // 2. add our new fish to that fishes variable
    //     fishes[`fish${Date.now()}`] = fish;
    //     // 3. set the new fishes object to state
    //     this.setState({
    //         fishes: fishes
    //     });
    // };

    // loadSampleFishes = () => {
    //     this.setState({
    //         fishes: sampleFishes
    //     });
    // };

    // addToOrder = (key) => {
    //     // 1. take a copy of state
    //     const order = { ...this.state.order };
    //     // 2. either add to the order or update the number in our order
    //     order[key] = order[key] + 1 || 1; // if order[key] exists, it'll increment by 1, or return 1 if it doesn't
    //     // 3. call set state to update our state object
    //     this.setState({ order })
    // }

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