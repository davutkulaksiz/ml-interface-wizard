import WizardGuide from "../WizardGuide/WizardGuide";
import WizardFileForm from "../WizardFileForm/WizardFileForm";
import styles from "./WizardHome.module.css";

export default function WizardHome() {
  return (
    <>
      <div className={styles.container}>
        <WizardGuide />
        <WizardFileForm />
      </div>
    </>
  );
}
