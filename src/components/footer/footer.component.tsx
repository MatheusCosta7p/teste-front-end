import { Icon } from "../ui/Icon/Icon.ui";
import styles from "./_footer.module.scss";
import FooterCopyright from "./footerCopyright/footerCopyright";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <img src="/teste-front-end/images/Logo.svg" alt="econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.footerIcons}>
            <a href="#instagram">
              <Icon type="Instagram" />
            </a>
            <a href="#facebook">
              <Icon type="Facebook" />
            </a>
            <a href="#linkedin">
              <Icon type="Linkedin" />
            </a>
          </div>
        </div>

        <div className={styles.dividerVertical}></div>

        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h6>Institucional</h6>
            <a href="#sobre-nos">Sobre Nós</a>
            <a href="#movimento">Movimento</a>
            <a href="#trabalhe-conosco">Trabalhe conosco</a>
          </div>

          <div className={styles.footerSection}>
            <h6>Ajuda</h6>
            <a href="#suporte">Suporte</a>
            <a href="#fale-conosco">Fale Conosco</a>
            <a href="#perguntas-frequentes">Perguntas Frequentes</a>
          </div>

          <div className={styles.footerSection}>
            <h6>Termos</h6>
            <a href="#termos">Termos e Condições</a>
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#troca-devolucao">Troca e Devolução</a>
          </div>
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
