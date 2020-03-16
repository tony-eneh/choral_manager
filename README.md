# choral_manager
A church choir song directory and song selector. 

Many church choirs keep physical files of their songs. Searching out songs from the growing heap is a tedious exercise.
Secondly, many choirs use some songs rather too frequently, while totally forgetting some other equally good compositions.

This webapp seeks to address both problems by:
  1. Maintaining a directory of learnt songs.
  2. Having a dated song selection entity. Which is actually a collection of songs used for a particular event.
  3. keep track of number of selections for any particular song.
  
  
## Usage
This is a RESTful API. It supports four http methods
- GET (to fetch data), 
- POST ( to create new data), 
- PUT ( to modify existing data), 
- DELETE ( to delete data).

The following endpoints exists:
- https://choir-file.herokuapp.com/api/selections
- https://choir-file.herokuapp.com/api/songs
- https://choir-file.herokuapp.com/api/files
- https://choir-file.herokuapp.com/api/users

You can access a single selection, song, file or user by attaching the resource id to the proper url.
e.g. to fetch a fetch a song with id 5d7ba9f704d6ba2e73f24d93, send a GET request to https://choir-file.herokuapp.com/api/songs/5d7ba9f704d6ba2e73f24d93

This project is very open to contributions. For further information, you may check  <a href= 'CONTRIBUTION.md'>CONTRIBUTION.md</a>
