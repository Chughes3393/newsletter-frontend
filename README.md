#Jumbalaya Newsletter Application

###Technologies used:

Jumbalaya is a newsletter application created with ReactJs and Bootstrap. This app has responsive mobile design and uses EmailJS on the contact form to automically send the admin an email of any user questions or comments.

I built this project using React functional components, Context Provider, React Router, Axios, JQuery, HTML, Bootstrap Icons, and CSS.

This application links up with a PostGreSQL database via Java and Spring Tool Suite 4, written in Java 17.

[Live Site](https://newsletter-frontend.herokuapp.com/) (Deployed on Heroku)

[Backend](https://newsletter-appp.herokuapp.com/) (Deployed on Heroku)

[Figma](https://www.figma.com/file/fWYtxppSY74glrcWLnyiBq/Newsletter_App?node-id=0%3A1)

[Github Link to Backend](https://github.com/Chughes3393/newsletter-backend)

###Approach:

I used npx create-react-app and laid out the basis of my website using React Router: Home Page (which also functions as a sign up page), Login page (for User Contexts, and in the future, actual authentication), a working contact page using EmailJS, and for the admin, a posts page where you can view, edit, delete, and make new posts, as well as a subscribers page where you can view, edit, delete and add new subscribers. 

The sign-up form on the home page actually uses CRUD functionality to add new subscribers to my database.

Once I had my pages and functionality in mind I built out my backend using a PostGreSQL database via Spring Tool Suite and Java.

My endpoints, also listed in my wireframe are: 

####POSTS

| Request       | CRUD          | End-point   |
| ------------- |:-------------:| -----------:|
| GET           | READ          | 'allposts'  |
| PUT           | UPDATE        | 'post/{id}' |
| POST          | CREATE        |  'addpost'  |
| DELETE        | DELETE        | 'post/{id}' |

####SUBSCRIBERS

| Request       | CRUD          | End-point         |
| ------------- |:-------------:| -----------------:|
| GET           | READ          | 'allsubscribers'  |
| PUT           | UPDATE        | 'subscriber/{id}' |
| POST          | CREATE        |  'addsubscriber'  |
| DELETE        | DELETE        | 'subscriber/{id}' |


I have two models that correspend to two controllers. One model/ controller is for my posts. the other model/ controller is for my subscribers. I use @RequestController, @CrossOrigin, @AutoWired, and various @Mapping Java notations for my backend.

###Purpose of project as a problem statement:

I want to create the perfect newsletter application that combines the best of all the existing newsletter applications, and puts these elements into one new application, the one to rule them all. 

Specifically I want to create a subscription based newsletter service where your readers can pay you for your writing, but also has the design potential and analytic capabilities of MailChimp or the simplicity of Tiny Letter. While there is still a lot of work to be done, Jumbalaya aims to be your new newsletter provider. 

###Target End User:

Are you a fed-up content creator not knowing which newsletter application to use? Well I am too, which is why I created Jumbalaya, named that because Jumbalaya is one of my favorite Hank Williams song's and it just stuck.

When complete, this application will be your online publication for your subscribers, a sign-up sheet for your subscribers in the waiting, and an editing salon for you while you crank out the best content an inbox has seen this side of Silicon Valley. We will also set up a subscription service for you so you can earn royalties off your digital/verbal gold you spew.

###Unsolved Problems:

I want to build out administrator, guest, and subscriber functionality/ contexts. I want to figure out how to actually send an email out to my subscribers stored in my database.

///// &&&&& ///// &&&&& ///// &&&&& ///// &&&&& ///// &&&&& ///// &&&&& ///// &&&&& ///// &&&&& 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
