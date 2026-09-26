const { User } = require("../models");
class UserController {
  async getUser(req, res) {
    try {
      const data = await User.findAll();
      
      res.status(200).json({
        message : "berhasil ambil data!",
        data: data
      })
    } catch (error) {
      res.status(400).json({
        message: "gagal ambil data"
      })  
    }
  }
}

module.exports = UserController