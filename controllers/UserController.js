const { User } = require("../models");

module.exports = {

  async authenticate(req, res, next) {

    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });
    if(!user){
      return res.render('cp', { notFound: true });
    }

    delete user.password;

    req.session.user = user;

    res.render('cp', { user: req.session.user });
  },
}