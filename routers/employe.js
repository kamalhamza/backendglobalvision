const {Employe} = require('../models/employe');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const employeList = await Employe.find();

    if(!employeList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(employeList);
})
router.get(`/agency/:id`, async (req, res) =>{
    let recherche=req.params.id[0].toUpperCase()+req.params.id.slice(1)
    
    const employeList = await Employe.find({"agence":`${recherche}`});

    if(!employeList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(employeList);
})
router.get(`/code/:id`, async (req, res) =>{
    let recherche=req.params.id;
    console.log(recherche);
    
    const employeList = await Employe.find({"Code":`${recherche}`});

    if(!employeList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(employeList);
})
router.get(`/nom/:id`, async (req, res) =>{
    let recherche=req.params.id;
    const userRegex = new RegExp(recherche, 'i')
    const employeList = await Employe.find({"nom":userRegex })

    if(!employeList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(employeList);
})

router.get('/:id', async(req,res)=>{
    const employe = await Employe.findById(req.params.id);
    
    

    if(!employe) {
        res.status(500).json({message: 'The category with the given ID was not found.'})
    } 
    res.status(200).send(employe);
})



router.post('/', async (req,res)=>{
    let employe = new Employe({
        code:req.body.code,
        nom: req.body.nom,
        superviseur :req.body.superviseur,
        circuit :req.body.circuit,
        image :req.body.image,
        activite:req.body.activite,
        agence:req.body.agence,
        secteur:req.body.secteur,
        datenaissance:req.body.datenaissance,
        dateentree:req.body.dateentree,
        ancienete:req.body.ancienete,
        niveauscolaire:req.body.niveauscolaire,
        salaire :req.body.salaire,
        reathe :req.body.reathe,
        reacouscous :req.body.reacouscous,
        reapate:req.body.reapate,
        reafarine :req.body.reafarine,
        reasemoule:req.body.reasemoule,
        reariz:req.body.reariz,
        couverture:req.body.couverture,
        productivite:req.body.productivite,
        ligne:req.body.ligne,
        penethe:req.body.penethe,
        penecsc:req.body.penecsc,
        penepate:req.body.penepate,
        penefarine:req.body.penefarine,
        penesemoule:req.body.penesemoule,
        peneriz:req.body.peneriz,
        impnombre:req.body.impnombre,
        impmontant:req.body.impmontant,
        encnombre:req.body.encnombre,
        encmontant:req.body.encmontant,
        encpourcent:req.body.encpourcent,
        notetest:parseInt(req.body.productivite)+parseInt(req.body.couverture)
    })
    employe = await employe.save();

    if(!employe)
    return res.status(400).send('the category cannot be created!')

    res.send(employe);
})


router.put('/:id',async (req, res)=> {
    const employe = await Employe.findByIdAndUpdate(
        req.params.id,
        {
            directeur: req.body.directeur,
            secteur:req.body.secteur,
        },
        { new: true}
    )

    if(!employe)
    return res.status(400).send('the category cannot be created!')

    res.send(employe);
})

router.delete('/:id', (req, res)=>{
    Employe.findByIdAndRemove(req.params.id).then(employe =>{
        if(employe) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

module.exports =router;