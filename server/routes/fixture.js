const Fixture = require("../models/Fixture");
const {
  
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();



//Create

router.post("/", verifyTokenAndAdmin, async (req,res) => {
    const newFixture = new Fixture(req.body)

    try{
        const savedFixture = await newFixture.save();
        res.status(200).json(savedFixture);
    }catch(err) {
        res.status(500).json(err)
    }
})


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
  try {
    const updatedFixture = await Fixture.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFixture);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Fixture.findByIdAndDelete(req.params.id);
    res.status(200).json("Fixtures has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Fixtures 
router.get("/",  async (req, res) => {
  try {
    const fixture = await Fixture.findById(req.params.id);    
    res.status(200).json(fixture);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Fixtures
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let fixtures;

    if (qNew) {
      fixtures = await Fixture.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      fixtures = await Fixture.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      fixtures = await Fixture.find();
    }

    res.status(200).json(fixtures);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;