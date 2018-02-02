var fb = require('../config/firebase_config');

var colecao='produtos';

module.exports.newInstance = () => {
    return { data: { nome: 'Novo Produto'}};
}


module.exports.insert = async (obj) => {
    try {
        let r = await fb.database.ref(colecao).push(obj.data);
        return r.path.pieces_[r.path.pieces_.length - 1];
    }
    catch (error) {
        return undefined;
    }
}

module.exports.listAll = async () => {
    try {
        const snapshot = await fb.database.ref(colecao).once('value');
        let a = await snapshot.val();
        let vetor = Object.keys(a).map(
            id => {
                let obj = { id: id, data: a[id] };
                return obj;
            }
        );
        return vetor;
    }
    catch (error) {
        return [];
    }
}

module.exports.delete = async (id) => {
    try {
        await fb.database.ref(`${colecao}/${id}`).remove();
    }
    catch (error) {
        return null;
    }
}

module.exports.view = async (id) => {
    try {
        let data = await fb.database.ref(`${colecao}/${id}`).once('value');
        let r = { id: id, data: data.val() };
        return r;
    }
    catch (error) {
        console.log('Service ERROR', error);
        return null;
    }
}

module.exports.update = async (obj) => {
    try {
        let id = obj.id;
        return await fb.database.ref(`produtos/${id}`).set(obj.data);
    }
    catch (error) {
        console.log('Service ERROR', error);
        return null;
    }
}

