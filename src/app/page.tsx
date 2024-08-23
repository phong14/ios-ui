import Header from "@/components/header/Header";
import LockScreen from "@/components/lock-screen/LockScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-home-screen bg-contain">
      <Header />
      <LockScreen />
    </div>
  );
}
