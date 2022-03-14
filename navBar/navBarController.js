const jwt = require('jsonwebtoken');
const NavBarData = require('../models/NavBarData');


class navBarController {
    async addNavBarData ( req, res ) {
        try {
            const { navBarData } = req.body;
            const navBar = new NavBarData(navBarData);
            navBar.save( (err) => {
                if (!!err) {
                    return res.status(403).json({ message: `${err._message}` })
                } else {
                    return res.json(
                        { message: "navBar data was succesfully saved!" }
                    )
                }
            });
        } catch (err) {

        }
    }
    async getNavBarData ( req, res ) {
        try {
            const navBarData = await NavBarData.find();
            res.json(navBarData);
        } catch (err) {
            console.log(err)
            res.status(200).json({ message: "Can't get navBar data", })
        }
    }
}

module.exports = new navBarController();