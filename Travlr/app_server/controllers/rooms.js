var fs = require('fs');
var roomsData = JSON.parse(fs.readFileSync('./data/rooms.json'));

/* GET rooms page */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, roomsData});
};
module.exports = {
    rooms
};