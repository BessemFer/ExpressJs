/**
 * Created by BeSsem on 04/11/2016.
 */
mudule.exports = function (app) {
    app.get('api/person/:id', function (req, res) {
        // get the data from database
        res.json({name:'bess', age:30});
    });
    app.post('api/person', function (req, res) {
        // save the data to database
    });
    app.delete('api/person/:id', function (req, res) {
        // delete the data from database
    });
}