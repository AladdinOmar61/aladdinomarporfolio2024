import { Nav, Anchor } from "grommet";

function NavBar() {
    return (
        <Nav
        direction="row"
        justify="evenly"
        align="center"
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Anchor size="xlarge">Projects</Anchor>
        <Anchor size="xlarge">About Me</Anchor>
      </Nav>
    )
}

export default NavBar;