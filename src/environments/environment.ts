// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDr33FDLHabJTV35OZdzB7FWRnhRFNMusc",
    authDomain: "code-snippet-app.firebaseapp.com",
    databaseURL: "https://code-snippet-app.firebaseio.com",
    projectId: "code-snippet-app",
    storageBucket: "code-snippet-app.appspot.com",
    messagingSenderId: "776786388085"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
