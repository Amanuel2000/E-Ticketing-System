const Ticket = require("../models/Ticket");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();



//Create

router.post("/", verifyTokenAndAdmin, async (req,res) => {
    const newTicket = new Ticket(req.body)

    try{
        const savedTicket = await newTicket.save();
        res.status(200).json(savedTicket);
    }catch(err) {
        res.status(500).json(err)
    }
})


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json("Ticket has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Ticket
router.get("/",  async (req, res) => {
  try {
    const tickets = await Ticket.findById(req.params.id);    
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Tickets
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let tickets;

    if (qNew) {
      tickets = await Ticket.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      tickets = await Ticket.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      tickets = await Ticket.find();
    }

    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;