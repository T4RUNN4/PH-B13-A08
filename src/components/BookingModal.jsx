"use client";
import { CalendarCheck } from "lucide-react";
import { toast } from "react-toastify";

export default function BookingModal({ name }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;

    if(!username || !phone || !email || !address) {
      toast.error("Fillup all the necessary field");
      return;
    }

    toast.success(`${name} is booked for you, ${username}`);
    e.target.reset();
    document.getElementById("my_modal_3").close();
  }

  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600 mt-2"
      >
        <CalendarCheck /> Book Now
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border px-6 py-8">
              <h3 className="font-bold text-center text-3xl mb-4">
                Book {name}
              </h3>

              <label className="label text-base">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Name"
              />

              <label className="label text-base">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
              />

              <label className="label text-base mt-2">Phone</label>
              <input
                type="text"
                className="input w-full"
                name="phone"
                placeholder="phone"
              />

              <label className="label text-base mt-2">Address</label>
              <input
                type="text"
                className="input w-full"
                name="address"
                placeholder="address"
              />

              <button
                type="submit"
                className="btn btn-primary bg-red-500 text-white hover:bg-red-600 border-0 mt-8"
              >
                <CalendarCheck /> Book
              </button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </>
  );
}
