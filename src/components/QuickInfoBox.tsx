import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";

const QuickInfoBox = () => {
  return (
    <div>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={useColorModeValue("whiteAlpha.900", "gray.900")}
      >
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              G
            </Badge>
            <Box
              color={useColorModeValue("gray.900", "whiteAlpha.900")}
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {" "}
              <Stat>
                <StatLabel>Sent</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default QuickInfoBox;
