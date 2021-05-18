const {Agency} = require('../models/agency');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const agencyList = await Agency.find();

    if(!agencyList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(agencyList);
})

router.get('/:id', async(req,res)=>{
    const agency = await Agency.findById(req.params.id);
    const test = agency.directeur+agency.secteur;
    var data = {
        
            "agency":agency,
            "testi":test
        }
    

    if(!data) {
        res.status(500).json({message: 'The category with the given ID was not found.'})
    } 
    res.status(200).send(data);
})



router.post('/', async (req,res)=>{
    let agency = new Agency({
        directeur: req.body.directeur,
        secteur:req.body.secteur,

    })
    agency = await agency.save();

    if(!agency)
    return res.status(400).send('the category cannot be created!')

    res.send(agency);
})


router.put('/:id',async (req, res)=> {
    const agency = await Agency.findByIdAndUpdate(
        req.params.id,
        {
            directeur: req.body.directeur,
            secteur:req.body.secteur,
        },
        { new: true}
    )

    if(!agency)
    return res.status(400).send('the category cannot be created!')

    res.send(agency);
})

router.delete('/:id', (req, res)=>{
    Agency.findByIdAndRemove(req.params.id).then(agency =>{
        if(agency) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

module.exports =router;