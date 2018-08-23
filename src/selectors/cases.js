// Get visible legislation
  const casesFilter = (cases, { text, sortBy, startDate, endDate }) => {
    return cases.filter((court_case) => {
      const startDateMatch = typeof startDate !== 'number' || Date.parse(court_case.date_created) >= startDate; // If undefined, return true (don't filter) OR if court_case created after startDate, return true (don't filter)
      const endDateMatch = typeof endDate !== 'number' || Date.parse(court_case.date_created) <= endDate; // Same as above...
      const textMatch = court_case.case_name.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if(sortBy === "date"){
        return a.createdAt > b.createdAt ? -1 : 1; // If "a" is more recent, return -1 (which indexes "a" first), otherwise, index "b" first.
      } else {
        return 0; // Else, do not sort.
      }
    });
  };

export default casesFilter;