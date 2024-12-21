import Provider from "@/utils/providers/Provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider>{children}</Provider>
    </>
  );
}
