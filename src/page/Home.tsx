import { Flex } from "antd";

const Home = () => {
  return (
    <main style={{
      width: '100%',
      height: '100%',
      padding: '2rem 4rem',
      overflow: 'auto'
    }}>
      <Flex vertical>
        <img
          style={{ width: '15%', height: 'auto', aspectRatio: '1', alignSelf: 'center' }}
          src="../../public/minilogo.png"></img>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus minima,
        ex facilis beatae in magni, ipsam, aliquam iusto aut eos.
        Sunt natus molestias recusandae voluptate sapiente provident magnam perspiciatis
        cum suscipit numquam ratione eius voluptatum dolor exercitationem labore,
        nesciunt animi maxime earum assumenda, culpa omnis. Ratione molestiae temporibus
        praesentium aliquam aliquid vero sapiente, explicabo porro amet minus recusandae. Magnam.
      </Flex>

    </main>
  )
}

export default Home
