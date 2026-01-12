import styles from "./WelcomeDigestDescription.module.css";

type Props = {
  text?: string;
};

export const WelcomeDigestDescription = ({ text }: Props) => {
  return (
    <span>
      <div className={styles.Welcome_description}>
        {text ?? "Дайджест — це цілий рік пропозицій для здоровʼя..."}
      </div>
    </span>
  );
};