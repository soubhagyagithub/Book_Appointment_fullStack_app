const User = require('../model/user');


exports.getUser = async (req, res, next) => {
    try {
        const users =await User.findAll();
        res.status(201).json({allUsers: users})
        
    } catch (error) {
        console.log('Get user error',error);
        res.status(500).json({error: error})
    }
    
}

exports.addUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phone;

      

        const data = await User.create({ name: name, email: email, phonenumber: phonenumber });
        res.status(201).json({ newUserDetail: data });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Error adding user' });
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        if (!req.params.id) {
            console.log('ID is missing');
            res.status(400).json({ error: 'ID is missing' });
        }

        const userId = req.params.id;
        await User.destroy({ where: { id: userId } });

        // Send a success response
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const updatedName = req.body.name;
        const updatedEmail = req.body.email;
        const updatedPhoneNumber = req.body.phone;

        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Update the user fields
        user.name = updatedName || user.name;
        user.email = updatedEmail || user.email;
        user.phonenumber = updatedPhoneNumber || user.phonenumber;

        await user.save();

        console.log('Updated user');
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
