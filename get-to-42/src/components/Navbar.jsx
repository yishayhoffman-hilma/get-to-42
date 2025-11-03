function Navbar(props) {
  return (
    <>
      <nav>
        <button onClick={props.addPlayer}>Add player</button>
        <button onClick={() => props.setCurrentTurn(0)}>Start</button>
        <button onClick={() => {}}>Restart</button>
      </nav>
    </>
  );
}

export default Navbar;
