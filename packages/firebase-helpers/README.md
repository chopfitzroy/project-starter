### Firebase 🔥

A couple of notes about Firebase so I don't forget.

- Firebase cloud functions can interact with the Firebase SDK but don't need to
- The [`firebase-functions`](https://www.npmjs.com/package/firebase-functions) package is for developing cloud functions locally
- The [Firebase admin SDK](https://www.npmjs.com/package/firebase-admin) is for interacting with Firebase services on your server (or in cloud function)
- You do [not need to provide credentials](https://stackoverflow.com/a/55953608) when using the Firebase admin SDK on Google services
- The [Firebase SDK](https://www.npmjs.com/package/firebase) is used for standard Firebase interaction whereas the Firebase admin SDK [allows you to bypass certain rules](https://stackoverflow.com/a/42959080) and gives more control in general

This package setups both a standard and an admin instance of Firebase.