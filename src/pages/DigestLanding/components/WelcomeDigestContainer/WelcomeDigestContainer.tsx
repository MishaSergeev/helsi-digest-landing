import type { DigestUpdate } from "../../../../types/digest";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { WelcomeDigestSubtitle } from "../WelcomeDigestSubtitle/WelcomeDigestSubtitle";
import { WelcomeDigestTitle } from "../WelcomeDigestTitle/WelcomeDigestTitle";
import { WelcomeDigestDescription } from "../WelcomeDigestDescription/WelcomeDigestDescription";
import { WelcomeDigestImage } from "../WelcomeDigestImage/WelcomeDigestImage";
import {WelcomeDigestAction } from "../WelcomeDigestAction/WelcomeDigestAction"

import styles from "./WelcomeDigestContainer.module.css";

type Props = {
    digest: DigestUpdate;
};

export const WelcomeDigestContainer = ({ digest }: Props) => {
    const isMobile = useIsMobile();
    const descText = 'Дайджест — це цілий рік пропозицій для здоровʼя, знижок на медичні послуги та товари для здоров’я, корисний контент, щоб ви могли піклуватись про свій організм комфортно та без зайвих зусиль.'
    return (
        <section className={styles.Welcome_digest_container}>
            <WelcomeDigestSubtitle text={digest.name} />
            <WelcomeDigestTitle text={digest.description} />
            <WelcomeDigestDescription text={descText}/>
            <WelcomeDigestImage digest={digest} isMobile={isMobile}/>
            <WelcomeDigestAction/>
        </section>
    );
};