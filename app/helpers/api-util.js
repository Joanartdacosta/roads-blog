// TOURS
import clientPromise from "@/components/mongo/client";

export async function getAllTours() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTours = await db.collection("tour_id").find({}).toArray();

    return allTours.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
        trip_details: mongoDbItem.trip_details.map((trip_detail) =>
          String(trip_detail)
        ),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedTours() {
  const all = await getAllTours();
  return all.filter((item) => item.isFeatured == true);
}

export async function getByIdTour(id) {
  const all = await getAllTours();
  return all.find((item) => item.id === id);
}

// FAIRS

export async function getAllFairs() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allFairs = await db.collection("fairs").find({}).toArray();

    return allFairs.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedFairs() {
  const all = await getAllFairs();
  return all.filter((item) => item.isFeatured == true);
}

export async function getByIdFair(id) {
  const all = await getAllFairs();
  return all.find((item) => item.id === id);
}

// PASSPORTS

export async function getAllPassaports() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allPassaports = await db.collection("passports").find({}).toArray();

    return allPassaports.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedPassports() {
  const all = await getAllPassaports();
  return all.filter((item) => item.isFeatured == true);
}

export async function getByIdPassport(id) {
  const all = await getAllPassaports();
  return all.find((item) => item.id === id);
}

// PROVERBS

export async function getAllProverbs() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allProverbs = await db.collection("proverbs").find({}).toArray();

    return allProverbs.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedProverbs() {
  const all = await getAllProverbs();
  return all.filter((item) => item.isFeatured == true);
}

// TRIPS

export async function getAllTrips() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTrips = await db.collection("trip_id").find({}).toArray();

    return allTrips.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
        trip_details: mongoDbItem.trip_details.map((trip_detail) =>
          String(trip_detail)
        ),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedTrips() {
  const all = await getAllTrips();
  return all.filter((item) => item.isFeatured == true);
}

export async function getByIdTrips(id) {
  const all = await getAllTrips();
  return all.find((item) => item.id === id);
}

// ACCESS

export async function getAllAccesses() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allAccess = await db.collection("trip_access").find({}).toArray();

    return allAccess.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getByIdAccesses(id) {
  const access = await getAllAccesses();
  return access.find((item) => item.tripId === id);
}

// DESCRIPTIONS

export async function getAllDescriptions() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allDescriptions = await db
      .collection("trip_descriptions")
      .find({})
      .toArray();

    return allDescriptions.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getByIdDescription(id) {
  const descriptions = await getAllDescriptions();
  return descriptions.find((item) => item.tripId === id);
}

// COORDINATES

export async function getAllCoordinates() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allCoordinates = await db
      .collection("trip_coordinates")
      .find({})
      .toArray();

    return allCoordinates.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getByIdCoordinates(id) {
  const coordinates = await getAllCoordinates();
  return coordinates.find((item) => item.tripId === id);
}

// MARKERS

export async function getAllMarkers() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allMarkers = await db.collection("trip_markers").find({}).toArray();

    return allMarkers.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getByIdMarkers(id) {
  const markers = await getAllMarkers();
  return markers.find((item) => item.tripId === id);
}

// TOURISM

export async function getAllTourismTips() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTourismTips = await db
      .collection("trip_tourism")
      .find({})
      .toArray();

    return allTourismTips.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getByIdTourismTips(id) {
  const tourismTips = await getAllTourismTips();
  return tourismTips.find((item) => item.tripId === id);
}
