const AuthModel = require("../models/AuthModel");

const bcrypt = require("bcrypt");

class AuthController {
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/static
  //static : il n'y aura que la class AuthController qui peut accéder à register
  static async register(req, res) {
    try {
      const { email, password } = req.body;
      const getMail = await AuthModel.getUserByEmail(email);

      /**
       * Si l'email existe déjà, on renvoie une erreur
       */
      if (getMail[0].length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Email already exist",
        });
      }

      // hash le mot de passe
      const hash = await bcrypt.hash(password, 10);

      // je passe le MDP hashé dans le model
      const user = await AuthModel.create({ email, password: hash });
      res.status(201).json({
        message: "User created",
        user,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

module.exports = AuthController;
