POST /api/auth/register --> registers a new user.

- Register requires a first_name, last_name, email, username, and password

POST /api/auth/login ---> login and receive token to access rest of API

- Login requires a username and password

## ALL endpoints below this line require being logged in with a token stored to access - if this is annoying for development purposes I can turn it off

GET /api/users --> returns list of all registered users

GET /api/users/:id --> returns details about the specific user who’s ID is passed

GET /api/users/:id/potlucks --> returns all the potlucks that the given user id is organizing or attending as guest

GET /api/users/:id/potlucks/:potluck_id/items --> returns all items that a specific user is responsible for at a specific potluck

POST /api/users/:id/potlucks --> creates a new potluck with the specified user as the organizer

- Requires event_name and event_date, has optional properties of event_description, event_address, event_time

DELETE /api/users/:id --> Deletes user with the specified ID, not sure why you would really need this, but good to have

## PUT /api/users/:id --> Can update the user information that you passed in on register, just pass in whatever changes you want with the property names matching the ones from register

GET /api/potlucks ---> Returns list of all potlucks

GET /api/potlucks/:id --> Returns specified potluck

GET /api/potlucks/:id/guests ---> Returns all people invited to a specific potluck

GET /api/potlucks/:id/items ---> Returns all items to be brought to a specific potluck

DELETE /api/potlucks/:id ---> Deletes the specified potluck

PUT /api/potlucks/:id ---> Updates potluck information - Properties that can be changed are event_name, event_description, event_address, event_date, event_time

POST /api/potlucks/:id/items --> Create a new item for the specified potluck.
-only requires an item_name, other optional fields are item_category, item_name, item_description, item_amount , assigned_to_user_id (working on a way to make this last one happen more dynamically)

GET /api/users/:id/potlucks/:potluck_id --> Returns a specific potluck that a specific user is invited to

POST /api/potlucks/:id/guests ---> for the specified potluck, this will invite a user based on their username. Only need to pass in username property.

/ PUT /api/potlucks/:id/items/:item_id ----> assigns the specified item to the user who’s username is passed. Only required property is username of person you want to assign to.
Also the ability to invite people is working, not sure I mentioned how to use it though:
/ POST /api/potlucks/:id/guests ---> for the specified potluck, this will invite a user based on their username. Only need to pass in username property.
