import SideBar from "../layouts/Sidebar";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Badge,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import QuickInfoBox from "../components/QuickInfoBox";

export default function Nav() {
  return (
    <div>
      <SideBar>
        <SimpleGrid columns={[1, null, 3]} spacingY="30px">
          <QuickInfoBox></QuickInfoBox>
          <QuickInfoBox></QuickInfoBox>
          <QuickInfoBox></QuickInfoBox>
        </SimpleGrid>
      </SideBar>
    </div>
  );
}
