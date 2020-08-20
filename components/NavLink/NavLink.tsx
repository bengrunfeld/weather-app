import Link from "next/link";
import { Container, LinkText } from "./NavLink.styles";

const NavLink = ({ href, children }) => {
  return (
    <Container>
      <Link href={href}>
        <LinkText>{children}</LinkText>
      </Link>
    </Container>
  );
};

export default NavLink;
