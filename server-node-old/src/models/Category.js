const Db = require('./Db.js');

class Category {
    
    getIdCategory() {
        return this.idCategory;
    }

    setIdCategory(idCategory) {
        this.idCategory = idCategory;
    }

    getNameEnglish() {
        return this.nameEnglish;
    }

    setNameEnglish(nameEnglish) {
        this.nameEnglish = nameEnglish;
    }

    getNameFrench() {
        return this.nameFrench;
    }

    setNameFrench(nameFrench) {
        this.nameFrench = nameFrench;
    }

    static async getCategories() {
        let sql = "SELECT * FROM categories;"
        const [rows, fields] = await Db.query(sql);
        return rows;
    }
}
module.exports = Category;