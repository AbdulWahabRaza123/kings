export const ListCard = ({
  val,
}: {
  val: {
    Icon: any;
    title: string;
    desc: string;
  };
}) => {
  return (
    <>
      <div className="p-4 flex flex-row items-center gap-4 border-[1px] border-gray-400/20 rounded-[7px] cursor-pointer">
        <div className="bg-[#EFF1F0] p-4 rounded-full flex items-center justify-center">
          <val.Icon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-primary font-[600]">{val.title}</p>
          <p className="text-secondary text-p3">{val.desc}</p>
        </div>
      </div>
    </>
  );
};
