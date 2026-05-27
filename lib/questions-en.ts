import { Section } from "./questions";

export const SECTIONS_EN: Section[] = [
  {
    id: "energy",
    title: "Energy",
    subtitle: "Your physical and mental energy condition",
    questions: [
      {
        id: 1,
        key: "q1",
        text: "I feel I have enough energy to get through my daily activities.",
        hint: "Think about your average condition over the past week. Do you feel you have the stamina for the day, or do you often run out of energy halfway through?",
      },
      {
        id: 2,
        key: "q2",
        text: "I wake up with my body and mind feeling fit and ready.",
        hint: "Notice how you feel when you first wake up. Do you feel refreshed and ready, or still tired and heavy to start the day?",
      },
      {
        id: 3,
        key: "q3",
        text: "I have good mental stamina and do not get exhausted easily.",
        hint: "This isn't about physical fatigue, but whether your mind can still function well when faced with constant demands or pressure.",
      },
      {
        id: 4,
        key: "q4",
        text: "I am able to maintain my composure even when I have to complete many things at once.",
        hint: "Imagine a situation where you have many responsibilities at the same time. Can you stay calm and organized, or do you start feeling overwhelmed?",
      },
    ],
  },
  {
    id: "emotion",
    title: "Emotion",
    subtitle: "Your emotional patterns and reactivity",
    questions: [
      {
        id: 5,
        key: "q5",
        text: "I experience very strong emotional turbulence when things don't go as expected.",
        hint: "Example: plans change, others disappoint you, or situations get out of control. Do your emotions react very strongly in these conditions?",
      },
      {
        id: 6,
        key: "q6",
        text: "It takes me a long time to calm down after experiencing intense emotions.",
        hint: "After being angry, disappointed, or highly anxious, how long does it usually take you to truly return to a calm and normally functioning state?",
      },
      {
        id: 7,
        key: "q7",
        text: "I frequently feel negative emotions (such as sadness, anger, or anxiety) lately.",
        hint: "Notice the frequency over the past few weeks. Not whether you have ever felt it, but how often such emotions arise.",
      },
      {
        id: 8,
        key: "q8",
        text: "I am easily carried away by emotions or act impulsively when under pressure.",
        hint: "Example: saying things you regret, overreacting, or making hasty decisions when stressed. Does this happen to you often?",
      },
    ],
  },
  {
    id: "cognition",
    title: "Cognition",
    subtitle: "Your clarity and thought patterns",
    questions: [
      {
        id: 9,
        key: "q9",
        text: "I am able to keep my mind clear and avoid overthinking.",
        hint: "Is your mind generally calm and focused, or does it often spin around thinking about the same thing repeatedly without a solution?",
      },
      {
        id: 10,
        key: "q10",
        text: "I can think objectively and rationally when making decisions.",
        hint: "When having to choose or decide something, can you weigh it with a cool head, or do emotions often take over your way of thinking?",
      },
      {
        id: 11,
        key: "q11",
        text: "I can focus my mind and don't easily feel chaotic when facing problems.",
        hint: "When there is a complex problem, can you still think coherently and structurally, or does your mind feel messy and hard to control?",
      },
      {
        id: 12,
        key: "q12",
        text: "I easily view a situation clearly without getting too carried away by feelings.",
        hint: "Can you see an event from a neutral and logical perspective, or do you tend to interpret it through a strong emotional filter?",
      },
    ],
  },
  {
    id: "behavior",
    title: "Behavior",
    subtitle: "Your consistency and behavioral patterns",
    questions: [
      {
        id: 13,
        key: "q13",
        text: "I am consistent in carrying out the plans or habits I have set.",
        hint: "Think about a habit or routine plan you once made. Do you tend to execute it consistently, or does it often break halfway through?",
      },
      {
        id: 14,
        key: "q14",
        text: "I can still function well even when I am feeling uncomfortable.",
        hint: "Example: staying productive despite feeling gloomy, tired, or having something bothering your mind. Are your internal conditions unable to easily paralyze your productivity?",
      },
      {
        id: 15,
        key: "q15",
        text: "I am able to restrain myself from the habit of procrastinating on tasks.",
        hint: "How often do you postpone tasks or work that should be completed? Answer based on actual habits, not your intentions.",
      },
      {
        id: 16,
        key: "q16",
        text: "I can adapt and continue my plans even when the situation changes.",
        hint: "When plans suddenly change or there is an unexpected obstacle, can you adapt quickly and keep moving forward?",
      },
    ],
  },
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Your self-awareness and adjustment",
    questions: [
      {
        id: 17,
        key: "q17",
        text: "I can perceive and recognize my own feelings very clearly.",
        hint: "When feeling something, can you immediately identify what you are feeling and why, or do those emotions often feel blurry and unclear?",
      },
      {
        id: 18,
        key: "q18",
        text: "I am able to maintain my composure during conflicts or disagreements with others.",
        hint: "When there is a difference of opinion or tension with others, can you stay calm and respond with a cool head?",
      },
      {
        id: 19,
        key: "q19",
        text: "I can observe and become aware of my own personal development over time.",
        hint: "Do you actively notice how you have changed, in the way you think, respond, or behave, compared to a few months ago?",
      },
      {
        id: 20,
        key: "q20",
        text: "I truly understand the reasons behind every emotional reaction and decision I make.",
        hint: "This isn't about whether you have a reason, but whether you genuinely understand the root of your reactions and choices, rather than just guessing.",
      },
    ],
  },
];
