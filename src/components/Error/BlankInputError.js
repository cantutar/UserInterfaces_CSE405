function BlankInputError(props) {
  return (
    <>
      <p className="text-danger">
        {`You cannot leave blank ${props.inputName} area...`}
      </p>
    </>
  );
}

export default BlankInputError;
