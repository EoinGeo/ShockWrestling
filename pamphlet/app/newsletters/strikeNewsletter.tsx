import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { strikeBigMoment, topStrikeMoments, strikeData } from "../data";

export default function StrikeNewsletter() {
  return (
    <Newsletter>
      <BigMomentSection image={strikeBigMoment} />

      <MatchOfTheNightSection matches={strikeData} />

      <MomentsSection
        logo={require("../../assets/STRIKE.png")}
        moments={topStrikeMoments}
      />

      <MatchesSection matches={strikeData} />
    </Newsletter>
  );
}
