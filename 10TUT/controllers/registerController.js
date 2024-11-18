const userDB = {
    users : require('../model/users.json'),
    setUser: function(data) {this.users = data}
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const {user,pwd } = rew.body;
}