import React from "react";
import Slide from 'react-reveal/Slide';


class Pokemon extends React.Component{

    formatId = (id) => {
        let stringId = id + '';
        while (stringId.length < 3) {
            stringId = '0' + stringId;
        }
        return stringId;
    };

    render(){
      const {pokemon,id} = this.props;
      return <Slide left>
      <div className="pokemon--species">
              <div className="pokemon--species--container">
                  <div className="pokemon--species--background">{this.formatId(id)}</div>
                <div className="pokemon--species--sprite">
                  <img className="pokemon--list--sprite" src={`../../images/pokemon/${id}.png`} />
                </div>
              </div>
            </div>
            </Slide> 
      }
  }

  export default Pokemon;