# How to Extend
The Tech Wars RSS Functions use [Cloud Functions for Firebase](https://firebase.google.com/docs/functions/)
and [Firebase Hosting](https://firebase.google.com/docs/hosting/) under the hood,
so you'll need to have a Google Account and have a Firebase project to use.

## Initializing Firebase
Make sure you've installed the Firebase CLI tools, and then run 
`firebase init` at the root of the project. You'll need to associate the
project with the one you've set up from earlier.

## Customizing
You can customize the name/location of the RSS file by modifying `fetcher.ts`
among other attributes.