import Link from "next/link";


export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Link href="/dashboard" className="border bg-red-400 font-semibold text-white py-3 px-4 rounded-lg hover:bg-red-800">Go to dashboard</Link>
    </div>
  )
}
