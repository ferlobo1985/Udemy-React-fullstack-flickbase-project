const sortArgsHelper = (sort) => {
    let sortArgs = {sortBy:"_id",order:"asc",limit:3,skip:0};

    for(key in sort){
        if(sort[key]){
            sortArgs[key] = sort[key]
        }
    }

    return sortArgs;
}


module.exports = {
    sortArgsHelper
}

       // {
        //     "sortBy":"_id",
        //     "order":"asc",
        //     "limit":10,
        //     "skip":0
        // }