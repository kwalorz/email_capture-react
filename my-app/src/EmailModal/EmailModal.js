import React, { useEffect } from "react";
import { useStateContext } from "./EMProvider";
import Cookies from "js-cookie";

const EmailModal = () => {
  const newState = useStateContext();
  useEffect(() => {
    document.body.addEventListener("mouseleave", () => {
      if (Cookies.get("modalOpenedBefore") !== "true") {
        newState.openModalAction();
      }
    });
  }, []);
  return (
    <section
      className={`email-modal ${
        newState.modalOpen ? "email-modal--visible" : ""
      }`}
    >
      <div
        className="email-modal__close-btn"
        onClick={newState.closeModalAction}
      >
        <i className="gg-close"></i>
      </div>
      <div className="email-modal__container">
        <form className="email-modal__info" onSubmit={newState.submittedForm}>
          <div className="logo">
            Wicked
            <div className="logo__sub">Awesome Shoes</div>
          </div>
          <h2>Don't miss this chance!</h2>
          <p className="email-modal__message">
            Join our community of more than{" "}
            <span className="email-modal__highlight-text">
              300,000 men and women
            </span>{" "}
            who love looking their best and receive{" "}
            <span className="email-modal__highlight-text">
              notifications on upcoming sales and promotions!
            </span>
          </p>
          <div
            className={`email-modal__error-message ${
              newState.showEmailError
                ? "email-modal__error-message--active"
                : ""
            }`}
          >
            Sorry this is not a valid email
          </div>
          <div className="email-modal__form-group">
            <input
              type="email"
              className="email-modal__input"
              placeholder="youremail@mail.com"
              value={newState.email}
              onChange={newState.handleEmailInput}
              onBlur={newState.checkForEmail}
              onFocus={newState.removeErrorMessage}
            />
            <button type="submit" className="email-modal__button">
              Send
            </button>
          </div>
          <div
            className="email-modal__decline-offer"
            onClick={newState.closeModalAction}
          >
            Sorry, I'm not interested
          </div>
        </form>
        <div className="email-modal__side-img">
          <img src="img/boots.jpg" />
        </div>
        <div
          className={`email-thank ${
            newState.formCompleted ? "email-thank--success" : ""
          }`}
        >
          <div className="email-thank__title">Thank You</div>
          <p className="email-thank__message">
            check your email we sent you some instructions... by the way welcome
            to the community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailModal;
