import { useState } from "react";
import "./styles/newsletter.scss";

function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [active, setActive] = useState(true);

  const nameInput = document.querySelectorAll(".newsletter__form-name");
  const emailInput = document.querySelectorAll(".newsletter__form-email");

  const handleName = (e: any) => {
    nameInput?.forEach((input: Element) => {
      input.classList["remove"]("newsletter__form-invalid");
    });

    setName(e.target.value);
  };

  const handleEmail = (e: any) => {
    emailInput?.forEach((input: Element) => {
      input.classList["remove"]("newsletter__form-invalid");
    });
    setEmail(e.target.value);
  };

  const sendNewsletter = (e) => {
    e.preventDefault();

    if (name === "" && !email.includes("@")) {
      nameInput?.forEach((input: Element) => {
        input.classList["add"]("newsletter__form-invalid");
      });
      emailInput?.forEach((input: Element) => {
        input.classList["add"]("newsletter__form-invalid");
      });
    } else if (name === "") {
      nameInput?.forEach((input: Element) => {
        input.classList["add"]("newsletter__form-invalid");
      });
    } else if (!email.includes("@")) {
      emailInput?.forEach((input: Element) => {
        input.classList["add"]("newsletter__form-invalid");
      });
    } else {
      const data = {
        email: email,
        username: name,
      };

      setLoading(true);

      fetch(`https://fakestoreapi.com/users`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((e) => {
          console.info(e);
        })
        .finally(() => {
          setLoading(false);
          setActive(false);
          setName("");
          setEmail("");
        });
    }
  };

  const sendNewEmail = () => {
    setActive(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <form
          className={`newsletter__form ${
            !active ? "newsletter__formDisabled" : ""
          }`}
        >
          <h2>Participe de nossas news com promoções e novidades!</h2>

          <div className="newsletter__form-fields">
            <div className="newsletter__form-input">
              <input
                className="newsletter__form-name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                id="newsletter-name"
                onChange={handleName}
              />
              <span></span>
            </div>

            <div className="newsletter__form-input">
              <input
                className="newsletter__form-email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                id="newsletter-email"
                onChange={handleEmail}
              />
              <span></span>
            </div>

            <button
              onClick={sendNewsletter}
              className={`${loading ? `loading` : ``}`}
            >
              Eu quero!
            </button>
          </div>
        </form>

        <div
          className={`newsletter__done ${
            !active ? "newsletter__doneActive" : ""
          }`}
        >
          <p>
            <strong>Seu e-mail foi cadastrado com sucesso!</strong>
            <br />A partir de agora você receberá as novidades e ofertas
            exclusivas.
          </p>
          <button onClick={sendNewEmail}>Cadastrar novo e-mail</button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
