import React, { useEffect, useState } from "react";

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl cursor-pointer ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => setRating(star)}
        >
          {" "}
          ★{" "}
        </span>
      ))}
    </div>
  );
};

const CommentSection = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(`comment-${productId}`);
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message || !rating) return;

    const newComment = {
      id: new Date(),
      name,
      email,
      message,
      rating,
      date: new Date().toLocaleString(),
    };

    const updateComments = [newComment, ...comments];

    setComments(updateComments);

    localStorage.setItem(
      `comment-${productId}`,
      JSON.stringify(updateComments)
    );

    setName("");
    setEmail("");
    setMessage("");
    setRating(0);
  };

  return (
    <div className="">
      <div className="flex items-start justify-between w-full flex-col lg:flex-row gap-10">
        <div className="w-full flex flex-col items-center gap-8">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">
              Mahsulot haqida sharhlar
            </h2>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border border-red-500 rounded-md p-4 mb-4"
                >
                  <strong>{comment.name}</strong>
                  <p className="text-gray-500">
                    Reyting:{" "}
                    <span className="text-blue-600">{comment.rating} / 5</span>
                  </p>
                  <p className="mt-2">{comment.message}</p>
                  <div className="text-right text-[12px] text-gray-500 mt-2">
                    — {comment.date}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Hozircha sharhlar yo‘q.</p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-10">
          <h1 className="text-[30px] font-bold">O'z sharhingizni qoldiring</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-8 w-full"
            action="/"
          >
            <div className="w-full flex flex-col gap-4    ">
              <label className="text-[14px]" htmlFor="name">
                Sizning reytingingiz *
              </label>
              <StarRating rating={rating} setRating={setRating} />
            </div>
            <div className="w-full flex flex-col gap-4    ">
              <label className="text-[14px]" htmlFor="name">
                Ism *
              </label>
              <input
                className="w-full h-[40px] bg-gray-200 rounded-[25px] p-6 outline-none font-[300] text-[13px]"
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-4    ">
              <label className="text-[14px]" htmlFor="email">
                Email *
              </label>
              <input
                className="w-full h-[40px] bg-gray-200 rounded-[25px] p-6 outline-none font-[300] text-[13px]"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col gap-4    ">
              <label className="text-[14px]" htmlFor="message">
                Sizning sharhingiz *
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[130px] bg-gray-200 font-[300] text-[13px] p-6 rounded-[25px] resize-none outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] flex items-center justify-center text-[14px] text-white bg-red-500 rounded-[25px] cursor-pointer"
            >
              Sharhni yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
