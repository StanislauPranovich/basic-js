module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let numOfMoves = 2**disksNumber - 1;
    let numOfSeconds = Math.floor(3600/turnsSpeed * numOfMoves);
    return {turns: numOfMoves, seconds: numOfSeconds}
}
