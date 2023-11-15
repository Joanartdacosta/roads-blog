export async function getAllTours() {
  const response = await fetch(
    "https://roads-blog-default-rtdb.firebaseio.com/tours.json"
  );
  const data = await response.json();

  const NEW_TOURS = [];

  for (const key in data) {
    NEW_TOURS.push({
      id: key,
      ...data[key],
    });
  }
  return NEW_TOURS;
}

export async function getFeaturedTours() {
  const allTours = await getAllTours();
  return allTours.filter((tour) => tour.isFeatured);
}

export async function getToursById(id) {
  const allTours = await getAllTours();
  return allTours.find((tour) => tour.id === id);
}
