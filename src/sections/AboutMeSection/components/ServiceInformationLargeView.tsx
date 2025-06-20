import { serviceInformation } from "@/mocks/serviceInformation";

import { TfiPlus } from "react-icons/tfi";

export default function ServiceInformationLargeView() {
  return (
    <dl className="lg:flex w-full justify-evenly flex-wrap mt-8 hidden">
      {serviceInformation.map(({ description, data }, index) => (
        <div key={index} className="flex gap-2">
          <TfiPlus aria-hidden="true" size={18} color="#87ceeb " />
          <div className="flex flex-col">
            <dt className="sr-only">{description}</dt>
            <dd className="text-md">{data}</dd>
            <span className="text-gray-500 text-sm">{description}</span>
          </div>
        </div>
      ))}
    </dl>
  );
}
