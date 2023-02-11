import { HungmanDrawingProps } from "../models/props";
const Head = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "10px solid red",
      position: "absolute",
      top: "50px",
      right: "-25px",
    }}
  ></div>
);
const LeftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "220px",
      right: "-20px",
      rotate: "120deg",
    }}
  ></div>
);
const LeftArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "110px",
      right: "0px",
      rotate: "210deg",
    }}
  ></div>
);
const RightArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "110px",
      right: "-90px",
      rotate: "-30deg",
    }}
  ></div>
);
const Body = (
  <div
    style={{
      width: "10px",
      height: "80px",
      background: "red",
      position: "absolute",
      top: "110px",
      right: 0,
    }}
  ></div>
);
const RightLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "red",
      position: "absolute",
      top: "220px",
      right: "-70px",
      rotate: "60deg",
    }}
  ></div>
);

const BodyParts = [
  { key: 1, component: Head },
  { key: 2, component: Body },
  { key: 3, component: LeftArm },
  { key: 4, component: RightArm },
  { key: 5, component: LeftLeg },
  { key: 6, component: RightLeg },
];
export function HangmanDrawing({ numberofGuesses }: HungmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BodyParts.slice(0, numberofGuesses).map(({ key, component }) => (
        <div key={key}>{component}</div>
      ))}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
