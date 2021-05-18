const mongoose = require('mongoose');

const agencySchema = mongoose.Schema({
    directeur: {
        type: String,
        required: true,
    },
    secteur: {
        type: String,
    }
})


agencySchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    const { _id:id, ...result } = object;
    return { ...result, id };
});

exports.Agency = mongoose.model('Agency', agencySchema);