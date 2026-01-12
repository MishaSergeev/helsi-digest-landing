import { WelcomeDigestContainer } from "./components/WelcomeDigestContainer/WelcomeDigestContainer";
import { DigestCalendar } from "./components/DigestCalendar/DigestCalendar";
import { useDigestUpdates } from "../../hooks/useDigestUpdates";

import styles from "./DigestLanding.module.css";


export const DigestLanding = () => {
  const { digests, activeDigest, isLoading, error } = useDigestUpdates();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!digests.length || !activeDigest) {
    return <div>No data</div>;
  }
  //console.log('digests',digests)

  return (
    <div style={{ backgroundColor: activeDigest.backgroundColor }}>
      <div className={styles.CenteredContainer}>
        <WelcomeDigestContainer digest={activeDigest} />
        <DigestCalendar digests={digests} activeDigest={activeDigest} />
      </div>
    </div>
  );
};