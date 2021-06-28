import { Box } from '@chakra-ui/react';

interface Props {
	stonk: any;
	idx: string;
}

export default function Stonks({ stonk, idx }: Props) {
	return <Box key={idx}>{stonk.symbol}</Box>;
}
