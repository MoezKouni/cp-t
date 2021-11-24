import Button from "../Button/Button";
interface SectionI {
  title: string;
  subTitle: string;
}

export default function ListHeader({ title, subTitle }: SectionI) {
  return (
    <div className="d-flex justify-content-between align-items-start px-4">
      <div>
        <h4>{title}</h4>
        <p className="mb-0 text-muted">{subTitle}</p>
      </div>
      <Button size="small" type="outlined">
        View all
      </Button>
    </div>
  );
}
