import Down from "./Down";
import Hide from "./Hide";
import Search from "./Search";
import Up from "./Up";

interface IconI {
  icon: string;
}
export default function Icon({ icon }: IconI) {
  switch (icon) {
    case "arrowup":
      return <Up />;
    case "arrowdown":
      return <Down />;
    case "search":
      return <Search />;
    case "hide":
      return <Hide />;
    default:
      return null;
  }
}
