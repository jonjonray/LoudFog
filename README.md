# README


[Live Version](https://loudfog.herokuapp.com/#/)

## What is LoudFog?

LoudFog is a minimalist take on the popular music streaming site SoundCloud, made with the user in mind. This platform was built using React, Redux and Ruby on Rails and is hosted using Heroku. The file upload is handled using the Paperclip gem and all user files are hosted on AWS.

## Key Features

+ Ability to upload personal tracks and artwork with support for multiple file formats.
  * By using paperclip, we can validate these file format in a secure manner by first uploading them to our database and validating file extensions before uploading to AWS.
  * All secure AWS access keys are stored using Figaro to conceal sensitive data.
+ Can stream songs while navigating throughout the website without loss of quality or progress.
  * By implementing a full redux cycle with the Audio Player react component, the state can persist which song is being played even if the user has gone on to a different portion of the site.
+ Support for User Sign Up and Sign In
  * All user information is protected using BCrypt to protect passwords and by ensuring user session tokens when accessing the website.
+ Users can comment and like each other's posts.

##
