// import clientPromise from "@/components/mongo/client";

// // TRIPS

// export async function getAllTrips() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("roads");

//     const allTrips = await db.collection("trip_id").find({}).toArray();

//     return allTrips.map((mongoDbItem) => {
//       return {
//         ...mongoDbItem,
//         _id: String(mongoDbItem._id),
//         trip_details: mongoDbItem.trip_details.map((trip_detail) =>
//           String(trip_detail)
//         ),
//       };
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getFeaturedTrips() {
//   const all = await getAllTrips();
//   return all.filter((item) => item.isFeatured == true);
// }

// export async function getByIdTrips(id) {
//   const all = await getAllTrips();
//   return all.find((item) => item.id === id);
// }

// // ACCESS

// export async function getAllAccesses() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("roads");

//     const allAccess = await db.collection("trip_access").find({}).toArray();

//     return allAccess.map((mongoDbItem) => {
//       return {
//         ...mongoDbItem,
//         _id: String(mongoDbItem._id),
//       };
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getByIdAccesses(id) {
//   const access = await getAllAccesses();
//   return access.find((item) => item.tripId === id);
// }

// // DESCRIPTIONS

// export async function getAllDescriptions() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("roads");

//     const allDescriptions = await db
//       .collection("trip_descriptions")
//       .find({})
//       .toArray();

//     return allDescriptions.map((mongoDbItem) => {
//       return {
//         ...mongoDbItem,
//         _id: String(mongoDbItem._id),
//       };
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getByIdDescription(id) {
//   const descriptions = await getAllDescriptions();
//   return descriptions.find((item) => item.tripId === id);
// }

// // COORDINATES

// export async function getAllCoordinates() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("roads");

//     const allCoordinates = await db
//       .collection("trip_coordinates")
//       .find({})
//       .toArray();

//     return allCoordinates.map((mongoDbItem) => {
//       return {
//         ...mongoDbItem,
//         _id: String(mongoDbItem._id),
//       };
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getByIdCoordinates(id) {
//   const coordinates = await getAllCoordinates();
//   return coordinates.find((item) => item.tripId === id);
// }

// // MARKERS

// export async function getAllMarkers() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("roads");

//     const allMarkers = await db.collection("trip_markers").find({}).toArray();

//     return allMarkers.map((mongoDbItem) => {
//       return {
//         ...mongoDbItem,
//         _id: String(mongoDbItem._id),
//       };
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getByIdMarkers(id) {
//   const markers = await getAllMarkers();
//   return markers.find((item) => item.tripId === id);
// }

// // TOURISM

// export async function getAllTourismTips() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("roads");

//     const allTourismTips = await db
//       .collection("trip_tourism")
//       .find({})
//       .toArray();

//     return allTourismTips.map((mongoDbItem) => {
//       return {
//         ...mongoDbItem,
//         _id: String(mongoDbItem._id),
//       };
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getByIdTourismTips(id) {
//   const tourismTips = await getAllTourismTips();
//   return tourismTips.find((item) => item.tripId === id);
// }
