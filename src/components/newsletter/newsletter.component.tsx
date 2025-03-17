import Button from "../ui/button/button.ui"
import Input from "../ui/input/input.ui"
import styles from "./_newsLetter.module.scss"

export function NewsLetter() {
  return(
    <div className={styles.newsLetter}>
      <div>
        <h5>
          Inscreva-se na nossa newsletter
        </h5>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
      </div>
      <div >
        <form className={styles.newsLetterForm}>
          <Input variant="text" placeholder="Digite seu nome"/>
          <Input variant="email" placeholder="Digite seu e-mail"/>
          <Button variant="yellow">INSCREVER</Button>
       </form>
        <input type="checkbox" name="check" id="check" />
        <label htmlFor="check">
          Aceito os termos e condições
        </label>
      </div>
    </div>  
  )
}