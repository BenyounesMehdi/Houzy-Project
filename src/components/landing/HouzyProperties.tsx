import { Search, ShieldCheck, Upload } from "lucide-react";

export default function HouzyProperties() {
  const houzyProperties = [
    {
      icon: <Search />,
      property: "Easy Search",
      description:
        "Find your perfect property with our advanced search filters and intuitive interface",
    },
    {
      icon: <Upload />,
      property: "List Properties",
      description:
        "Easily list your properties with our streamlined upload process",
    },
    {
      icon: <ShieldCheck />,
      property: "Verified Properties",
      description:
        "All listings are verified to ensure quality and authenticity",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {houzyProperties.map((prop, key) => {
        return (
          <div
            key={key}
            className="w-full flex flex-col justify-center items-center my-5"
          >
            <div className="bg-primary p-5 text-xl rounded-full">
              {prop.icon}
            </div>
            <p className="font-semibold my-3 text-2xl text-center">
              {prop.property}
            </p>
            <p className="text-muted-foreground font-semibold text-sm sm:text-base text-center">
              {prop.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
