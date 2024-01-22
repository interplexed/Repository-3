
/* messages.js */


// three arrays
const nouns = ['hat','cup','book','key','coin'];
const verbs = ['floating','swiping','daydreaming','singing','commanding'];
const adjectives = ['brave','elated','fierce','magnificent','thankful'];

// randomized output from each array
let noun = nouns[Math.floor(Math.random()*5)];
let verb = verbs[Math.floor(Math.random()*5)];
let adjective = adjectives[Math.floor(Math.random()*5)];

// create a nonsensical sentence
document.getElementById('nonsense').innerhtml = `The ${noun} was ${verb} and truely the most ${adjective}`;























