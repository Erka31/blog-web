"use client";
import { useRouter } from "next/navigation";

const Page2 = (props) => {
  const ok = props.ok;
  const { push } = useRouter();
  const redirect = () => {
    push(String(ok.id));
  };
  return (
    <div onClick={redirect}>
      <div className="border">
        <div>
          <img className="imagestyle" src={ok.social_image} />
        </div>
        <div>
          <button
            className="buttons1"
            style={{ marginLeft: "5px", marginTop: "5px", color: "white" }}>
            Technology
          </button>
          <h4 style={{ marginLeft: "10px" }}>{ok.title}</h4>
        </div>
        <div style={{ display: "flex" }}>
          <img className="person" src={ok.user.profile_image} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              marginLeft: "10px",
              color: "#bdc3c7",
              width: "400px",
            }}>
            <div>{ok.user.name}</div>
            <div>{ok.readable_publish_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page2;
