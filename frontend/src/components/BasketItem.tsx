import {
  Text,
  Icon,
  SkeletonText,
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import "../styles/BasketItem.css";
import { fetchItem } from "../../lib/fetches";
import { IItem } from "../../../backend/models/itemSchema";
import EditItem from "./EditItem";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteItemWithBasketString } from "../../lib/deletes";
interface Props {
  itemId: string;
  bid: string;
  basketMemberView: boolean;
}

// Component to display and manage a basket item
const BasketItem = ({ itemId, bid, basketMemberView }: Props) => {
  // State to store item details
  const [item, setItem] = useState<IItem>();
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState({
    msg: "",
    isErrored: false,
  });

  // Effect to fetch item details
  useEffect(() => {
    setLoading(true);
    fetchItem(itemId)
      .then((res) =>
        res.status === 200
          ? res.json()
          : Promise.reject(`Error code ${res.status}`)
      )
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Terrible error occured!", err);
        setLoading(false);
        setError({
          msg: err,
          isErrored: true,
        });
      });
  }, [itemId]);

  // Function to remove an item from the basket
  const removeItem = async (item: IItem) => {
    console.log(item);
    deleteItemWithBasketString(item, bid);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // If the item is private and the user is not a basket member, do not render the item
  if (!basketMemberView && item?.isPrivate) {
    return;
  }

  return (
    <Box w="100%" overflow="hidden" margin="0.5rem" className="b-item">
      {loading ? (
        <Flex>
          <Box>
            <SkeletonText noOfLines={1} />
          </Box>
          <Box>
            <SkeletonText />
          </Box>
          <Box>
            <SkeletonText />
          </Box>
        </Flex>
      ) : error.isErrored || !item ? (
        <Flex>
          <Box color="red">Error: {error.msg}</Box>
          <Box />
        </Flex>
      ) : (
        <Flex
          bgColor="var(--col-secondary)"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          padding={`${basketMemberView ? "0px" : "10px"} 2%`}
          borderRadius="20px"
        >
          <Box
            width={{ base: "40%", md: "25%" }}
            margin={{ base: "10px", md: "0px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            {item?.name}
          </Box>
          <Box
            flexGrow="6"
            display={{ base: "none", md: "block" }}
            textAlign="center"
          >
            {item?.notes}
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <EditItem
              itemId={item._id.toString()}
              editable={basketMemberView}
            />
          </Box>
          <Flex
            flexDir="column"
            align="center"
            justifyContent="center"
            width="20%"
            padding="10px"
            display={basketMemberView ? "flex" : "none"}
          >
            <Icon
              w="30px"
              h="30px"
              marginTop="5px"
              as={item?.isPrivate ? VscEyeClosed : VscEye}
              className="b-publicity"
            />
            <Text
              fontSize="0.7rem"
              fontStyle="italic"
              display={{ base: "none", md: "block" }}
              textAlign="center"
            >
              {item.isPrivate
                ? "Only viewable by basket members"
                : "Viewable by all group members"}
            </Text>
          </Flex>
          <IconButton
            display={basketMemberView ? "flex" : "none"}
            marginRight={{ base: "10px", md: "none" }}
            aria-label="Delete"
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => removeItem(item)}
          />
        </Flex>
      )}
    </Box>
  );
};

export default BasketItem;
