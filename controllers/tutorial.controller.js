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

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Учебник не найден.'
      })
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: {
      id: id
    }
  }).then(num => {
    if(num === 1) {
      res.send({
        message: 'Учебное пособие успешно обновлено.'
      })
    } else {
      res.send({
        message: `Невозможно обновить Учебное пособие с id=${id}. Возможно, учебник не найден или req.body пуст!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: "Не удалось обновить запись"
    })
  })
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  }).then(nums => {res.send({
      message: 'Все книги успешно удаленны!'
    })
  }).catch(err => {
      res.status(500).send({
        message: err.message || 'При удалении всех учебных пособий произошла ошибка.'
      })
   })
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};