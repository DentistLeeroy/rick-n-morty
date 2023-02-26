import styles from "./CommonButton.module.css";

interface CommonButtonProps {
    variant: "primary" | "secondary";
    label: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function CommonButton({ variant, label, onClick }: CommonButtonProps) {

    return (
        <button className={`${styles.commonButton} ${styles[variant]}`} onClick={onClick}>{label}</button>
    );
}