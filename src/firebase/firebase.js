import * as firebase from 'firebase';


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database();

export { firebase, database as default }


// database.ref('expenses')
// .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });



// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'April',
//     amount: 2400,
//     createdAt: 0
// })

// database.ref('expenses').push({
//     description: 'Water',
//     note: 'April',
//     amount: 200,
//     createdAt: 0
// })

// database.ref('expenses').push({
//     description: 'Electric',
//     note: 'April',
//     amount: 500,
//     createdAt: 0
// })

// database.ref().set({
//     name: 'Ori Nahum',
//     age: 30,
//     isSingle: false,
//     location: {
//         city: 'Mizpe Avive'
//     }
// }).then(() => {
//     console.log("Data is saved")
// }).catch((e) => {
//     console.log('This faild. ', e)
// });

// database.ref('attributes').set({
//     hight: 30,
//     weight: 70
// }).then(() => { 
//     console.log('Second set call worked')
// }).catch((e) => {
//     console.log('Things get wrong. ' ,e)
// });


// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });