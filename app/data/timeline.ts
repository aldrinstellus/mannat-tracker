export interface TimelinePhase {
  phase: number;
  title: string;
  episodeRange: string;
  color: string;
  isCurrent: boolean;
  events: string[];
}

export const phases: TimelinePhase[] = [
  {
    phase: 1,
    title: "The Beginning",
    episodeRange: "Ep 1 - 45",
    color: "#D4A853",
    isCurrent: false,
    events: [
      "Mannat is introduced as a spirited young woman with strong values",
      "The Raisingh family and their grand mansion are established",
      "Mannat and Vikrant's first meeting sparks an instant connection",
      "Family tensions and class differences create early obstacles",
      "Mannat enters the Raisingh household under unexpected circumstances",
    ],
  },
  {
    phase: 2,
    title: "The Marriage & Deception",
    episodeRange: "Ep 46 - 95",
    color: "#6D1A36",
    isCurrent: false,
    events: [
      "Mannat and Vikrant's marriage takes place under complicated terms",
      "Vikrant's dual identity as Aman begins to surface",
      "Aishwarya enters the story and quickly gains the family's trust",
      "Early signs of Aishwarya's manipulative nature appear",
      "Dhairya's past connection with Mannat is revealed",
    ],
  },
  {
    phase: 3,
    title: "Arzoo Emerges",
    episodeRange: "Ep 96 - 145",
    color: "#8B2252",
    isCurrent: false,
    events: [
      "Aishwarya's alter ego 'Arzoo' makes her first appearance",
      "Mysterious incidents begin plaguing the Raisingh household",
      "Mannat starts noticing inconsistencies in Aishwarya's behavior",
      "Arzoo executes her first major scheme against the family",
      "Trust fractures form within the Raisingh family",
    ],
  },
  {
    phase: 4,
    title: "Secrets & Betrayals",
    episodeRange: "Ep 146 - 200",
    color: "#4A1028",
    isCurrent: false,
    events: [
      "Vikrant's true identity as Aman is exposed to the family",
      "Major fallout from the identity revelation shakes all relationships",
      "Arzoo exploits the chaos to strengthen her position",
      "Dhairya is forced to choose between family loyalty and truth",
      "A life-threatening accident changes the family dynamics forever",
    ],
  },
  {
    phase: 5,
    title: "The Power Struggle",
    episodeRange: "Ep 201 - 255",
    color: "#2E0A1E",
    isCurrent: false,
    events: [
      "Arzoo gains significant control over family business decisions",
      "Mannat and Vikrant face their biggest separation",
      "The Saluja family's old rivalry with the Raisinghs resurfaces",
      "A property dispute threatens to destroy the Raisingh legacy",
      "Unexpected alliances form as characters pick sides",
    ],
  },
  {
    phase: 6,
    title: "Redemption Arc",
    episodeRange: "Ep 256 - 310",
    color: "#9B4DCA",
    isCurrent: false,
    events: [
      "Vikrant/Aman begins his journey to earn back trust",
      "Mannat takes charge and starts fighting back against Arzoo",
      "Key evidence against Arzoo surfaces but is destroyed",
      "Dhairya makes a pivotal decision that surprises everyone",
      "A major festival celebration becomes the backdrop for a confrontation",
    ],
  },
  {
    phase: 7,
    title: "Unmasking Begins",
    episodeRange: "Ep 311 - 355",
    color: "#C0392B",
    isCurrent: false,
    events: [
      "Dua discovers critical proof of Arzoo's double life",
      "Bunty joins forces with Dua to build a case",
      "Arzoo's past crimes are slowly pieced together",
      "The family patriarch learns a devastating truth",
      "A near-miss exposure forces Arzoo to take desperate measures",
    ],
  },
  {
    phase: 8,
    title: "The Arzoo Investigation",
    episodeRange: "Ep 356 - Present (372+)",
    color: "#D4A853",
    isCurrent: true,
    events: [
      "Dua and Bunty's secret investigation gains momentum",
      "Mannat navigates her complex feelings for Vikrant/Aman",
      "Inspector Rathore begins circling the Raisingh household",
      "Arzoo senses the walls closing in and hatches a new plan",
      "Dhairya's loyalty is put to the ultimate test",
      "The truth about Arzoo threatens to destroy everything",
    ],
  },
];
