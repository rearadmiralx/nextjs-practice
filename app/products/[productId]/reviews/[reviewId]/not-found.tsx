"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();
  const productId = usePathname().split("/")[2];
  const reviewId = usePathname().split("/")[4];
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      gap: "1rem",
      fontFamily: "sans-serif",
    }}>
      <h1 style={{ fontSize: "4rem", margin: 0 }}>404</h1>
      <p style={{ fontSize: "1.5rem", margin: 0 }}>
        Oops! The reviewId {reviewId} for doesn’t exist for Product {productId}.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#4b6a8dff",
          color: "#fff",
          borderRadius: "0.5rem",
          textDecoration: "none",
        }}
      >
        Go back home
      </Link>
    </div>
  );
}
