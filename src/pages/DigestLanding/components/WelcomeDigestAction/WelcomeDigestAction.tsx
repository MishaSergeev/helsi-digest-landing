import { Button } from "../../../../ui/Button/Button";

import styles from "./WelcomeDigestAction.module.css";

export const WelcomeDigestAction = () => {
    const handleClick = () => {
        alert("Переглянути пропозиції дайджесту");
    };
    return (
        <div className={styles.Welcome_action_container}>
            <Button onClick={handleClick} className={styles.Button_welcome_digest}>
                Переглянути пропозиції дайджесту
            </Button>
        </div>
    );
};