const userModel = require("../models/userModel");

const getUserData = async (req, res) => {
  const { userId } = req.body;
  const user = await userModel.findById(userId);
  if (!user) {
    return res.json({ success: false, message: "user not found" });
  }
  res.json({success:true,userData:{
    name:user.name,
    isAccountVerified:user.isAccountVerified
  }})
};

module.exports=getUserData