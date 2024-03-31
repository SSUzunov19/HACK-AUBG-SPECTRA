const { OpenAI } = require("openai");

const apiKey = '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';

const openai = new OpenAI({
  apiKey: apiKey,
});

function getInstruction() {
  return `
  Legend:
  Category -> Factors in the category -> '[Question] - [Perfect value]'
  
  Materials:
  1. What part of your materials are renewable? - 60%
  2. What part of your materials are recyclable? - 80%
  3. What part of your materials are sources sustainably? - 70%
  
  Manufacturing + Production:
  4. How much water do you use in a day? - 500 cubic meters
  5. How much energy do you use in a day? - 5000 mega joules
  6. What part of your land is on natural cover? - 80%
  
  Carbon Footprint:
  7. What part of your energy is renewable? - 60%
  8. How much greenhouse gas do you emit for one product? - 5kg
  9. What's the efficiency of your energy processes? - 70%
  
  Production Waste:
  10. How much waste do you throw away in a day? - 50t
  11. What part of your waste do you recycle? - 50%
  12. Do you utilize waste minimization technologies? - True
  
  Warranty, Repairability, End of Life
  13. How recyclable is your product? - 80%
  14. How efficient is your waste management system? - 80%
  15. What part of the components in your product can be replaced? - 90%
  
  Packaging:
  16. Do you use biodegradable materials? - True
  17. Do you optimize the size of your package as best you can? - True
  18. Do you use secondary packaging materials? - True
  
  These are questions measuring how 'green' and 'ecological' a factory is. The values after the questions are the perfect answers that measure up to 10/10 on how green the factory is and are used as ideals but not to be compared to. I will now give you random answers as an example and I need from you to figure out which ones are a bit further than the rest from the perfect answers. I need you to focus on max 3 and comment in 1-2 sentences for each. Give me only the answers, nothing else.
  `;
}

function getPrompt(answers) {
  return `
  1. ${answers[0]}%
  2. ${answers[1]}%
  3. ${answers[2]}%
  4. ${answers[3]} cubic meters
  5. ${answers[4]} mega joules
  6. ${answers[5]}%
  7. ${answers[6]}%
  8. ${answers[7]}kg
  9. ${answers[8]}%
  10. ${answers[9]}t
  11. ${answers[10]}%
  12. ${answers[11] == 1 ? "True" : "False"}
  13. ${answers[12]}%
  14. ${answers[13]}%
  15. ${answers[14]}%
  16. ${answers[15] == 1 ? "True" : "False"}
  17. ${answers[16] == 1 ? "True" : "False"}
  18. ${answers[17] == 1 ? "True" : "False"}
  `;
}

const answers = [ 6, 23, 70, 132, 8417, 73, 84, 7, 56, 120, 88, 0, 26, 53, 69, 1, 0, 1 ]

const createNewThread = true;

const myThreadId = "thread_VUjXL3MG7ntqauCU0DcIzQmk";
const myRunId = "run_GlTsbRulH9ajOznfZNlTLXWq";


async function main() { 
  const assistant = await openai.beta.assistants.create({
    name: "Spectra Bot",
    instructions: "You are a bot that measures how green and ecological a factory is.",
    model: "gpt-4-turbo-preview"
  });

  let thread;

  if (createNewThread) {
    thread = await openai.beta.threads.create();
  }
  else {
    thread = await openai.beta.threads.retrieve(
      myThreadId
    );
  }

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: getPrompt(answers)
    }
  );

  let run;

  if (createNewThread) {
    run = await openai.beta.threads.runs.create(
      thread.id,
      { 
        assistant_id: assistant.id,
        instructions: getInstruction()
      }
    );
  }
  else {
    run = await openai.beta.threads.runs.retrieve(
      myThreadId,
      myRunId
    );
  }

  console.log(assistant.id);
  console.log(run.thread_id);
  console.log(run.id);

  while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    run = await openai.beta.threads.runs.retrieve(
      run.thread_id,
      run.id
    );
  }

  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list(
      run.thread_id
    );
    for (const message of messages.data.reverse()) {
      console.log(`${message.role} > ${message.content[0].text.value}`);
    }
  } else {
    console.log(run.status);
  }
}

main();