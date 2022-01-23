class QuestionController {
    index() {
        res.render('question');
    }
    getOne() {
        res.render('question');
    }
}

module.exports =  new QuestionController();