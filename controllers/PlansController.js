const { Plan } = require("../models");

module.exports = {
    async create (req, res, next) {

    },

    async edit (req, res, next) {

    },

    async update (req, res, next) {
        let id = req.params.id;
        let plan = await Plan.findByPk(id);
    
        let { title, price, active } = req.body;
    
        plan.title = title;
        plan.price = price;
        plan.active = active;
    
        await plan.save();
    
        res.render('cp', { plan, updated: true })
    },

    async delete (req, res, next) {
        let id = req.params.id;
        let plan = await Plan.findByPk(id);

        plan.deleted = true;

        await plan.save();

        res.render('cp', { plan, deleted: true });
    }
}