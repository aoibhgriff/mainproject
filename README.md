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