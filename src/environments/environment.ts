// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyCC-mWRVyir7uod12m2sUpXBfXO-r7gnDc",
  authDomain: "code-snippets-app-demo.firebaseapp.com",
  databaseURL: "https://code-snippets-app-demo.firebaseio.com",
  projectId: "code-snippets-app-demo",
  storageBucket: "code-snippets-app-demo.appspot.com",
  messagingSenderId: "454995901252"
}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
