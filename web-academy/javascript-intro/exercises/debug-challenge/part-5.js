/*
Requirements:
1. It's time to skate only if your energy, crew and camera battery all check out OK.
2. If a check fails, print that information to the console and forget about skating today.
3. If all checks are successful, print a message to the console and go skate!

Logic errors do not generate warning messages or prevent the code from running, but the program still does not work as intended.
First, run this sample code as-is and examine the output. Should you be ready to skate? Did you?

💡 Tips:
1. Break the code down into smaller chunks.
2. Consider the first if/else block. Add console.log(readyToSkate) after this block, then run the program. Given the energyLevel value, should readyToSkate be true or false after the check? Is the program behaving as expected?
3. Consider the second if/else block. Add another console.log(readyToSkate) after this block and run the program. Given crewStatus and cameraStatus, should readyToSkate be true or false after this check?
4. Consider both if/else blocks together. Given the values for energyLevel, crewStatus and cameraStatus, should readyToSkate be true or false per the requirements? Is the program behaving as expected?
5. When checking the energy readiness and the crew & camera readiness, does it make sense to store the result to a single variable, readyToSkate? Perhaps energy readiness and crew & camera readiness should have their own variable to update 🤷‍♂️

Expected Result:
=> WARNING: Insufficient energy!
=> Crew & cameraBattery is a go!
=> No skating today.
*/

let readyToSkate = false;
let energyLevel = 18000;
let crewStatus = true;
let cameraBattery = "green";

if (energyLevel >= 24000) {
   console.log("Energy level is a go!");
   readyToSkate = true;
} else {
   console.log("WARNING: Insufficient energy!");
   readyToSkate = false;
}

if (crewStatus && cameraBattery === "green"){
   console.log("Crew & cameraBattery is a go!");
   readyToSkate = true;
} else {
   console.log("WARNING: Crew or cameraBattery not ready!");
   readyToSkate = false;
}

if (readyToSkate) {
   console.log("Let's goooooo!");
   console.log("Time to skate!");
} else {
   console.log("No skating today.");
}
