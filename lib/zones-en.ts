import { ZoneData } from "./zones";

export const ZONE_TABLE_EN: ZoneData[] = [
  {
    zone: "Void",
    state: "Blank",
    mode: "Break",
    flow: "Recover",
    minScore: 0,
    maxScore: 10,
    interpretation:
      "Your current condition indicates a very low level of regulation. Your body and mind need space to fully recover. Taking a break is not a sign of weakness; it is the first step toward healing.",
    characteristics: {
      feelings: "It feels incredibly empty, like a phone battery at 1 percent but you've lost the charger. There is a mental exhaustion so profound that you feel numb to the things you usually care about.",
      thoughts: "Your thoughts feel very heavy and slow. Let alone thinking about the future, deciding what to eat feels like it requires extra energy. Thoughts like 'what's the point of all this?' or 'I just want to disappear for a while' often arise.",
      worries: "You silently fear that you might never return to 'normal' or be as energetic as you used to be. There is an anxiety of being left far behind by others who seem to keep running, while you can only stand still.",
      reality: "The world around you feels like a black-and-white movie on mute. It feels very distant and gray, and even the smallest demand (like replying to a work message) feels like a mountain to climb.",
      physical: "Your body feels extremely heavy, like there's an invisible weight on your shoulders. Your nerves are completely exhausted (severe burnout). Even after a long sleep, you wake up feeling completely unrefreshed.",
    },
    deepInsights: {
      whyFeelThisWay: "Because your nervous system has reached its maximum tolerance limit. Your body forcefully shut down your energy circuits to prevent more severe mental damage caused by chronic exhaustion.",
      amIOkay: "Yes, you are not okay right now, and that is completely valid. Admitting that you are out of energy is the bravest first step to start recovering.",
      unconsciousPattern: "You have a habit of ignoring your own body's fatigue signals and keep pushing yourself to meet others' expectations, until finally your body refuses to cooperate.",
    },
    actionable: {
      practice: [
        "Take a warm bath and do light body stretches for five minutes.",
        "Drink a glass of water immediately after waking up every morning.",
        "Practice gratitude for one very simple thing that happened today.",
        "Take a twenty-minute nap to give your brain a break.",
        "Write down intrusive thoughts on a piece of paper and then throw it away."
      ],
      avoid: [
        "Forcing yourself to take on new projects or responsibilities at work.",
        "Scrolling through social media for more than ten minutes before bed.",
        "Locking yourself in your room all day without getting morning sunlight.",
        "Leaving your stomach empty for more than six hours while awake.",
        "Harshly criticizing yourself in your mind."
      ],
    },
    colorClass: "text-slate-400",
    hexColor: "#94a3b8",
    bgGradient: "from-slate-900 to-slate-800",
  },
  {
    zone: "Crash",
    state: "Alert",
    mode: "React",
    flow: "Repair",
    minScore: 11,
    maxScore: 20,
    interpretation:
      "Your internal system is in a state of high alert. Your responses tend to be reactive due to accumulated pressure. Prioritize recovery and reduce unnecessary external burdens.",
    characteristics: {
      feelings: "You feel like you're driving a car with broken brakes. Restless, panicked, and emotions are always at the boiling point. Trivial things you usually ignore can now make you explode in anger or suddenly cry.",
      thoughts: "Your mind is racing uncontrollably. Your brain constantly plays out worst-case scenarios; for example, if your boss calls, your first thought is 'I must have made a fatal mistake'.",
      worries: "You are terrified of losing control over your life. You feel like a major danger or problem is lurking right in front of you, and you feel you don't have enough energy to prevent it.",
      reality: "The world feels like an unsafe place full of threats pressing on you from all directions. Every incoming message, phone ring, or request for help feels like a direct attack on you.",
      physical: "Your heart often suddenly beats fast. Your jaw clenches unconsciously, your neck and shoulders are stiff, and your breaths are short as if you are preparing to fight or flee.",
    },
    deepInsights: {
      whyFeelThisWay: "Because your amygdala (the brain's alarm center) is hijacking your logical system. Your brain detects a 'threat' in your environment, pumping adrenaline that keeps you in a constant state of combat readiness.",
      amIOkay: "Your body is overreacting, but essentially you are safe. This panic reaction is merely a false alarm from an overloaded nervous system, not a reflection of true reality.",
      unconsciousPattern: "You have a tendency to bottle up stress and constantly ignore small negative emotions, until they accumulate and explode into panic when triggered by something trivial.",
    },
    actionable: {
      practice: [
        "Do a four-second breathing technique whenever you feel your heart racing.",
        "Walk outside without bringing your phone for fifteen minutes.",
        "Pause in silence for ten seconds before responding to offensive remarks.",
        "Listen to soft instrumental music while working on tasks.",
        "Communicate your need for alone time to your closest ones."
      ],
      avoid: [
        "Responding to text messages from your boss or partner while highly emotional.",
        "Consuming coffee or caffeinated drinks after 2 PM.",
        "Engaging in debates or arguments in group chats or social media.",
        "Making major financial decisions impulsively to ease your panic.",
        "Watching negative news or high-tension movies at night."
      ],
    },
    colorClass: "text-blue-400",
    hexColor: "#60a5fa",
    bgGradient: "from-blue-950 to-slate-900",
  },
  {
    zone: "Shield",
    state: "Guard",
    mode: "Protect",
    flow: "Stabilize",
    minScore: 21,
    maxScore: 30,
    interpretation:
      "You are currently in self-protection mode. Energy is used to maintain basic stability. This is an adaptive response; the next step is to build a more solid foundation of stability.",
    characteristics: {
      feelings: "You are putting up a very high wall. You feel very defensive, closed off, and don't want anyone to get too close. You keep a safe distance so no one can bother or hurt you again.",
      thoughts: "Your mind is full of skepticism. You often question people's intentions, thinking 'they're only nice because they want something'. Your brain's main focus is how to protect the little energy you have left.",
      worries: "You are terrified of being used, betrayed, or having your energy drained by other people's drama. You worry that if you are too open, people will disappoint you again.",
      reality: "You view the world as a fortress. Your surroundings are something to be wary of, and every new person is considered a threat until they can prove otherwise.",
      physical: "Your body language tends to be closed. You often cross your arms, adopt a hunched posture as if protecting your stomach, and your facial expressions are flatter to hide your true feelings.",
    },
    deepInsights: {
      whyFeelThisWay: "Because you have experienced disappointment or emotional exhaustion in the past, your subconscious has decided that closing yourself off is the best defense strategy so that the painful event doesn't repeat itself.",
      amIOkay: "You are protecting yourself, and that is a smart survival mechanism. However, hiding behind a shield for too long will make you lonely and miss out on the warmth of human connection.",
      unconsciousPattern: "You often assume bad intentions from others before there is any proof. You silently push people away when they get too close, because emotional intimacy makes you feel vulnerable.",
    },
    actionable: {
      practice: [
        "Practice saying no politely to requests that drain your energy.",
        "Share one light story about your day with someone you can trust.",
        "Read light fiction to divert your mind from hypervigilance.",
        "Practice noticing tension in your jaw and intentionally relaxing it.",
        "Note three neutral or good things others did for you today."
      ],
      avoid: [
        "Isolating yourself 100 percent from friends who genuinely care about you.",
        "Searching for hidden motives every time someone gives a compliment.",
        "Intentionally replaying memories of past betrayal or pain.",
        "Rejecting simple offers of physical help from well-meaning colleagues.",
        "Hiding all facial expressions while talking to friends."
      ],
    },
    colorClass: "text-indigo-400",
    hexColor: "#818cf8",
    bgGradient: "from-indigo-950 to-slate-900",
  },
  {
    zone: "Grip",
    state: "Tense",
    mode: "Control",
    flow: "Settle",
    minScore: 31,
    maxScore: 40,
    interpretation:
      "There is tension you are carrying. You are trying to control the situation but it's draining your energy. Recognizing what you can let go of will help you move forward more lightly.",
    characteristics: {
      feelings: "You feel like you're holding your breath while gripping a glass cup tightly. There is pent-up frustration, impatience, and an obsessive drive for everything to go exactly as expected.",
      thoughts: "Your mind is very rigid and perfectionistic. You have strict standards about how things should be done, and you get very annoyed if coworkers or circumstances deviate from your plans.",
      worries: "You are haunted by the fear of disorder, small mistakes, or failure. You worry that if you let your guard down even a little, or delegate a task, everything will fall apart.",
      reality: "You see the world as a chaotic place, and the only way you feel safe is by meticulously controlling it. Unexpected situations are your greatest enemy.",
      physical: "Chronic tension is very noticeable in your head, neck, and shoulder areas. You might often get tension headaches, find it hard to just sit back and relax, and your hands often clench without you realizing.",
    },
    deepInsights: {
      whyFeelThisWay: "Because you associate feeling safe with how much control you have over your environment. When situations become uncertain, you try to grip control tighter to ease your inner anxiety.",
      amIOkay: "Functionally you can still operate and work, but your mind and body are suffering. This chronic tension is unhealthy. Remember that you are still safe even if some things don't go according to plan.",
      unconsciousPattern: "You have unrealistic standards of perfection that actually stem from the fear of being judged poorly by others. You often feel that if you don't do it yourself, it's bound to fail.",
    },
    actionable: {
      practice: [
        "Intentionally let your desk or room be slightly messy for a day.",
        "Delegate one small task to a coworker without intervening at all.",
        "Practice smiling when a small thing deviates from your plan today.",
        "Spend ten minutes doing a hobby without caring about the outcome.",
        "Accept an idea or suggestion from someone else that differs from your plan."
      ],
      avoid: [
        "Writing daily to-do lists that are overly detailed down to the minute.",
        "Double-checking completed work more than twice.",
        "Aggressively blaming others when sudden schedule changes occur.",
        "Creating layers of backup plans for events that might not even happen.",
        "Forcing your methods on others who already have their own way of working."
      ],
    },
    colorClass: "text-violet-400",
    hexColor: "#a78bfa",
    bgGradient: "from-violet-950 to-slate-900",
  },
  {
    zone: "Flow",
    state: "Normal",
    mode: "Run",
    flow: "Steady",
    minScore: 41,
    maxScore: 50,
    interpretation:
      "You are at a fairly healthy point of balance. You are able to carry out activities steadily. Maintain this rhythm and pay attention to what helps you stay in this zone.",
    characteristics: {
      feelings: "Your feelings are quite stable and ordinary, neither overly euphoric nor depressed. Like a car engine running smoothly on a highway, you can go through your daily routine calmly without emotional drama.",
      thoughts: "Your thoughts are practical and highly pragmatic. Your main focus is very simple: what needs to be done today. You don't obsess over the past or worry too far into the future.",
      worries: "You still have worries about monthly bills or work deadlines, but they are normal, rational worries. You can manage them without them disturbing your sleep.",
      reality: "Reality feels orderly and predictable. This is a functional zone where routines run as they should. There are no huge pleasant surprises, but it's also safe from energy-draining problems.",
      physical: "Your physical condition is quite relaxed and functioning normally. There is no significant nervous tension, and you still have leftover energy at night just to watch a movie after your activities.",
    },
    deepInsights: {
      whyFeelThisWay: "Because the balance between external demands and internal resources is harmonizing perfectly. The energy coming in and going out is balanced without any leaks.",
      amIOkay: "Yes, you are in a very safe and functional place. This is a very healthy buffer zone where you can go through your daily routine with adequate and stable mental capacity.",
      unconsciousPattern: "You might often mistakenly believe that a good day is only one filled with high productivity and applause. In reality, an ordinary day where routines run smoothly is also a manifestation of highly successful emotional regulation.",
    },
    actionable: {
      practice: [
        "Maintain a disciplined sleep routine at the same time every night.",
        "Enjoy your lunch break without staring at a phone or computer screen.",
        "Note down one small achievement you managed to complete today.",
        "Do light stretches every two hours while working seated.",
        "Set aside fifteen minutes specifically for relaxed daydreaming without distractions."
      ],
      avoid: [
        "Taking on extra workload from others just out of guilt.",
        "Cutting your night sleep short to finish non-urgent work.",
        "Drastically changing your basic routine just out of momentary boredom.",
        "Consuming excessive sugar that can make your energy levels fluctuate.",
        "Feeling guilty because today you only did ordinary routines without any breakthroughs."
      ],
    },
    colorClass: "text-emerald-400",
    hexColor: "#34d399",
    bgGradient: "from-emerald-950 to-slate-900",
  },
  {
    zone: "Shift",
    state: "Adjust",
    mode: "Adapt",
    flow: "Balance",
    minScore: 51,
    maxScore: 60,
    interpretation:
      "You are in a healthy adjustment phase. There is growing flexibility and adaptive capacity. This is a positive transition toward higher balance.",
    characteristics: {
      feelings: "You begin to feel lighter, more open, and a positive curiosity is slowly blooming. It's as if dark clouds have just drifted away and you are starting to feel interested in exploring new things.",
      thoughts: "Your mind is much more flexible. When initial plans fail, your brain casually thinks of backup options. You begin to see problems from other people's perspectives without feeling judged or defensive.",
      worries: "Sometimes you still feel hesitant when trying new challenges, but that hesitation is quickly overcome by your interest. You begin to laugh at small mistakes and realize that failing is normal.",
      reality: "You no longer view the world rigidly. Reality feels much more dynamic, filled with alternative opportunities, and vast room for compromise. Changes around you no longer feel threatening.",
      physical: "Your muscles are genuinely loosening up and becoming flexible. Your breathing is naturally deeper, and the rhythm of energy inside you feels fresher, making you ready to maneuver forward whenever needed.",
    },
    deepInsights: {
      whyFeelThisWay: "Because your emotional defenses are subsiding and being replaced by an exploratory drive. Your brain detects that the current environment is safe enough to try new things without fear of fatal risks.",
      amIOkay: "You are growing in a very positive direction. The occasional anxiety you feel when trying new habits is just your nervous system's natural response to stretching outside its comfort zone, not a sign of danger.",
      unconsciousPattern: "Previously you had a habit of seeing everything in black and white. Now, you subconsciously are becoming adept at tolerating uncertainty and enjoying the learning process without demanding instant results.",
    },
    actionable: {
      practice: [
        "Change your route home to train your brain to see new scenery.",
        "Try greeting a coworker from a different division whom you rarely meet.",
        "Listen to a podcast episode on a topic you know nothing about.",
        "Read opinions opposing your beliefs to practice empathy.",
        "Say yes to one spontaneous, positive invitation this week."
      ],
      avoid: [
        "Giving up and retreating on the first attempt when learning a new skill.",
        "Reverting to old working methods just because the new one feels awkward.",
        "Criticizing weird ideas from coworkers during a brainstorming session.",
        "Avoiding new social environments out of fear of not having topics to talk about.",
        "Letting small doubts stop you from asking an expert."
      ],
    },
    colorClass: "text-teal-400",
    hexColor: "#2dd4bf",
    bgGradient: "from-teal-950 to-slate-900",
  },
  {
    zone: "Awake",
    state: "Clear",
    mode: "Observe",
    flow: "Open",
    minScore: 61,
    maxScore: 70,
    interpretation:
      "Your self-awareness is at a good level. You are beginning to see yourself and your situation more clearly. Use this clarity to make more conscious decisions.",
    characteristics: {
      feelings: "You feel very whole, present in this exact second. There is a deep peace in your mind, free from the demands of expectations. You feel content with yourself without the urge to show off achievements.",
      thoughts: "Your clarity of thought is at an extraordinary stage. You are highly objective and not easily offended. You can sharply separate events that are purely facts from mere overblown assumptions.",
      worries: "Anxieties seem to shatter into pieces. Your focus shifts completely from complaining about problems to thinking about what actions can be executed now. You slowly and gracefully let go of things outside your control.",
      reality: "The world in your eyes turns into a calm, neutral space. Annoying people simply provide information about their character, not a personal attack. You seem to enjoy being a relaxed spectator of the theater of your life.",
      physical: "Physically you feel very friendly with your own body. Your spine posture is elegantly upright without rigid force. Your gaze feels more alert, clear, and sharp in scanning your surroundings.",
    },
    deepInsights: {
      whyFeelThisWay: "Because you have successfully created a healthy space between a trigger (stimulus) and your reaction. You observe the noise in your head like a calm, objective observer on a riverbank.",
      amIOkay: "You are in a brilliant psychological state. This dense calmness is not apathy or numbness, but the peak of emotional maturity where you adeptly select what deserves your attention.",
      unconsciousPattern: "For years you often acted on autopilot, driven by momentary emotional impulses. Now, you fully realize that the ultimate control room (choosing your response) is entirely in your hands.",
    },
    actionable: {
      practice: [
        "Set aside ten minutes in the morning to sit in silence doing nothing.",
        "Practice being an observer of your own emotions by silently naming the emotion without getting swept away.",
        "Write a short journal about the objective facts of the day without dramatic embellishments.",
        "Practice listening to others' complaints without offering solutions unless asked.",
        "Maintain an upright spine posture while walking to keep your awareness anchored."
      ],
      avoid: [
        "Involving yourself in the emotional drama of others who refuse help.",
        "Taking professional criticism as an attack on your personal self-esteem.",
        "Ignoring your energy boundaries to play the hero for everyone.",
        "Swallowing anger-provoking information without verifying the facts.",
        "Being provoked to correct someone who is clearly arguing just for ego."
      ],
    },
    colorClass: "text-cyan-400",
    hexColor: "#22d3ee",
    bgGradient: "from-cyan-950 to-slate-900",
  },
  {
    zone: "Merge",
    state: "Smooth",
    mode: "Align",
    flow: "Grow",
    minScore: 71,
    maxScore: 80,
    interpretation:
      "Your energy, emotions, and cognition are beginning to move in sync. You are in a harmonious and productive state. Your capacity to grow and contribute is at a high level.",
    characteristics: {
      feelings: "There is a warmth and a very genuine inner connection with the people in your life. Your empathy sensors are wide open; you are filled with peace and genuinely thrilled to see your peers or family succeed.",
      thoughts: "Solutions and creative ideas flow abundantly without interruption. Your mindset has shifted from selfish competition to a strong desire for collaboration. Your intuition is very agile at reading the unspoken feelings of those you converse with.",
      worries: "The layers of anxiety have been completely rolled away by a blanket of grounded confidence. You trust the pace of your process, believe in the universe's good intentions, and hold firm to your rational capacity to dismantle obstacles.",
      reality: "The world transforms into a friendly, synchronous, and mutually supportive ecosystem. You will often smile realizing the many lucky coincidences brought by the radiation of your inner positivity to your surroundings.",
      physical: "The energy circulation in your veins flows warm and relaxed. Your body language signals friendly openness. Every step you take feels as light as floating, yet your feet are planted firmly on the ground.",
    },
    deepInsights: {
      whyFeelThisWay: "Because the walls of your personal ego have softened and melted, making ample room for genuine empathy to take command. Your nervous system feels so secure that it isn't afraid to radiate affection.",
      amIOkay: "This state represents a magnificent spectrum of psychological well-being. Rich connections with your surroundings wash away your inner residue, acting as a sharp accelerator for the growth of your emotional capacity.",
      unconsciousPattern: "You have just deeply buried the illusion from the past that success is a narrow, cutthroat arena. You have fully embraced the inner abundance that the world is vast enough for everyone to shine brightly.",
    },
    actionable: {
      practice: [
        "Give very specific and genuine appreciation for a friend's hard work.",
        "Ask probing questions when listening to your partner tell a story.",
        "Act as a bridge to connect two acquaintances so they can collaborate.",
        "Prioritize the word 'we' over 'I' when discussing within a team.",
        "Let go of or surrender small things that usually trigger ego debates."
      ],
      avoid: [
        "Hiding brilliant ideas from coworkers because of a secret fear of being outshone.",
        "Dominating conversations and not leaving room for quieter voices.",
        "Taking all the credit for a success when a team was behind it.",
        "Letting professional jealousy ruin your pride in a friend's achievement.",
        "Withdrawing from collaborative activities because you feel you can do it faster alone."
      ],
    },
    colorClass: "text-sky-300",
    hexColor: "#7dd3fc",
    bgGradient: "from-sky-900 to-slate-900",
  },
  {
    zone: "Core",
    state: "Strong",
    mode: "Focus",
    flow: "Rise",
    minScore: 81,
    maxScore: 90,
    interpretation:
      "You are operating from your most stable center. Focus, strength, and clarity are present simultaneously. This condition allows you to make a meaningful impact.",
    characteristics: {
      feelings: "A sensation of absolute mental solidity rules your chest. You exude a strong, yet completely silent confidence (quiet confidence). You have stopped thirsting for external validation.",
      thoughts: "The sharpness of your analysis surpasses a razor blade. Your long-term vision is brightly displayed. You can unravel, systematically map out, and solve complex piles of problems that make colleagues wince, without wasting time.",
      worries: "The definition of worry has evaporated without a trace from your mind's radar. When heavyweight obstacles strike, your brain refuses to tremble in fear; instead, it excitedly views it as a high-level, appetizing puzzle.",
      reality: "The horizon of your life stretches like a vast canvas where you are its chief architect. You see with crystal clarity the empty spaces where you are destined to innovate and spread massive impact.",
      physical: "Your fitness and vitality levels tear through standard limits. Your body is powered by renewable energy reserves. The speed of processing motor stimuli, along with the resilience of your immunity, skyrockets to optimal percentages.",
    },
    deepInsights: {
      whyFeelThisWay: "Because your trident of power—physical muscle, mental rationality, and emotional depth—has pierced a rare coordinate of synchronization. The creation of purpose clarity eliminates all trivial doubts.",
      amIOkay: "This is a monumental statue of human resilience. You stand firm like a steel-reinforced concrete pillar. Your only task now is to channel this colossal electrical reserve purely to hack positive, explosive innovations.",
      unconsciousPattern: "Your subconscious walls have just accepted a revolutionary fact: that no external storm is more massive than the capacity of your mind. The paradigm of fear has been replaced by the engine of curiosity.",
    },
    actionable: {
      practice: [
        "Make a major strategic decision that you have been continuously postponing for months.",
        "Take an active role as a mentor to guide inexperienced team members.",
        "Allocate a dedicated block of time to focus your energy on designing a long-term vision.",
        "Act as an objective and calm mediator during heated conflicts at work.",
        "Celebrate every difficult obstacle as an exciting intellectual puzzle."
      ],
      avoid: [
        "Looking down on or underestimating colleagues who process information slower than you.",
        "Ignoring biological fatigue and refusing to sleep just because you feel strong enough to keep working.",
        "Forcing your extraordinarily high standards of speed on all team members.",
        "Stopping the search for feedback or criticism because you feel your thinking is already perfect.",
        "Trivializing small logistical problems on the ground due to hyperfocus on the big picture."
      ],
    },
    colorClass: "text-amber-300",
    hexColor: "#fcd34d",
    bgGradient: "from-amber-950 to-slate-900",
  },
  {
    zone: "Peak",
    state: "Sharp",
    mode: "Master",
    flow: "Sustain",
    minScore: 91,
    maxScore: 100,
    interpretation:
      "This is the peak state of self-regulation. You are in full alignment between energy, emotions, and actions. Maintain this state with full awareness; it is not the endpoint, but the finest foundation.",
    characteristics: {
      feelings: "The euphoria of peace (bliss) creeps down to your smallest blood cells. You melt entirely into the vortex of a 'flow state'. It feels as though the universe dances in unison with your heartbeat. All kinds of inner friction are burned without a trace.",
      thoughts: "Explosions of insight illuminate your brain almost without you needing to furrow your brow. Solutions to existential puzzles can be unraveled completely through a single flash of intuition as fast as light.",
      worries: "Anxiety is an obsolete concept that is no longer relevant to your logic at this point. Your mind is shaded by high-dimensional awareness that fully understands every fragment of destiny, good and bad, has perfect proportions.",
      reality: "All your maneuvers and creations are the purest extract of your soul's glory. When you are immersed in your work, linear time melts flexibly as if the clock hands never tick forward.",
      physical: "Your peripheral and central nervous systems embrace at the most breathtaking degree of cellular balance designed by nature. Your skeletal muscles are as soft as flowing water yet harbor reserves of super strength ready to be unleashed. Every breath cleanses inner toxins.",
    },
    deepInsights: {
      whyFeelThisWay: "Because the defensive walls of your artificial ego are completely shattered, replaced by boundless connection into the activity you are dedicating yourself to. The imaginary line between 'me' and 'my work' vanishes into cosmic harmony.",
      amIOkay: "You are anchored upright at the nirvana of human existential synchronization. This is the absolute stamp of spiritual and emotional validity; where gratitude seamlessly merges with flawless functional performance.",
      unconsciousPattern: "At this second, your inner anchor is forcefully pulled from the muddy sea of past regrets and the dust storms of future worries. Your awareness radar locks eternally onto the sacred beat of the present, hacking a VIP channel straight to your ancient wisdom.",
    },
    actionable: {
      practice: [
        "Silently channel your inner calm to soothe panicking people around you.",
        "Immediately note or record the high-level inspirations that suddenly cross your mind today.",
        "Perform silent appreciation by wishing well for everyone you meet on the street.",
        "Consciously savor every second of the moment when you are creating in a 'flow state'.",
        "Maintain extreme humility without the slightest desire to flaunt this spiritual achievement."
      ],
      avoid: [
        "Desperately trying to grasp this extraordinary state so it never leaves your grip.",
        "Feeling disappointed or angry at yourself when you eventually step down to a normal functional zone.",
        "Considering everyday worldly matters trivial because you feel you are already at a high spiritual level.",
        "Forcing others to share your mindset and instantly reach the same level of awareness.",
        "Forgetting to eat or drink all day because you are too swept away in the bliss of the 'flow state'."
      ],
    },
    colorClass: "text-white",
    hexColor: "#ffffff",
    bgGradient: "from-slate-700 to-slate-900",
  },
];
