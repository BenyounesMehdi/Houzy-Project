export default function Hero() {
  return (
    <div className="container mx-auto mt-10 flex flex-col justify-center items-center gap-3 text-center">
      <p className="font-bold text-4xl sm:text-5xl">Find Your Dream</p>
      <p className="font-bold text-4xl sm:text-5xl text-primary">Home Today</p>
      <p className="w-full sm:w-3/4 text-muted-foreground font-semibold text-sm sm:text-base">
        Welcome to <span className="text-primary">Houzy</span> your one-stop
        solution for buying, renting, or selling properties. Easily browse
        listings, upload your own property, and connect with buyers or renters.
        Discover your next home with Houzy today!
      </p>
    </div>
  );
}
