function objelly(thisArg, properties = {}) {
    for (const property in properties) {
        if(thisArg[property]) {
            let value = properties[property];
            thisArg = thisArg[property].apply(thisArg, Array.isArray(value) ? value : [value]);
        }
    }

    return thisArg;
}