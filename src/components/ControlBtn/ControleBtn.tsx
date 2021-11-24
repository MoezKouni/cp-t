import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { hide, moveDown, moveUp } from "../../actions/layout-actions";
import "./ControleBtn.css";
import Icon from "../Icons/Icon";

export default function ControleBtn({ component, align }: Component) {
  const dispatch = useDispatch();
  return (
    <div className={`control-btns d-flex flex-${align} `}>
      <Button
        type="outlined"
        className="small-btn m-1"
        onClick={() => dispatch(moveUp(component))}
      >
        <Icon icon="arrowup" />
      </Button>
      <Button
        type="outlined"
        className="small-btn m-1"
        onClick={() => dispatch(moveDown(component))}
      >
        <Icon icon="arrowdown" />
      </Button>
      <Button
        type="outlined"
        className="small-btn m-1"
        onClick={() => dispatch(hide(component))}
      >
        <Icon icon="hide" />{" "}
      </Button>
    </div>
  );
}
