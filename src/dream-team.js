module.exports = function createDreamTeam(members) {
  if(members == null && members == undefined) return false;
  let arr2 = [];
  for(i = 0; i < members.length; i++) {
    if(typeof(members[i]) === 'string') {
      let x = members[i].trim().toUpperCase();
          arr2.push(x[0]);
          arr2.sort();
    } 
  };
  return arr2.join("");
}
