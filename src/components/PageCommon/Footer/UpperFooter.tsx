import React from "react";
import FooterForm from "./FooterForm";

const UpperFooter = () => {
  return (
    <div className="upper-footer">
      <div className="footer-upper-text">
        <h3>Следи ги нашите новости!</h3>
        <p>
          Биди дел од нашиот newsletter и дознавај прва за промоции, попусти и
          нови колекции.
        </p>
      </div>
      <FooterForm />
    </div>
  );
};

export default UpperFooter;
