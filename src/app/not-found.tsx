export default function NotFound() {
  return (
    <>
      <div className="grid h-[calc(100vh-70px)] place-content-center px-4">
        <div className="text-center">
          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-muted-foreground font-semibold">
            We can't find that page.
          </p>
        </div>
      </div>
    </>
  );
}
