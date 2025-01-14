import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/games'}>games</Link>
      <br />
      <Link href={'/games/momery-game'}>momery-game</Link>
      {/* بسم الله الرحمن الرحيم */}
</>
  );
}
