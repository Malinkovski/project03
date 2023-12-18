async function fetchData(apiUrl: string) {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return {
      props: data,
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

export default fetchData;
