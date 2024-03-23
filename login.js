const firebaseConfig = {
  apiKey: "AIzaSyB1RKqxUgMiYlo2uw4OLG-vQ2DxS7rW3uI",
  authDomain: "loginpage-79ccf.firebaseapp.com",
  databaseURL: "https://loginpage-79ccf-default-rtdb.firebaseio.com",
  projectId: "loginpage-79ccf",
  storageBucket: "loginpage-79ccf.appspot.com",
  messagingSenderId: "426710315916",
  appId: "1:426710315916:web:ccffb52cf664556f549ca9"
};

firebase.initializeApp(firebaseConfig);

var loginFormDB = firebase.database().ref('loginForm');

document.getElementById('loginForm').addEventListener("submit", loginForm); // Listen for the form submit event

function loginForm(e) {
  e.preventDefault();

  var Username = getElementVal('loginUsername');
  var Password = getElementVal('loginPassword');
  var deliveryLocation = getElementVal('deliveryLocation');

  console.log("Username:", Username);
  console.log("Password:", Password);
  console.log("Delivery Location:", deliveryLocation);

  saveMessage(Username, Password, deliveryLocation);
}

const saveMessage = (Username, Password, deliveryLocation) => {
  var newloginForm = loginFormDB.push();
  newloginForm.set({
      Username: Username,
      Password: Password,
      deliveryLocation: deliveryLocation,
  }).then(() => {
    console.log("Data saved successfully");
  }).catch((error) => {
    console.error("Error saving data:", error);
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
