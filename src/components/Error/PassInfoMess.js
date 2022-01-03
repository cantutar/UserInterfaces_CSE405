function PassInfoMessage(props) {
  return (
    <div className="text-info">
      <p>* Please read the rules first.</p>
      <p>* Minimum password length is 8.</p>
      <p>
        * Password needs a minimum 1 <ins>lower character</ins> and{" "}
        <ins> uppercase character</ins>.
      </p>
      <p>
        * Password must have a atleast 1 <ins>numbers</ins> and{" "}
        <ins>speacial character.</ins>
      </p>
    </div>
  );
}

export default PassInfoMessage;
