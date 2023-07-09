==============
CARE-GAZER
==============
Care-gazer is a web-based application that helps users find various types of care services, such as childcare, adultcare, eyecare, and more. The app provides a user-friendly interface to search and discover care providers in their local area based on specific criteria. The application is built using Next.js (https://nextjs.org/), a React framework for building server-side rendered applications bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The application is hosted on Vercel, a cloud platform for static sites and serverless functions. The application is deployed at https://care-gazer.vercel.app/

## FEATURES

=> Search for Care Providers: Users can search for care providers based on location, type of care, availability, ratings, and other relevant criteria.

1. Search for Care Providers in different categories such as opthalmologists, dentists etc.,
2. Search for Care Providers based on location, type of care, availability, ratings, and other relevant criteria.
3. View the list of care providers matching the search criteria.
4. View the location of care providers on a map.
5. View the list of care providers matching the search criteria on a map.
6. View the location of care providers on a map.

=> Provider Profiles: Each care provider has a detailed profile page that includes information such as services offered, pricing, availability, and user reviews.

1. View detailed profiles of care providers including services offered, pricing, availability, and user reviews.
2. Filter search results based on location, specialization (e.g. Orthodontist etc)
3. View their contact details like phone number, address, email ID
4. View their working hours and availability
5. Add these prospects into Favorite list so that they are easy accessible at any time

=> User Reviews and Ratings: Users can leave reviews and ratings for care providers based on their experience, helping others make informed decisions.

1. Leave reviews and ratings for care providers based on their experience, helping others make informed decisions.
2. View reviews and ratings left by other users for care providers.
3. View the average rating of a care provider based on all reviews left by users.
4. View the number of reviews left by users for a care provider.

=> Favorites List: Users can create a list of favorite care providers to easily access them later.

1. Create a list of favorite care providers to easily access them later.
2. View the list of favorite care providers.
3. Remove care providers from the list of favorites.

=> Booking and Scheduling: Some care providers may offer online booking and scheduling options for users to conveniently reserve their services.

1. Book appointments with care providers.
2. View the list of upcoming appointments.
3. Cancel appointments.

## TECHNOLOGIES USED

1. Front-end: HTML, CSS, JavaScript, React.js
2. Back-end: Firebase Cloud Functions
3. Database: Firebase Firestore
4. Authentication: Firebase Authentication
5. Maps and Location: Integration with Google Maps API (or any other map service)
6. Deployment: Vercel

## Getting Started

First, create a new Next.js app using the TypeScript flag:
npx create-next-app@latest --typescript care-gazer

You’ll be prompted with some configuration questions. Here are the choices I’m going for for this project:
Install ESLint — Yes
Install Tailwind CSS — Yes
Use src/ directory - Yes
Use experimental app/ directory - No (this project aims to be production-ready so I’m passing no the “experimental” things)
Import alias: @

After installation is finished you can cd in the folder and open it in your IDE
cd care-gazer
code .

## Running the app

To run the development server on http://localhost:3000/, simply type `npm run dev

## Next.js Basics

To make sure we all have our basics straight, let’s recap the way routing works in a Next.js app. In the pages directory you have three files:

=> \_app.tsx: this is the root component of your application, the parent of all your components and pages.
=> \_document.tsx: this file takes care of rendering the HTML and CSS, this is where you can customize the <head/> for your entire application for instance. You can use the <Head /> component from next/head in each single page to customize their own <head/>.
=> index.tsx: this is the code that corresponds to your ‘/’ route, your first entry point or home if you will.
Every file and folders you put in the pages folder will be turned into a route of your application. So for instance:
=> pages/services.tsx will show on www.care-gazer.com/services
=> pages/quicktips/do-you-have-a-cold.tsx where posts is a folder inside the pages folder will show on www.care-gazer.com/quicktips/do-you-have-a-cold

## Firebase

Needless to say, you need a Firebase account. If you don’t have one, start by creating one then head over to the Firebase console.

Here, create a new project:

1. Click on the “+ Add project” tile
2. Choose a name for your project (you can also modify the project id below the name input)
3. Enable or not Google Analytics for your project.
4. Click “Create project”
5. After a few minutes your project we’ll be ready to use and you’ll be redirected to its main page
6. Click on the “Web” (</>) icon (since we’re building a Web app) and pick a name for your app. You have the option to set up Firebase Hosting, I didn’t check the box as I won’t need hosting for this project.
7. Then, you can click on “Register app” and you’ll be provided with the Firebase configuration for your application

Now you can head back to your terminal and install Firebase:
npm install firebase
or if you are using yarn as package manager then run following command instead:
yarn add firebase

Create a new folder within src called firebase and within it create a file called app.ts (or whatever you want to call it) and paste the configuration code provided by Firebase after registering your app. We’re going to initialize our Firebase client app in there.

## Configuration Variables

Create a .env.local file at the root of your project (you can use the a .env.example file I created in the repo) and turn each of your project’s config object values in environment variables prefixed with NEXT*PUBLIC* as required in Next.js:
Once installed, let's configure some variables that need to be set before starting development. Open up `
.env.local` and add the following variables:
NEXT_PUBLIC_FIREBASE_API_KEY=YOURS
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOURS
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOURS
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOURS
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOURS
NEXT_PUBLIC_FIREBASE_APP_ID=YOURS

Those will become process.env.NEXT_YOUR_ENV_VAR where the value is needed in the app.

## Firebase Firestore

Now that we have our Firebase project set up, we can start adding some features to it. The first one we’ll be adding is Firebase Firestore. This will allow us to store data in our application.
To enable Firestore in our app using firebase follow these steps:

1. Go to the Firebase console
2. Click on “Firestore Database” in the left sidebar
3. Click on “Create database”
4. Choose “Start in production mode” and click “Next”
5. Choose a location for your database and click “Done”
6. Click on “Rules” in the left sidebar
7. Replace the content of the file with the following:
   rules_version = '2';
   service cloud.firestore {
   match /databases/{database}/documents {
   match /{document=\*\*} {
   allow read, write: if false;
   }
   }
   }
8. Click on “Publish” to publish the new rules
9. Inside index.js (or wherever we initialize firebase) import firestore from "
   firebase/firestore"
10. Then, initialize the firestore database by adding the following line:
    firebase.firestore()

## Firebase Authentication

Now that we have our Firebase project set up, we can start adding some features to it. The first one we’ll be adding is Firebase Authentication. This will allow us to create users and authenticate them in our application.
To enable authentication in our app using firebase follow these steps:

1. Go to the Firebase console
2. Click on “Authentication” in the left sidebar
3. Click on “Get started”
4. Click on “Set up sign-in method”
5. Enable “Email/Password” and click “Save”
6. Click on “Users” in the left sidebar
7. Click on “Add user” and create a user with your email and a password

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about firebase, take a look at the following resources

- [Firebase Documentation](https://firebase.google.com/docs) - learn about Firebase features and API.
- [Learn Firebase](https://firebase.google.com/docs) - an interactive Firebase tutorial.
- You can check out [the Firebase GitHub repository](https://github.com/firebase/) to see how they build their products
  using open source technologies like TypeScript and Node.js.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
