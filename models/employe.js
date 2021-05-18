const mongoose = require('mongoose');

const employeSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    superviseur: {
        type: String,
        required: true
    },
    circuit: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    activite: {
        type: String,
        default: ''
    },
    agence: {
        type: String,
        required: true,
    },
    secteur: {
        type: String,
        required: true,
    },
    datenaissance: {
        type: String,
        
    },
    dateentree: {
        type: String,
    },  
    ancienete: {
        type: Number,
        default: 0,
    },
    niveauscolaire: {
        type: String,
        default: ''
    },
    salaire: {
        type: String,
        default: 0,
    },
    reathe: {
        type: Number,
        default: 0,
    },
    reacouscous: {
        type: Number,
        default: 0,
    },
    reapate: {
        type: Number,
        default: 0,
    },
    reafarine: {
        type: Number,
        default: 0,
    },
    reasemoule: {
        type: Number,
        default: 0,
    },
    reariz: {
        type: Number,
        default: 0,
    },
    couverture: {
        type: Number,
        default: 0,
    },
    productivite: {
        type: Number,
        default: 0,
    },
    ligne: {
        type: Number,
        default: 0,
    },
    penethe: {
        type: Number,
        default: 0,
    },
    penecsc: {
        type: Number,
        default: 0,
    },
    penepates: {
        type: Number,
        default: 0,
    },
    penefarine: {
        type: Number,
        default: 0,
    },
    penesemoule: {
        type: Number,
        default: 0,
    },
    peneriz: {
        type: Number,
        default: 0,
    },
    impnombre: {
        type: Number,
        default: 0,
    },
    impmontant: {
        type: Number,
        default: 0,
    },
    encnombre: {
        type: Number,
        default: 0,
    },
    encmontant: {
        type: Number,
        default: 0,
    },
    encpourcent: {
        type: Number,
        default: 0,
    },
    notetest: {
        type: Number,
        default: 0,
    }
    
})

employeSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    const { _id:id, ...result } = object;
    return { ...result, id };
});


exports.Employe = mongoose.model('Employe', employeSchema);