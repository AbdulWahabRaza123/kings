export const TitleDescComp = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <h5 className="text-h5 font-[600]">{title}</h5>
        <p className="text-secondary text-p3">{desc}</p>
      </div>
    </>
  );
};
