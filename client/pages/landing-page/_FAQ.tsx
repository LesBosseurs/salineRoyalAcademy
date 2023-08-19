import style from '../../styles/pages/landing-page/landingPage.module.scss';
import KeyIcon from '@/public/icons/key';
import PenIcon from '@/public/icons/pen';

export default function FAQ() {
  return (
    <section className={style.faq_container}>
      <h2>Frenquently asked questions</h2>
      <div>
        <h3>
          <KeyIcon fill="#b18b36" />
          <span>Authentication</span>
        </h3>
        <div>
          <div className={style.question_container}>
            <h3>I lost my login email address, what should I do?</h3>
            <p>
              If you forget/lose your login email address, we invite you to
              contact us via our contact form or social networks. We will do our
              best to help you find it. Do not hesitate to provide your full
              name that may be associated with your account.
            </p>
          </div>
          <div className={style.question_container}>
            <h3>I lost my password, what should I do?</h3>
            <p>
              Click{' '}
              <a href="https://my.salineacademy.com/en/forgotten-password">
                here
              </a>{' '}
              to reset your password.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>
          <PenIcon fill="#b18b36" />
          <span>Subscription</span>
        </h3>
        <div>
          <div className={style.question_container}>
            <h3>Where can I find my subscription or credit bills?</h3>
            <p>
              Your invoices and all payments for video content made on our
              website (full subscription; credit to view our masterclasses /
              videos) can be downloaded in your account.
            </p>
          </div>
          <div className={style.question_container}>
            <h3>How does the subscription work?</h3>
            <p>
              Our subscription of €29.90 per month (special offer at €9.90 per
              month) gives you unlimited access to all our masterclasses and
              videos. Your subscription is automatically renewed from one month
              to the next. If you wish to terminate your subscription, you can
              do so on your account page.
            </p>
          </div>
          <div className={style.question_container}>
            <h3>
              I have a problem with my subscription, my credits, my payment,
              what should I do?
            </h3>
            <p>
              For any problem related to subscriptions, credits and payments, we
              invite you to contact us via our contact form or social networks,
              we will try our best to help you find it. Do not hesitate to give
              us your name, first name and email address associated with your
              account so that we can find you more easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
