const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('What sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
              setTimeout(() => {
                console.log(`${name} likes ${activity} while listening to ${music}. ${name}'s favourite mealtime is ${meal} and favourite thing to eat is ${favFood} for the ${meal}. ${name} likes ${sport}. ${name} is amazing at ${superPower}.`);
              }, 2000);
              rl.close();
            });
          });
        });
      });
    });
  });
});