// npm i mongoose
// connecting it the local database

const mongoose = require("mongoose");

//connection creation and creating a new db
//use ttechnical
mongoose
  .connect("mongodb://localhost:27017/ttechnical")
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err);
  }); //returns promise

// Schema
//A mongoose schema defines the structure of the document,
//default values, validators etc./

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// a mongoose model is a wrapper on the Mongoose Schema.
//A mongoose schema defines the structure of the document,
//default values, validators, etc./ whereas a mongoose model
// provides an interface to the database for creating ,
//querying, updating, deleting records, etc.
// collection creation //must be captial var name //camelCase

//db.createCollection("") similar for ref

const Playlist = new mongoose.model("Playlist", playlistSchema); //creating a table

//create documnet or insert one document
// const createDocumnet = async () => {
//   try {
//     const reactPlaylist = new Playlist({
//       name: "Node JS",
//       ctype: "Back end",
//       videos: 80,
//       author: "Thapa Technical",
//       active: true,
//     });
//     const result = await reactPlaylist.save(); //db.collection.insertOne()
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }; //insert  //async await better than promise

//*************** Create  ******************* */

//insertMultiple document //creating documents
// const createDocument = async () => {
//   try {
//     const javaPlaylist = new Playlist({
//       name: "Java",
//       ctype: "Full Stack",
//       videos: 80,
//       author: "Thapa Technical",
//       active: true,
//     });
//     const mongoPlaylist = new Playlist({
//       name: "mongodb ",
//       ctype: "databsase",
//       videos: 80,
//       author: "Thapa Technical",
//       active: true,
//     });
//     const expressPlaylist = new Playlist({
//       name: "Express Js",
//       ctype: "Back end",
//       videos: 90,
//       author: "Thapa Technical",
//       active: true,
//     });
//     const result = await Playlist.insertMany([
//       javaPlaylist,
//       mongoPlaylist,
//       expressPlaylist,
//     ]); //db.collection.insertMany()
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();

/******************* Read or Query********************* */

//db.collection.find()

// const getDocument = async () => {
//  simple read and filter
// const readResult = await Playlist.find({ ctype: "Back end" }).select({
//   name: 1,
// });

// comparison operators
// const readResult = await Playlist.find({ videos: { $gte: 80 } }).select({
//   name: 1,
// });

// const readResult = await Playlist.find({ ctype: { $in: ["Back end", "databsase"] } }).select({
//   name: 1,
// });

//logical opeartors
//   const readResult = await Playlist.find({
//     $and: [{ author: "Thapa Technical" }, { ctype: "Back end" }],
//   }).select({
//     name: 1,
//   });
//   console.log(readResult);
// };
// getDocument();

//Comparison Operators
// $gt greater than
//$gte greater or equal
// $lt less than
// $lte less or equal
// $ ne not equal
//$in take arrays return if available
// #nin except in

//logical operators in MongoDb
// $and join query classes
// $not inverts the effect of a query expresion and returns documents that do not match the query expression
// $nor join query clauses with a logcal NOR return all documents that fail to match both clauses
// $or joins query clauses with a logical OR returns all documents that match the conditions of either clasue

/********Update documents in Mongodb******* */
// db.collection.updateOne({fi;ter},{$set:{}})

// const updateDocument = async (_id) => {
//   try {
//     const upd = await Playlist.updateOne(
//       { _id },
//       { $set: { name: "Mongodb" } }
//     );
//     console.log(upd);
//   } catch (err) {
//     console.log(err);
//   }
// };

// updateDocument("659d1bec4097edcf54f8ef17");

/*****Delete Document**** */

//db.collection.delete();

// const deleteDocument = async (_id) => {
//   try {
//     const result = await Playlist.deleteOne({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// deleteDocument("659d1bec4097edcf54f8ef17");
data = Playlist.find({ctype: "Back end"});
console.log(data);
