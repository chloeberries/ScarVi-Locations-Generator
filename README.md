# Scarlet/Violet Encounter Generator
This is a fairly self-explanatory tool. In a nuzlocke challenge, one of the rules imposed is that when entering a new route, the player must decide to catch or forfeit the first Pokemon of each route. No other encounters are valid for catch and use (some exceptions apply). This creates challenge by forcing the player to not be able to choose the encounter and they may have to use a Pokemon that they would not normally use because of preference, low team compatibility, overall Pokemon capability, etc. 

In most games in the franchise, this was pefectly easy to execute. The steps are as follows:

>  Walk into a patch of grass, game uses predetermined weights and
> defined Pokemon to generate you an encounter > Pokemon is displayed on
> screen

In Scarlet and Violet this is difficult because there are *no* hidden overworld grass encounters. All Pokemon that are able to be encountered are rendered and displayed to the player. This tool takes the difficulty about having to worry about what you're going to do to get your random encounter and generates it for you :) 

This is ***not*** a randomizer. It uses real location data from Scarlet and Violet to generate an encounter for you. 

## Disclaimer
I am a beginner, and this is a beginner projects. Things may change and break from time to time and not be stable. Right now, I do not know if there is traditional Pokemon encounter data for Scarlet / Violet, and even if there are my coding and math skills are not good enough to implement them LOL 

It's very basic, the process is just a Math.random() number generator with a min and max value decided and rounding feature, taking that value and selecting a route, that route being reflected against an object with encounter data for that route defined, compared against the API to get the Pokemon's sprite, ability, types, and base stat spread. That's it! 

If you have any suggestions, I'm all ears. Please be patient with me!
