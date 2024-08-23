import { IMAGE_MOMO_LOGO } from "@/constants";
import { toast } from "sonner";

const DynamicIsland = () => {
  const handleToast = () => {
    toast("MoMo", {
      description:
        "Nhận 20.000VNĐ từ bạn của anh của chú của ông ngoại của chị họ bạn.",
      duration: 5000,
      icon: (
        <img
          height="100%"
          width="100%"
          src={IMAGE_MOMO_LOGO}
          alt="logo-momo"
          className="bg-blend-multiply"
        />
      ),
    });
  };

  return (
    <div
      onClick={handleToast}
      className="w-32 flex gap-2 bg-black rounded-3xl p-1 border border-solid border-gray-800"
    >
      <div className="w-12 h-7 bg-black rounded-3xl flex-1" />

      <div className="w-7 h-7 bg-black rounded-full p-1">
        <div className="w-full h-full bg-slate-900 rounded-full" />
      </div>
    </div>
  );
};

export default DynamicIsland;
