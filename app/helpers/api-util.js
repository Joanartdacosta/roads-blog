// TOURS
import clientPromise from "@/components/mongo/client";

export async function getAllTours() {
  const response = await fetch(
    "https://roads-blog-default-rtdb.firebaseio.com/roads/tours.json"
  );
  const data = await response.json();

  const NEW = [];

  for (const key in data) {
    NEW.push({
      id: key,
      ...data[key],
    });
  }
  return NEW;
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
  const response = await fetch(
    "https://roads-blog-default-rtdb.firebaseio.com/roads/fairs.json"
  );
  const data = await response.json();

  const NEW = [];

  for (const key in data) {
    NEW.push({
      id: key,
      ...data[key],
    });
  }
  return NEW;
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
  const response = await fetch(
    "https://roads-blog-default-rtdb.firebaseio.com/roads/passports.json"
  );
  const data = await response.json();

  const NEW = [];

  for (const key in data) {
    NEW.push({
      id: key,
      ...data[key],
    });
  }
  return NEW;
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
  const response = await fetch(
    "https://roads-blog-default-rtdb.firebaseio.com/roads/proverbs.json"
  );
  const data = await response.json();

  const NEW = [];

  for (const key in data) {
    NEW.push({
      id: key,
      ...data[key],
    });
  }
  return NEW;
}

export async function getFeaturedProverbs() {
  const all = await getAllProverbs();
  return all.filter((item) => item.isFeatured);
}
