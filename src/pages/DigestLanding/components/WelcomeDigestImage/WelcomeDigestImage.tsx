import type { DigestUpdate } from "../../../../types/digest";
import { getMediaUrl } from "../../../../utils/mediaUrl";

import styles from "./WelcomeDigestImage.module.css";

type Props = {
    digest: DigestUpdate;
    alt?: string;
    isMobile?: boolean;
};

export const WelcomeDigestImage = ({ digest, alt, isMobile }: Props) => {
    const imageUrl = isMobile ? digest.mobileImage : digest.webImage;
    return (
        <div className={styles.Welcome_imageBlock}>
            <img
                src={getMediaUrl(imageUrl)}
                alt={alt ?? digest.name}
                className={styles.Welcome_image}
            />
        </div>
    );
};
