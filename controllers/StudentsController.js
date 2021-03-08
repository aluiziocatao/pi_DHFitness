const { Student, Teacher, Plan } = require("../models");

module.exports = {
    async list (req, res, next) {
        let students = await Student.findAll({
            where: {
                active: 1,
                deleted: 0
            }
        });
        let teachers = await Teacher.findAll({
            where: {
                active:1,
                deleted: 0
            }
        });
        let plans = await Plan.findAll({
            active: 1,
            deleted: 0
        });

        res.render('students', { students, teachers, plans, user: req.session.user });
    },

    async create (req, res, next) {

    },

    async edit (req, res, next) {
        
    },

    async update (req, res, next) {
        let id = req.params.id;
        let student = await Student.findByPk(id);
    
        let { nome, email, ativo } = req.body;
    
        student.full_name = nome;
        student.email = email;
        student.active = ativo;
    
        await student.save();
    
        res.render('students', { student, updated: true })
    },

    async delete (req, res, next) {
        let id = req.params.id;
        let student = await Student.findByPk(id);

        student.deleted = true;

        await student.save();

        res.render('students', { students, deleted: true });
    }
}