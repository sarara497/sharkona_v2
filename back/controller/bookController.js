const Company = require('../model/companySchema').Company;
const Client = require('../model/clientSchema').Client;
const auth = require("./auth")
const Event = require('../model/eventSchema').Event

// exports.retrieveOneEvent = async (req,res)=> {
//     try{
//      const event = await Event.findById(req.params.id)
//      res.json(event)
//     }catch(err){
//      res.send('Error' , err)
//     } 
//   }
exports.createEvent = (req, res) => {
   //const client = 
   console.log(req.body)
   const event = new Event(req.body)
   event.save()
      .then((event) => res.json({ success: true, event }))
      .catch((err) => res.status(404).json({ success: false }))

}

exports.bookEvent = (async (req, res) => {
   //const client = 
   console.log(req.body) // userId and eventId
   try {
      const user = await findOne({ '_id': req.body.userId })
      if (user) {//if event already booked for loop at userevent array and ewqhiqewhjqew
         user.event.push(req.body.eventId)
         return res.json({ success: false, events: user.event })
      } else {
         res.json.status(404).json({ success: false })
      }

   } catch {
      res.status(404).json({ success: false })
   }



})