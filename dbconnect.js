 //Nhớ cài Mongoose
 // npm      i       --S      mongoose
const userName = "DoungHuynh";
const userPassword = "newpasss";

const dbName = "ATN_shop";
 

const url = `mongodb+srv://DuongHuynh:emyen123@atn-shop.0m9bb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority${userName}:${userPassword}@cluster0.x8ieg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

 
 

///////////////////////////////////////////////////a




/////////////////////////////////////////////////////////a
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}
