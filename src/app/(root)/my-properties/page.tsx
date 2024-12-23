import PropertyCard from "@/components/property/PropertyCard";
import NoData from "@/components/shared/NoData";
import { getUserProperties } from "@/utils/data/property/get-user-properties";
import { Property } from "@/utils/types/types";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = await auth();
  const data = await getUserProperties(userId as string);
  const userProperties = data as Property[];

  if (userProperties.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
        <NoData title="It seems you haven't added any properties yet!" />
      </div>
    );
  }

  return (
    <div className="container mx-auto my-5 p-5">
      <p className="text-3xl font-semibold tracking-tight">My properties</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {userProperties.map((property) => {
          return <PropertyCard key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
}
