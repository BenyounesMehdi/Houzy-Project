import Image from "next/image";
import noData from "../../../public/no_data.svg";

type NoDataProps = {
  title: string;
};

export default function NoData({ title }: NoDataProps) {
  return (
    <>
      <div className="bg-muted p-7 rounded-full">
        <div className="relative w-[100px] h-[100px]">
          <Image src={noData} alt="No data svg" fill />
        </div>
      </div>
      <p className="font-semibold md:text-lg text-center mt-5">{title}</p>
    </>
  );
}
