import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <li>
        {this.props.song.title}
      </li>
    );
  }
}
