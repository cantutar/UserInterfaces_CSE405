function DarkmodeToggle(props) {
  return (
    <div className="mr-auto">
      <button
        className={`btn btn-${props.mode} mr-auto`}
        onClick={props.clickEvent}
      >
        {props.icon}
      </button>
    </div>
  );
}

export default DarkmodeToggle;
