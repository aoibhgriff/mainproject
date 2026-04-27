# mainproject
FEDev Main Project

Initial Commit

- Stage 0 -
Planning phase
My case study is for luxury car hire / wedding car hire so I first got into planning what I wanted to accomplish before starting the actual coding process

1. At a base level, I wanted to have clear differences between roles and what they can view / access
   - Guests can view 
   - Users with an account can make bookings
   - Admin accounts can view all booking details

2. I want to store car and user information in JSON files

3. I want to use an id parameter to be able to view car pages individually (something we did for Kyle in our SFS main project had a similar concept)

4. Store user session in cookies

5. Ideally make it so that if a booking is made the car is marked as "unavailable" or similar functionality

6. Complete the main functionality and JS scripting / JSON / Form handling myself

7. Use GenAI to complete the styling of the pages so I understand the full functionality of the site / have created it myself but have used GenAI as a helping hand tool to aid in task completion of tasks I know I could be capable of myself

8. Ideally complete the majority of the "A" requirements (I wanted to publish the site but without any help in that regard I fear it wouldn't be possible currently)

I began by creating a shell after installing the starter project containing all currently assumed routes and a cars.json file within the data folder and putting blank page svelte files in each route to work with.

Then I commit this Stage 0 update to github.

- Stage 1 - 
Setting up
I went through some basic motions to start setting up key parts of the site

1. Added placeholder data to cars.json

2. Imported the Car JSON data into the Cars page

3. Set up a basic view with just the name of the car and a link to the specific car using the [id]

4. Set up the ID specific car page to also take in the JSON data, display the car based on its ID and print the name and price.

5. Created some global component files (Nav.svelte, Header.svelte, Footer.svelte)

Next I plan to start looking at creating the booking form and populating the componenets

Then I commit this Stage 1 update to github.

- Stage 2 - 
Booking system setup
I created some of the core elements for the booking system and general updates

1. Wrote out my component files and updated layout.svelte accordingly (including some handling for the type of user currently logged in)

2. Added a booking link to the car ID page

3. Created a proper booking route with a form that allows you to book the car based on the ID of the car you were looking at

4. Removed an unnecessary file I added pre-emptively

5. Used GenAI to help me add a bookings table to the database / schema.js (currently unused)

6. Created a new route called my bookings where ideally, users will be able to see their own bookings

Next I plan to work on finishing the database booking entry and add files to the my bookings page

Then I commit this Stage 2 update to github.

- Stage 3 - 
Booking system finished
I finished implementing the booking system 

1. Changed a routing error in Nav

2. Used GenAI to add the database commands to the booking system

3. Performed an npm db:push

4. Created and populated the mybookings page and page.server.js to ensure the logged in user could only see their own bookings

5. Tested functionality by placing orders through different users and checking the mybookings page

Next I plan to complete the Admin Role specific page

Then I commit this Stage 3 update to github.

- Stage 4 -
Admin page implemented
Added an admin page only accessible to admins that can manage bookings

1. Created Admin page and page.server.js to allow for viewing bookings and performing approvals / rejections

2. Made change to Nav as admin wasnt showing up when logged into an Admin user

3. Made change to header as role wasn't printing beside userName
(both 2 and 3 were issues with the role of the user so i swapped to using the category)

4. Deleted some files I added pre-emptively before

Next I plan to go through my site and see if there's anything that needs fixing

Then I commit this Stage 4 update to github.

- Stage 5 - 
Update to bookings system
Added some form validation constraints and new form fields

1. I needed to use GenAI to help me again as I was adding more fields to the booking system which I set up through the DB so I added extra fields for duration, special requests, and pickup location to both the form and the DB

2. I pushed the DB update

3. I added a redirect from the booking form to "My Bookings" upon successful booking

4. Added ability for users to cancel their booking if not yet accepted

Then I commit this Stage 5 update to github.

- Stage 6 -
Car update
Replaced my placeholder car JSON and updated pages

1. I replaced my placeholder cars.json file with actual fully fledged car entries.

2. I sourced images for the respective cars to include.

3. I updated my cars page to showcase some of the new fields + images

4. I updated the cars[id] page to include all car information + images

Next I plan to do a small update to the booking page to showcase some of the car information as currently there is no information to the car actively being booked.

Then I commit this Stage 6 update to github.

- Stage 7 -
Package update
I didn't really have any features that screamed "luxury" so I added packages

1. I added package onto the booking db table.

2. I pushed the DB update

3. I Updated the book page to display package options

4. I added a single line in both mybookings and admin to display which package has been booked

5. I searched around and added bronze as default user category in auth.js upon testing registration and seeing no category get applied to new accounts

Next I plan to flesh out the fields for users (Add maybe 1 or 2)

Then I commit this Stage 7 update to github.

