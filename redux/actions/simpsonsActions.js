const addList =(payload) =>({
    type:"ADD_LIST",
    payload,
});

const updateList =(payload) =>({
    type:"UPDATE_LIST",
    payload,
});

export {addList,updateList};