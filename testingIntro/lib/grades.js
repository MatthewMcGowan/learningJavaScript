var gradeBook = {

    _grades: [],
    addGrade: function(newGrade) {
        this._grades.push(newGrade);
    },

    getCountOfGrades: function () {
        return this._grades.length;
    },

    getAverage: function () {
        var sum = this._grades.reduce(function(a,b) { return a + b });
        return sum / this.getCountOfGrades();
    },

    reset: function () {
        this._grades = [];
    }
};

exports.book = gradeBook;