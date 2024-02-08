import { useState } from "react";

const SubscribeButton = ({ rightChevronImageUrl, blueArrowImageUrl }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    try {
      const response = await fetch("https://app.convertkit.com/forms/5943000/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email_address: email }),
      });

      if (response.ok) {
        alert("Subscription successful!");
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form class="cta" onSubmit={handleSubmit}>
      <div class="cta-business">
        <p class="cta-business-title">ELEVE TON BUSINESS</p>
        <p class="cta-business-description">Tous les Dimanche, on provoque la chance de prendre la décision juste.</p>
      </div>
      <div class="arrow-delimiter">
        <img src={blueArrowImageUrl} alt="-->" width={50} height={50} />
      </div>
      <div class="cta-start">
        <p class="cta-business-title">COMMENCE ICI</p>
        <input name="email_address" aria-label="E-mail" placeholder="Inscris ton adresse mail..." onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div class="cta-submit">
        <button type="submit">
          Je décide
          <img src={rightChevronImageUrl} alt="-->" width={20} height={20} />
        </button>
      </div>
    </form>
  );
};

export default SubscribeButton;
