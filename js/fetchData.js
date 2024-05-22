const fetchData = async ({ queryKey }) => {
  const data = queryKey[1];
  const taxonomy = queryKey[2];
  const perPage = 100; // Number of posts per page
  let allPosts = [];
  let currentPage = 1;
  let apiRes;
  let posts;
  const proto = "http";
  const host = "127.17.0.1";
  const port = "8080";
  // const baseurl = `${proto}://${host}:${port}/wp-json/wp/v2`;
  const baseurl =
    "https://cors.io/?https://bv2024wordpress.42web.io/wp-json/wp/v2";
  // const baseurl1="http://127.17.0.1:8080/wp-json/wp/v2"
  if (taxonomy == "" && data == "projekte") {
    apiRes = await fetch(
      `${baseurl}/${data}?per_page=${perPage}&page=${currentPage}`
    );
    posts = await apiRes.json();
    allPosts = allPosts.concat(posts);
    const amount = await apiRes.headers.get("X-WP-Total");
    while (Math.floor(amount - perPage * currentPage) > 0) {
      currentPage++;
      apiRes = await fetch(
        `${baseurl}/${data}?per_page=${perPage}&page=${currentPage}`
      );
      posts = await apiRes.json();
      allPosts = allPosts.concat(posts);
    }
    if (!apiRes.ok) {
      throw new Error(`Data of ${data} fetch not ok`);
    }
    return allPosts;
  } else if (taxonomy != "") {
    apiRes = await fetch(`${baseurl}/${data}?per_page=${perPage}&${taxonomy}`);
    if (!apiRes.ok) {
      throw new Error(`Data of ${data} fetch not ok`);
    }
    return apiRes.json();
  } else {
    apiRes = await fetch(`${baseurl}/${data}?per_page=${perPage}`);
    if (!apiRes.ok) {
      throw new Error(`Data of ${data} fetch not ok`);
    }
    return apiRes.json();
  }
};
export default fetchData;
