// add whatever parameters you deem necessary
function constructNote(msg, letters) {
   const msgChars = msg.split('');
   const lettersChars = letters.split('');

   const letterCounts = {};
   for(let char of lettersChars) {
    letterCounts[char] = letterCounts[char] ? letterCounts[char] + 1 : 1;
   }
    for(let char of msgChars) {
        if(!letterCounts[chars]) {
            return false;
        }
        letterCounts[char]--;
    }
    return true;
}
