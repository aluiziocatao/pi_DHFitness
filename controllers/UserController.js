const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {

  async authenticate(req, res, next) {

    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if(!user){
      return res.render('index', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('index', { notFound: true });
    }

    //Remove Senha
    delete user.password;

    req.session.user = user;

    res.render('cp', { user: req.session.user });
  },

  login(req, res, next) {
    res.render('cp');
  },

  logout(req, res, next) {
    req.session.destroy();
    res.redirect('/');
  },

  async update (req, res, next) {
    let id = req.params.id;
    let user = await User.findByPk(id);

    let { nome, email, level } = req.body;

    user.full_name = nome;
    user.email = email;
    user.level = level;

    await student.save();

    res.render('cp', { user, updated: true })
},

  async delete (req, res, next) {
    let id = req.params.id;
    let user = await User.findByPk(id);

    user.deleted = true;

    await user.save();

    res.render('cp', { user, deleted: true });
}

}