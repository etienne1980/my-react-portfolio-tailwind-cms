import { createClient } from "contentful";
import { useEffect, useState } from "react";

// create client instance

const client = createClient({
  space: "61ugmnkc6tlh", // this is the space ID
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY, // access key token
});

// set up custom hook

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "myPortfolio", // this is the content model exact name - contentful id
      });
      //   console.log(response);

      const { items } = response;
      const result = items.map((item) => {
        // console.log(item);
        const { id } = item.sys;
        const { title, url, description, img, gitHub } = item.fields;

        const image = img?.fields?.file?.url;

        // returning an object from the result variable
        return { id, title, url, image, description, gitHub };
      });

      setProjects(result);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // returning from the custom hook
  return { projects, isLoading };
};
