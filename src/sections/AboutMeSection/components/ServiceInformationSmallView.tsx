import { serviceInformation } from "@/mocks/serviceInformation";
import { TfiPlus } from "react-icons/tfi";

export default function ServiceInformationSmallView() {
  return (
    <dl className="flex flex-wrap gap-4 items-center justify-evenly mt-8 lg:hidden">
      {serviceInformation.map(({ description, data }, index) => (
        <div key={index} className="flex gap-2 w-[230px] items-center">
          <TfiPlus aria-hidden="true" size={24} color="#87ceeb " />
          <div className="flex flex-col">
            <dt className="sr-only">{description}</dt>
            <dd className="text-3xl">{data}</dd>
            <span className="text-gray-500 text-md">{description}</span>
          </div>
        </div>
      ))}
    </dl>
  );
}
