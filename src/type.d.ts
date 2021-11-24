interface ChildrenT {
  title: string;
  href: string;
}

interface ItemT {
  title: string;
  children?: ChildrenT[] | null;
  href?: string;
}

interface OneItemT {
  item: ItemT;
}

interface OneChildrenT {
  children: ChildrenT;
}

interface OneThemeI {
  id: number;
  imgURL: string;
  title: string;
  category: string;
  section: string;
  rate: number;
  price: number;
  link: string;
}

interface ThemeI {
  theme: OneThemeI;
}

interface ComponentI {
  component: string;
  order: number;
  displayed: boolean;
}

interface Component {
  component: ComponentI;
  align: string;
}

interface stateI {
  structure: ComponentI[];
}

interface gobalStateI {
  layout: stateI;
}

interface actionI {
  type: string;
  payload: ComponentI;
}
