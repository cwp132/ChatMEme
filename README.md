# Chat MEme this
The BEST Chat for MEmes and Gifs.
The Deployment site on firebase:
https://chat-meme-3fbf6.firebaseapp.com/

## Description: 
ChatMEme is a cloud based Chat app that only uses gifs to communicate,

## Technologies Used: 
* Firestore 
* Giphy Api 
* Material Design Lite 
* JavaScript 
* CSS
* HTML
* AJAX
* Jquery

## Firestore: 
We decided to use FireStore to handle the Cloud storage and hosting, The main trouble we had with Firestore was the fact that only the person that created the database had the ability to deploy and view the data in the database. This made it tough to work on the project solo. If I would have started on a Github repository and deployed it using Github pages to start out with so we could have instant updating of the web site. Another problem we had was the Anonymous Login, we had learn the way to write rules which is basically just Read, Write, Create. Originally the rules only allowed google accounts to use the chat, so we had to change authentication rules so it would allow anybody to read and write as long as they were logged in.

## Giphy API: 
We used Giphy API for the images we display in chat because we all
had a little bit of experience with using it previously. The only problem we ran into wasn't even the API's fault. We were trying to add a feature where instead of showing the same gif each time you type, it showed you a different gif for the same search term. The problem happened when we accidentally created a loop of our data. We had the url running through our search term, so giphy was trying to find a gif based a url string. This happened about a 1000 times in the matter of seconds. It filled Firestore to the brim and we were not able to deploy for the rest of the day.

## Material Design Lite: 
We decided to use Material Design Lite for the CSS and HTML Library, we decided to use MDL because in our opinion it looks more modern then Bootstrap which has more of a "cartoony" style. We didn't really run into any problems with MDL besides the holes in the documentation, specifically in the components section. We might be being a little hard on it coming from BootStrap which has some of the best documentation of any tech I've used.

## Description: 
We created a way for people in the technology era to quickly communicate emotions, reactions, and pictures, uploaded from the users computer.

## Motivation: 
We were using slack and messing around with the gifs, when we thought, what if we made our chat so you could only use Gifs to communicate. A fun and unique way to communicate with people. You never know what gif is going to be shown with what you entered, but will always relate to your search term.

## Result: 
When we originally came up with the idea for a chat app we had tons of features that we wanted to add, while time went on with the project we realized some of the complexity of some of the features we wanted to add. One was we originally wanted to add a sign in method for most social media apps including Twitter, Facebook, and Github, after a while of reading docs I realized that it would be much easier to just use google login, also it was a good choice beacuse i dont know a single person who doesn't have a google account.

## Improvements: 
The number one thing I would like to add is a way to have the URl saved to the cloud instead of the text, this would allow us to have random gifs for the same search term, but it would show the same across all computers. Another thing we would like to add is seperate channels like slack. I would also like to add a share button to the gif so you are able to get the url. Also we would like to add a notification aspect so we can see when people respond to. 
 
