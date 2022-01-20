const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        prj_name: { type: String, required: true },
        prj_stat: { type: String, required: true },
        prj_manager: { type: String, required: true },
        prj_cost: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

// converting the raw table into a workable model
// with model(<name>, <schemaUsed>)
const Project = mongoose.model('Project', projectSchema);

module.exports = { Project };
// TABLE WITH NAME, STAT, MANAGER, COST - TIMESTAMPS
// MongoDB will auto add a column with _id
// have new entry
// - {1, josh, natassa, 50, Thursday}
