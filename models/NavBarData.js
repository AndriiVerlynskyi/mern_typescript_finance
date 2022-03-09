const { Schema, model } = require('mongoose');


const DropdownElement = new Schema({
    dropdownElementName: {type: String, required: true},
    dropdownElementLink: {type: String, required: true}
})

const NavButton = new Schema({
    title: {type: String, required: [true, "Title of navButton is required"] },
    icon: {type: String, required: [true, "Icon of navButton is required"] },
    link: {type: String, required: [true, "Link of navButton is required"] },
    isNewFeature: {type: Boolean, required: true },
    withCollapseWrapper: {type: Boolean, required: true },
    dropdownElementsList: [DropdownElement]
})

const NavItemsList = new Schema({
    navTitle: {type: String, required: true},
    listElements: { type: [NavButton], required: [true, "The list of navBar elements is required!"] }
})

const NavBarData = new Schema({
    navItemsList: { type: [NavItemsList], required: [true, "navItemsList is required!"] }
})

module.exports = model("NavBarData", NavBarData)
