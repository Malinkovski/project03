import { useState, useEffect } from "react";
import { MinimalProductProps } from "../properties/products";

interface SimpleFetchDataProps {
  apiUrl: string;
  fromTag?: string;
  fromCategory?: string;
  query?: string;
  customEntry?: string[];
}

const useSimpleFetchData = ({
  apiUrl,
  fromTag,
  fromCategory,
  query,
  customEntry,
}: SimpleFetchDataProps) => {
  const [fetchedData, setfetchedData] = useState<MinimalProductProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generatedUrl = new URL(apiUrl);

        const params = new URLSearchParams();
        if (fromTag) {
          params.append("tags_like", fromTag);
        }
        if (fromCategory) {
          params.append("category_like", fromCategory);
        }
        if (query) {
          params.append("q", query);
        }
        if (customEntry) {
          params.append(customEntry[0], customEntry[1]);
        }

        generatedUrl.search = params.toString();
        const res = await fetch(generatedUrl.toString());

        if (!res.ok) {
          throw new Error(
            `Failed to fetch products from ${generatedUrl.toString()}`
          );
        }

        const data = await res.json();
        setfetchedData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return fetchedData;
};

export default useSimpleFetchData;