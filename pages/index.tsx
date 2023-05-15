import Head from "next/head";

const Page = () => {
  return <>
    <Head>
      <title>Welcome</title>
    </Head>
    <div className="bg-red-300 px-4 py-3 text-3xl font-black transition-colors duration-150 hover:bg-blue-200">
      Hi
    </div>
  </>
}

export default Page;