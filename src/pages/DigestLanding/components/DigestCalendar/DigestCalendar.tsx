import type { DigestUpdate } from "../../../../types/digest";
import { DigestCard } from "../DigestCard/DigestCard";

import styles from "./DigestCalendar.module.css";

type Props = {
    digests: DigestUpdate[];
    activeDigest: DigestUpdate | null;
};

export const DigestCalendar = ({ digests, activeDigest }: Props) => {
    return (
        <div className={styles.Calendar_section}>
            <div className={styles.Calendar_cardsContainer}>
                <div className={styles.Calendar_monthlyCards}>
                    {digests.map(digest => {
                        const isActive = activeDigest?.id === digest.id;
                        return (
                            <DigestCard
                                key={digest.id}
                                digest={digest}
                                isActive={isActive}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};