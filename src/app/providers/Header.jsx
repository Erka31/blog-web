"use client";
import { useRouter } from "next/navigation";
export const Parent = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <div style={{ marginLeft: "15px", marginBottom: "15px" }}>
        <div
          style={{
            width: "100vw",
            marginLeft: "15px",
            display: "flex",
            justifyContent: "space-between",
            width: "1370px",
          }}>
          <button onClick={() => router.push("/")} className="buttons3">
            <h3>Home</h3>
          </button>
          <button className="buttons3">
            <h3 onClick={() => router.push("/new")}>Create post</h3>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
