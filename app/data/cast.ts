export interface CastMember {
  name: string;
  actor: string;
  role: string;
  family: "raisingh" | "saluja" | "other";
  isLead: boolean;
}

export const leadCast: CastMember[] = [
  {
    name: "Mannat",
    actor: "Ayesha Singh",
    role: "The heart of the story. A strong, compassionate woman caught between duty and love. She married into the Raisingh family and has become its moral compass, fighting for truth even when the odds are stacked against her.",
    family: "raisingh",
    isLead: true,
  },
  {
    name: "Vikrant / Aman",
    actor: "Adnan Khan",
    role: "A man with a dual identity. Known as Vikrant in the Raisingh household, his true name is Aman. He carries deep secrets and a tortured past. His love for Mannat is intense but complicated by deception and family politics.",
    family: "raisingh",
    isLead: true,
  },
  {
    name: "Aishwarya / Arzoo",
    actor: "Mona Vasu",
    role: "The primary antagonist with a split personality. As Aishwarya, she appears graceful and composed. As Arzoo, she is manipulative and dangerous. Her schemes have caused immense pain to the Raisingh family.",
    family: "raisingh",
    isLead: true,
  },
  {
    name: "Dhairya",
    actor: "Manit Joura",
    role: "A principled man torn between his family loyalty and his growing suspicions about Arzoo. He shares a complicated history with Mannat and serves as a key figure in unraveling the truth.",
    family: "raisingh",
    isLead: true,
  },
];

export const supportingCast: CastMember[] = [
  {
    name: "Dua",
    actor: "Supporting Cast",
    role: "Sharp and perceptive, she was among the first to suspect Arzoo. Now works secretly with Bunty to expose the truth.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Bunty",
    actor: "Supporting Cast",
    role: "Dua's partner in the investigation against Arzoo. Resourceful and loyal, he provides crucial support from behind the scenes.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Rajveer Raisingh",
    actor: "Supporting Cast",
    role: "The patriarch of the Raisingh family. A powerful man whose decisions shape the fate of the entire household.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Suman Raisingh",
    actor: "Supporting Cast",
    role: "The matriarch who holds the family together with tradition and authority. Her approval is sought by everyone in the household.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Kavya",
    actor: "Supporting Cast",
    role: "A member of the Raisingh family who often gets caught in the crossfire of family drama. Her loyalties shift as secrets come to light.",
    family: "raisingh",
    isLead: false,
  },
  {
    name: "Neeraj Saluja",
    actor: "Supporting Cast",
    role: "Connected to the Saluja family, his alliances and motives remain questionable. A wildcard in the ongoing power struggle.",
    family: "saluja",
    isLead: false,
  },
  {
    name: "Priya Saluja",
    actor: "Supporting Cast",
    role: "A Saluja family member whose connection to the Raisingh household adds layers of complexity to the inter-family dynamics.",
    family: "saluja",
    isLead: false,
  },
  {
    name: "Inspector Rathore",
    actor: "Supporting Cast",
    role: "The investigating officer who has been circling the Raisingh family. His involvement could either save or doom the family.",
    family: "other",
    isLead: false,
  },
];

export const familyTree = {
  raisingh: {
    name: "Raisingh Family",
    description:
      "The powerful and wealthy Raisingh clan. Their mansion is the primary setting of the show. Led by patriarch Rajveer and matriarch Suman, this family is bound by tradition, secrets, and complex loyalties.",
    members: ["Rajveer", "Suman", "Vikrant/Aman", "Mannat", "Dhairya", "Aishwarya/Arzoo", "Dua", "Kavya"],
  },
  saluja: {
    name: "Saluja Family",
    description:
      "The Saluja family shares a complicated history with the Raisinghs. Old rivalries, business conflicts, and secret alliances tie the two families together in ways that continue to surface.",
    members: ["Neeraj", "Priya", "Bunty"],
  },
};
