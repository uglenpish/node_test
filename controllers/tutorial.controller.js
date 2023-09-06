const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if (!req.body.title) {
    res.status(400).send({
      message: "Not create"
    });
    return;
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  Tutorial.create(tutorial)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Произошла ошибка при создании учебника."
      })
    })
}

exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.like]: `%${title}%`} } : null;

  Tutorial.findAll( {where: condition} )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'При получении учебных пособий произошла ошибка.'
      })
    })
}