module.exports = function check(str, bracketsConfig) {
  let joined = bracketsConfig.join('')
  let brackets = joined.replace(/,/g, '');
  let result = [];
    for (let mirror of str) {
        let index = brackets.indexOf(mirror)
        if (index % 2 === 0) {
            if (mirror === brackets[index + 1] && result[result.length - 1] === index){
                result.pop();
            } else if (mirror === brackets[index + 1] && result[result.length - 1] !== index) {
                result.push(index)
            }
            else{
                result.push(index)
            }
        } 
    }
        return result.length === 0
}
