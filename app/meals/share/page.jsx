"use client";

import { ImagePicker, MealsFormSubmit } from "@/components";
import { shareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";
const ShareMealPage = () => {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header
        className={
          "flex flex-col gap-[1rem] mt-[3rem] mb-[5rem] mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]"
        }
      >
        <h1 className="font-display  font-bold text-[3.4rem]">
          Share your{" "}
          <span
            className={
              "bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent"
            }
          >
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={"w-[90%] max-w-[75rem] my-[3rem] mx-auto text-white"}>
        <form className={"max-w-[50rem]"} action={formAction}>
          <div className={"flex mb-2 gap-[1rem]"}>
            <p className="w-full">
              <label className="share-form-label" htmlFor="name">
                Your name
              </label>
              <input
                className="share-form-input"
                type="text"
                id="name"
                name="name"
              />
            </p>
            <p className="w-full">
              <label className="share-form-label" htmlFor="email">
                Your email
              </label>
              <input
                className="share-form-input"
                type="email"
                id="email"
                name="email"
              />
            </p>
          </div>
          <p className="mb-2">
            <label className="share-form-label" htmlFor="title">
              Title
            </label>
            <input
              className="share-form-input"
              type="text"
              id="title"
              name="title"
            />
          </p>
          <p className="mb-2">
            <label className="share-form-label" htmlFor="summary">
              Short Summary
            </label>
            <input
              className="share-form-input"
              type="text"
              id="summary"
              name="summary"
            />
          </p>
          <p>
            <label className="share-form-label" htmlFor="instructions">
              Instructions
            </label>
            <textarea
              className="share-form-input"
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && (
            <p className="w-full p-3 bg-red-400 text-lg mb-4 text-white border-l-[5px] border-solid border-l-red-500 font-bold">
              {state.message}
            </p>
          )}
          <p className={"text-right"}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
