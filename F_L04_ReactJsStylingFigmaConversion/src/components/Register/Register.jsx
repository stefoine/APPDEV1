
import styles from "./Register.module.css";
import logo from "../../assets/logo.svg";

export default function Register({ onLogin }) {
    return (
        <div className={styles.register}>
            {/* ---------- Left panel ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>
                    figma.com/@designspacee
                </p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Create Account</h2>

                    {/* Social signup buttons */}
                    <div className={styles.socialButtons}>
                        <button type="button" className={styles.socialButton}>
                            Sign up with Google
                        </button>

                        <button type="button" className={styles.socialButton}>
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span>OR</span>
                    </div>

                    {/* Registration form */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            aria-label="Full Name"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                        />

                        <button
                            type="submit"
                            className={styles.createButton}
                        >
                            Create Account
                        </button>
                    </form>

                    <p className={styles.loginLink}>
                        Already have an account?{" "}
                        <a
                            href="#login"
                            onClick={(e) => {
                                e.preventDefault();
                                onLogin();
                            }}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
