function NameError(props) {
  return (
    <div className="row text-danger">
      <p>
        * First character <mark>MUST</mark> be capital.
        <span>
          Ex: <ins>sTeWaRT</ins> or like <ins>MEhMeT</ins> is not allowed.
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

export default NameError;
