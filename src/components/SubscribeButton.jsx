import { useState } from "react";

const SubscribeButton = ({ rightChevronImageUrl, blueArrowImageUrl }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    try {
      const urlAction = "https://assets.mailerlite.com/jsonp/825554/forms/114203514307085610/subscribe";
      const urlKey = encodeURIComponent(`fields[email]`);
      const urlVal = encodeURIComponent(email);
      const response = await fetch(`${urlAction}?${urlKey}=${urlVal}`, {
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
        <p className={"cta-business-title"}>Comment provoquer la chance ? </p>
        <p className={"cta-business-description"}>
          Difficile de naviguer sur les eaux incertaines du business... Découvrez comment affiner votre processus décisionnel pour marcher vers le
          succès.
        </p>
      </div>
      <div className="arrow-delimiter">
        <img src={blueArrowImageUrl} alt="-->" width={50} height={50} />
      </div>
      <div className={"cta-start"}>
        <p className={"cta-business-title"}>Commencez ici.</p>
        <input
          name="email_address"
          aria-label="E-mail"
          placeholder="Inscrivez votre adresse mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={"cta-submit"}>
        <button className={"btn"} type="submit" onClick={handleSubmit}>
          Accès Gratuit
        </button>
      </div>
    </div>
  );
};

export default SubscribeButton;
