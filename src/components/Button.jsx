/** @format */

function Button({ btn, value }) {
  return (
    <>
      <button className="btn" onClick={() => value(btn)}>
        {btn}
      </button>
    </>
  );
}

export default Button;
