const { Project } = require('../models/project.model.js')

// if run into issue get rid of sort
const getProjects = (req, res) => {
  Project.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => {
      res.status(400).send(
                `There was an error with loading Projects. ${err}`
      )
    })
}

module.exports = { getProjects }
