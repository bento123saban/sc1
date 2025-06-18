importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyCyTTBxSaP9moBFvd9x1QSzw37Vp55ftyI",
  authDomain: "bendhard16-d0262.firebaseapp.com",
  projectId: "bendhard16-d0262",
  storageBucket: "bendhard16-d0262.firebasestorage.app",
  messagingSenderId: "379521421845",
  appId: "1:379521421845:web:fa5eba120e8cf1b332b41c",
  measurementId: "G-PEB8LEGVG3"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: "/firebase-logo.png"
  };
  self.registration.showNotification(title, options);
});
