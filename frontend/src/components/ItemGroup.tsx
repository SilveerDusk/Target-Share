import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  TableContainer,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FaChevronDown } from "react-icons/fa";
import { IGroup } from "../../../backend/models/groupSchema";
import { IBasket } from "../../../backend/models/basketSchema";
import { IItem } from "../../../backend/models/itemSchema";
import EditItem from "./EditItem";
import NewItemOptions from "./NewItemOptions";
import {
  fetchUserBasketsFromGroup,
  fetchBasketItems,
  fetchUserBaskets,
} from "../../lib/fetches";
import { removeItemFromBasketAndDelete } from "../../lib/deletes";
import { moveItem } from "../../lib/edits";
import "../styles/ItemGroup.css";

type Props = {
  group: IGroup;
  stateVariable: any;
};

// Component to display and manage items in a group
const ItemGroup: React.FC<Props> = ({
  group,
  stateVariable,
}: {
  group: IGroup;
  stateVariable: any;
}) => {
  const [items, setItems] = React.useState<IItem[]>([]);
  const [baskets, setBaskets] = React.useState<IBasket[]>([]);
  const [basket, setBasket] = React.useState<IBasket>();
  const [userBaskets, setUserBaskets] = React.useState<IBasket[]>([]);
  const [loading, setLoading] = React.useState(true);
  const category = group.groupName;

  // Fetch all data related to the group and user when the component mounts or stateVariable.user changes
  useEffect(() => {
    const fetchAllData = async () => {
      if (stateVariable.user) {
        const fetchedBaskets = await fetchUserBasketsFromGroup(group, stateVariable.user);
        setBaskets(fetchedBaskets);
        setBasket(fetchedBaskets[0]);
        const tempItems: IItem[] = [];

        // Fetch items from all baskets in the group
        for (const basket of fetchedBaskets) {
          const fetchedItems = await fetchBasketItems(basket);
          tempItems.push(...fetchedItems);
        }
        // Fetch baskets that belong to the user
        const userBaskets = await fetchUserBaskets(stateVariable.user._id);
        setUserBaskets(userBaskets as IBasket[] | []);
        console.log("userBaskets: ", userBaskets);
        setItems(tempItems);
        setLoading(false);
      }
    };

    fetchAllData().catch((err) => {
      console.log(`Error occurred: ${err}`);
      setLoading(false);
    });
  }, [stateVariable.user]);

  // Update the baskets state when the selected basket changes
  useEffect(() => {
    if (basket) {
      setBaskets([basket, ...baskets.slice(1)]);
    }
  }, [basket]);

  // Function to remove an item from the basket and delete it
  const removeItem = async (item: IItem) => {
    const newItems = items.filter((i) => i._id !== item._id);
    setItems(newItems);
    await removeItemFromBasketAndDelete(userBaskets, item).then(() => {
      console.log("Item removed successfully");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };

  // Function to handle moving an item to a different basket
  const handleMove = async (basket: IBasket, item: IItem) => {
    try {
      console.log(`Basket ID: ${basket._id} clicked`);
      console.log(`Item ID: ${item._id} clicked`);
      await moveItem(userBaskets, basket, item).then(() => {
        console.log("Item moved successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
    } catch (error) {
      console.error("Invalid user ID");
    }
  };

  return (
    <Box className="item_group-container" p={5} mb={4}>
      <Box justifyContent={"space-between"} display="flex">
        <Heading as="h2" size="md">
          {category}
        </Heading>
        <Box display="flex" alignItems="center">
          {!loading && baskets.length > 0 ? (
            <NewItemOptions
              basket={baskets[0]._id.toString()}
              updateBasket={setBasket}
            />
          ) : (
            <Heading as="h3" fontWeight="normal" size="sm" marginRight="10px">
              No baskets available
            </Heading>
          )}
        </Box>
      </Box>
      <Divider mt={2} mb={4} />
      {loading ? (
        <Flex justifyContent="center" alignItems="center" minHeight="100px">
          <Spinner
            size="lg"
            thickness="4px"
            speed="0.65s"
            color="var(--col-secondary)"
          />
        </Flex>
      ) : (
        <TableContainer>
          <Table variant="simple" width="full">
            <Thead>
              <Tr>
                <Th width="25%">Name</Th>
                <Th width="50%">Description</Th>
                <Th width="8%">More</Th>
                <Th width="8%">Move</Th>
                <Th width="9%">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.length > 0 ? (
                items.map(
                  (item, index) => (
                    console.log(item),
                    (
                      <Tr key={index}>
                        <Td width="25%">{item.name}</Td>
                        <Td width="50%">{item.notes}</Td>
                        <Td width="8%">
                          <EditItem itemId={item._id.toString()} />
                        </Td>
                        <Td width="8%">
                          <Menu>
                            <MenuButton
                              as={Button}
                              rightIcon={<FaChevronDown />}
                            >
                              Select Basket
                            </MenuButton>
                            <MenuList>
                              {userBaskets.length > 0 ? (
                                (console.log(userBaskets),
                                userBaskets.map((basket) => (
                                  <MenuItem
                                    key={basket._id.toString()}
                                    onClick={() => handleMove(basket, item)}
                                    _hover={{ textColor: "black" }}
                                  >
                                    {basket.basketName}
                                  </MenuItem>
                                )))
                              ) : (
                                <MenuItem disabled>
                                  No baskets available
                                </MenuItem>
                              )}
                            </MenuList>
                          </Menu>
                        </Td>
                        <Td width="9%">
                          <IconButton
                            aria-label="Delete"
                            icon={<DeleteIcon />}
                            colorScheme="red"
                            onClick={() => removeItem(item)}
                          />
                        </Td>
                      </Tr>
                    )
                  ),
                )
              ) : (
                <Tr>
                  <Td colSpan={5}>No items found.</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ItemGroup;
