import React from "react";

import { useFormik } from "formik";

const Notes = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: function (values) {
      console.log(values);
    },
  });

  return (
    <form className="p-6 h-screen" onSubmit={formik.handleSubmit}>
      <div className="flex items-center">
        <input
          type="text"
          name="title"
          required
          onChange={formik.handleChange}
          className="bg-slate-300 outline-none border-none w-full py-4 px-4 rounded-lg"
        />
        <button
          className="ml-6 bg-slate-800 px-10 py-4 rounded-lg text-white"
          type="submit"
        >
          Save
        </button>
      </div>
      <div className=" h-full mt-6">
        <textarea
          name="description"
          onChange={formik.handleChange}
          className="w-full h-full bg-slate-300 px-4 py-4 outline-none border-none"
        ></textarea>
      </div>
    </form>
  );
};

export default Notes;
