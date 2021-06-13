export default function({ $axios, $token, $notify }, inject) {
  // Create a custom axios instance
  const memoApi = $axios.create({
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      common: {
        "Access-Control-Allow-Origin": "*",
        "X-ACCESS-TOKEN": $token.get()
      }
    }
  });

  // Set baseURL to something different
  memoApi.setBaseURL("https://challenge-server.tracks.run/memoapp");

  memoApi.onResponse(response => {
    console.log("Making request to " + response);
  });

  memoApi.onError(error => {
    $notify.showMessage({
      content: error.response,
      color: "error"
    });
  });

  memoApi.getCategories = async () => {
    const result = await memoApi.get("/category");
    return result.data;
  };

  memoApi.getMemos = async categoryId => {
    const result = await memoApi.get("/memo/?category_id=" + categoryId);
    return result.data;
  };

  memoApi.getMemo = async memoId => {
    const result = await memoApi.get("/memo/" + memoId);
    return result.data;
  };

  memoApi.updateMemo = async memo => {
    const { category_id, title, content } = memo;
    const res = await memoApi.put("/memo/" + memo.id, {
      category_id,
      title,
      content
    });
    return res.data;
  };

  memoApi.addMemo = async memo => {
    const { category_id, title, content } = memo;
    const res = await memoApi.post("/memo/", {
      category_id,
      title,
      content
    });
    return res.data;
  };

  memoApi.deleteMemo = async memoId => {
    const res = await memoApi.delete("/memo/" + memoId);
    return res.data;
  };

  // Inject to context as $memoApi
  inject("memoApi", memoApi);
}
