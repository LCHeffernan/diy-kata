const joinNames = namesObj => {
    let string = '';
    for (let i = 0; i<namesObj.length - 1; i++)
    {
        if(i < (namesObj.length - 2))
        {string = string + namesObj[i].name + ', '}
        else if (i < (namesObj.length - 1))
        {string = string + namesObj[i].name + ' & ' + namesObj[i + 1].name}
    }   
    return string;
}

module.exports = joinNames;
