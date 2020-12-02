const {
  Schema,
  model
} = require('mongoose')

const ItemSchema = new Schema({
  title:String,
  description:String,
  image:String,
  price:[Number],
  category:[String].
  status:{
    type:String,
    enum:["Sold","Available","Down-Paid"]
    }
  }
}, {
  timestamps: true
})

module.exports = model("Item", userSchema)
