let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const numOfSentences = function (array) {
  let total = 0;
  array.forEach(function (str) {
    if (/.\?|.\.|.\!/g.test(str)) {
    total += 1;
    }
  });
  
  console.log(`The sentence count is ${total}.`);
  
  return total;
};

let overusedCount = function (paragraph, overUsed) {
  return count = overUsed.reduce(function (acc, val) {
  paragraph.forEach(function (word) {
    if (val === word)  {
      acc[val] ? acc[val] += 1 : acc[val] = 1;
    }
  });
  
  console.log(`You used ${val} ${acc[val]} times.`);
  
  return acc;
  }, {});
};

const linter = function (str) {
  const overusedWords = ['really', 'very', 'basically'];
  const unnecessaryWords = ['extremely', 'literally', 'actually' ];
  
  let storyWords = str.split(' ');
  
  const betterWords = storyWords.filter(function (word) {
    if (!unnecessaryWords.includes(word)) {
      return word;
    }
  });

  console.log(betterWords.join(' '));
  
  console.log(`The word count is ${betterWords.length}.`);
  
  numOfSentences(betterWords);
  
  overusedCount(betterWords, overusedWords);
  
  return betterWords;
};

linter(story);
