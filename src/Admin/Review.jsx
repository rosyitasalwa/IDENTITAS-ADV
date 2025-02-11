import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const fetchReviews = () => {
      const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const reviewList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReviews(reviewList);
      });

      return () => unsubscribe();
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === "admin1@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus review ini?")) {
      try {
        await deleteDoc(doc(db, "reviews", id));
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    }
  };

  return (
    <div className="p-6 md:mr-56">
      <h2 className="text-2xl font-bold text-customMaroon text-center mb-6">
        User Reviews
      </h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 rounded shadow-md mb-4"
          >
            <h3 className="font-bold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.email}</p>
            <p className="mt-2">{review.review}</p>
            {isAdmin && (
              <button
                onClick={() => handleDelete(review.id)}
                className="mt-2 bg-red-500 text-white px-4 py-1 rounded"
              >
                Hapus
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default Review;
