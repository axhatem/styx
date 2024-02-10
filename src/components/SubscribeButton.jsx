import { useState } from "react";

const SubscribeButton = ({ rightChevronImageUrl, blueArrowImageUrl }) => {
  const CONVERTKIT_FORM_IF = 6188862;
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    try {
      const response = await fetch(`https://app.convertkit.com/forms/${CONVERTKIT_FORM_IF}/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email_address: email }),
      });

      if (response.ok) {
        alert("Merci !");
        setEmail("");
      } else {
        console.error("Error submitting form:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={"cta"}>
      <div className={"cta-business"}>
        <p className={"cta-business-title"}>TU VEUX NOUS REJOINDRE ?</p>
        <p className={"cta-business-description"}>Tous les Dimanche, on navigue dans l'incertitude pour apprendre à Discerner & Décider.</p>
      </div>
      <div className="arrow-delimiter">
        <img src={blueArrowImageUrl} alt="-->" width={50} height={50} />
      </div>
      <div className={"cta-start"}>
        <p className={"cta-business-title"}>COMMENCE ICI</p>
        <input
          name="email_address"
          aria-label="E-mail"
          placeholder="Inscris ton adresse mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={"cta-submit"}>
        <button className={"btn"} type="submit" onClick={handleSubmit}>
          Je découvre
          <img src={rightChevronImageUrl} alt="-->" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default SubscribeButton;
