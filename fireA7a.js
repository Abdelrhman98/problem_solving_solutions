import _ from 'lodash';

function _projectObject(obj, projection) {
    const projectionKeys = Object.keys(projection);
    if (projection[projectionKeys[0]])
        return _.pick(obj, projectionKeys);
    return _.omit(obj, projectionKeys);
}

async function _filterize(snapshot, filters, projection) {
        Object.keys(filters).forEach(field =>{
            snapshot =  snapshot.where(field, '==', projection[field])//.where('')
        })
        // if(!_.isEmpty(projection)){
        //     snapshot.select(...Object.keys(projection))
        // }
        snapshot.select('email');

        const snapshots = await snapshot.get();
        let docs = await snapshots.docs.map(doc => doc.data());
        // _projectObject(docs, projection);
        return docs;
}

async function findone(collection, filters, projection = {}) {
    const result = await _filterize(collection, filters, projection);
    if(!_.isEmpty(result)){
        return result[0]
    }
    return {};
}

async function getAll(collection, projection = {}) {
    const snapshot = await collection.get()
    return snapshot.docs.map(doc => doc.data())
}

export default {
    getAll,
    findone,
}

//{funName:'test'}
