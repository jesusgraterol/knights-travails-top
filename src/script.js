/**
 * Given the current position and path it builds a node object.
 * @param {*} pos
 * @param {*} path
 * @returns object|null
 */
const makeNode = (pos, path) => {
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return null;
  }
  return { pos, path };
};

/**
 * Builds a multi-dimensional array with the possible moves based on a position.
 * @param {*} pos
 * @returns object
 */
const buildMoves = (pos) => [
  [pos[0] + 2, pos[1] - 1],
  [pos[0] + 2, pos[1] + 1],
  [pos[0] - 2, pos[1] - 1],
  [pos[0] - 2, pos[1] + 1],
  [pos[0] + 1, pos[1] - 2],
  [pos[0] + 1, pos[1] + 2],
  [pos[0] - 1, pos[1] - 2],
  [pos[0] - 1, pos[1] + 2],
];

/**
 * Calculates the shortest path a knight can take to get to the destination.
 * @param {*} origin
 * @param {*} destination
 */
const knightMoves = (origin, destination) => {
  const q = [makeNode(origin, [origin])];
  let current = q.shift();

  while (current.pos[0] !== destination[0] || current.pos[1] !== destination[1]) {
    buildMoves(current.pos).forEach((move) => {
      const node = makeNode(move, current.path.concat([move]));
      if (node) q.push(node);
    });
    current = q.shift();
  }
  console.log(`=> You made it in ${current.path.length - 1} moves!  Here's your path:`);
  current.path.forEach((pos) => { console.log(pos); });
};

/**
 * Module Exports
 */
export default knightMoves;
