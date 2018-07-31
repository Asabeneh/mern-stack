const express = require('express');
const router = express.Router();

//Item Model 
const Item = require('../../models/Item');
//@route GET api/items;
//@dec Get all Items
// @acess Public

router.get('/',(req, res) => {
    Item.find()
    .sort({date:-1})
    .then((doc) => {
        res.json(doc)
    })
});

router.post('/',(req, res) => {
    const newItem = new Item ({
        name:req.body.name
    });
    newItem.save().then((doc) => {
        res.json(doc)
    },(e)=>{

    })

});

router.delete('/:id',(req, res) => {
    const id = req.params.id;
    Item.findById(id).then(item => item.remove().then(() => res.json({success:true})))

    Item.findByIdAndRemove(id).then((doc)=> {
        res.json(doc)
    }).catch(e => res.status(404).json({success:false}))


})

router.patch('/:id',(req, res) => {
    const id = req.params.id;
    Item.findByIdAndUpdate(id,{$set:req.body}).then((doc)=> {
        res.json(req.body)
    }).catch(e => console.log(e))
    const newItem = new Item ({
        name:req.body.name
    });
    newItem.save().then((doc) => {
        res.json(doc)
    },(e)=>{

    })

})

module.exports = router;




