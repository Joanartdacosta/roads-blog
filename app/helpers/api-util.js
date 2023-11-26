// TOURS
import clientPromise from "@/components/mongo/client";

export async function getAllTours() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTrips = await db.collection("tours").find({}).toArray();

    return allTrips.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedTours() {
  const all = await getAllTours();
  return all.filter((item) => item.isFeatured);
}

export async function getByIdTour(id) {
  const all = await getAllTours();
  return all.find((item) => item.id === id);
}

// TRIPS

export async function getAllTrips() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTrips = await db.collection("trips").find({}).toArray();

    return allTrips.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedTrips() {
  const all = await getAllTrips();
  return all.filter((item) => item.isFeatured);
}

export async function getByIdTrips(id) {
  const all = await getAllTrips();
  console.log(all);
  console.log(id);
  return all.find((item) => item.id === id);
}

// FAIRS

export async function getAllFairs() {
  try {
    const client = await clientPromise;
    const db = client.db("roads");

    const allTrips = await db.collection("fairs").find({}).toArray();

    return allTrips.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedFairs() {
  const all = await getAllFairs();
  return all.filter((item) => item.isFeatured);
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

    const allTrips = await db.collection("passports").find({}).toArray();

    return allTrips.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedPassports() {
  const all = await getAllPassaports();
  return all.filter((item) => item.isFeatured);
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

    const allTrips = await db.collection("proverbs").find({}).toArray();

    return allTrips.map((mongoDbItem) => {
      return { ...mongoDbItem, _id: String(mongoDbItem._id) };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedProverbs() {
  const all = await getAllProverbs();
  return all.filter((item) => item.isFeatured);
}
