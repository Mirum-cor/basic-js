module.exports = function createDreamTeam(members) {
  if (typeof members === 'object' && members && members.length) {
    const trimedMembers = members.map((member) => {
      if (typeof member === 'string') {
        return member.trim().toUpperCase();
      }
    });
    const sortedMembers = trimedMembers.sort();
    const result = sortedMembers.map((member) => {
      if (typeof member === 'string') {
        return member.slice(0, 1);
      }
    });
    return result.join('');
  } else {
    return false;
  }
};
