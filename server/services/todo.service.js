import ToDo from '../models/todo';

 const search = (filter) => {
    const promise =  ToDo.find(filter).exec();
    return promise;
};

 const get =  (id) => {
    const promise =   ToDo.findById(id).exec();
    return promise;
}

const create =  (newTodo) => {
    const toDo = new ToDo(newTodo);
    const promise =  toDo.save();
    return promise;
}

 const update =  (id, updatedTodo) => {
    const promise =  ToDo.findByIdAndUpdate(
        { _id: id },
        updatedTodo,
        { new: true }
    ).exec();
    return promise;
}

 const remove = (id) => {
    const promise = ToDo.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}