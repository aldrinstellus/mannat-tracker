export interface CastMember {
  name: string;
  actor: string;
  role: string;
  family: "raisingh" | "saluja" | "other";
  isLead: boolean;
  image?: string;
}

export const leadCast: CastMember[] = [
  {
    name: "Mannat Khanna",
    actor: "Ayesha Singh",
    role: "Female Lead. Chef, abandoned as a baby at Marine Drive by her mother Sonia. Raised by aunt Shruti. Fights for identity, family, and to expose Arzoo/Aishwarya.",
    family: "raisingh",
    isLead: true,
    image: "https://www.iwmbuzz.com/wp-content/uploads/2025/12/exclusive-mannat-actress-ayesha-singh-on-televisions-biggest-advantage-you-get-to-live-see-your-character-grow.jpg",
  },
  {
    name: "Vikrant / Aman",
    actor: "Adnan Khan",
    role: "Male Lead. Actually Aman Kumar — the boy who saved baby Mannat. Real Vikrant died at age 5. Businessman at Mezbaani. Torn between duty and love, now learning to be a father to Dua.",
    family: "saluja",
    isLead: true,
    image: "https://img.indiaforums.com/person/480x360/1/13354-adnan-khan.webp?c=6rJ3C9",
  },
  {
    name: "Aishwarya / Sonia / Arzoo",
    actor: "Mona Vasu",
    role: "Primary Antagonist. Mannat's biological mother who abandoned her. 3 identities: Sonia → Aishwarya → Arzoo. Murdered Rajendra. Currently infiltrating the family as 'Arzoo'.",
    family: "raisingh",
    isLead: true,
    image: "https://img.indiaforums.com/person/480x360/0/0442-mona-wasu.webp?c=1yY448",
  },
  {
    name: "DCP Dhairya Kumar",
    actor: "Manit Joura",
    role: "Parallel Male Lead. Vikrant's brother, Dua's adoptive father. DCP by profession. Moral compass of the show. Currently allied with Mannat to expose Arzoo.",
    family: "saluja",
    isLead: true,
    image: "https://www.iwmbuzz.com/wp-content/uploads/2026/01/there-is-a-lot-of-good-work-that-happens-on-tv-manit-joura-of-mannat-har-khushi-paane-ki.jpeg",
  },
];

export const supportingCast: CastMember[] = [
  {
    name: "Mallika (Malla)",
    actor: "Sharain Khanduja",
    role: "Aishwarya's daughter, Mannat's half-sister, Vikrant's ex-wife. Poisoned orphanage food to frame Mannat. Divorced after being exposed.",
    family: "raisingh",
    isLead: false,
    image: "https://www.iwmbuzz.com/wp-content/uploads/2025/08/mannat-actress-sharain-khandujas-blood-pressure-drops-during-shoot-doctor-arrives-on-set.jpg",
  },
  {
    name: "Yashika",
    actor: "Leena Jumani",
    role: "Vikrant's fake business partner and romantic interest. Proposed to Vikrant at Valentine's party. Smarter than expected.",
    family: "other",
    isLead: false,
    image: "https://www.iwmbuzz.com/wp-content/uploads/2025/12/exclusive-leena-jumani-to-enter-colors-tvs-mannat-har-khushi-paane-ki.jpeg",
  },
  {
    name: "Dua Saluja",
    actor: "Trisha Sharda",
    role: "Mannat & Vikrant's daughter. Raised by Dhairya. Currently investigating Arzoo with Bunty's help.",
    family: "saluja",
    isLead: false,
  },
  {
    name: "Harneet",
    actor: "Delnaaz Irani",
    role: "Supporting matriarch. Family elder in the household.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Anirudh Saxena",
    actor: "Sanjay Swaraj",
    role: "Mannat's biological father. Wrongfully accused by Aishwarya. Proven innocent. Now an ally to Mannat and Vikrant.",
    family: "other",
    isLead: false,
  },
  {
    name: "Gagan Raisingh",
    actor: "Hasan Zaidi",
    role: "Aishwarya's husband. London businessman. Head of the Raisingh business empire.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Ronnie Saluja",
    actor: "Rushad Rana",
    role: "Vikrant's adoptive father. Part of the Saluja family.",
    family: "saluja",
    isLead: false,
  },
  {
    name: "Neetu Saluja",
    actor: "Swati Anand",
    role: "Ronnie's wife, Vikrant's adoptive mother. Recently arrived at Vikrant's mehndi function.",
    family: "saluja",
    isLead: false,
  },
  {
    name: "Shruti",
    actor: "Mamta Verma",
    role: "Mannat's maternal aunt who raised her after she was abandoned.",
    family: "other",
    isLead: false,
  },
  {
    name: "Puneet Saluja",
    actor: "Abeer Singh Godhwani",
    role: "Bobby & Raveena's son. Mallika's accomplice in the poison plot.",
    family: "saluja",
    isLead: false,
  },
  {
    name: "Rajendra Raisingh",
    actor: "Pradeep Shukla",
    role: "Raisingh family patriarch. Murdered by Aishwarya.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Keerat Raisingh",
    actor: "Roopa Divetia",
    role: "Raisingh family member.",
    family: "raisingh",
    isLead: false,
  },
];

export const familyTree = {
  raisingh: {
    name: "Raisingh Family",
    description:
      "Led by the late Rajendra (murdered by Aishwarya) and Keerat. Aishwarya married into this family via Gagan. Mallika is Aishwarya's daughter. Mannat is also Aishwarya's daughter (abandoned at birth).",
    members: ["Rajendra (Dead)", "Keerat", "Gagan", "Aishwarya/Arzoo", "Mallika"],
  },
  saluja: {
    name: "Saluja Family",
    description:
      "Ronnie and Neetu are Vikrant's adoptive parents. Vikrant is actually Aman (identity fabricated after the real Vikrant died at age 5). Dhairya is Vikrant's brother. Dua is Mannat & Vikrant's daughter, raised by Dhairya.",
    members: ["Ronnie", "Neetu", "Vikrant/Aman", "Dhairya", "Dua", "Puneet"],
  },
};
