function Navbar(props) {
  return (
    <>
      <nav>
        <button onClick={props.addPlayer}>Add player</button>
      </nav>
    </>
  );
}

export default Navbar;
