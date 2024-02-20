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
        tour_details: mongoDbItem.tour_details.map((tour_detail) =>
          String(tour_detail)
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

// ACCESS

export async function getTourAccesses(tourId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allAccess = await db.collection("tour_access").findOne({ tourId });

    return transformObjectIdToString(allAccess);
  } catch (e) {
    console.error(e);
  }
}

// DESCRIPTIONS

export async function getTourDescriptions(tourId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allDescriptions = await db
      .collection("tour_descriptions")
      .findOne({ tourId });
    return transformObjectIdToString(allDescriptions);
  } catch (e) {
    console.error(e);
  }
}

// COORDINATES

export async function getTourCoordinates(tourId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allCoordinates = await db
      .collection("tour_coordinates")
      .findOne({ tourId });

    return transformObjectIdToString(allCoordinates);
  } catch (e) {
    console.error(e);
  }
}

// MARKERS

export async function getTourMarkers(tourId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allMarkers = await db.collection("tour_markers").findOne({ tourId });

    return transformObjectIdToString(allMarkers);
  } catch (e) {
    console.error(e);
  }
}

// TOURISM

export async function getTourTips(tourId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTourTips = await db.collection("tour_tourism").findOne({ tourId });

    return transformObjectIdToString(allTourTips);
  } catch (e) {
    console.error(e);
  }
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

export async function getAllTripAccesses() {
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

export async function getByTripIdAccesses(id) {
  const access = await getAllTripAccesses();

  return access.find((item) => item.tripId === id);
}

// DESCRIPTIONS

export async function getAllTripDescriptions() {
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

export async function getByTripIdDescription(id) {
  const descriptions = await getAllTripDescriptions();
  return descriptions.find((item) => item.tripId === id);
}

// COORDINATES

export async function getAllTripCoordinates() {
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

export async function getByTripIdCoordinates(id) {
  const coordinates = await getAllTripCoordinates();
  return coordinates.find((item) => item.tripId === id);
}

// MARKERS

export async function getAllTripMarkers() {
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

export async function getByTripIdMarkers(id) {
  const markers = await getAllTripMarkers();
  return markers.find((item) => item.tripId === id);
}

// TOURISM

export async function getAllTripTourismTips() {
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

export async function getByTripIdTourismTips(id) {
  const tourismTips = await getAllTripTourismTips();
  return tourismTips.find((item) => item.tripId === id);
}

function transformObjectIdToString(mongoDbItem) {
  return {
    ...mongoDbItem,
    _id: String(mongoDbItem._id),
  };
}
