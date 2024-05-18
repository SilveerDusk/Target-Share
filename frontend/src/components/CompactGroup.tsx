import { Box, VStack, Text, Avatar, HStack } from "@chakra-ui/react";
import { Group } from "../pages/MyGroupsPage";
import "../styles/CompactGroup.css";
import ConstrainedText from "./ConstrainedText";

interface Props {
  group: Group;
  width: string;
  height: string;
  corners?: Array<boolean>;
}

const CompactGroupV1 = ({
  group,
  width,
  height,
  corners = [false, false, false, false], // TL, TR, BL, BR
}: Props) => {
  console.log("Group!", group);

  return (
    <Box
      width={width}
      height={height}
      borderRadius="20%"
      backgroundColor="gray"
      padding="15px 10px 15px"
      className="container"
      position="relative"
      zIndex={1}
    >
      <Box
        className="corner"
        left="0px"
        top="0px"
        bgColor="gray"
        display={corners[0] ? "inherit" : "none"}
      />
      <Box
        className="corner"
        right="0px"
        top="0px"
        bgColor="gray"
        display={corners[1] ? "inherit" : "none"}
      />
      <Box
        className="corner"
        left="0px"
        bottom="0px"
        bgColor="gray"
        display={corners[2] ? "inherit" : "none"}
      />
      <Box
        className="corner"
        right="0px"
        bottom="0px"
        bgColor="gray"
        display={corners[3] ? "inherit" : "none"}
      />

      <VStack justifyContent="space-between" height="100%">
        <ConstrainedText
          text={group.groupName}
          charLimit={15}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
          postfix="..."
        />
        <ConstrainedText
          text={group.description}
          charLimit={20}
          style={{ fontSize: "1rem", flexGrow: "20" }}
          postfix="...(see more)"
        />
        <HStack justifyContent="space-between" spacing="15px">
          <Avatar width="75px" height="75px" />
          <VStack justifyContent="end" spacing="5px">
            <Text textAlign="center" fontSize="0.8rem">
              Created {new Date(group.created).toDateString()}
            </Text>
            {group.members.length > 1 ? (
              <HStack spacing="20px">
                <Avatar size="md" />
                {group.members.length > 2 ? <Avatar size="md" /> : undefined}
                {group.members.length > 3 ? (
                  <Box
                    width="30px"
                    height="30px"
                    borderRadius="15px"
                    backgroundColor="darkgray"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    +{group.members ? group.members.length - 3 : ""}
                  </Box>
                ) : undefined}
              </HStack>
            ) : undefined}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
export { CompactGroupV1 };
