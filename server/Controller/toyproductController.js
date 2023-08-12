
/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {

    const locals = {
        title: 'NodeJs',
        description: "Free NodeJs "
    }
    res.render('index', locals);
}
/**
 * GET /
 * new toy form
 */

exports.addToy = async (req, res) => {

    const locals = {
        title: 'Add new toy',
        description: "New Toy appear! "
    }
    res.render('toy/add', locals);
}
/**
 * POST /
 * create toy form
 */
exports.postToy = async(req, res) => {
    console.log(req.body);

    const newToy = new Toy({
        Name: req.body.Name,
        Price: req.body.Price,
        Quantity: req.body.Quantity,
        Image: req.body.Image,
    }) 
    
    try {
        await Toy.create(newToy);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
    
}