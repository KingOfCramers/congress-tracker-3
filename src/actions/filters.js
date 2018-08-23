// SET_TEXT_FILTER action generator
  export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
  });
// SORT_BY_DATE action generator
  export const sortByDate = () => ({
        type: "SORT_BY_DATE"
  })

// SET_START_DATE action generator
  export const setStartDate = (date = undefined) => ({
    type: "SET_START_DATE",
    date
  })
// SET_END_DATE action generator
  export const setEndDate = (date = undefined) => ({
    type: "SET_END_DATE",
    date
  })