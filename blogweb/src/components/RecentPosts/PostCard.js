import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text, Flex, Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

const PostCard = ({ post }) => {
  // Log the image URL to the console for debugging
  console.log("Image URL:", post.imageUrl);

  return (
    <Stack w="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
      <Image 
        src={post.imageUrl || "https://www.w3schools.com/w3images/mountains.jpg"} 
        alt={post.title} 
        objectFit="cover" 
        fallbackSrc="https://www.w3schools.com/w3images/mountains.jpg" // Ensure a fallback is used
      />
      <Stack p="4">
        <Heading mb="4" fontSize="xl">
          {post.title}
        </Heading>
        <Flex mb="4" align="center">
          <Avatar size="sm" mr="2" src={post.avatar} />
          <Text fontSize="md" mr="2" fontWeight="bold">
            {post.authorName}
          </Text>
          <Text fontSize="md">{post.publishDate}</Text>
        </Flex>
        <Text mb="4">{post.description}</Text>
        <Flex mb="4">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Flex>
        <Button alignSelf="flex-end" colorScheme="orange">
          Read more
        </Button>
      </Stack>
    </Stack>
  );
};

export default PostCard;
