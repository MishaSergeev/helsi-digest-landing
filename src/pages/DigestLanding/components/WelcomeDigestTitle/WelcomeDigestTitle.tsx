import styles from "./WelcomeDigestTitle.module.css";

type Props = {
  text?: string;
};

export const WelcomeDigestTitle = ({ text }: Props) => {
  return <h1 className={styles.Welcome_title}>{text}</h1>;
};