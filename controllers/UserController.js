const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {

  async authenticate(req, res, next) {

    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });
    if(!user){
      return res.render('login', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login', { notFound: true });
    }

    delete user.password;

    req.session.user = user;

    res.render('index', { user: req.session.user });
  },
}