const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const mashupRoute = require("./routes/combineApi");
const auth = require("./routes/user");
const review =require("./routes/review")
const mongoose = require("mongoose");

dotenv.config();
const corsOptions = {
  origin: "*", //can be access from any where(no PORT restriction)
};
// Changed

//boiler plate - req,res options
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

// {* All the routes here *}

app.use("/api/combineApi", mashupRoute);
app.use("/api/user", auth);
app.use("/api/reviews", review);

app.listen(process.env.PORT || 5000, async () => {
  try {
    await mongoose.connect(
      //wating for moongose to connect
      process.env.DATABASE_URL,
      {
        useNewUrlParser: true,
      },
      () => {
        console.log("Connected to mongodb");
        // console.log(`Server running at port ${PORT}`);
        // added sometyhing
        //mew
      }
    );
  } catch (e) {
    //error
    console.log(e);
  }
});

