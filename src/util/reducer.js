export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: true };
    }
    case "SET_NEWS": {
      return {
        ...state,
        loading: false,
        nbPages: action.payload.nbPages,
        news: action.payload.hits,
      };
    }
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "HANDLE_SEARCH": {
    }
    case "CHANGE_PAGE": {
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        // if (nextPage > nbPages) {
        //   nextPage = 0
        // }
        if (action.payload === "dec") {
          let prevPage = state.page - 1;
          // if (prevPage < nbPages) {
          //   prevPage = 50
          // }
        }
      }
    }
    case "REMOVE_STORY": {
      const newnews = state.news.filter((hit) => hit.id !== action.payload);
      return {
        ...state,
        news: newnews,
      };
    }
  }
};
