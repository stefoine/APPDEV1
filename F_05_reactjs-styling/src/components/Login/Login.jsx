import styles from './Login.module.css'

import leafyBackground from '../../assets/blue-white-leafy-background-vector_53876-136080 1.svg'
import googleLogo from '../../assets/flat-color-icons_google.svg'
import facebookLogo from '../../assets/Vector.svg'

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className={styles.login}>

      {/* Left Panel - Leafy Background */}
      <section className={styles.leftPanel}>
        <img
          src={leafyBackground}
          alt="Blue and white leafy background"
          className={styles.backgroundImage}
        />
      </section>

      {/* Right Panel - Login Form */}
      <section className={styles.rightPanel}>

        {/* Welcome Heading */}
        <div className={styles.welcomeText}>
          <h1>
            <span className={styles.hello}>Hello,</span>
            <span className={styles.guyss}>Guyss!</span>
          </h1>
        </div>

        {/* Login and SignUp Tabs */}
        <div className={styles.tabs}>
          <span className={`${styles.tab} ${styles.activeTab}`}>
            Login
          </span>

          <span className={`${styles.tab} ${styles.inactiveTab}`}>
            SignUp
          </span>
        </div>

        {/* Login Form */}
        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              aria-label="Password"
              placeholder="Enter Password"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>

        {/* Social Icons */}
        <div className={styles.socialSection}>
          <p>Or</p>

          <div className={styles.socialIcons}>
            <img
              src={googleLogo}
              alt="Google"
              className={styles.googleIcon}
            />

            <img
              src={facebookLogo}
              alt="Facebook"
              className={styles.facebookIcon}
            />
          </div>
        </div>

      </section>
    </main>
  )
}

export default Login
