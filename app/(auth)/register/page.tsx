import Link from "next/link";

export default function Register() {
  return (
    <div style={container}>
      <h1 style={title}>XYZ</h1>
      <form style={form}>
        <input type="email" placeholder="Email" style={input} required />
        <input type="password" placeholder="Password" style={input} required />
        <input type="password" placeholder="Confirm Password" style={input} required />
        <button style={button}>Sign Up</button>
        <p style={text}>
          Already have an account?{" "}
          <Link href="/login" style={link}>
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

// Reuse styles from login page
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#141414",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
};

const title = { fontSize: "4rem", marginBottom: "2rem" };

const form = { display: "flex", flexDirection: "column", width: "300px", gap: "1rem" };

const input = {
  padding: "0.8rem",
  borderRadius: "0.3rem",
  border: "none",
  fontSize: "1rem",
};

const button = {
  padding: "0.8rem",
  backgroundColor: "#e50914",
  border: "none",
  borderRadius: "0.3rem",
  color: "#fff",
  fontSize: "1rem",
  cursor: "pointer",
};

const text = { fontSize: "0.9rem", textAlign: "center" };

const link = { color: "#fff", textDecoration: "underline" };
