import Header from "@/components/header";
import HeaderOptions from "@/components/header/header-options";
import SearchResults from "@/components/search-results";

type Props = {
  searchParams: Record<string, string | undefined>;
};
export default function page({ searchParams }: Props) {
  const startIndex = Number(searchParams.startIndex) || 0;
  const term = searchParams.term;

  return (
    <div className="flex w-full flex-col items-center p-2 ">
      <Header />
      <div className="flex w-full flex-col items-start sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-[1200px]">
        <HeaderOptions />
        <SearchResults term={term} startIndex={startIndex} />
      </div>
    </div>
  );
}
