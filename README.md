# LOUDFOG

![ ](https://s3-us-west-1.amazonaws.com/loudfog/cloud-2.png)

[Live Version](https://loudfog.herokuapp.com/#/)

## What is LoudFog?

LoudFog is a minimalist take on the popular music streaming site SoundCloud, made with the user in mind. This site was built using React, Redux and Ruby on Rails and is hosted using Heroku. The file upload is handled using the Paperclip gem and all user files are hosted on AWS.

## Key Features

+ Ability to upload personal tracks and artwork with support for multiple file formats.
  * By using paperclip, we can validate these file format in a secure manner by first uploading them to our database and validating file extensions before uploading to AWS.
  * All secure AWS access keys are stored using Figaro to conceal sensitive data.

![ ](https://media.giphy.com/media/xUOxfnmWoB3opPo3pm/giphy.gif)

+ Can stream songs while navigating throughout the website without loss of quality or progress.
+ Support for User Sign Up and Sign In
  * All user information is protected using BCrypt to protect passwords and by ensuring user session tokens when accessing the site.

![ ](https://media.giphy.com/media/xUOxf1XU8pRIMmfIEU/giphy.gif)

## Development Issues and Solutions

One of the biggest issues while making this application was routing. Since it's a single page application, all components need to render without affecting neighboring components. The solution to this was to compartmentalize the application into two major components: Main Display Right and Left. This allows for components to render and re-render within their respective scopes and creates a seamless experience for the user.

```javascript
const MainRight = () => (
  <div className="main-right">
    <Switch>
    <Route exact path="/songs/upload" component={PlaceholderCloud} />
    <ProtectedRoute path="/songs/users/:userId" component={UserShowContainer} />
    <ProtectedRoute path="/songs/:songId" component={SongShowContainer} />
    <ProtectedRoute path="/songs" component={Placeholder} />
    </Switch>
  </div>
);

const MainLeft = () => (
  <div className="main-left">

    <ProtectedRoute path="/songs" component={SongIndexContainer} />
  </div>
);
```

There was also the issue of playing audio and having it persist throughout the site. Since play commands can be issued from almost any component, it was important to ensure the integrity of the application state. This was solved by implementing a full redux cycle with the Audio Player react component. The state can persist which song is being played even if the user has gone on to a different portion of the site.

```javascript
const playSong = () => ({
  type: PLAY_SONG
});

const pauseSong = () => ({
  type: PAUSE_SONG
});

const playNewSong = (songId) => ({
  type: PLAY_NEW_SONG,
  songId
});

const _nullPlayer = {
  playing: false,
  songId: null
};

const playerReducer = (state = _nullPlayer, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
      case PLAY_SONG:
        newState = merge({}, state, { playing: true});
        return newState;
      case PLAY_NEW_SONG:
        return { playing: true, songId: action.songId};
      case PAUSE_SONG:
        newState = merge({}, state, { playing: false});
        return newState;
      default:
        return state;
    }
};

```
## Future Upgrades

+ Graphical waveform that maps to song audio
+ Search functionality
+ Ability to create playlists without having to like songs
