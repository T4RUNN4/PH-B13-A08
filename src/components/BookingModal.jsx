"use client";
import { CalendarCheck } from "lucide-react";

export default function BookingModal() {
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
