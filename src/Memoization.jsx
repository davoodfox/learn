import { useState, memo, useMemo, useCallback } from "react";

function Swatch({ color, name, onClick }) {
  console.log("Swatch Rendered", color);
  return (
    <>
      <div
        style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
        onClick={onClick}
      ></div>
      <div>
        {name.firstName}
        {name.lastName}
      </div>
    </>
  );
}

const MemoedSwatch = memo(Swatch);

function Memoization() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  console.log("App Rendered", appRenderIndex);

  var firstName = "davood";
  var lastName = "rafiee";

  const name = useMemo(
    () => ({
      firstName,
      lastName,
    }),
    [firstName, lastName]
  );

  const onClick = useCallback(() => {}, []);

  return (
    <>
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Rerender App
        </button>
        <button onClick={() => setColor(color == "red" ? "blue" : "red")}>
          Change Color
        </button>
      </div>
      <MemoedSwatch color={color} name={name} onClick={onClick} />
    </>
  );
}

export default Memoization;
