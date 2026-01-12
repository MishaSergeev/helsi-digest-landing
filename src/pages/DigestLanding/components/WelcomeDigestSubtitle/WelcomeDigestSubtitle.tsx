import styles from "./WelcomeDigestSubtitle.module.css";

type Props = {
  text?: string;
};

export const WelcomeDigestSubtitle = ({ text }: Props) => {
  return <div className={styles.Welcome_subtitle}>{text}</div>;
};