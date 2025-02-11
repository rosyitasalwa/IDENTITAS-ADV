import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [visibleReviews, setVisibleReviews] = useState(3); // Mulai dengan menampilkan 3 review

  const auth = getAuth();

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(reviewsData);
      setReviewsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!auth.currentUser) {
      setErrorMessage("Silakan login terlebih dahulu untuk memberikan review.");
      setLoading(false);
      return;
    }

    try {
      const reviewData = {
        ...formData,
        timestamp: Timestamp.now(),
      };

      await addDoc(collection(db, "reviews"), reviewData);

      setSuccessMessage("Review berhasil dikirim!");
      setFormData({ name: "", email: "", review: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="contact"
        className="flex flex-col md:flex-row bg-customMaroon text-customBeigeMuda p-4 md:p-8 space-y-4 md:space-y-32 md:space-x-10 flex-1"
      >
        <div className="flex-1 mt-36">
          <h1 className="text-3xl font-bold text-customBeigeMuda text-center mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-customBeigeMuda text-center mb-5">
            Feel free to contact us any time.
          </p>
          <div className="md:w-1/2 xl:w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.019996737584!2d110.46063807482336!3d-7.0069279929944335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cfa66c4a57d%3A0x96137131ede3ab67!2sIdentitas%20Adv!5e0!3m2!1sid!2sid!4v1734066038130!5m2!1sid!2sid"
              frameBorder="0"
              width="1000"
              height="450"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex-1 bg-customBeigeMuda p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-customMaroon mt-8">
            Review
          </h2>
          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>  
            <div>
              <label className="block text-customMaroon">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-2 text-black border border-customMaroon rounded"
                required
              />
            </div>
            <div>
              <label className="block text-customMaroon">Pesan</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                className="w-full mt-2 p-2 text-black border border-customMaroon rounded"
                rows="5"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            {successMessage && (
              <p className="text-green-500 mb-4">{successMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-customMaroon text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Review"}
            </button>
          </form>
        </div>
      </section>

     {/* Bagian Review dari Pengguna */}
     <div className="bg-customMaroon p-6">
        <h3 className="text-2xl font-bold text-customTaupe text-center mb-4">Review dari Pengguna</h3>
        {reviewsLoading ? (
          <p className="text-customMaroon text-center">Memuat review...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500 text-center">Belum ada review.</p>
        ) : (
          <div className="space-y-4 max-w-3xl mx-auto">
            {reviews.slice(0, visibleReviews).map((review) => (
              <div key={review.id} className="p-4 border border-white rounded text-customMaroon bg-customBeigeMuda">
                <p className="font-bold text-customMaroon">{review.name}</p>
                <p>{review.review}</p>
                <p className="text-sm text-customMaroon">{new Date(review.timestamp.toDate()).toLocaleString()}</p>
              </div>
            ))}
            {/* Tombol Load More dan Load Less */}
            <div className="text-center mt-4">
              {visibleReviews < reviews.length && (
                <button
                  onClick={() => setVisibleReviews((prev) => prev + 3)}
                  className="bg-customBeigeMuda text-customMaroon px-4 py-2 rounded-md border border-white"
                >
                  Tampilkan Lebih Banyak
                </button>
              )}
              {visibleReviews > 3 && (
                <button
                  onClick={() => setVisibleReviews(3)}
                  className="bg-customBeigeMuda text-customMaroon px-4 py-2 rounded-md border border-white ml-2"
                >
                  Tampilkan Lebih Sedikit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
