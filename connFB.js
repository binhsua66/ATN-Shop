var admin = require("firebase-admin");

/*
Firebase service account
firebase-adminsdk-z72y4@webcloud-53c9b.iam.gserviceaccount.com
*/

//var serviceAccount = require("./webcloud-53c9b-firebase-adminsdk-z72y4-e4bb8c3b00.json");
var serviceAccount = require("./cloudproject-985f9-firebase-adminsdk-cwlzz-dbb712c361.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://cloudproject-985f9-default-rtdb.firebaseio.com"
});


/*const userName = "bao2002";
const userPassword = "newpasss";

const dbName = "ATN_shop";
 

const url = "mongodb+srv://" +
    userName + ":" + userPassword +     
    "@cluster0.x8ieg.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";
*/
var db = admin.database();

const ref = db.ref('/User');

const childref = ref.child('2000');

childref.set({
	NNTu: {
		birthday: "3/12/1979",
		fullname: "NNTu"
	}
	
});