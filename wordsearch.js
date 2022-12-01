const wordSearch = (letters, word) => { 
    let counter = 0;
    const verJoin = letters.map(item => item[counter]).join('');
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (item of verJoin) {
        ++counter;
        if (!item.includes(word)) return false
    }
}

module.exports = wordSearch