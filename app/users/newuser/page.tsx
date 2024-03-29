import React from "react";

const NewUser = () => {
  return (
    <div className="flex justify-center items-center w-100 h-svh">
      <div className="card bg-base-200 w-80">
        <div className="card-body">
          <input placeholder="Email" className="input input-bordered" />
          <label className="label cursor-pointer">
            Accept terms of use
            <input type="checkbox" className="toggle" />
          </label>
          <label className="label cursor-pointer">
            Submit to newsletter
            <input type="checkbox" className="toggle" />
          </label>
          <button className="btn btn-neutral">Save</button>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
