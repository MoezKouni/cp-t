import { useState } from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ControleBtn from "../ControlBtn/ControleBtn";
import Icon from "../Icons/Icon";
import "./Navbar.css";

const FirstMenuItems: ItemT[] = [
  {
    title: "Categories",
    children: [
      {
        title: "Admin & Dashboard",
        href: "#",
      },
      {
        title: "Landing & Corporate",
        href: "#",
      },
      {
        title: "Application",
        href: "#",
      },
      {
        title: "E-commerce & Retail",
        href: "#",
      },
      {
        title: "Portfolio & Blog",
        href: "#",
      },
      {
        title: "Speciality",
        href: "#",
      },
    ],
  },
  {
    title: "Why Our Themes?",
    children: null,
    href: "#",
  },
  {
    title: "The Guide",
    children: null,
    href: "#",
  },
];

const SecondMenuItems: ItemT[] = [
  {
    title: "Sign in",
    href: "#",
  },
  {
    title: "Sign up",
    href: "#",
  },
];
export default function MainNavbar({ component }: Component) {
  const [expand, setExpand] = useState(false);
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="section"
      style={{ borderBottom: "1px solid #D5DCE5" }}
    >
      <ControleBtn component={component} align="row" />
      <Container>
        <Navbar.Brand href="#">Bootstrap Themes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {FirstMenuItems.map((item: ItemT) => (
              <MenuItems item={item} key={item.title} />
            ))}
          </Nav>
          <div className="d-flex">
            <button className="search-btn" onClick={() => setExpand(!expand)}>
              <Icon icon="search" />
            </button>
            <FormControl
              type="search"
              placeholder="Search"
              className="input me-2"
              aria-label="Search"
              style={{
                width: expand ? "200px" : "0px",
                opacity: expand ? 1 : 0,
              }}
            />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {SecondMenuItems.map((item: ItemT) => (
                <MenuItems item={item} key={item.title} />
              ))}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const MenuItems = ({ item }: OneItemT) => {
  if (item.children) {
    return (
      <NavDropdown title={item.title}>
        {item.children.map((children: ChildrenT) => (
          <SubMenuItem children={children} key={children.title} />
        ))}
      </NavDropdown>
    );
  } else {
    return <Nav.Link href={item.href}>{item.title}</Nav.Link>;
  }
};

const SubMenuItem = ({ children }: OneChildrenT) => (
  <NavDropdown.Item href={children.href}>{children.title}</NavDropdown.Item>
);
