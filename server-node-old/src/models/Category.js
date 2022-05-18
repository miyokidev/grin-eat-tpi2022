/*
     /\   /\ 
    //\\_//\\    ____
    \_     _/   /   /   Nom et Prénom: GRIN Brian
    / * * \    /^^^]    Enseignant : Monsieur Antoine Schmid    
    \_\O/_/    [   ]    Classe : I.DA-P4B
     /   \_    [   /    Date : 18.05.2022
     \     \_  /  /     Nom du projet : GrinEat-Server-Node
      [ [ /  \/ _/      Version du projet : 0.1
     _[ [ \  /_/        Cours : TPI
              
*/

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