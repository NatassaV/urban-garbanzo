const { Project } = require('../models/project.model.js')

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

const addProject = (req, res) => {
  Project.create(req.body).then(result => {
    res.status(201).send(result)
  }).catch((err) => {
    res.status(400).send(
              `There was an error updating projects ${err}`
    )
  })
}

module.exports = { getProjects, addProject }
