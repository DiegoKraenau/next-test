const Test = ({ data }) => {
  return <div>Test</div>
}

export async function getServerSideProps () {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()

  // console.log('data', data)

  // Pass data to the page via props
  return { props: { data } }
}

export default Test
