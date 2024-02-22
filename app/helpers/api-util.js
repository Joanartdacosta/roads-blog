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

export async function getProverbs(id) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;

    const proverbs = await db
      .collection("proverbs")
      .find({ id: currentMonth })
      .toArray();

    return proverbs.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
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

export async function getTripAccesses(tripId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allAccess = await db.collection("trip_access").findOne({ tripId });

    return transformObjectIdToString(allAccess);
  } catch (e) {
    console.error(e);
  }
}

// DESCRIPTIONS

export async function getTripDescriptions(tripId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allDescriptions = await db
      .collection("trip_descriptions")
      .findOne({ tripId });

    return transformObjectIdToString(allDescriptions);
  } catch (e) {
    console.error(e);
  }
}

// COORDINATES

export async function getTripCoordinates(tripId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allCoordinates = await db
      .collection("trip_coordinates")
      .findOne({ tripId });

    return transformObjectIdToString(allCoordinates);
  } catch (e) {
    console.error(e);
  }
}

// MARKERS

export async function getTripMarkers(tripId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allMarkers = await db.collection("trip_markers").findOne({ tripId });

    return transformObjectIdToString(allMarkers);
  } catch (e) {
    console.error(e);
  }
}

// TOURISM

export async function getTripTourismTips(tripId) {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTourismTips = await db
      .collection("trip_tourism")
      .findOne({ tripId });

    return transformObjectIdToString(allTourismTips);
  } catch (e) {
    console.error(e);
  }
}

// UTILS

function transformObjectIdToString(mongoDbItem) {
  return {
    ...mongoDbItem,
    _id: String(mongoDbItem._id),
  };
}
