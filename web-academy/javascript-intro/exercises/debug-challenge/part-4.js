/*
Directions:
1. Find and fix the runtime error.

Expected Result:
=> Energy level is a go!
=> Grab your skateboard...
=> Ready...
=> Set...
=> SKATE!
*/

let readyToSkate = false;
let energyLevel = 24010;

if (energyLevel >= 24000) {
  console.log("Energy level is a go!");
  readyToSkate = true;
} else {
  console.log("WARNING: Insufficient energy!");
  readyToSkate = false;
}

if (readyToSkate) {
  console.log("Grab your skateboard...");
  console.log("Ready...");
  consoul.log("Set...");
  console.log("SKATE!");
} else {
   console.log("No skating today.");
}
