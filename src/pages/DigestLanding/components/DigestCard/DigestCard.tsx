import type { DigestUpdate } from "../../../../types/digest";
import { getMediaUrl } from "../../../../utils/mediaUrl";
import styles from "./DigestCard.module.css";

type Props = {
    digest: DigestUpdate;
    isActive?: boolean;
};

export const DigestCard = ({ digest, isActive = false }: Props) => {
    const handleClick = () => {
        alert("Переглянути пропозиції дайджесту");
    };
    return (
        <button
            className={styles.ActionElement_container}
            onClick={handleClick}
        >
            <div className={`${styles.MonthlyCard_container} ${isActive ? styles.MonthlyCardActive : ""}`}>
                <span className={`${styles.MonthlyCard_imageContainer} ${isActive ? styles.MonthlyCard_imageContainerActive : ""}`}>
                    <img
                        src={getMediaUrl(digest.digestImage)}
                        alt={digest.name}
                        className={`${styles.MonthlyCard_image} ${isActive ? styles.MonthlyCard_imageActive : ""}`}
                    />
                </span>
                <span className={`${styles.MonthlyCard_title} ${isActive ? styles.MonthlyCard_titleActive : ""}`}>{digest.monthName}</span>
            </div>
        </button>
    );
};