import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import {
  provingGroundsBigMoment,
  topProvingGroundsMoments,
  provingGroundsData,
} from "../data";

export default function CawNewsletter() {
  return (
    <Newsletter>
      <BigMomentSection image={provingGroundsBigMoment} />

      <MatchOfTheNightSection matches={provingGroundsData} />

      <MomentsSection
        logo={require("../../assets/PG.png")}
        moments={topProvingGroundsMoments}
      />

      <MatchesSection matches={provingGroundsData} />
    </Newsletter>
  );
}
