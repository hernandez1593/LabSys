var express = require('express');
var app = express();
var done = false;
var mongojs = require('mongojs');

var db = mongojs('localhost:27017/labsSystem', ['laboratory', 'administrator', 'request']);
var bodyParser = require('body-parser');

//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

//Creacion de schemas de base de datos

//var

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());




//obtener todos los requests
app.get('/consultRequests', function (req, res) {
    db.request.find(function (err, docs) {
        //console.log(docs);
        res.json(docs);
    });
});
// comentario
//Obtener un request
app.get('/consultRequest/:id', function (req, res) {
    //console.log(req.params.id);
    var id = mongojs.ObjectId(req.params.id);
    db.request.findOne({
        _id: id
    }, function (err, doc) {
        res.json(doc);
    });
});

app.get('/consultRequest/:who', function (req, res) {
    db.request.findOne({
        fullName: who
    }, function (err, doc) {
        res.json(doc);
    });
});

app.get('/consultFullDaysByLab/:lab', function (req, res) {
    var lab = req.params.lab;
    db.laboratory.findOne({
        name: lab
    }, function (err, doc) {
        res.json(doc);
        console.log(doc);
    });
});


//obtener los labs
app.get('/consultLabs', function (req, res) {
    db.laboratory.find(function (err, docs) {
        //console.log(docs);
        res.json(docs);
    });
});

//Obtener un lab
app.get('/consultLab/:id', function (req, res) {
    var id = mongojs.ObjectId(req.params.id);
    db.laboratory.findOne({
            _id: id
        },
        function (err, doc) {
            res.json(doc);
        });
});

//obtener administradores
app.get('/consultAdministrator', function (req, res) {
    db.administrator.find(function (err, docs) {
        //console.log(docs);
        res.json(docs);
    });
});

//Login
app.get('/consultAdmin/:who', function (req, res) {
    var who = req.params.who;
    db.administrator.findOne({
        name: who
    }, function (err, doc) {
        res.json(doc);
        //console.log(doc);
    });
});


app.get('/consultRequestsInSpecTime/:day', function (req, res) {
    var day = req.params.day;
    db.request.find({
            availability: {
                $in: [day]
            }
        },
        function (err, doc) {
            //console.log(doc);
            res.json(doc);
        });
});

//db.getCollection('request').find({"availability":{$in:["K3"]}})


//Eliminar un request
app.delete('/delRequest/:id', function (req, res) {
    var id = mongojs.ObjectId(req.params.id);
    db.request.remove({
        _id: id
    }, function (err, doc) {
        res.json(doc);
    });
});


//Eliminar un lab
app.delete('/delLab/:id', function (req, res) {
    var id = mongojs.ObjectId(req.params.id);
    db.laboratory.remove({
        _id: id
    }, function (err, doc) {
        res.json(doc);
    });
});

//Eliminar administrador
app.delete('/delAdministrator/:id', function (req, res) {
    var id = mongojs.ObjectId(req.params.id);
    db.administrator.remove({
        _id: id
    }, function (err, doc) {
        res.json(doc);
    });
});


//Insertar un request  
app.post('/insertRequest', function (req, res) {
    //console.log(req.body);
    db.request.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});


//Insertar un lab
app.post('/insertLab', function (req, res) {
    //console.log(req.body);
    db.laboratory.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});



//Actualizar un request
app.put('/updateRequest/:id', function (req, res) {
    var id = mongojs.ObjectId(req.params.id);
    console.log(req.body.num);
    db.request.findAndModify({
            query: {
                _id: id
            },
            update: {
                $set: {
                    status: req.body.num
                }
            },
            new: true
        },
        function (err, doc) {
            res.json(doc);
        });
});


//Actualizar un administrator
app.put('/updateAdministrator/:id', function (req, res) {
    var id = mongojs.ObjectId(req.params.id);
    db.request.findAndModify({
            query: {
                _id: id
            },
            update: {
                $set: {
                    name: req.body.name,
                    password: req.body.password
                }
            },
            new: true
        },
        function (err, doc) {
            res.json(doc);
        }
    );
});



//Actualizar un lab
app.put('/updateLab/:lab', function (req, res) {
    var id = mongojs.ObjectId(req.params.lab);
    db.laboratory.findAndModify({
            query: {
                _id: id
            },
            update: {
                $set: {
                    l1: req.body.selL1,
                    l2: req.body.selL2,
                    l3: req.body.selL3,
                    l4: req.body.selL4,
                    k1: req.body.selK1,
                    k2: req.body.selK2,
                    k3: req.body.selK3,
                    k4: req.body.selK4,
                    m1: req.body.selM1,
                    m2: req.body.selM2,
                    m3: req.body.selM3,
                    m4: req.body.selM4,
                    j1: req.body.selJ1,
                    j2: req.body.selJ2,
                    j3: req.body.selJ3,
                    j4: req.body.selJ4,
                    v1: req.body.selV1,
                    v2: req.body.selV2,
                    v3: req.body.selV3,
                    v4: req.body.selV4,
                    s1: req.body.selS1,
                    s2: req.body.selS2
                }
            },
            new: true
        },
        function (err, doc) {
            res.json(doc);
        }
    );

});


app.listen(3000);
console.log("Server ok in port: 3000");
