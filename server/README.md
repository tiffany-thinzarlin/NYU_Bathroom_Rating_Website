(NYU Bathroom Rating Website)

## Overview

As an avid bathroom goer, I have spent many hours in NYU bathrooms. Through my personal experience, I've slowly gathered information on where the quietest and cleanest bathrooms are in some NYU buildings that I frequent. Using this as inspiration, I thought wouldn't others like me be also interested in knowing where the best bathrooms are in NYU to do their personal business in peace? Hence, the reason why I'm creating a website that lets people write and read reviews about bathrooms in NYU.

Using the web application, users will be able to see the rating, reviews, and locations of the bathrooms in NYU buildings. Users will have to log in using their NYU credentials in order to write reviews and ratings.

## Data Model

The application will store Users and Bathroom informations

- users can write multiple reviews and ratings
- each bathroom will have multiple written reviews and ratings, includings pictures of the bathroom.

## Sample Documents

Example of User information:

```javascript
{
  name: John Doe
  email: jdo123@nyu.edu
  password: //a password hash
  reviews: //lists of reviews
  accountCreationDate: 1.1.2023
}
```

An Example List of Review:

```javascript
{
  email: jdo123@nyu.edu
  name: John Doe
  reviews: [
    {bathroom: "RH7thFlrFemale", rating: 3, review: "I like it. has nice stalls", date: 12.1.2023}
  ]
}
```

## [Link to Commented First Draft Schema](db.mjs)

{
"name": String, // Name of the bathroom location
"address": String, // Address of the bathroom location
"description": String, // Description of the bathroom location
"ratings": [
{
"user": ObjectId, // User ID of the person who left the rating
"rating": Number, // Rating (1-5) given by the user
"review": String, // Optional review left by the user
"date": Date // Date the rating was left
}
],
"averageRating": Number, // The average rating for the bathroom location
"location": {
"type": String, // The type of location (e.g., restaurant, coffee shop, etc.)
"coordinates": [Number] // The latitude and longitude coordinates of the location
},
"amenities": [String], // A list of amenities available in the bathroom (e.g., baby changing table, accessible, etc.)
"createdBy": ObjectId, // User ID of the person who added the bathroom location to the app
"createdAt": Date, // Date the bathroom location was added to the app
"updatedAt": Date // Date the bathroom location was last updated in the app
}

## Wireframes

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

main page (with bathroom reviews by users) -> user login/signup page -> signup page to create a new user -> login page -> user see their previous reviews, updates on new reviews and can write new reviews

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new bathroom review and rating
4. as a user, I can view all of the reviews I've written in a single list
5. as a user, I am notified of updates in my reviews
6. as a non-registered user and user, I am able to scroll through all written reviews

## Research Topics

-(3 points) Will perform unit testing with javascript

- will use jest to perform front-end unit tests
- i'm using this to make sure that the front-end components are developed properly

-(4 points) Will perform end to end testing with cypress

- will use cypress to perfom e2e testing to ensure that both front-end and back-end works together to create a smooth user experience

-(6 points) Will use react to create the front-end

11 points total out of 10 required points

## [Link to Initial Main Project File](app.mjs)

## Annotations / References Used

1. jest: https://www.youtube.com/watch?v=ajiAl5UNzBU
2. cypress: https://www.youtube.com/watch?v=69SFwgWHUig&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU
3. react: https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
