// Sort, filter and search handle function
export const processDataUtils = (data, filter, sort, search) => {
  let processedData = [...data];

  // Filtering
  switch (filter) {
    case "Ratings > 1000":
      processedData = processedData.filter(item => item.totalRatings > 1000);
      break;
    case "Ratings < 1000":
      processedData = processedData.filter(item => item.totalRatings < 1000);
      break;
    case "Show All":
    case "Filter":
    default:
      break;
  }

  // Sorting
  switch (sort) {
    case "Newest":
      processedData.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      break;
    case "Oldest":
      processedData.sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate));
      break;
    case "Popular":
      processedData.sort((a, b) => b.totalRatings - a.totalRatings);
      break;
    default:
      break;
  }

  // Searching
  if (search) {
    const query = search.toLowerCase();

    processedData = processedData.filter(item => {
      // Check if name or title matches
      const nameMatch = item.name?.toLowerCase().includes(query);
      const titleMatch = item.title?.toLowerCase().includes(query);

      return nameMatch || titleMatch;
    });
  }

  return processedData;
};