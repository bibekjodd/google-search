export type Results = {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  context: {
    title: string;
  };
  searchInformation: SearchInformation;
  items: Array<Items>;
};

type SearchInformation = {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
};

type Items = {
  kind: string;
  title: string;
  link: string;
  displayLink: string;
  formattedUrl: string;
  snippet: string;
};

export const fetchSearchResults = async ({
  term,
  startIndex,
}: {
  term: string;
  startIndex: number | string;
}): Promise<Results | undefined> => {
  try {
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return undefined;
  }
};
