import { UP, DOWN, HIDE } from "../actions/types";

const initState: stateI = {
  structure: [
    {
      order: 1,
      component: "MainNavbar",
      displayed: true,
    },
    {
      order: 2,
      component: "Hero",
      displayed: true,
    },
    {
      order: 3,
      component: "LatestList",
      displayed: true,
    },
    {
      order: 4,
      component: "PopularList",
      displayed: true,
    },
    {
      order: 5,
      component: "Newsletter",
      displayed: true,
    },
    {
      order: 6,
      component: "Footer",
      displayed: true,
    },
  ],
};

function compare(a: ComponentI, b: ComponentI) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}

const LayoutReducer = (state = initState, action: actionI) => {
  switch (action.type) {
    case UP:
      let newStructure = state.structure.map((x: ComponentI) =>
        x.component === action.payload.component
          ? { ...x, order: x.order === 0 ? 1 : x.order - 1 }
          : x.order === action.payload.order - 1
          ? { ...x, order: x.order + 1 }
          : x
      );

      return {
        ...state,
        structure: newStructure.sort(compare),
      };
    case DOWN:
      let nStructure = state.structure.map((x: ComponentI) =>
        x.component === action.payload.component
          ? { ...x, order: x.order === 6 ? 6 : x.order + 1 }
          : x.order === action.payload.order + 1
          ? { ...x, order: x.order - 1 }
          : x
      );
      return {
        ...state,
        structure: nStructure.sort(compare),
      };
    case HIDE:
      return {
        ...state,
        structure: state.structure.map((section: ComponentI) =>
          section.component === action.payload.component
            ? { ...section, displayed: false }
            : section
        ),
      };
    default:
      return { ...state, structure: state.structure.sort(compare) };
  }
};

export default LayoutReducer;
