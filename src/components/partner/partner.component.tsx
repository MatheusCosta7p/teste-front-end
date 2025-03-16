import Button from "../ui/button/button.ui";
import { Card } from "../ui/card/card.ui";
import styles from "./partner.module.scss";

const partnerCards = [
  { title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", buttonText: "CONFIRA" },
  { title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", buttonText: "CONFIRA" },
];

export default function Partner() {
  return (
    <div className={styles.containerPartner}>
      {partnerCards.map((card, index) => (
        <Card variant="partner" key={index}>
          <div>
            <h5>{card.title}</h5>
            <p>{card.description}</p>
            <Button variant="yellow">
              {card.buttonText}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
