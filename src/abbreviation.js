const abbreviationName = (name) => name.replace(/(\S)\S*/, " $1.");

export default abbreviationName;
