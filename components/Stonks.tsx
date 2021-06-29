import { Box, Center, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { transform } from "framer-motion";
import { useState } from "react";
import { CSSProperties } from "react";

interface Props {
  stonk: any;
  idx: string;
}
const scene: CSSProperties = {
  perspective: "600px",
};
const card: CSSProperties = {
  position: "relative",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
};
const card_face: CSSProperties = {
  height: "100%",
  width: "100%",
  backfaceVisibility: "hidden",
};
const Card = styled.div`
  color: blue;
  border-radius: 15px;
  border: 1px solid black;
  padding: 1em;
  box-shadow: 5px 5px black;
`;
export default function Stonks({ stonk, idx }: Props) {
  const [clicked, setClicked] = useState<Boolean>(false);
  return (
    <Box style={scene}>
      <Card
        key={idx}
        style={card}
        onClick={() => {
          const doc = document.getElementById("card");
          setClicked(!clicked);
          doc.style.transform = clicked ? "rotateY(180deg)" : "rotateY(0deg)";
        }}
        id='card'
      >
        <Center style={card_face}>
          <Flex direction='column'>
            <Box>{stonk.symbol}</Box>
            <Box>{stonk.name}</Box>
            <Box>${stonk.priceUsd} USD</Box>
          </Flex>
        </Center>
        <Box style={card_face} transform='rotateY(180deg)'>
          Whut
        </Box>
      </Card>
    </Box>
  );
}
