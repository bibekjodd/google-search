import Header from "@/components/header";
import HeaderOptions from "@/components/header-options";
import SearchResults from "@/components/search-results";
import { fetchSearchResults } from "@/lib/fetch-search-results";

type Props = {
  searchParams: Record<string, string>;
};
export default async function page({ searchParams }: Props) {
  const startIndex = Number(searchParams.startIndex) || 0;
  const term = searchParams.term || "";
  const results = await fetchSearchResults({ startIndex, term });

  return (
    <div className="flex w-full flex-col items-center p-2 ">
      {/* <Head>
        <title>{searchParams.get("term")} - Google Search</title>
      </Head> */}
      <Header />
      <div className="flex w-full flex-col items-start sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-[1200px]">
        <HeaderOptions />
        <SearchResults results={results} />
      </div>
    </div>
  );
}
