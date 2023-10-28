import { Results } from "@/components/search-results";

export const fetchSearchResults = async ({
  term,
  startIndex,
}: {
  term: string;
  startIndex: number;
}): Promise<Results> => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      items: [],
      searchInformation: {
        formattedSearchTime: "",
        formattedTotalResults: 0,
      },
    };
  }
};
