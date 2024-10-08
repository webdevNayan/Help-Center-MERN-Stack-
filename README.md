Q1. How can you implement shared functionality across a component tree?

Ans: I can use the Redux toolkit to implement shared functionality through a component tree. Because using the Redux toolkit I can make a centralized store and I can access the store anywhere from the component tree.


Q2. Why is the useState hook appropriate for handling state in a complex component?

Ans: The use State hook is appropriate for handling state in a complex component because it allows you to manage state locally, it is also easy to use, and because of its good readability, it is easy to understand and debug from a developer's perspective. 


Q3.Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented. 

Ans: To see a video demonstration of this assignment, please watch the video available in the root folder. You can also watch the demonstration video using this Google Drive link if the root folder video is broken: https://drive.google.com/file/d/1DQoar37UTIb6pfgoT_cCWxBIWM6sqCMu/view?usp=sharing


To run this application, please make sure you have installed Node.js, MondoDB Compass, and Postman Desktop on your machine. After cloning this repository, please do npm install for the frontend and backend. Please make sure the MongoDB Compass is running and connected. To run the frontend, please navigate into the frontend folder and give the command 'npm install' and then 'npm run dev' in your terminal. And to run the backend, please navigate into the backend folder using another terminal and run the command 'npm install' and then 'npm start' in your terminal.

Now The MongoDB Compass is running on the machine and connected, and both the front end and backend are running, so to add the cards to the MongoDB database, you can use Postman Desktop Againt. http://localhost:5000/api/cards  This is the REST API end point, and you can add the cards in this kind of JSON format.


 {
    "title": "Abstract support",
    "description": "Get in touch with a human."
}

After adding the cards using the REST API endpoint throw Postman Desktop Againt, please do a refresh in the browser. To search for any card, you can use the search bar, and to see any single card in detail, you can simply click any card, and the card details will appear in an overlay. After reading the data, you can close the overlay as well.

The whole application is made using the MERN stack.

For example, this is the card data available in the UI. If you want, you can also add all the data there using the above title and description JSON format:

Branches
Abstract Branches lets you manage, version, and document your designs in one place.

Manage your account
Configure your account settings, such as your email, profile details, and password.

Manage organizations, teams, and projects
Use Abstract organizations, teams, and projects to organize your people and your work.

Manage billing
Change subscriptions and payment details.

Authenticate to Abstract
Set up and configure SSO, SCIM, and Just-in-Time provisioning.

Abstract support
Get in touch with a human.


--- Nayan Das
Linkdin: https://www.linkedin.com/in/web-developer-nayan/
Email: official.nayandas@gmail.com
Github: https://github.com/webdevNayan