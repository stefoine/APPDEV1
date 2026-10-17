
import { useState } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    const [page, setPage] = useState("login");

    return (
        <>
            {page === "login" ? (
                <Login onSignup={() => setPage("register")} />
            ) : (
                <Register onLogin={() => setPage("login")} />
            )}
        </>
    );
}

export default App;
