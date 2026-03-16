export interface EpisodeDigest {
  episodeNumber: string;
  airDate: string;
  title: string;
  summary: string;
  keyEvents: string[];
  charactersFeatured: string[];
  cliffhanger: string;
}

export const latestDigest: EpisodeDigest = {
  episodeNumber: "372",
  airDate: "March 16, 2026",
  title: "The Walls Close In",
  summary:
    "Dua and Bunty finally obtain photographic evidence of Arzoo meeting her secret accomplice outside the city. Meanwhile, Mannat confronts Vikrant about his recent distant behavior, leading to an emotionally charged conversation. Dhairya receives a mysterious phone call that could change the course of the investigation. Arzoo, sensing danger, plants false evidence to frame an innocent family member.",
  keyEvents: [
    "Dua photographs Arzoo at a clandestine meeting outside the Raisingh estate",
    "Bunty discovers financial records linking Arzoo to the property fraud",
    "Mannat and Vikrant have an intense heart-to-heart about trust and second chances",
    "Dhairya receives a call from an unknown source with information about Arzoo's past",
    "Arzoo plants a forged document in Kavya's room to create a diversion",
    "Inspector Rathore visits the Raisingh mansion under the pretext of a routine inquiry",
    "Suman notices Aishwarya's unusual behavior during the evening prayer",
    "A flashback reveals a crucial detail about the night of the accident from Phase 4",
  ],
  charactersFeatured: [
    "Mannat",
    "Vikrant/Aman",
    "Aishwarya/Arzoo",
    "Dhairya",
    "Dua",
    "Bunty",
    "Suman",
    "Inspector Rathore",
    "Kavya",
  ],
  cliffhanger:
    "As the episode ends, Arzoo discovers a hidden camera in her room placed by Dua. She stares directly into it with a chilling smile, whispering 'You think you can catch me?' The screen cuts to black as Dua watches the live feed in horror, realizing Arzoo now knows she is being watched.",
};
