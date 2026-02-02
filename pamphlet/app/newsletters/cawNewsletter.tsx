import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { cawBigMoment, topCawMoments, cawData } from "../data";

export default function CawNewsletter() {
  return (
    <Newsletter>
      <BigMomentSection image={cawBigMoment} />

      <MatchOfTheNightSection matches={cawData} />

      <MomentsSection
        logo={require("../../assets/CAW.png")}
        moments={topCawMoments}
      />

      <MatchesSection matches={cawData} />
    </Newsletter>
  );
}
