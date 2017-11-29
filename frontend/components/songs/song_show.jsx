import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';


class SongShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // this.props.fetchUsers();
    // this.props.fetchSongs();
  }

  render(){
    if (!this.props.song) {
      return (<div> LOADING </div>);
    } else {
    return (
      <div className="song-show">
        <div className="song-show-body">
        <div className="song-show-header-parent">
        <div className="song-show-header">
          <div className="song-show-header-left">
            <div className="song-show-top-left">

            <div className="song-show-play-button">

            </div>
            <div className="song-show-text">
              <div className="song-show-username">
                {this.props.users[this.props.song.user_id] ?
                  this.props.users[this.props.song.user_id].username :
                  null
                }
            </div>
              <div className="song-show-title">
                {this.props.song.title}
              </div>
            </div>
          </div>
        </div>
          <div className="song-show-header-right">
            <img src={this.props.song.image_url} />
          </div>


        </div>
        </div>
        </div>
      </div>
      );
    }
  }
}

export default SongShow;
