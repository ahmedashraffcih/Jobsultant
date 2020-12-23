const express = require("express");
const JobRouter = express.Router();
const mongoose = require("mongoose");
const jobs = require("../model/jobs");
let url =
  "mongodb+srv://Seif:00774400@jobsultant.nnpaa.mongodb.net/jobsultant?retryWrites=true&w=majority";

/// List Jobs ///
JobRouter.get("/", (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true }, () => {
    jobs.find((err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
        mongoose.disconnect();
      }
    });
  });
});

/// Search for Job using job_title ///
JobRouter.get("/getFiltered", (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true }, () => {
    jobs.find({ title: req.body.job_title }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
        mongoose.disconnect();
      }
    });
  });
});

/// Add Job ///
JobRouter.post("/", (req, res) => {
  mongoose.connect(url, () => {
    let job = new jobs(req.body);
    job.save((err) => {
      if (err) {
        res.json(err);
      } else {
        res.send("Added");
        mongoose.disconnect();
      }
    });
  });
});

//delete job///
JobRouter.delete("/:id", (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) {
      res.json(err);
    } else {
      jobs.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.status(200).json("is deleted");
          mongoose.disconnect();
        }
      });
    }
  });
});

module.exports = JobRouter;
