const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  bio: String
});


const User = mongoose.define('User', UserSchema);

module.exports = User;