import Firebase from 'firebase';

// Firebase config.
const firebaseConfig = {
  apiKey: 'AIzaSyDBs6rkMhF2qKyciXYph-lfIRy-2kZE87o',
  authDomain: 'rossketleague.firebaseapp.com',
  databaseURL: 'https://rossketleague.firebaseio.com',
};

let instance = false;

const getInstance = function init() {
  // Set up Firebase.
  if (!instance) {
    instance = Firebase.initializeApp(firebaseConfig);
  }

  return instance;
};

export default {
  getInstance,
};
