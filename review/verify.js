/*
Fetch the yelp data set based on location
Display it to the user

If user wants to review based on our criteria:
First determine if the biz in our db by comparing the Yelp id
If it is NOT in our db,
Ask user to enter the biz name.
Compare the user input @lowercase to the yelp biz name also @lowercase
If they are the same, then add the name to our DB


// VERIFY CURRENT DATA
Whenever someone pulls data, check the biz name in the yelp set against ours and prompt
for the user to update it if changed.

//IS BUSINESS CLOSED
Also store an 'isClosed: false" prop just like Yelp. If yelp value is different, prompt user
and update.


* */