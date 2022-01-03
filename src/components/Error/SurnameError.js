function SurnameError(props) {
  return (
    <div className="row text-danger">
      <p>
        * First character <mark>MUST</mark> be capital.
        <span>
          Ex: <ins>sTatHam</ins> or like <ins>TUtaR</ins> is not allowed.
        </span>
      </p>
      <p>
        * Supports English alphabets only.{" "}
        <span>
          Ex: <ins>ş,ç,ğ</ins> is not allowed.
        </span>
      </p>
      <p>* Numbers not allowed.</p>
    </div>
  );
}

export default SurnameError;
