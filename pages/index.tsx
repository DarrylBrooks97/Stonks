import { Box, Center, Input, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Stonks from "../components/Stonks";

interface Props {
  stonks: any;
}

export default function Home({ stonks }: Props) {
  const [searchedStonks, setSearchedStonks] = useState<any>(stonks);

  const searchStonks = (query: string) => {
    setSearchedStonks(stonks.filter((el) => el.id.includes(query)));
  };

  return (
    <Box>
      <Center>
        <Input
          placeholder='Search for stonk symbol...'
          w='xl'
          onChange={(e) => searchStonks(e.target.value)}
        />
      </Center>
      <SimpleGrid columns={3} spacing={10} padding={20}>
        {searchedStonks?.map((stonk, idx) => {
          return <Stonks stonk={stonk} idx={idx} key={idx} />;
        })}
      </SimpleGrid>
    </Box>
  );
}

export async function getStaticProps() {
  const { data }: any = await (
    await fetch("http://api.coincap.io/v2/assets")
  ).json();

  return {
    props: {
      stonks: data,
    },
  };
}
