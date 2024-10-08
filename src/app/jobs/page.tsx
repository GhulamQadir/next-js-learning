import Navbar from "@/components/navbar";
import Link from "next/link";
async function Jobs() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <div>
      {/* <Navbar /> declared in layout */}
      <h1 className="text-6xl text-center mt-4">Jobs Page</h1>
    </div>
  );
}
export default Jobs;
