import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <p className="italic text-3xl font-semibold">
        Hou<span className="text-primary">z</span>y
      </p>
    </Link>
  );
}
