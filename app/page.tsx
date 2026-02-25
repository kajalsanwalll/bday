import Hero from "./components/hero";
import RivalStats from "./components/rivalstats";
import BirthdayAlert from "./components/BirthdayAlert";

export default function Home() {
  return (
    <>
      <BirthdayAlert />
      <Hero />
      <RivalStats />
    </>
  );
}