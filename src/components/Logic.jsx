/** @format */

import Button from "./Button";
function Logic({ btn, main }) {
  return (
    <>
      {btn.map((btn) => (
        <Button key={btn} btn={btn} value={main} />
      ))}
    </>
  );
}

export default Logic;
