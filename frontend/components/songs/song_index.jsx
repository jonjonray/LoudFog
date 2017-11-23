import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
class SongIndex extends React.Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div>
        <NavBarContainer />
      </div>
  );
  }
}



export default SongIndex;
