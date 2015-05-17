# prime_solo_db_01

WEEKEND ASSIGNMENT GO

It's time to get started using passport! The purpose of this assignment is to show that you can follow development guides created by people on the interwebs. Follow along, make sure you're putting code in the correct files, and try to read through the code and understand what's happening under the hood. 

##A client's request

You've been tasked with developing an application for a client that is required to authenticate users against a Mongo database. You are familiar with Node.JS, Express and MongoDB so you're sure you can get it to work with some help. Luckily, you found a really awesome step-by-step guide that has just the bare minimum requirements!

##Go do the thing!

Create a new Node.JS solution in Web Storm (don't forget to create a .gitignore file and add .idea, node_modules and .DS_Store to it).

Next, starting from zero, follow the guide that you found [here](https://docs.google.com/a/primeacademy.io/document/d/1SRq1ubPt0AUn8VybhZZ6fBqOoKaKlPIwScycJzFeAFQ/edit?usp=sharing).

Once you've got everything installed and all of the code added, run the application. You should be able to register a test user and make sure the login screen works right. If it works, you'll see "true" displayed after logging in.

###Client changes

The client neglected to mention that users should also be able to save a first name, last name, and email address when signing up in the registration form. Make those changes. Verify that those fields are saving with Robomongo.

##Hard Mode

###Finish the users screen

You need to update the users.js route to send the users.html file.

Then you need to lock down the users.html file. Do this by adding a `req.isAuthenticated()` check to the express route.

Flesh out the users.html file. It should display a list of all users in the database (excluding passwords). You'll need to create an Ajax method to get the list of users, as well as a route to send the list of users that are in the database. The route that sends all users should also be protected by passport authenticate. **DO NOT SEND THE PASSWORDS IN THE RESPONSE** even though they're encrypted. 

**NOTE**
AJAX calls send Cookies if the url you're calling is on the same domain as your calling script. If you're authenticated, you shouldn't have a problem.

##Pro Mode

Integrate Grunt and Bootstrap into the project, and do some fancy styling!