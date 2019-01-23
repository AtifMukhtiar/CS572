let express = require('express');
let router = express.Router();


router.get('/', async function (req, res, next) {
    res.send(`Use /queries/1, /queries/2, /queries/3 and so on..`);
});


router.get('/1', query1);
router.get('/2', query2);
router.get('/3', query3);
router.get('/4', query4);
router.get('/5', query5);
router.get('/6', query6);
router.get('/7', query7);
router.get('/8', query8);
router.get('/9', query9);
router.get('/10', query10);
router.get('/11', query11);
router.get('/12', query12);
router.get('/13', query13);
router.get('/14', query14);
router.get('/15', query15);
router.get('/16', query16);
router.get('/17', query17);
router.get('/18', query18);
router.get('/19', query19);
router.get('/20', query20);
router.get('/21', query21);
router.get('/22', query22);
router.get('/23', query23);


async function query1(req, res, next) {
    try {
        let document = await req.dbCollection.find({}).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query2(req, res, next) {
    try {
        let document = await req.dbCollection.find({}).project({_id: 1, name: 1, district: 1}).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query3(req, res, next) {
    try {
        let document = await req.dbCollection.find({}).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query4(req, res, next) {
    try {
        let document = await req.dbCollection.find({}).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            'address.zipcode': 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query5(req, res, next) {
    try {
        let document = await req.dbCollection.find({district: 'Bronx'}).project({}).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query6(req, res, next) {
    try {
        let document = await req.dbCollection.find({district: 'Bronx'}).limit(5).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query7(req, res, next) {
    try {
        let document = await req.dbCollection.find({district: 'Bronx'}).limit(5).skip(5).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query8(req, res, next) {
    try {
        let document = await req.dbCollection.find({'address.coord.0': {$lt: -95.754168}}).project({}).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query9(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            $and: [
                {cuisine: {$ne: 'American '}},
                {'grades.score': {$gt: 70}},
                {'address.coord.0': {$lt: -65.754168}}
            ]
        }).project({}).limit(5).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query10(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            name: {
                $regex: 'will',
                $options: 'i'
            }
        }).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query11(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            name: {
                $regex: 'ces$',
                $options: 'i'
            }
        }).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query12(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            name: {
                $regex: 'reg',
                $options: 'i'
            }
        }).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query13(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            $and: [{district: 'Bronx'}, {cuisine: {$in: ['American ', 'Chinese']}}]
        }).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query14(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            district: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}
        }).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query15(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            district: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}
        }).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query16(req, res, next) {
    try {
        let document = await req.dbCollection.find({'grades.score': {$lte: 10}}).project({
            restaurant_id: 1,
            name: 1,
            district: 1,
            cuisine: 1,
            'grades.score': 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query17(req, res, next) {
    try {
        let document = await req.dbCollection.find({
            'address.coord.1': {$gt: 42, $lte: 52}
        }).project({
            restaurant_id: 1,
            name: 1,
            address: 1,
            _id: 0
        }).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query18(req, res, next) {
    try {
        let document = await req.dbCollection.find({}).project({}).sort({name: 1}).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query19(req, res, next) {
    try {
        let document = await req.dbCollection.find({}).project({}).sort({name: -1}).toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query20(req, res, next) {
    try {
        let document = await req.dbCollection.find({})
            .project({})
            .sort({cuisine: 1, district: -1})
            .toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}

async function query21(req, res, next) {
    try {
        let document = await req.dbCollection.find({'address.coord': {$exists: false}})
            .project({})
            .toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query22(req, res, next) {
    try {
        let document = await req.dbCollection.find({'address.coord': {$type: "double"}})
            .project({})
            .toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


async function query23(req, res, next) {
    try {
        let document = await req.dbCollection.find({name: {$regex: "^Mad"}})
            .project({
                'name': true,
                'district': true,
                'address.coord': true,
                'cuisine': true
            })
            .toArray();
        res.send(document);
    } catch (e) {
        next(e);
    }
}


module.exports = router;



